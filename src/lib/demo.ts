import type { Product } from "./types";

/** Productos de ejemplo (inventados). Se muestran solo si no hay una hoja conectada. */
export const DEMO_PRODUCTS: Product[] = [
  { id: "audifonos-bluetooth-pro", nombre: "Audífonos Bluetooth Pro", descripcion: "Cancelación de ruido y 30 horas de batería.", categoria: "Tecnología", precio: 189900, imagen: "https://picsum.photos/seed/audifonos/600/600", disponible: true, destacado: true },
  { id: "smartwatch-fit-s2", nombre: "Smartwatch Fit S2", descripcion: "Monitor de ritmo cardíaco, GPS y resistencia al agua.", categoria: "Tecnología", precio: 249900, imagen: "https://picsum.photos/seed/reloj/600/600", disponible: true, destacado: true },
  { id: "chaqueta-impermeable", nombre: "Chaqueta impermeable", descripcion: "Ligera, con capucha y bolsillos térmicos.", categoria: "Moda", precio: 159900, imagen: "https://picsum.photos/seed/chaqueta/600/600", disponible: true, destacado: true },
  { id: "crema-hidratante-facial", nombre: "Crema hidratante facial", descripcion: "Con ácido hialurónico, para todo tipo de piel.", categoria: "Belleza", precio: 39900, imagen: "https://picsum.photos/seed/crema/600/600", disponible: true, destacado: true },
  { id: "lampara-led-de-escritorio", nombre: "Lámpara LED de escritorio", descripcion: "Luz regulable en 3 tonos, carga USB.", categoria: "Hogar", precio: 69900, imagen: "https://picsum.photos/seed/lampara/600/600", disponible: true, destacado: false },
  { id: "set-de-ollas-antiadherentes", nombre: "Set de ollas antiadherentes", descripcion: "Juego de 5 piezas apto para inducción.", categoria: "Hogar", precio: 219900, imagen: "https://picsum.photos/seed/ollas/600/600", disponible: true, destacado: false },
  { id: "zapatillas-urbanas", nombre: "Zapatillas urbanas", descripcion: "Suela amortiguada para uso diario.", categoria: "Moda", precio: 179900, imagen: "https://picsum.photos/seed/zapatillas/600/600", disponible: false, destacado: false },
  { id: "balon-de-futbol-n5", nombre: "Balón de fútbol N°5", descripcion: "Costuras reforzadas, uso en cancha sintética.", categoria: "Deportes", precio: 59900, imagen: "https://picsum.photos/seed/balon/600/600", disponible: true, destacado: false },
  { id: "mat-de-yoga-antideslizante", nombre: "Mat de yoga antideslizante", descripcion: "6 mm de grosor con correa de transporte.", categoria: "Deportes", precio: 49900, imagen: "https://picsum.photos/seed/yoga/600/600", disponible: true, destacado: false },
  { id: "kit-de-brochas-de-maquillaje", nombre: "Kit de brochas de maquillaje", descripcion: "12 piezas con estuche de viaje.", categoria: "Belleza", precio: 154900, imagen: "https://picsum.photos/seed/brochas/600/600", disponible: true, destacado: false },
];
