 <div align="center">

<img src="./public/logo.png" alt="SatCore Solutions" width="220" />

# Catálogo automático de productos

**SatCore Solutions · Versión 1.1.0**

Landing page para publicar catálogos digitales conectados a hojas de cálculo y recibir pedidos por WhatsApp.

![Versión](https://img.shields.io/badge/versión-1.1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-TypeScript-black)
![Catálogo](https://img.shields.io/badge/producto-catálogo%20digital-0A7B83)
![Estado](https://img.shields.io/badge/estado-versión%20estable-success)

**Soluciones digitales seguras, accesibles y funcionales para todos.**

</div>

---

## Sobre el proyecto

**Catálogo automático de productos** es una solución digital desarrollada por **SatCore Solutions** para crear y mantener un catálogo de productos en línea sin tener que modificar el código cada vez que cambia la información comercial.

La aplicación utiliza una landing page desarrollada con Next.js y TypeScript que puede obtener sus productos desde una hoja de cálculo. La información puede gestionarse mediante Google Sheets o, cuando la implementación y el enlace lo permitan, desde un archivo Excel alojado en OneDrive.

El negocio administra los productos en su hoja de cálculo y la aplicación actualiza el catálogo mediante un mecanismo de revalidación configurado para ejecutarse cada 300 segundos (5 minutos).

Los clientes pueden explorar los productos, buscar por nombre, filtrar por categoría y disponibilidad, identificar productos destacados o agotados, agregar artículos al carrito y preparar sus pedidos para enviarlos por WhatsApp.

### Información del producto

| Campo                            | Información                                                          |
| -------------------------------- | -------------------------------------------------------------------- |
| Producto                         | Catálogo automático de productos                                     |
| Marca                            | SatCore Solutions                                                    |
| Versión declarada                | 1.1.0                                                                |
| Categoría                        | Desarrollo de software y soluciones digitales                        |
| Tecnologías principales          | Next.js y TypeScript                                                 |
| Fuentes de datos                 | Google Sheets y Excel en OneDrive, según la configuración habilitada |
| Canal de pedidos                 | WhatsApp                                                             |
| Moneda configurada de referencia | COP                                                                  |
| Actualización documentada        | Revalidación de 300 segundos                                         |
| Modo de demostración             | Productos de ejemplo                                                 |
| Estado                           | Versión 1.1.0                                                        |

> **Nota:** La versión 1.1.0 es la versión declarada del producto. La versión efectiva de las dependencias, los mecanismos de conexión y las funcionalidades disponibles deben corresponder al código publicado.

## SatCore Solutions

**SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**

SatCore Solutions desarrolla soluciones tecnológicas orientadas a facilitar procesos, mejorar la accesibilidad digital y proporcionar herramientas prácticas para negocios, organizaciones y proyectos.

### Áreas de trabajo

- **Desarrollo:** aplicaciones web, herramientas digitales y soluciones de software.
- **Automatizador:** optimización de tareas y procesos mediante tecnología.
- **Seguridad:** buenas prácticas de protección de información y configuración segura.
- **Estudio:** investigación, aprendizaje y exploración tecnológica.
- **Marketing:** presencia digital, comunicación comercial y herramientas para negocios.

Este producto forma parte del área de desarrollo de soluciones digitales para la gestión y presentación de información comercial.

## Características principales

### Catálogo digital

- Presentación de productos mediante una landing page.
- Consulta de información obtenida desde una fuente de datos configurada.
- Visualización de nombre, descripción, precio e imagen del producto.
- Organización de productos por categorías.
- Búsqueda de productos.
- Filtro por disponibilidad.
- Identificación de productos destacados.
- Identificación de productos agotados.
- Visualización de productos de ejemplo en modo demo cuando no existe una fuente configurada.

### Gestión mediante hojas de cálculo

- Plantilla inicial `catalogo-productos.xlsx`.
- Diez productos ficticios de ejemplo.
- Edición de información comercial desde una hoja de cálculo.
- Compatibilidad documentada con Google Sheets mediante publicación en formato CSV.
- Alternativa de Excel en OneDrive, sujeta a que el enlace permita descargar el archivo y a que el código implemente el procesamiento correspondiente.
- Revalidación configurada para 300 segundos, según la configuración documentada.

### Pedidos por WhatsApp

- Carrito para reunir productos seleccionados.
- Preparación de un pedido a partir de los productos agregados.
- Envío del pedido mediante WhatsApp.
- Configuración del nombre del negocio y del número de WhatsApp.

La recepción, confirmación y ejecución del pedido dependen de la interacción posterior con el negocio a través de WhatsApp.

## Tecnologías

### Tecnologías principales

| Tecnología         | Propósito                                                          |
| ------------------ | ------------------------------------------------------------------ |
| Next.js            | Aplicación web, páginas y mecanismos de actualización de datos     |
| TypeScript         | Tipado estático y mantenimiento del código                         |
| React              | Construcción de componentes e interfaces                           |
| Node.js            | Entorno de ejecución para herramientas y desarrollo                |
| npm                | Instalación y administración de dependencias                       |
| Google Sheets      | Fuente de datos mediante una hoja publicada en CSV                 |
| Microsoft OneDrive | Alojamiento alternativo del archivo Excel, sujeto a compatibilidad |
| WhatsApp           | Canal de comunicación para enviar pedidos                          |

Las versiones concretas de Next.js, React, TypeScript y Node.js deben verificarse en `package.json`, el archivo de bloqueo de dependencias y la configuración del proyecto.

## Requisitos

Antes de iniciar el proyecto, se recomienda contar con:

- Node.js en una versión compatible con las dependencias instaladas.
- npm.
- Git, si se utilizará un repositorio para el control de versiones.
- Un navegador web actualizado.
- Una hoja de cálculo compatible o la plantilla de ejemplo.
- Un número de WhatsApp válido, con el formato internacional correspondiente, para recibir pedidos.
- Una cuenta de Google o Microsoft, si se desea administrar los productos mediante sus respectivos servicios.

Para desplegar la aplicación se requiere una plataforma compatible con Next.js, como Vercel.

## Instalación

### 1. Obtener el código

Clona el repositorio del proyecto o descarga sus archivos desde la ubicación oficial correspondiente.

```bash
git clone <URL_DEL_REPOSITORIO>
cd <CARPETA_DEL_PROYECTO>
```

Sustituye los valores de ejemplo por la URL real del repositorio y el nombre de la carpeta.

### 2. Instalar dependencias

```bash
npm install
```

### 3. Preparar las variables de entorno

Crea el archivo `.env.local` en la raíz del proyecto, tomando como referencia `.env.example`.

```env
NEGOCIO_NOMBRE="Nombre de tu negocio"
WHATSAPP_NUMERO="573001234567"
MONEDA=COP
```

Estas variables representan la configuración básica documentada. Añade únicamente las variables correspondientes a la fuente de datos elegida.

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Si no has configurado una fuente de datos, la aplicación mostrará los productos de ejemplo y el aviso correspondiente al modo demo, de acuerdo con el comportamiento documentado.

> Los comandos disponibles deben verificarse en los scripts de `package.json`.

## Configuración

### Variables de entorno

| Variable             | Propósito                                               | Obligatoria                                         |
| -------------------- | ------------------------------------------------------- | --------------------------------------------------- |
| `NEGOCIO_NOMBRE`     | Nombre comercial que identifica al negocio              | Para personalizar el catálogo                       |
| `WHATSAPP_NUMERO`    | Número destinatario de los pedidos                      | Para utilizar el canal de pedidos                   |
| `MONEDA`             | Moneda utilizada para presentar los precios             | Según la configuración de la aplicación             |
| `SHEET_CSV_URL`      | URL de la hoja de Google Sheets publicada como CSV      | Para la conexión CSV                                |
| `GOOGLE_SHEET_ID`    | Identificador de la hoja de Google Sheets               | Solo si está habilitada la conexión correspondiente |
| `GOOGLE_SHEET_NAME`  | Nombre de la hoja que se consultará                     | Solo si está habilitada la conexión correspondiente |
| `ONEDRIVE_SHARE_URL` | Enlace compartido del archivo Excel alojado en OneDrive | Para la conexión OneDrive implementada              |

Las variables de Google Sheets y OneDrive son alternativas de configuración. No es necesario utilizar ambas fuentes simultáneamente, salvo que el código contemple expresamente ese comportamiento.

El archivo `.env.example` debe mantenerse sincronizado con las variables que realmente consume la aplicación.

## Preparación del catálogo de productos

El archivo `catalogo-productos.xlsx` es la plantilla de referencia para organizar la información comercial.

### Columnas de la hoja `Productos`

| Columna       | Descripción                                                                            |
| ------------- | -------------------------------------------------------------------------------------- |
| `id`          | Identificador del producto, calculado automáticamente según la plantilla               |
| `nombre`      | Nombre obligatorio del producto                                                        |
| `descripcion` | Descripción breve                                                                      |
| `categoria`   | Categoría seleccionada de la lista disponible                                          |
| `precio`      | Precio numérico sin símbolos; por ejemplo, `189900`                                    |
| `imagen_url`  | Enlace directo a la imagen del producto                                                |
| `disponible`  | `SI` o `NO`; si está vacío, se interpreta como `SI` según la configuración documentada |
| `destacado`   | `SI` o `NO`; permite identificar productos destacados                                  |

### Recomendaciones de uso

1. Abre `catalogo-productos.xlsx`.
2. Selecciona la hoja `Productos`.
3. Identifica las celdas amarillas habilitadas para edición.
4. Sustituye los diez ejemplos ficticios por tus productos reales.
5. Conserva los nombres de las columnas y la estructura esperada por la aplicación.
6. Mantén la hoja `Productos` como primera pestaña, según los requisitos documentados.
7. Verifica que los precios sean numéricos y que las imágenes puedan visualizarse mediante sus enlaces.
8. Guarda los cambios y comprueba el resultado en la página.

Para las imágenes puedes utilizar servicios de alojamiento como Cloudinary o Imgur. El enlace debe permitir que el navegador cargue la imagen directamente.

La estructura de la plantilla debe coincidir con los campos que espera el código. Modificar encabezados o formatos puede impedir la lectura correcta de los productos.

## Conectar con Google Sheets

La opción recomendada para una configuración sencilla es publicar la hoja de productos como CSV.

### Procedimiento

1. Sube `catalogo-productos.xlsx` a Google Drive.
2. Abre el archivo con Hojas de cálculo de Google y conviértelo al formato nativo.
3. En el menú, entra en **Archivo → Compartir → Publicar en la Web**.
4. Selecciona la hoja `Productos`.
5. Selecciona el formato CSV.
6. Publica la hoja y copia la URL CSV generada.
7. Guarda la URL en el archivo `.env.local`.

```env
NEGOCIO_NOMBRE="Nombre de tu negocio"
WHATSAPP_NUMERO="573001234567"
MONEDA=COP
SHEET_CSV_URL="URL_CSV_PUBLICADA"
```

Sustituye `URL_CSV_PUBLICADA` por el enlace real generado por Google Sheets.

### Consideraciones sobre privacidad

Publicar una hoja en la web puede hacer que su contenido sea accesible públicamente. Utiliza esta modalidad únicamente para información que pueda exponerse, como nombres, descripciones, precios e imágenes de productos.

No incluyas contraseñas, información de clientes, datos personales innecesarios, costos internos ni información comercial confidencial en una hoja publicada.

### Conexión alternativa por identificador

La documentación contempla la posibilidad de utilizar un identificador de Google Sheets y un nombre de hoja:

```env
GOOGLE_SHEET_ID="IDENTIFICADOR_DE_LA_HOJA"
GOOGLE_SHEET_NAME=Productos
```

Esta alternativa solo debe considerarse operativa si la implementación correspondiente está habilitada en el código y dispone de los permisos y mecanismos de acceso necesarios. Compartir una hoja como lector, por sí solo, no garantiza que una aplicación pueda consultarla mediante su identificador.

## Conectar con Excel en OneDrive

La aplicación contempla el uso de un archivo Excel alojado en OneDrive personal, siempre que la implementación permita descargarlo y procesarlo.

### Procedimiento

1. Sube `catalogo-productos.xlsx` a OneDrive.
2. Genera un enlace compartido con permisos de visualización.
3. Comprueba que el enlace permita acceder al archivo o descargarlo desde el entorno en el que se ejecuta la aplicación.
4. Añade la variable correspondiente a `.env.local`.

```env
ONEDRIVE_SHARE_URL="URL_COMPARTIDA_DEL_ARCHIVO"
```

5. Reinicia el servidor de desarrollo si es necesario.
6. Verifica que los productos del archivo se muestren correctamente.

### Consideraciones técnicas

Un enlace compartido de OneDrive no siempre es una URL directa de descarga. La compatibilidad depende del formato del enlace, los permisos de acceso, la respuesta del servicio y la forma en que el código procesa el archivo.

No debe asumirse que cualquier enlace de OneDrive funciona automáticamente. La conexión debe probarse con el archivo real y con la implementación utilizada.

## Búsqueda, filtros y disponibilidad

El catálogo permite a los visitantes explorar los productos disponibles mediante las funciones implementadas en la interfaz.

- **Búsqueda:** facilita localizar productos por su información identificativa.
- **Categorías:** permite limitar la vista a una categoría.
- **Disponibilidad:** distingue productos disponibles de productos no disponibles.
- **Destacados:** identifica los productos señalados como prioritarios.
- **Agotados:** comunica que un producto no está disponible, según el tratamiento de disponibilidad implementado.
- **Carrito:** permite reunir productos para preparar un pedido por WhatsApp.

Los cambios realizados en la fuente de datos se reflejan cuando la aplicación vuelve a consultar o revalidar los datos, sujeto al funcionamiento de la fuente y a la configuración del despliegue.

## Actualización automática de productos

La configuración documentada utiliza un intervalo de revalidación de **300 segundos (5 minutos)**.

Para revisar o modificar este comportamiento, consulta:

- `src/app/page.tsx`: configuración de revalidación de la página.
- `src/lib/products.ts`: configuración relacionada con la lectura y actualización de productos.

El valor documentado de `REVALIDATE_SECONDS` es de 300 segundos.

### Importante

El intervalo de cinco minutos no constituye una garantía de actualización instantánea. El tiempo real puede depender de:

- La configuración de revalidación de Next.js.
- El mecanismo de lectura de la fuente de datos.
- La disponibilidad y el tiempo de respuesta de Google Sheets o OneDrive.
- La caché de la aplicación y la plataforma de despliegue.
- Los errores de acceso o procesamiento del archivo.

Si se modifica una fila y el cambio no aparece inmediatamente, comprueba primero la fuente de datos, la configuración de revalidación y los registros de ejecución.

## Desarrollo

### Ejecutar en modo local

```bash
npm run dev
```

### Verificar tipos y calidad del código

Utiliza los scripts que estén definidos en `package.json`. Si el proyecto dispone de los comandos correspondientes, puedes ejecutar:

```bash
npx tsc --noEmit
npm run lint
```

El comando de lint depende de la configuración instalada y de los scripts disponibles.

### Compilar para producción

```bash
npm run build
```

### Ejecutar la compilación

```bash
npm run start
```

El servidor de producción debe ejecutarse después de una compilación satisfactoria y con las variables de entorno necesarias configuradas.

## Producción

Antes de publicar una versión, verifica:

- Que la compilación finalice sin errores.
- Que la fuente de datos responda correctamente.
- Que el modo demo se identifique de forma clara cuando corresponda.
- Que las imágenes sean accesibles.
- Que los precios y la moneda se presenten correctamente.
- Que la búsqueda y los filtros funcionen.
- Que el carrito prepare el pedido esperado.
- Que el número de WhatsApp sea correcto.
- Que la revalidación esté configurada adecuadamente.
- Que no existan variables sensibles expuestas en el repositorio.
- Que la plantilla y la documentación coincidan con el código publicado.

## Estructura del proyecto

La siguiente estructura representa los archivos y directorios documentados. Debe contrastarse con el árbol real del repositorio antes de utilizarla como inventario exhaustivo.

```text
catalogo-automatico-productos/
├── public/
│   └── logo.png
├── src/
│   ├── app/
│   │   └── page.tsx
│   └── lib/
│       └── products.ts
├── catalogo-productos.xlsx
├── .env.example
├── .env.local
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

` .env.local` es un archivo local de configuración y no debe incluirse en el repositorio. Su presencia en la estructura anterior es ilustrativa: no debe versionarse.

La aplicación puede contener componentes, estilos, tipos y otros módulos adicionales que no se enumeran aquí.

## Arquitectura

La solución separa conceptualmente la presentación del catálogo, la lectura de productos y la configuración del negocio.

### Componentes principales

- **Interfaz web:** muestra el catálogo y las herramientas de exploración.
- **Fuente de datos:** contiene la información comercial administrada mediante una hoja de cálculo.
- **Lógica de productos:** interpreta los datos obtenidos y prepara la información para su visualización.
- **Revalidación:** permite renovar los datos de acuerdo con la configuración de Next.js.
- **Carrito:** reúne los artículos seleccionados.
- **Integración con WhatsApp:** facilita preparar el pedido y dirigirlo al canal configurado.

El comportamiento exacto depende de los módulos y las funciones presentes en la versión publicada.

## Datos y privacidad

El catálogo debe utilizarse principalmente para mostrar información pública de productos.

### Buenas prácticas

- Publica únicamente los datos necesarios para vender los productos.
- Evita incluir datos personales de clientes en las hojas públicas.
- No almacenes credenciales ni tokens dentro de los archivos de productos.
- No incluyas secretos en `NEXT_PUBLIC_*` ni en variables destinadas al navegador.
- Limita los permisos de las fuentes de datos cuando la implementación lo permita.
- Verifica qué información se incorpora al mensaje del pedido enviado por WhatsApp.
- Informa a los clientes sobre el tratamiento de sus datos cuando corresponda.
- Revisa las políticas de privacidad y las condiciones de los proveedores externos.

La publicación de una hoja de cálculo puede exponer su contenido a personas distintas de los usuarios previstos. La configuración de acceso debe revisarse antes de utilizar información comercial real.

## Seguridad

La seguridad depende tanto del código de la aplicación como de los permisos y servicios externos que se utilicen.

### Recomendaciones

- Mantén `.env.local` fuera del control de versiones.
- Utiliza `.env.example` únicamente para documentar nombres de variables y valores ficticios.
- No publiques credenciales, claves privadas ni tokens de acceso.
- Valida y normaliza los datos obtenidos de fuentes externas.
- Comprueba el formato de precios, disponibilidad, categorías e imágenes.
- Evita procesar archivos o enlaces externos sin controles apropiados.
- Mantén las dependencias actualizadas y revisa las vulnerabilidades conocidas.
- Verifica los permisos de publicación de Google Sheets y OneDrive.
- Comprueba que el contenido del carrito y los mensajes de WhatsApp no incluyan información inesperada.
- Revisa los registros de la aplicación para evitar exponer datos sensibles.

Para reportar vulnerabilidades de seguridad, contacta con:

**satcoresolutions@gmail.com**

No incluyas credenciales, datos personales ni información confidencial en un reporte público.

## Desarrollo y contribuciones

Las mejoras deben mantener la compatibilidad entre la estructura de la hoja de cálculo, la lógica de lectura y la interfaz.

Antes de proponer cambios:

1. Revisa la arquitectura existente.
2. Comprueba las dependencias y los scripts del proyecto.
3. Identifica los tipos y formatos de datos esperados.
4. Prueba los cambios con productos de ejemplo.
5. Ejecuta las verificaciones disponibles.
6. Actualiza la documentación cuando cambie la configuración o el comportamiento.

Las contribuciones externas deben respetar las condiciones de licencia aplicables y los derechos de propiedad intelectual del proyecto.

## Proyectos derivados

Los proyectos derivados, adaptaciones comerciales, personalizaciones o redistribuciones deben respetar la licencia aplicable y los derechos de SatCore Solutions.

La posibilidad de utilizar, modificar, distribuir o comercializar una versión derivada depende del texto legal de la licencia que acompañe a la versión concreta del proyecto.

No se presume que la publicación del código autorice automáticamente todos esos usos.

## Atribución

Cuando la licencia aplicable lo exija, las adaptaciones o redistribuciones deben conservar la atribución correspondiente a SatCore Solutions y los avisos de propiedad intelectual pertinentes.

La forma de atribución y las obligaciones específicas deben verificarse en el archivo `LICENSE` incluido en la versión distribuida.

## Marca y propiedad intelectual

**SatCore Solutions** y su identidad corporativa corresponden a la marca del proyecto.

El nombre, el logotipo, la documentación, el diseño y los elementos originales de la solución pueden estar sujetos a derechos de propiedad intelectual, según corresponda.

La licencia de software no debe interpretarse automáticamente como una autorización para utilizar la marca, presentar un producto derivado como oficial o sugerir respaldo comercial de SatCore Solutions.

Las autorizaciones de marca y las condiciones de uso deben evaluarse por separado cuando corresponda.

## Dependencias de terceros

Este proyecto puede depender de herramientas y servicios externos, entre ellos:

- Next.js.
- React.
- TypeScript.
- Node.js y npm.
- Google Sheets y Google Drive.
- Microsoft Excel y OneDrive.
- WhatsApp.
- Vercel, cuando se utiliza como plataforma de despliegue.
- Servicios de alojamiento de imágenes, como Cloudinary o Imgur.

Cada proveedor mantiene sus propios términos, políticas de privacidad, condiciones de uso y disponibilidad.

La inclusión de un servicio en esta documentación no implica que SatCore Solutions sea propietario, representante o socio oficial de dicho proveedor.

Las licencias y versiones efectivamente utilizadas deben verificarse en los archivos de dependencias del proyecto.

## Despliegue en Vercel

### Procedimiento

1. Sube el código a un repositorio Git.
2. Importa el repositorio desde Vercel.
3. Selecciona la configuración de construcción compatible con Next.js.
4. Abre **Settings → Environment Variables**.
5. Añade las variables necesarias para el negocio y la fuente de datos elegida.
6. Comprueba que las variables estén habilitadas para los entornos correspondientes.
7. Ejecuta el despliegue.
8. Comprueba la carga del catálogo, las imágenes, los filtros y el carrito.
9. Realiza una prueba de actualización de productos.

Si modificas las variables de entorno, puede ser necesario volver a desplegar para que los cambios tengan efecto.

### Protección de archivos de configuración

No subas `.env.local` al repositorio.

Asegúrate de que `.gitignore` excluya los archivos de entorno que contienen configuraciones locales o secretos. El archivo `.env.example` debe incluir valores de ejemplo, nunca credenciales reales.

## Estado del proyecto

| Campo                    | Estado documentado                                |
| ------------------------ | ------------------------------------------------- |
| Producto                 | Catálogo automático de productos                  |
| Versión                  | 1.1.0                                             |
| Modo demo                | Disponible según la configuración documentada     |
| Gestión de productos     | Hoja de cálculo                                   |
| Google Sheets            | Conexión documentada mediante CSV                 |
| Excel en OneDrive        | Sujeta a la implementación y al acceso al archivo |
| Actualización automática | Revalidación configurada para 300 segundos        |
| Pedidos                  | Preparación y envío mediante WhatsApp             |
| Despliegue               | Vercel u otra plataforma compatible con Next.js   |

Las capacidades deben verificarse contra el código fuente de la versión 1.1.0 antes de anunciar soporte técnico garantizado.

## Roadmap

Las siguientes son posibles líneas de evolución, no compromisos de entrega ni funcionalidades que deban considerarse ya implementadas.

- [ ] Validar y documentar formalmente las fuentes de datos admitidas.
- [ ] Mejorar la gestión de errores de lectura y conexión.
- [ ] Documentar los formatos admitidos para imágenes y precios.
- [ ] Añadir pruebas automatizadas para el procesamiento de productos.
- [ ] Mejorar los mensajes de estado cuando la fuente de datos no esté disponible.
- [ ] Ampliar la documentación de despliegue y diagnóstico.
- [ ] Evaluar mejoras de accesibilidad y experiencia móvil.
- [ ] Revisar periódicamente las dependencias y prácticas de seguridad.

## Versionado

El producto se identifica como:

**SatCore Solutions — Catálogo automático de productos v1.1.0**

La versión declarada en este README debe mantenerse alineada con la versión distribuida. Verifica el campo `version` de `package.json` y actualízalo a `1.1.0` si corresponde a la publicación real.

Para cambios posteriores, se recomienda utilizar versionado semántico:

- **MAJOR:** cambios incompatibles con la configuración o estructura anterior.
- **MINOR:** nuevas funcionalidades compatibles.
- **PATCH:** correcciones y mejoras compatibles.

Los cambios publicados deben documentarse en un archivo `CHANGELOG.md` cuando el proyecto utilice ese registro.

## Licencia

El producto debe distribuirse con el archivo `LICENSE` que establezca las condiciones legales aplicables a la versión publicada.

Si el proyecto utiliza la **SatCore Solutions Attribution License (SCSAL) 1.0**, el archivo debe contener el texto legal completo y aprobado de dicha licencia.

La existencia de una insignia, una referencia en el README o una mención de la licencia no sustituye el documento legal. Antes de declarar SCSAL 1.0 como licencia vigente, comprueba que el archivo `LICENSE` exista y corresponda a esa versión.

Los derechos, permisos de uso, atribución, modificación, distribución y demás condiciones se rigen por la licencia efectivamente incluida.

## Autoría

**SatCore Solutions**

_SOFTWARE AND TECHNOLOGY CORE SOLUTIONS_

Soluciones digitales seguras, accesibles y funcionales para todos.

- Correo: satcoresolutions@gmail.com
- GitHub: https://github.com/satcoresolutions

---

<div align="center">

**Desarrollado originalmente por SatCore Solutions.**

© SatCore Solutions — Todos los derechos reservados, excepto los derechos concedidos expresamente mediante la licencia aplicable.

</div>
