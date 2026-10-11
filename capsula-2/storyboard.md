# Cápsula 2: ¿Cómo funciona y qué límites tiene?, storyboard

Formato: **1080 × 1920 (vertical 9:16)**, ~44 s. El borrador animado `capsula2_borrador.mp4` sirve como referencia de tiempos y animación de textos e íconos; sus fondos son provisionales.

## Sistema visual (sacado de la Cápsula 1)

| Elemento | Valor |
|---|---|
| Cabezote | Logos Hacienda │ CISA en blanco, centrados arriba (y≈90 px) en todas las escenas |
| Franja inferior | Bandera de Colombia de 44 px de alto: amarillo `#FEBA00` (0–470 px), azul `#003089` (470–828), rojo `#D80023` (828–1080) |
| Íconos | Círculo verde `#288038` con ícono de línea blanca; etiqueta debajo en Poppins SemiBold |
| Títulos | Bebas Neue, mayúsculas, blanco (dato destacado en amarillo `#FEBA00`) |
| Texto | Poppins SemiBold blanco con sombra suave |
| Fondo | Video de stock con capa negra al ~55 % de opacidad |
| Transición fuerte | Barrido de franjas diagonales amarillo/azul/rojo (como la del inicio de la Cápsula 1) |
| Cierre | El mismo final con el logo CISA de la Cápsula 1 |

## Escenas (con material nuevo de Canva, distinto al de la Cápsula 1)

Se mantiene el sistema visual de la Cápsula 1 (cabezote, franja, íconos verdes, tipografías, transición bandera y cierre CISA), pero **todos los videos, fotos y personajes son nuevos**. En la columna "Buscar en Canva" están los términos para Elementos y Videos; en Personajes, usa el mismo estilo de ilustración plana de la Cápsula 1 (busca *"flat people business"* y filtra por el mismo artista o colección para que combinen).

| # | Tiempo | Locución | En pantalla | Buscar en Canva (material nuevo) |
|---|---|---|---|---|
| 1 | 0:00–0:03.7 | *(música)* | Etiqueta "CÁPSULA 2" + **¿CÓMO FUNCIONA Y QUÉ LÍMITES TIENE?** | Fondo plano de color (azul o teal) + ilustración *"engranajes"*, *"gears mechanism flat"* y un personaje señalando, distinto al del globo |
| ↯ | 0:03.7 | | Transición bandera | La misma de la Cápsula 1 (es parte de la identidad) |
| 2 | 0:03.7–0:08.6 | "Para constituir el DRS, la entidad pública y el tercero interesado firman un contrato…" | Íconos: banco ── documento ── persona | Video: *"business meeting handshake office"*, *"firma de documento bolígrafo"*. Personajes: dos personas en una mesa firmando (*"people signing contract flat"*) |
| 3 | 0:08.6–0:12.6 | "…que debe inscribirse en el folio de matrícula del inmueble…" | **FOLIO DE MATRÍCULA** + documento con check | Video: *"archivo carpetas oficina"*, *"stamp document"*. Elemento: *"sello aprobado"*, *"folder flat illustration"*. Personaje con carpeta |
| 4 | 0:12.6–0:19.2 | "…estudios jurídicos, técnicos y financieros que demuestren que el proyecto es viable." | Balanza · casco · gráfica + "✓ El proyecto es viable" | Video: *"architect reviewing blueprints"*, *"engineer tablet construction site"*. Elementos: *"scale of justice icon"*, *"hard hat icon"*, *"growth chart icon"*. Personaje con lupa revisando documentos |
| 5 | 0:19.2–0:23.8 | "Este derecho puede durar hasta 80 años…" | **HASTA 80 AÑOS** (contador) | Video: *"time lapse city day night"*, *"Medellín aerial"* o *"Cali aerial"* (diferente a Bogotá de la Cápsula 1). Elemento: *"hourglass flat"*, *"calendar flat"* |
| ↯ | 0:23.8 | | Transición bandera | |
| 6 | 0:23.8–0:26.6 | "…y establece reglas claras:" | **REGLAS CLARAS** | Video: *"Colombia flag waving"* (otra toma) o fondo plano amarillo. Personaje con lista de verificación (*"checklist character flat"*) |
| 7 | 0:26.6–0:30.4 | "No puede afectar el uso público del bien." | **1** + ícono árbol | Video: *"families park playground"*, *"plaza people walking Latin America"* |
| 8 | 0:30.4–0:34.4 | "No puede interrumpir el servicio al que está destinado." | **2** + ícono bus | Video: *"bus station passengers"*, *"metro train station"*, *"cable car Medellín"* (no TransMilenio, que ya salió) |
| 9 | 0:34.4–0:39.0 | "Debe respetar las normas de ordenamiento territorial de cada municipio." | **3** + ícono mapa | Video: *"urban planning map"*, *"city plan zoning"*, *"drone town Colombia"*. Personaje con plano o maqueta |
| 10 | 0:39.0–0:44.1 | *(música)* | Cierre CISA | El mismo de la Cápsula 1 |

> Los tiempos son estimados para una lectura de ~2,6 palabras por segundo. Ajústalos cuando tengas el audio.

**Truco para no rehacer el estilo:** en Canva, *Archivo → Hacer una copia* del video de la Cápsula 1. Así conservas el cabezote, la franja, las transiciones y el cierre, y solo cambias fondos, personajes y textos escena por escena siguiendo esta tabla.

## Cómo editar y volver a renderizar el borrador

- Textos, colores y tiempos están en `animacion.html` (objeto `T` = inicio/fin de cada escena).
- Vista previa: abre `animacion.html` en el navegador y, en la consola, ejecuta `renderAt(10)` para ver el segundo 10.
- Render: `node render.js salida.mp4 30`, que necesita Playwright y ffmpeg. Después se pega el cierre CISA.
