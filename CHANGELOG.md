# Changelog

Todos los cambios importantes de este proyecto serán documentados en este archivo.

El formato sigue una estructura basada en versiones y categorías de cambios, siguiendo las convenciones de Keep a Changelog y el versionado semántico.

---

## [Unreleased]

### Added

- Pendiente de nuevas funcionalidades.

### Changed

- Pendiente de cambios para la próxima versión.

### Fixed

- Pendiente de correcciones.

### Removed

- Pendiente de funcionalidades retiradas.

### Security

- Pendiente de mejoras de seguridad.

---

## [1.1.0] - 2026-10-21

### Added

- Catálogo digital de productos desarrollado con Next.js y TypeScript.
- Integración documentada con Google Sheets mediante publicación de datos en formato CSV.
- Soporte documentado para archivos Excel alojados en OneDrive, sujeto a la implementación y disponibilidad del enlace de descarga.
- Plantilla `catalogo-productos.xlsx` con diez productos ficticios de ejemplo.
- Modo demo para mostrar productos de ejemplo cuando no se configura una fuente de datos.
- Búsqueda de productos.
- Filtro por categoría.
- Filtro por disponibilidad.
- Identificación visual de productos destacados.
- Identificación visual de productos agotados.
- Carrito para reunir productos y preparar pedidos por WhatsApp.
- Variables de entorno para configurar el nombre del negocio, el número de WhatsApp, la moneda y la fuente de datos.
- Configuración documentada de revalidación de productos cada 300 segundos.
- Instrucciones de instalación, configuración, desarrollo y despliegue en Vercel.
- Documentación de la estructura del catálogo, privacidad, seguridad y dependencias externas.

### Changed

- Actualización de la documentación principal para reflejar la versión declarada 1.1.0.
- Organización de las instrucciones para configurar las fuentes de datos y administrar productos desde una hoja de cálculo.
- Documentación de los requisitos de actualización automática y sus posibles dependencias de caché y disponibilidad de las fuentes.
- Ampliación de las recomendaciones de despliegue y protección de variables de entorno.

### Fixed

- Se documentan las consideraciones para identificar el modo demo cuando no existe una fuente de datos configurada.
- Se precisan los requisitos de formato para precios, disponibilidad e imágenes.
- Se aclara que la actualización de productos depende de la revalidación y de la respuesta de la fuente de datos.

### Removed

- No se documentan funcionalidades retiradas en esta versión.

### Security

- Se refuerza la recomendación de excluir `.env.local` del repositorio.
- Se documentan buenas prácticas para evitar la exposición de credenciales y datos comerciales confidenciales.
- Se advierte sobre la exposición pública de las hojas de cálculo publicadas en Google Sheets.
- Se incluyen recomendaciones para validar los datos obtenidos de fuentes externas y revisar los permisos de acceso.

---

## [1.1.0] - 2026-10-21

### Added

- Lanzamiento inicial del proyecto.
- Primera versión del catálogo digital de productos.
