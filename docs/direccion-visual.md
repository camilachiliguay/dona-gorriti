# Doña Gorriti — Dirección visual

> Propuesta v1 · 6 de noviembre de 2026 · para aprobar antes de escribir código.

## 1. Concepto: “La comanda y el cuaderno”

Doña Gorriti no se maneja con planillas: se maneja con **comandas** prendidas en la
cocina y un **cuaderno** donde se anota la plata del día. El sistema traduce esos dos
objetos a software.

- La **comanda** ordena el trabajo: tickets de papel, sellos de estado, hora, cliente,
  ítems y total.
- El **cuaderno** ordena el negocio: renglones, números tabulares, secciones
  numeradas, totales alineados a la derecha.

No es una estética “food startup” genérica. Es la herramienta de una cocina de barrio
que labura en serio: papel manteca, tinta verde oscura, sello de goma y rojo tomate
solo cuando hay que mirar.

**Nombre y firma:** Doña Gorriti · _Cocina de barrio_.

---

## 2. Paleta

| Token        | Hex       | Uso                                     |
| ------------ | --------- | --------------------------------------- |
| `--ink`      | `#16211A` | Texto principal, chrome, bordes fuertes |
| `--chrome`   | `#15231B` | Sidebar, barra de navegación            |
| `--chrome-2` | `#1D2E24` | Hover sobre sidebar                     |
| `--paper`    | `#F2EEE3` | Fondo de trabajo (papel manteca)        |
| `--paper-2`  | `#E7E1D2` | Paneles y filas alternadas              |
| `--paper-3`  | `#FBF8EF` | Tickets y tarjetas de comanda           |
| `--tomate`   | `#C93A24` | Acción primaria, urgencia, hoy          |
| `--masa`     | `#E6B34C` | Pendiente, foco, destacados             |
| `--oliva`    | `#5E7347` | Series de gráficos, acentos secundarios |
| `--verde`    | `#2E6B4C` | Listo, positivo, caja abierta           |
| `--azul`     | `#3C5A78` | Confirmado, envío                       |
| `--violeta`  | `#5B4A80` | En camino                               |
| `--ladrillo` | `#9C4518` | En preparación (texto)                  |
| `--ceniza`   | `#6D7168` | Cancelado, inactivo                     |

Neutros cálidos de papel + verdes de tinta. El rojo no decora: señala acción o
problema. Los estados nunca se comunican solo por color.

### Estados (fondo / texto)

| Estado         | Fondo     | Texto     |
| -------------- | --------- | --------- |
| Pendiente      | `#F3E1B8` | `#6A4A0C` |
| Confirmado     | `#DEE7F0` | `#2C4A66` |
| En preparación | `#F3DFC9` | `#8F3F14` |
| Listo          | `#DDE9E1` | `#23563C` |
| En camino      | `#E5E0EE` | `#4A3A6B` |
| Entregado      | `#16211A` | `#F2EEE3` |
| Cancelado      | `#E6E4DD` | `#6D7168` |

---

## 3. Tipografía

| Rol               | Fuente                    | Detalle                                                                                                    |
| ----------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Display / títulos | **Archivo** 800–900       | Grotesca de Omnibus-Type (Buenos Aires), tracking −0,03 em, mayúsculas solo en números de pedido y sellos. |
| Interfaz          | **Archivo** 400–700       | 13–15 px, altura de línea 1,45.                                                                            |
| Números y dinero  | **IBM Plex Mono** 400–600 | `font-variant-numeric: tabular-nums`. Totales, precios, cantidades, horas, códigos.                        |

Por qué: Archivo es de una fundidora argentina y tiene la densidad de un cartel de
bodegón sin caer en la tipografía “artesanal” de moda. El mono convierte cada tabla
en un cuaderno legible.

Escala: 11 / 12 / 13 / 15 / 18 / 22 / 28 / 36 / 52 px.

---

## 4. Los cuatro artefactos visuales

### 4.1 El repulgue

Línea de trenza (diagonales repetidas) que separa secciones, bordea los tickets y
aparece en estados vacíos. Es el motivo de marca, no un adorno: marca el ritmo del
contenido. Se implementa como SVG inline o `repeating-linear-gradient` de 6 px.

### 4.2 El sello

Logo circular con “DOÑA GORRITI” arriba, “COCINA DE BARRIO” abajo y las iniciales o
una empanada en el centro. Los estados se muestran como **sellos de goma**: borde
doble, mayúsculas mono de 9–10 px, `letter-spacing: .08em`, rotación de −1° **solo en
tickets** (nunca en tablas).

### 4.3 La comanda

Ticket de papel `--paper-3`, borde superior de repulgue y borde inferior perforado.
Contiene número, hora, cliente, ítems resumidos, total y sello. En el dashboard viven
en un riel vertical a la derecha; en el celular, como filas con sello.

### 4.4 El cuaderno

Listas con renglones finos, alternancia de fondo muy sutil, números alineados a la
derecha y secciones numeradas `01…14` en la navegación. Reemplaza la grilla de
tarjetas idénticas.

---

## 5. Layout

### Escritorio

- Sidebar de **248 px**, fondo `--chrome`, logo-sello arriba, navegación numerada,
  estado de caja y usuario abajo.
- Topbar de **64 px** con buscador global (`⌘K`), fecha y botón “Nuevo pedido”.
- Contenido en grilla de 12 columnas, gutter 18–24 px, ancho máximo 1440 px.
- Paneles con borde de 1 px y radio 6 px; **sin sombras flotantes** (el papel no
  levita). Los tickets sí tienen una sombra offset de 2 px, como papel apoyado.

### Celular

- Barra superior con sello mini + buscador.
- Navegación inferior de 5 destinos: **Hoy · Pedidos · [+ Nuevo] · Stock · Más**.
- Botón “+” central elevado, 56 px, tomate, siempre alcanzable con el pulgar.
- Área táctil mínima 44 px (48 px para acciones primarias).
- Tablas → filas apiladas; nunca scroll horizontal para operar.

---

## 6. Componentes y reglas

- **Botón primario:** tomate, texto papel, radio 4 px, 44 px de alto (48 en móvil).
  Sin píldoras, sin degradados.
- **Secundario:** borde 1 px ink, fondo transparente. **Ghost:** solo texto subrayado
  en hover.
- **Inputs:** fondo `--paper-3`, borde 1 px `rgba(22,33,26,.22)`, foco 2 px `--masa`
  con offset 2 px.
- **Tablas:** encabezado pegajoso, reglas de 1 px, hover `--paper-2`, dinero y
  cantidades a la derecha en mono. Sin zebra completo: solo filas agrupadas.
- **Paneles:** título + acción a la derecha; contenido en listas.
- **Sellos de estado:** color + texto. El punto de color acompaña, no reemplaza.
- **Gráficos:** barras planas, radio 2 px arriba, sin grilla salvo línea base; el día
  de hoy en tomate, el resto en oliva. Etiquetas mono de 10 px. Siempre con un
  resumen textual accesible.
- **Comanda imprimible:** 80 mm, solo lo que necesita cocina (número, hora, cliente,
  ítems, observaciones), sin precios si el negocio lo prefiere.

---

## 7. Pantallas clave

### Hoy (dashboard)

1. **Pizarra del día:** total vendido gigante en mono, comparación vs. ayer y tres
   datos en renglones (pedidos, ticket promedio, en caja). No son 8 tarjetas iguales.
2. **Riel de comandas activas:** tickets con sello, a la derecha.
3. **Últimos 7 días:** barras, hoy destacado.
4. **Cómo pagaron hoy:** barra apilada horizontal + leyenda con montos.
5. **Reponer:** insumos críticos en lista, con cantidad actual vs. mínima y acción
   “Pedir”.
6. **Lo que más dejó:** top 3 productos con unidades, facturación y margen.

Se entiende el estado del negocio en menos de 10 segundos.

### Nuevo pedido

- Dos columnas: menú a la izquierda, **comanda/carrito** a la derecha.
- Buscador con foco automático y atajos (`F2` buscar, `Enter` confirmar).
- Productos como **lista de menú impreso** con puntos guía entre nombre y precio,
  no tarjetas.
- Carrito: cliente, cantidades con stepper, descuento, retiro/envío, medio de pago,
  observaciones y total. Un solo botón grande: “Confirmar venta · $23.600”.
- Microcopy que explica el impacto: “Descuenta ingredientes según receta”.

### Pedidos

- Bandeja con filtros por estado y fecha, filas con sello, cliente, hora, total y
  próxima acción. Vista tablero (kanban) opcional en escritorio.

### Caja

- Apertura y cierre como una hoja de cuaderno: esperado por medio, declarado,
  diferencia en grande (verde si es 0, tomate si no). Motivo obligatorio si difiere.

### Stock

- Lista con severidad, filtros crítico/bajo/normal y cajón lateral para movimientos.
- Cada movimiento muestra fecha, hora, usuario, cantidad y motivo.

### Clientes

- Lista + ficha con historial de pedidos, productos comprados, total gastado y
  frecuencia. Sin gráficos decorativos.

### Menú digital (fase 6)

- Misma identidad: papel, repulgue, sellos y precios en mono. Carrito lateral en
  escritorio y hoja inferior en celular.

---

## 8. Movimiento

- Transiciones de 120–160 ms, `ease-out`. Nada rebota.
- Cambios de estado: el sello aparece con un fade de 120 ms.
- `prefers-reduced-motion`: sin animaciones.
- Sin parallax, sin glassmorphism, sin gradientes de texto.

---

## 9. Accesibilidad

- Contraste AA: texto ink sobre papel ~14:1; tomate sobre papel solo para texto grande
  o relleno; blanco sobre tomate ~5:1.
- Foco visible siempre (2 px masa, offset 2 px), navegación completa por teclado.
- Estados con etiqueta textual, no solo color.
- Formularios con `label` real, errores junto al campo y resumen al confirmar.
- Tablas con `th`, cifras alineadas y totales anunciados.
- Zona táctil mínima 44×44 px.

---

## 10. Lo que evitamos (checklist anti-genérico)

- ❌ Crema cálido + serif de alto contraste + terracota como “identidad artesanal”.
- ❌ Kicker/eyebrow en mayúsculas arriba de cada título.
- ❌ Grilla de tarjetas idénticas para KPIs.
- ❌ Gradientes de texto, glass, blur decorativo, sombras difusas grandes.
- ❌ Emojis como iconografía de navegación.
- ❌ Fotos de stock de empanadas sonrientes.
- ❌ Bordes redondeados tipo píldora en todo.
- ❌ Modo oscuro a medias: si se agrega, es un tema completo, no un filtro.

Cada pantalla debe poder reconocerse como Doña Gorriti aunque se tape el logo:
repulgue, sellos, cuaderno, tinta verde y mono tabular.

---

## 11. Implementación

- Tokens en Tailwind 4 con `@theme` y variables CSS (`--color-ink`, `--color-paper`…).
- Fuentes con `next/font/google`: `Archivo` (variable) y `IBM Plex Mono`.
- Logo y repulgue como componentes SVG propios (`<BrandMark />`, `<Braid />`).
- Componentes base propios en `components/ui`; Radix solo para comportamiento.
- Estilos de impresión para la comanda de 80 mm.
- Una sola fuente de verdad para estados: `lib/order-status.ts` (label, color, orden).

La propuesta visual navegable está en la vista previa interactiva que acompaña este
documento (escritorio Hoy, escritorio Nuevo pedido y celular), con datos **DEMO**.
