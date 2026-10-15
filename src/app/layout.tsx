import type { Metadata, Viewport } from "next";
import "./globals.css";

const negocio = process.env.NEGOCIO_NOMBRE?.trim() || "Mi Catálogo";

export const metadata: Metadata = {
  title: `${negocio} · Catálogo de productos`,
  description: `Catálogo de productos de ${negocio}. Elige lo que te gusta y haz tu pedido por WhatsApp.`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
