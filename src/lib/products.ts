import { parseCsv } from "./csv";
import { DEMO_PRODUCTS } from "./demo";
import type { LoadResult, Product } from "./types";

const REVALIDATE_SECONDS = 300; // cada cuánto se vuelve a leer la hoja (5 min)

/* ---------- utilidades de limpieza ---------- */

function normalizeHeader(h: string): string {
  return h
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}

const HEADER_ALIASES: Record<string, string> = {
  imagen: "imagen_url",
  imagen_url: "imagen_url",
  foto: "imagen_url",
  nombre: "nombre",
  producto: "nombre",
  descripcion: "descripcion",
  categoria: "categoria",
  precio: "precio",
  disponible: "disponible",
  destacado: "destacado",
};

function toBool(raw: string, fallback: boolean): boolean {
  const v = raw
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase();
  if (v === "") return fallback;
  return ["si", "s", "yes", "y", "true", "1", "x"].includes(v);
}

/** Acepta "189900", "$189,900", "189.900" o "1.234,56". */
export function parsePrice(raw: string): number {
  let s = raw.replace(/[^\d.,-]/g, "");
  if (!s) return 0;
  const lastDot = s.lastIndexOf(".");
  const lastComma = s.lastIndexOf(",");
  if (lastDot !== -1 && lastComma !== -1) {
    const dec = lastDot > lastComma ? "." : ",";
    const thou = dec === "." ? "," : ".";
    s = s.split(thou).join("").replace(dec, ".");
  } else if (lastDot !== -1 || lastComma !== -1) {
    const sep = lastDot !== -1 ? "." : ",";
    const parts = s.split(sep);
    const looksThousands = parts.length > 2 || (parts.length === 2 && parts[1].length === 3);
    s = looksThousands ? parts.join("") : parts.join(".");
  }
  const n = Number(s);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function slugify(text: string): string {
  return (
    text
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "producto"
  );
}

/** Convierte enlaces de "compartir" de Google Drive en un enlace de imagen usable. */
function normalizeImageUrl(url: string): string {
  const u = url.trim();
  const m = u.match(/drive\.google\.com\/file\/d\/([^/]+)/) ?? u.match(/drive\.google\.com\/open\?id=([^&]+)/);
  if (m) return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w800`;
  return u;
}

/* ---------- filas -> productos ---------- */

export function rowsToProducts(rows: string[][]): Product[] {
  if (rows.length < 2) return [];
  const headerRow = rows[0].map((h) => HEADER_ALIASES[normalizeHeader(h)] ?? normalizeHeader(h));
  const idx = (name: string) => headerRow.indexOf(name);
  const col = {
    nombre: idx("nombre"),
    descripcion: idx("descripcion"),
    categoria: idx("categoria"),
    precio: idx("precio"),
    imagen: idx("imagen_url"),
    disponible: idx("disponible"),
    destacado: idx("destacado"),
  };
  if (col.nombre === -1) {
    throw new Error('No encontré la columna "nombre" en la primera fila de la hoja.');
  }
  const get = (row: string[], i: number) => (i === -1 ? "" : (row[i] ?? "").trim());

  const used = new Map<string, number>();
  const products: Product[] = [];

  for (const row of rows.slice(1)) {
    const nombre = get(row, col.nombre);
    if (!nombre) continue;
    const base = slugify(nombre);
    const n = (used.get(base) ?? 0) + 1;
    used.set(base, n);
    products.push({
      id: n === 1 ? base : `${base}-${n}`,
      nombre,
      descripcion: get(row, col.descripcion),
      categoria: get(row, col.categoria),
      precio: parsePrice(get(row, col.precio)),
      imagen: normalizeImageUrl(get(row, col.imagen)),
      disponible: toBool(get(row, col.disponible), true),
      destacado: toBool(get(row, col.destacado), false),
    });
  }

  // Destacados primero, respetando el orden de la hoja dentro de cada grupo.
  return products
    .map((p, i) => ({ p, i }))
    .sort((a, b) => Number(b.p.destacado) - Number(a.p.destacado) || a.i - b.i)
    .map(({ p }) => p);
}

/* ---------- fuentes de datos ---------- */

async function fetchOk(url: string): Promise<Response> {
  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) {
    throw new Error(`La fuente respondió ${res.status}. Revisa que el enlace esté publicado/compartido.`);
  }
  return res;
}

async function fromCsvUrl(url: string): Promise<Product[]> {
  const res = await fetchOk(url);
  const text = await res.text();
  if (/^\s*<!doctype html|^\s*<html/i.test(text)) {
    throw new Error("El enlace devolvió una página web en vez de un CSV. Revisa que la hoja esté publicada o compartida.");
  }
  return rowsToProducts(parseCsv(text));
}

function oneDriveDirectUrl(shareUrl: string): string {
  const b64 = Buffer.from(shareUrl.trim())
    .toString("base64")
    .replace(/=+$/, "")
    .replace(/\//g, "_")
    .replace(/\+/g, "-");
  return `https://api.onedrive.com/v1.0/shares/u!${b64}/root/content`;
}

function excelCellText(value: unknown): string {
  if (value == null) return "";
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "object") {
    const v = value as Record<string, unknown>;
    if ("result" in v && v.result != null) return String(v.result);
    if (Array.isArray(v.richText)) return (v.richText as { text: string }[]).map((r) => r.text).join("");
    if ("text" in v && v.text != null) return String(v.text);
    return "";
  }
  return String(value);
}

export async function excelBufferToRows(buffer: ArrayBuffer): Promise<string[][]> {
  const ExcelJS = (await import("exceljs")).default;
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.load(buffer);
  const ws = wb.worksheets[0];
  if (!ws) throw new Error("El archivo de Excel no tiene hojas.");
  const rows: string[][] = [];
  ws.eachRow({ includeEmpty: false }, (row) => {
    const cells: string[] = [];
    for (let c = 1; c <= 8; c++) cells.push(excelCellText(row.getCell(c).value));
    rows.push(cells);
  });
  return rows;
}

async function fromOneDrive(shareUrl: string): Promise<Product[]> {
  const res = await fetchOk(oneDriveDirectUrl(shareUrl));
  const buffer = await res.arrayBuffer();
  return rowsToProducts(await excelBufferToRows(buffer));
}

export async function loadProducts(): Promise<LoadResult> {
  const csvUrl = process.env.SHEET_CSV_URL?.trim();
  const sheetId = process.env.GOOGLE_SHEET_ID?.trim();
  const sheetName = process.env.GOOGLE_SHEET_NAME?.trim() || "Productos";
  const oneDrive = process.env.ONEDRIVE_SHARE_URL?.trim();

  try {
    if (csvUrl) return { products: await fromCsvUrl(csvUrl), source: "sheet" };
    if (sheetId) {
      const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
      return { products: await fromCsvUrl(url), source: "sheet" };
    }
    if (oneDrive) return { products: await fromOneDrive(oneDrive), source: "sheet" };
  } catch (e) {
    return {
      products: [],
      source: "sheet",
      error: e instanceof Error ? e.message : "No se pudo leer la hoja de productos.",
    };
  }
  return { products: DEMO_PRODUCTS, source: "demo" };
}
