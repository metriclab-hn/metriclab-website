# Pendientes (sitio web)

IDs `WEB-0xx`, estables, nunca se reutilizan. Formato y reglas: `metriclab-hq/docs/sop-repos.md`, sección 4.

**Siguiente ID libre:** WEB-007

## Abiertos

### 1. Contenido

| ID | Pendiente | Tipo | Prioridad | Responsable | Desde | Siguiente paso |
|---|---|---|---|---|---|---|
| WEB-001 | Fotos de los socios en *Nosotros* (hoy son monogramas) | mejora | Baja | Álvaro Jr. | 2026-11-10 | Tomar o elegir las fotos de Jr. y Sr. |
| WEB-002 | Casos de clientes con permiso | nuevo | Media | Álvaro Jr. | 2026-11-10 | Pedir permiso a un cliente para un caso anónimo con números |

### 2. Visibilidad en buscadores

| ID | Pendiente | Tipo | Prioridad | Responsable | Desde | Siguiente paso |
|---|---|---|---|---|---|---|
| WEB-003 | Google Search Console y Perfil de Empresa en Google | nuevo | Media | Álvaro Jr. | 2026-11-10 | Verificar el dominio en Search Console y mandar el sitemap |

### 3. Formulario y seguridad

| ID | Pendiente | Tipo | Prioridad | Responsable | Desde | Siguiente paso |
|---|---|---|---|---|---|---|
| WEB-004 | Restringir CORS del webhook de contacto a metriclab.tech | mantenimiento | Baja | Álvaro Jr. | 2026-11-10 | Cambiar el header `Access-Control-Allow-Origin` en `MLB · Contacto Web` |
| WEB-006 | Vistas previas de Cloudflare fallan en ramas que no son `main` | bug | Baja | Álvaro Jr. | 2026-11-26 | Copiar el error de *View logs* o apagar las vistas previas por rama en el Worker `metriclab` |
| WEB-005 | Probar en un teléfono real la barra fija, las animaciones y el dashboard | mantenimiento | Media | Álvaro Jr. | 2026-11-26 | Revisar la vista previa en iPhone y Android antes del merge |

## Resueltos

| ID | Pendiente | Tipo | Prioridad | Desde | Resuelto |
|---|---|---|---|---|---|

## Absorbidos, descartados o reemplazados

| ID | Pendiente | Qué pasó |
|---|---|---|

## Detalle

### WEB-001

Los monogramas "AS JR" / "AS SR" son provisionales desde el lanzamiento.

### WEB-002

Del brief: casos de clientes cuando haya permiso. Sin nombres hasta tener la autorización por escrito; el formato podría ser "cadena de tiendas de ropa, 12 sucursales" con el antes y el después en horas.

### WEB-003

Del brief, después del lanzamiento: Google Search Console (enviar `sitemap.xml`) y Perfil de Empresa en Google.

### WEB-004

Hoy el webhook responde con CORS abierto (`*`). Se puede restringir a `https://metriclab.tech` ahora que el sitio está publicado.

### WEB-005

Las pruebas del 26-nov se hicieron con un navegador automático en 1366 px y 390 px. Falta verlo en un teléfono real: que la barra se esconda y vuelva bien al hacer scroll, que la fila de pestañas del dashboard se pueda deslizar y que las animaciones no se sientan pesadas.

### WEB-006

Primer PR del repo (#1, 26-nov): Workers Builds falló al armar la vista previa de la rama en los dos commits. Las publicaciones desde `main` sí funcionan y `wrangler deploy --dry-run` pasa en local, así que es la configuración de vistas previas, no el código. Mientras tanto, la vista previa se hace como página privada en Claude.

