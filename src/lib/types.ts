export type Product = {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  precio: number;
  imagen: string;
  disponible: boolean;
  destacado: boolean;
};

export type LoadResult = {
  products: Product[];
  source: "sheet" | "demo";
  error?: string;
};
