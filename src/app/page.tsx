import Catalog from "@/components/Catalog";
import { loadProducts } from "@/lib/products";

// Cada cuántos segundos Next vuelve a generar la página con los datos nuevos de la hoja.
export const revalidate = 300;

export default async function Home() {
  const { products, source, error } = await loadProducts();

  return (
    <Catalog
      products={products}
      source={source}
      error={error}
      negocio={process.env.NEGOCIO_NOMBRE?.trim() || "Mi Catálogo"}
      whatsapp={(process.env.WHATSAPP_NUMERO ?? "").replace(/\D/g, "")}
      moneda={process.env.MONEDA?.trim().toUpperCase() || "COP"}
    />
  );
}
