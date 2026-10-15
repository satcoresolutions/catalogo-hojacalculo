"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/types";

type Props = {
  products: Product[];
  source: "sheet" | "demo";
  error?: string;
  negocio: string;
  whatsapp: string;
  moneda: string;
};

const STORAGE_KEY = "catalogo-carrito-v1";

function makeFormatter(moneda: string): Intl.NumberFormat {
  try {
    return new Intl.NumberFormat("es-CO", { style: "currency", currency: moneda, maximumFractionDigits: 0 });
  } catch {
    return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });
  }
}

function norm(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className="media-fallback" aria-hidden="true">
        {alt.charAt(0).toUpperCase()}
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

export default function Catalog({ products, source, error, negocio, whatsapp, moneda }: Props) {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisp, setSoloDisp] = useState(false);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const fmt = useMemo(() => makeFormatter(moneda), [moneda]);

  // Carrito guardado en el navegador
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          const clean: Record<string, number> = {};
          for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
            if (typeof v === "number" && v > 0) clean[k] = Math.floor(v);
          }
          setCart(clean);
        }
      }
    } catch {
      /* sin almacenamiento disponible */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      /* ignorar */
    }
  }, [cart, loaded]);

  // Cerrar el carrito con Escape y bloquear el scroll de fondo
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const categorias = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.categoria && set.add(p.categoria));
    return ["Todas", ...Array.from(set)];
  }, [products]);

  const filtered = useMemo(() => {
    const q = norm(query.trim());
    return products.filter((p) => {
      if (categoria !== "Todas" && p.categoria !== categoria) return false;
      if (soloDisp && !p.disponible) return false;
      if (!q) return true;
      return norm(`${p.nombre} ${p.descripcion} ${p.categoria}`).includes(q);
    });
  }, [products, query, categoria, soloDisp]);

  const items = useMemo(
    () =>
      products
        .filter((p) => p.disponible && (cart[p.id] ?? 0) > 0)
        .map((p) => ({ p, qty: cart[p.id] })),
    [products, cart],
  );
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.p.precio, 0);

  const add = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const dec = (id: string) =>
    setCart((c) => {
      const next = { ...c };
      if ((next[id] ?? 0) <= 1) delete next[id];
      else next[id] -= 1;
      return next;
    });
  const remove = (id: string) =>
    setCart((c) => {
      const next = { ...c };
      delete next[id];
      return next;
    });
  const clear = () => setCart({});

  const orderText = useMemo(() => {
    const lines = items.map(({ p, qty }) => `• ${qty} x ${p.nombre} — ${fmt.format(p.precio * qty)}`);
    return `Hola ${negocio}, quiero hacer este pedido:\n\n${lines.join("\n")}\n\nTotal: ${fmt.format(total)}`;
  }, [items, fmt, negocio, total]);

  const sendOrder = async () => {
    if (whatsapp) {
      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(orderText)}`, "_blank", "noopener,noreferrer");
      return;
    }
    try {
      await navigator.clipboard.writeText(orderText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* ignorar */
    }
  };

  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="brand" href="#">
            {negocio}
          </a>
          <button className="cartbtn" onClick={() => setOpen(true)} aria-label={`Abrir pedido, ${count} productos`}>
            <span>Mi pedido</span>
            <span className="count" aria-hidden="true">
              {count}
            </span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero wrap">
          <p className="eyebrow">Catálogo</p>
          <h1>Todo lo que tenemos para ti</h1>
          <p className="lead">Elige tus productos, arma tu pedido y envíalo por WhatsApp en un par de toques.</p>
        </section>

        {source === "demo" && (
          <div className="wrap">
            <div className="banner">
              Estás viendo productos de ejemplo. Conecta tu hoja de cálculo en <code>.env.local</code> (mira el README).
            </div>
          </div>
        )}
        {error && (
          <div className="wrap">
            <div className="banner banner-error" role="alert">
              No se pudieron cargar los productos: {error}
            </div>
          </div>
        )}

        <section className="wrap toolbar" aria-label="Filtros">
          <input
            className="search"
            type="search"
            placeholder="Buscar productos…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar productos"
          />
          <div className="chips" role="group" aria-label="Categorías">
            {categorias.map((c) => (
              <button key={c} className={`chip${c === categoria ? " on" : ""}`} onClick={() => setCategoria(c)} aria-pressed={c === categoria}>
                {c}
              </button>
            ))}
          </div>
          <label className="toggle">
            <input type="checkbox" checked={soloDisp} onChange={(e) => setSoloDisp(e.target.checked)} />
            Solo disponibles
          </label>
        </section>

        <section className="wrap">
          {filtered.length === 0 ? (
            <p className="empty">{products.length === 0 ? "Aún no hay productos para mostrar." : "No encontramos productos con esa búsqueda."}</p>
          ) : (
            <ul className="grid">
              {filtered.map((p) => {
                const qty = cart[p.id] ?? 0;
                return (
                  <li key={p.id} className={`card${p.disponible ? "" : " soldout"}`}>
                    <div className="media">
                      <ProductImage src={p.imagen} alt={p.nombre} />
                      {!p.disponible && <span className="badge badge-out">Agotado</span>}
                      {p.disponible && p.destacado && <span className="badge badge-hot">Destacado</span>}
                    </div>
                    <div className="body">
                      {p.categoria && <span className="cat">{p.categoria}</span>}
                      <h2 className="name">{p.nombre}</h2>
                      {p.descripcion && <p className="desc">{p.descripcion}</p>}
                      <div className="row">
                        <span className="price">{fmt.format(p.precio)}</span>
                        {!p.disponible ? (
                          <span className="na">No disponible</span>
                        ) : qty === 0 ? (
                          <button className="add" onClick={() => add(p.id)}>
                            Agregar
                          </button>
                        ) : (
                          <div className="stepper" role="group" aria-label={`Cantidad de ${p.nombre}`}>
                            <button onClick={() => dec(p.id)} aria-label="Quitar uno">
                              −
                            </button>
                            <span aria-live="polite">{qty}</span>
                            <button onClick={() => add(p.id)} aria-label="Agregar uno">
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>

      <footer className="footer wrap">
        <p>
          {negocio} · Los precios y la disponibilidad se actualizan automáticamente desde nuestra hoja de productos.
        </p>
      </footer>

      {count > 0 && !open && (
        <button className="floatbar" onClick={() => setOpen(true)}>
          <span>
            Ver pedido · {count} {count === 1 ? "producto" : "productos"}
          </span>
          <strong>{fmt.format(total)}</strong>
        </button>
      )}

      {open && (
        <>
          <div className="overlay" onClick={() => setOpen(false)} />
          <aside className="drawer" role="dialog" aria-modal="true" aria-label="Mi pedido">
            <div className="drawer-head">
              <h2>Mi pedido</h2>
              <button className="close" onClick={() => setOpen(false)} aria-label="Cerrar">
                ✕
              </button>
            </div>

            {items.length === 0 ? (
              <p className="empty">Todavía no has agregado productos.</p>
            ) : (
              <>
                <ul className="lines">
                  {items.map(({ p, qty }) => (
                    <li key={p.id} className="line">
                      <div className="line-info">
                        <strong>{p.nombre}</strong>
                        <span>{fmt.format(p.precio)} c/u</span>
                      </div>
                      <div className="stepper small">
                        <button onClick={() => dec(p.id)} aria-label={`Quitar uno de ${p.nombre}`}>
                          −
                        </button>
                        <span>{qty}</span>
                        <button onClick={() => add(p.id)} aria-label={`Agregar uno de ${p.nombre}`}>
                          +
                        </button>
                      </div>
                      <span className="line-total">{fmt.format(p.precio * qty)}</span>
                      <button className="trash" onClick={() => remove(p.id)} aria-label={`Eliminar ${p.nombre}`}>
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="drawer-foot">
                  <div className="total">
                    <span>Total</span>
                    <strong>{fmt.format(total)}</strong>
                  </div>
                  <button className="send" onClick={sendOrder}>
                    {whatsapp ? "Pedir por WhatsApp" : copied ? "¡Pedido copiado!" : "Copiar pedido"}
                  </button>
                  {!whatsapp && <p className="hint">Configura WHATSAPP_NUMERO en .env.local para enviar el pedido directo por WhatsApp.</p>}
                  <button className="link" onClick={clear}>
                    Vaciar pedido
                  </button>
                </div>
              </>
            )}
          </aside>
        </>
      )}
    </>
  );
}
