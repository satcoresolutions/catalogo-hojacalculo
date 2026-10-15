# Catálogo automático de productos

**Producto de SatCore Solutions · Versión 1.1.0**

Landing page desarrollada con **Next.js + TypeScript** que lee productos desde una hoja de cálculo (Google Sheets o Excel en OneDrive) y genera un catálogo digital automáticamente. Cuando editas una fila en la hoja, la página se actualiza en unos minutos, sin modificar el código.

Incluye búsqueda, filtro por categoría, filtro de disponibilidad, etiquetas de **Destacado** y **Agotado**, y un carrito que permite enviar pedidos por WhatsApp.

## Información del producto

| Campo | Información |
|---|---|
| Producto | Catálogo automático de productos |
| Marca | SatCore Solutions |
| Versión | 1.1.0 |
| Categoría | Desarrollo de software y soluciones digitales |
| Tecnología | Next.js, TypeScript |
| Fuentes de datos | Google Sheets y Excel en OneDrive |
| Canal de pedidos | WhatsApp |
| Estado | Versión 1.1.0 |

## Qué trae esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `catalogo-productos.xlsx` | Plantilla de productos con 10 ejemplos ficticios |
| `src/` | Código fuente de la landing page |
| `.env.example` | Plantilla de configuración de variables de entorno |
| `README.md` | Documentación e instrucciones del proyecto |

## 1. Arrancar la página en modo demo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Sin configurar una fuente de datos, la aplicación muestra los productos de ejemplo y un aviso que identifica el modo demo.

## 2. Preparar la hoja de productos

Abre `catalogo-productos.xlsx`. En la hoja **Productos**, las celdas amarillas son las que puedes editar.

| Columna | Qué poner |
|---|---|
| `id` | Se calcula automáticamente |
| `nombre` | Nombre obligatorio del producto |
| `descripcion` | Descripción breve |
| `categoria` | Categoría seleccionada de la lista |
| `precio` | Solo números, sin símbolos. Ejemplo: `189900` |
| `imagen_url` | Enlace directo a la imagen |
| `disponible` | `SI` o `NO`; si está vacío, se toma como `SI` |
| `destacado` | `SI` o `NO`; los destacados aparecen primero |

Elimina los ejemplos de las celdas editables y agrega tus productos reales. La hoja `Productos` debe seguir siendo la primera pestaña.

Para las imágenes, puedes utilizar servicios como Cloudinary o Imgur. El enlace debe permitir visualizar la imagen directamente.

## 3. Conectar con Google Sheets

1. Sube `catalogo-productos.xlsx` a Google Drive.
2. Ábrelo con Hojas de cálculo de Google y conviértelo a formato nativo.
3. Entra en **Archivo → Compartir → Publicar en la Web**.
4. Selecciona la hoja `Productos` y el formato CSV.
5. Publica la hoja y copia el enlace generado.
6. Guarda el enlace en `.env.local`:

```env
NEGOCIO_NOMBRE="Nombre de tu negocio"
WHATSAPP_NUMERO="573001234567"
MONEDA=COP
SHEET_CSV_URL="URL_CSV_PUBLICADA"
```

Sustituye `URL_CSV_PUBLICADA` por el enlace real de Google Sheets.

Como alternativa, puedes compartir la hoja con permiso de lector y utilizar `GOOGLE_SHEET_ID` junto con `GOOGLE_SHEET_NAME=Productos`, si la implementación correspondiente está habilitada en el código.

## 4. Conectar con Excel en OneDrive

La aplicación contempla archivos Excel alojados en OneDrive personal.

1. Sube `catalogo-productos.xlsx` a OneDrive.
2. Comparte el archivo con permiso de visualización mediante un enlace público.
3. Configura la variable:

```env
ONEDRIVE_SHARE_URL="URL_COMPARTIDA_DEL_ARCHIVO"
```

La compatibilidad depende de que OneDrive permita descargar el archivo mediante el enlace proporcionado.

## 5. Actualización de productos

La configuración documentada utiliza una revalidación de **300 segundos (5 minutos)**.

Para modificarla, revisa `revalidate` en `src/app/page.tsx` y `REVALIDATE_SECONDS` en `src/lib/products.ts`. La actualización efectiva también depende del tiempo de publicación y respuesta de la fuente de datos.

## 6. Despliegue en Vercel

1. Sube el código a GitHub.
2. Importa el repositorio en Vercel.
3. Abre **Settings → Environment Variables**.
4. Configura las variables necesarias para la fuente de datos elegida.
5. Despliega o vuelve a desplegar la aplicación después de guardar las variables.

**Importante:** nunca subas `.env.local` al repositorio. El archivo debe permanecer excluido mediante `.gitignore`.

## 7. Versionado

Este proyecto se identifica como **SatCore Solutions — Catálogo automático de productos v1.1.0**.

El número de versión documenta la versión declarada del producto. Para mantener coherencia con el código publicado, verifica también el campo `version` de `package.json` y actualízalo a `1.1.0` si corresponde.

## Desarrollado por SatCore Solutions

**Soluciones digitales seguras, accesibles y funcionales para todos.**

Producto orientado a facilitar la gestión de catálogos digitales, centralizar la información de productos y simplificar la recepción de pedidos por WhatsApp.