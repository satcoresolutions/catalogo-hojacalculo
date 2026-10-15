# Catálogo automático de productos

Landing page en **Next.js + TypeScript** que lee tus productos desde una hoja de cálculo (Google Sheets o Excel en OneDrive) y arma el catálogo sola. Cuando editas una fila en la hoja, la página se actualiza en unos minutos, sin tocar el código.

Incluye búsqueda, filtro por categoría, "solo disponibles", etiquetas de *Destacado* y *Agotado*, y un carrito que envía el pedido por WhatsApp.

## Qué trae esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `catalogo-productos.xlsx` | Plantilla de la hoja de productos (con 10 productos de ejemplo inventados) |
| `src/` | El código de la landing page |
| `.env.example` | Plantilla de configuración |

## 1. Arrancar la página (modo demo)

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>. Sin configurar nada, muestra los productos de ejemplo y un aviso arriba que lo indica.

## 2. Preparar la hoja de productos

Abre `catalogo-productos.xlsx`. En la hoja **Productos**, las celdas amarillas son las que editas:

| Columna | Qué poner |
|---|---|
| `id` | Se calcula sola, no la toques |
| `nombre` | Obligatorio. Si está vacío, esa fila no se muestra |
| `descripcion` | Texto corto |
| `categoria` | Elígela de la lista desplegable (se administra en la hoja *Categorias*) |
| `precio` | Solo número, sin símbolos. Ejemplo: `189900` |
| `imagen_url` | Enlace directo a la imagen (`.jpg`, `.png`, `.webp`) |
| `disponible` | `SI` o `NO` (si está vacío se toma como `SI`) |
| `destacado` | `SI` o `NO`. Los destacados salen primero |

Borra las 10 filas de ejemplo (solo las celdas amarillas) y escribe tus productos. **La hoja `Productos` debe seguir siendo la primera pestaña.**

> Imágenes: lo más confiable es subirlas a un servicio como Cloudinary o Imgur y pegar el enlace directo. Los enlaces de "compartir" de Google Drive se convierten automáticamente y suelen funcionar, pero Drive a veces los bloquea.

## 3. Conectar con Google Sheets (recomendado)

1. Sube `catalogo-productos.xlsx` a Google Drive, ábrelo con Hojas de cálculo de Google y usa **Archivo → Guardar como hoja de cálculo de Google**. (Hay que trabajar sobre la versión nativa, no sobre el `.xlsx` en modo compatibilidad.)
2. Ve a **Archivo → Compartir → Publicar en la Web**.
3. En el primer menú elige la hoja **Productos** (no "Todo el documento") y en el segundo **Valores separados por comas (.csv)**. Pulsa **Publicar** y copia el enlace.
4. Copia `.env.example` como `.env.local` y pega el enlace:

```env
NEGOCIO_NOMBRE="Nombre de tu negocio"
WHATSAPP_NUMERO=573001234567
MONEDA=COP
SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/e/....../pub?gid=0&single=true&output=csv
```

5. Reinicia `npm run dev`. Los productos de tu hoja reemplazan a los de ejemplo.

**Alternativa sin publicar:** comparte la hoja como *Cualquier persona con el enlace: lector* y usa `GOOGLE_SHEET_ID` (la parte larga del enlace entre `/d/` y `/edit`) en lugar de `SHEET_CSV_URL`.

## 4. Conectar con Excel en OneDrive (opción C)

Funciona con **OneDrive personal**:

1. Sube `catalogo-productos.xlsx` a OneDrive.
2. Compartir → **Cualquier persona con el enlace puede ver** → copia el enlace.
3. En `.env.local`: `ONEDRIVE_SHARE_URL=<el enlace>`.

La página descarga el archivo y lee la primera hoja. Esta ruta está probada con el archivo de la plantilla en local, pero no pude probarla contra un OneDrive real. Si tu cuenta es de empresa o colegio (Microsoft 365), es probable que bloquee los enlaces públicos; en ese caso usa Google Sheets o pídeme que prepare la conexión con Microsoft Graph, que requiere registrar una app en Microsoft Entra.

## 5. Cada cuánto se actualiza

La página vuelve a leer la hoja como máximo cada **5 minutos**. Para cambiarlo, edita `revalidate = 300` (segundos) en `src/app/page.tsx` y `REVALIDATE_SECONDS` en `src/lib/products.ts`. Google también tarda algunos minutos en reflejar los cambios en una hoja publicada.

## 6. Publicarla en internet

La forma más simple es **Vercel**: sube la carpeta a un repositorio de GitHub, impórtalo en vercel.com y agrega las mismas variables de `.env.local` en *Settings → Environment Variables*. Nunca subas `.env.local` al repositorio (ya está en `.gitignore`).

## Qué automatiza la hoja de Excel

- El `id` se genera solo.
- Listas desplegables para categoría y `SI`/`NO`.
- El precio solo acepta números.
- Las filas con `disponible = NO` se pintan en rojo.

## Problemas comunes

- **Veo productos de ejemplo:** falta configurar `.env.local` o no reiniciaste el servidor.
- **Aviso rojo "El enlace devolvió una página web":** la hoja no está publicada como CSV o no está compartida con el enlace.
- **No aparece un producto:** revisa que la columna `nombre` tenga texto.
- **Una imagen no carga:** abre el enlace en el navegador; debe mostrar solo la imagen.
