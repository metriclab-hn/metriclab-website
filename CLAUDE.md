# CLAUDE.md — metriclab.tech

Contexto para Claude al trabajar en el sitio. Leer esto primero.

## Qué es

El sitio público de MetricLab: HTML + CSS + un poco de JavaScript, sin build. Cloudflare Workers publica la carpeta `public/` cada vez que hay un cambio en `main`. Es el único repo público de la org `metriclab-hn`.

## Al empezar una sesión

1. Este `CLAUDE.md`.
2. `docs/pendientes.md`: la sección `## Abiertos`.
3. `docs/bitacora.md`: las últimas 2 o 3 entradas.
4. Solo el archivo que toca (ver *Dónde está cada cosa*). `public/index.html` es largo: buscar la sección por su `id` en vez de leerlo entero.

## Mensaje y público

- **Tagline:** "De Datos a Decisiones". **Mensaje central:** tu información ya existe pero vive en silos; la conectamos en un Centro de Control sin cambiar cómo trabaja tu equipo. Automatizar es el medio, la visibilidad es el producto.
- **Público:** empresas establecidas (equipos, varias áreas o sucursales) que ya registran su operación en Sheets, Excel, formularios, papel o sistemas sueltos. No es para micro emprendimientos.
- **El texto vigente es el de `public/index.html`.** El brief original (`MetricLab_Website_Brief_v2.md`, en el Project de Claude) sirve de referencia, pero algunos textos ya cambiaron.

## Reglas de copy

- Español, **tuteo**, tono directo y humano.
- Sin rayas largas (—) y sin frases que suenen a IA.
- Sin puntos medios (`·`) como separador en el texto: se ven a IA. Usar palabras ("con", "en", una coma) o separar visualmente (una píldora, otra línea). En los `<title>` el separador es `|`.
- **Nunca nombres de clientes.** Los ejemplos y el dashboard de muestra usan datos genéricos ("Sucursal Norte", "Cliente A").
- Montos en `$`. Sin ubicación física (el enfoque es internacional).

## Sistema de diseño

| Color | Uso |
|---|---|
| Navy `#0F2D51` | hero, títulos, barra, footer |
| Azure `#2A678C` | labels sobre fondo claro |
| Bright Blue `#3792C2` | marca. Botones con texto blanco: `#2B7AA8` (hover `#24698F`) por contraste |
| Light Blue `#6FB3E0` | acentos sobre navy |
| Slate `#A1A9B7` | secundario sobre navy, bordes. Sobre claro el texto secundario es `#5A6475` |
| Fog `#EFEFEF` / White `#FDFDFD` | superficies y fondo |

- **Semáforo** (solo en el dashboard de muestra): verde `#3E9B67`, ámbar `#E8A93A`, rojo `#E2735A`.
- **Fuentes:** Montserrat (títulos, 400/600/700) y DM Sans (cuerpo, 400/500). Ninguna otra.
- **Estilo:** plano, bordes de 1px, mucho espacio. Sin gradientes ni sombras pesadas.
- **Movimiento:** sutil (líneas que fluyen, puntos que viajan, nodos que se iluminan). **Todo** se apaga con `prefers-reduced-motion`.
- Mobile-first: revisar siempre en 390 px de ancho además de desktop.

## Convenciones técnicas

- Las secciones de `index.html` usan estilos en línea (vienen del diseño en Claude Design). **Lo nuevo va con clases en `public/assets/styles.css`**, agrupado por sección con un comentario `/* ===== Sección ===== */`.
- JavaScript solo en `public/assets/sitio.js` (sin librerías): barra fija y dashboard interactivo.
- Al cambiar `styles.css` o `sitio.js`, **subir el `?v=` del link** en `index.html` y `contacto/index.html` para que el navegador no use la versión vieja.
- Las animaciones de *El problema* están sincronizadas con el punto que viaja (ciclo de 4.2 s): si se cambia la duración o el número de nodos, hay que recalcular los porcentajes de los keyframes.
- El dashboard de *El resultado* se generó con un script; para cambiar KPIs se edita el HTML directo (buscar `id="panel-<sección>"`).
- Formulario de contacto → n8n: `POST https://n8n.metriclab.tech/webhook/contacto-web`, workflow `MLB · Contacto Web` (`J4EVUy0HnHcQF2zo`). Guarda en la Data Table *Leads Web* y avisa por correo a Álvaro Jr. y Álvaro Sr.
- SEO: un H1 por página, title y description por página, Open Graph, JSON-LD `ProfessionalService`, `sitemap.xml`. No romperlos.

## Dónde está cada cosa

| Necesito… | Ir a |
|---|---|
| Inicio (todas las secciones) | `public/index.html` (`#problema`, `#que-hacemos`, `#resultado`, `#como-trabajamos`, `#nosotros`) |
| Contacto y formulario | `public/contacto/index.html`, `public/assets/contacto.js` |
| Estilos y animaciones | `public/assets/styles.css` |
| Barra fija y dashboard | `public/assets/sitio.js` |
| Headers, redirecciones, 404 | `public/_headers`, `public/_redirects`, `public/404.html` |
| Qué falta | `docs/pendientes.md` |

## Seguridad

El repo es **público**: nada de tokens, correos internos que no estén ya en el sitio, IPs ni datos de clientes.

## Al cerrar una sesión

1. `docs/pendientes.md` según el SOP de `metriclab-hq/docs/sop-repos.md` (IDs `WEB-0xx`, nunca se reutilizan).
2. Una entrada en `docs/bitacora.md`.
3. **Commits:** cambios visibles del sitio van en rama + PR, con vista previa revisada en desktop y mobile antes del merge. Cambios solo de docs van directo a `main`.
