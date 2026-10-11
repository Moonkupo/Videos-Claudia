# Cápsula 2: ¿Cómo funciona y qué límites tiene?, storyboard

Formato: **1080 × 1920 (vertical 9:16)**, ~44 s. El borrador animado es `capsula2_borrador.mp4`.

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

## Escenas

| # | Tiempo | Locución | Visual | En Canva |
|---|---|---|---|---|
| 1 | 0:00–0:03.7 | *(entrada con música)* | Ciudad ilustrada plana + etiqueta amarilla "CÁPSULA 2" + título **¿CÓMO FUNCIONA Y QUÉ LÍMITES TIENE?** palabra por palabra | Igual que el globo terráqueo de la Cápsula 1: ilustración plana y personaje señalando el título |
| ↯ | 0:03.7 | | **Transición bandera** | |
| 2 | 0:03.7–0:08.6 | "Para constituir el DRS, la entidad pública y el tercero interesado firman un contrato…" | Fondo de planos. Ícono banco (Entidad pública · Superficiante) ── documento ── ícono persona (Tercero interesado · Superficiario) | Reutiliza los personajes del apretón de manos de "El contrato" en la mitad inferior. Búsqueda: *firma contrato*, *signing document* |
| 3 | 0:08.6–0:12.6 | "…que debe inscribirse en el folio de matrícula del inmueble…" | Ciudad. "Se inscribe en el" / **FOLIO DE MATRÍCULA** / "del inmueble" + ícono de documento con check | Personaje con carpeta o sello. Búsqueda: *registro*, *notaría*, *documento sello* |
| 4 | 0:12.6–0:19.2 | "…después de los respectivos estudios jurídicos, técnicos y financieros que demuestren que el proyecto es viable." | Tres íconos verdes: balanza (Jurídicos), casco (Técnicos), gráfica (Financieros) + píldora "✓ El proyecto es viable" | Mismo patrón que "Usar · Construir · Explorar". Personaje frente a computador con gráfica (como el de la Cápsula 1) |
| 5 | 0:19.2–0:23.8 | "Este derecho puede durar hasta 80 años…" | **HASTA 80 AÑOS**: el número cuenta de 0 a 80 en amarillo, con una barra verde que se llena | Toma aérea de ciudad. Elemento Canva: *reloj*, *calendario* |
| ↯ | 0:23.8 | | **Transición bandera** | |
| 6 | 0:23.8–0:26.6 | "…y establece reglas claras:" | Bandera ondeando, **REGLAS CLARAS** | Clip de bandera ondeando de la Cápsula 1 |
| 7 | 0:26.6–0:30.4 | "No puede afectar el uso público del bien." | Parque + número **1** en círculo amarillo + ícono árbol | Personas caminando en parque. Búsqueda: *parque Bogotá*, *park people walking* |
| 8 | 0:30.4–0:34.4 | "No puede interrumpir el servicio al que está destinado." | Número **2** + ícono bus | Clip TransMilenio / terminal de la Cápsula 1 |
| 9 | 0:34.4–0:39.0 | "Debe respetar las normas de ordenamiento territorial de cada municipio." | Número **3** + ícono mapa | Toma aérea / plano de ciudad. Personaje con mapa (como el de "El Estado conserva la propiedad") |
| 10 | 0:39.0–0:44.1 | *(música)* | Cierre con logo CISA | El mismo final de la Cápsula 1 |

> Los tiempos son estimados para una lectura de ~2,6 palabras por segundo. Cuando tengas el audio grabado, ajusta la duración de cada escena a la locución.

## Cómo editar y volver a renderizar el borrador

- Textos, colores y tiempos están en `animacion.html` (objeto `T` = inicio/fin de cada escena).
- Vista previa: abre `animacion.html` en el navegador y, en la consola, ejecuta `renderAt(10)` para ver el segundo 10.
- Render: `node render.js salida.mp4 30`, que necesita Playwright y ffmpeg. Después se pega el cierre CISA.
