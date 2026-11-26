# Bitácora

Lo más reciente arriba.

## 2026-11-26
- **Barra fija** en Inicio y Contacto: se queda arriba al hacer scroll y se compacta. En mobile se esconde al bajar y vuelve al subir; el botón dice "Agendar" en pantallas chicas.
- **El problema:** los nodos se iluminan cuando pasa el punto. *Decisión* crece y suelta dos ondas. En *Solo automatizar* los nodos se encienden apagados, en *Más archivos sueltos* los papeles se separan y salen copias que se alejan, y *Sin visibilidad* aparece después de que el dato se pierde.
- **El resultado:** el dashboard de muestra ahora es interactivo. Pestañas por sección (Finanzas, Ventas, Operación, Logística, Personal) con sus KPIs, gráfica y tabla. *Resumen general* con "Foco del día" que rota, una tarjeta por área con semáforo (llevan a su pestaña) y "Salud de la empresa". Indicación "Explora el panel" y un recorrido corto por las pestañas cuando el panel aparece en pantalla. En mobile las secciones pasan a una fila de pestañas arriba.
- Ajustes tras la revisión: al cambiar de sección la altura del panel se anima en vez de saltar (en mobile hubo que quitar `flex: 1` al panel, que anulaba la altura). El foco del día rota solo cada 4 s mientras el resumen está a la vista, también después de volver de otra sección; tocar un punto salta a esa alerta.
- Fuera los puntos medios (`·`) del texto: "Automatizar y conectar con MetricLab", títulos de gráficas con "en los últimos…", "04" con píldora *El objetivo*, "AI for Digital Business, INCAE" y `|` en los títulos de página. Regla agregada al `CLAUDE.md`.
- Estructura estándar del repo: `CLAUDE.md`, `docs/pendientes.md` (WEB-001 a WEB-005) y esta bitácora. README corregido (`MLB · Contacto Web`).
