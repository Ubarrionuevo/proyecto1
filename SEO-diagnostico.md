# Diagnóstico SEO — LaPrincesaCta

Auditoría de las 14 rutas indexables del sitio. Cada punto trae el problema,
dónde está, la evidencia que lo demuestra, el impacto y la prioridad.
Lo que no se detectó no se inventó: cada línea viene de una medición o de
inspeccionar el código.

Fecha: 21 de octubre de 2026.

---

## 1. Lo que se corrigió en esta tanda

| # | Problema | Dónde | Evidencia | Impacto | Prioridad |
|---|---|---|---|---|---|
| 1.1 | Sección "Seguí explorando" con 6 links que ya están en navbar y footer | `src/app/page.tsx` | Bloque `exploreLinks` + `<section aria-label="Seguí explorando">`; duplicaba la navegación | Medio (ruido + repetición) | P1 |
| 1.2 | La home no enlazaba de forma contextual a 4 páginas comerciales; al sacar 1.1 el hueco era mayor | `SolutionSection.tsx`, `ProvinciasSection.tsx` | `grep -r "href=\"/cartas-personalizadas\"" src` → 0 hits fuera del navbar/footer | Alto (enlaces internos contextuales) | P1 |
| 1.3 | H1 del catálogo sin keyword: "Todo lo que armamos, listo para regalar." | `src/app/catalogo/catalogo-client.tsx:51` | Title says "Catálogo de Desayunos y Ramos"; H1 no dice "catálogo" | Medio (relevancia del encabezado principal) | P1 |
| 1.4 | `Hero.tsx` nunca se importaba: 113 líneas de código muerto | `src/components/Hero.tsx` | `grep -r "Hero" src/app` → 0 imports; la home en producción no contenía ni "Regalos que" ni "entregas hechas" | Alto (el masthead y las cifras no existían) | P1 |
| 1.5 | Cifras de confianza ausentes en el home | `Hero.tsx` (sin renderizar) | La home en vivo solo mostraba el rating en Reviews, muy abajo del scroll | Medio-alto (conversión) | P1 |
| 1.6 | `stats` en `products.ts` con "33 opiniones", número viejo y en conflicto con el real (42) | `src/lib/products.ts:169` | `stats` no lo importaba nadie; `siteConfig.googleReviews = 42` | Medio (dato contradictorio) | P1 |
| 1.7 | Analytics nunca se cargaba: faltaba `NEXT_PUBLIC_GA_ID` | `src/components/Analytics.tsx:11` | `if (!GA_ID) return null` → sin script en producción | Alto (no había medición de nada) | P1 |
| 1.8 | Fecha del Día de la Madre incorrecta: "Domingo 18 de octubre de 2026" | `src/app/dia-de-la-madre/page.tsx:63` | En Argentina el Día de la Madre es el **segundo** domingo de octubre (11/10/2026). El 18/10/2026 es el **Día del Padre**. Además la fecha ya pasó | Alto (error factual en una URL indexada) | P1 |
| 1.9 | `og:type: 'article'` en 11 páginas que no son artículos | 11 `page.tsx` | Open Graph: `article` es para piezas con fecha de publicación; estas son páginas comerciales | Bajo | P3 |
| 1.10 | Catálogo sin breadcrumbs visibles (solo el JSON-LD) | `src/app/catalogo/catalogo-client.tsx` | `breadcrumbJsonLd` presente pero `<Breadcrumbs>` ausente, a diferencia de las otras 13 rutas | Bajo | P3 |
| 1.11 | 6 fichas de producto y la landing del Día de la Madre sin FAQ ni `faqJsonLd` | `ProductDetail.tsx`, `dia-de-la-madre/page.tsx` | 5 de 14 rutas ya tenían FAQ; las fichas de producto (las de intención de compra más alta) no | Medio-alto (long tail + objeciones) | P1 |
| 1.12 | Aviso de lint por `<img>` sin optimizar | `src/components/Hero.tsx:92` | `npx eslint src` → 1 warning | Bajo | P3 |

**Resultado:** `npx eslint src` → 0 errores, 0 warnings. `npm run build` → 19/19
páginas. Verificación sobre las 14 rutas del sitemap: 14/14 sin observaciones
(1 H1 por página, title ≤60, description ≤155, canonical, `og:image`,
`twitter:image`, `og:type: website`, JSON-LD parseable, breadcrumbs y FAQ
según el tipo de página).

---

## 2. Hallazgos medidos que NO se corrigieron (la evidencia no los respalda)

Estos se investigaron, se midieron y se descartaron. Quedan documentados para
no volver a perder tiempo con ellos.

### 2.1 Optimización de las fotos de `public/` — no hay ganancia real

Los 6 WebP pesados (`ramo-chocolates` ×2, `ramo-futbolero` ×2, `ramo-oso-2`,
`desayuno-caja-de-madera`) miden 1900 KB en total. Se recomprimieron a
distintas calidades midiendo el **PSNR contra el original** (42 dB = error
added despreciable a simple vista):

| Archivo | Original | Mejor opción | Ganancia |
|---|---|---|---|
| `desayuno-sorpresa-caja-de-madera` | 195 KB | q=80 (PSNR 42.1 dB) | 2 % |
| `ramo-chocolates-catamarca-1` | 356 KB | ninguna llega a 42 dB | 0 % |
| `ramo-chocolates-catamarca-2` | 397 KB | ninguna llega a 42 dB | 0 % |
| `ramo-futbolero-golosinas-catamarca-1` | 238 KB | q=88 (PSNR 43.0 dB) | 0 % |
| `ramo-futbolero-golosinas-catamarca-2` | 359 KB | ninguna llega a 42 dB | 0 % |
| `ramo-oso-peluche-catamarca-2` | 354 KB | q=88 (PSNR 42.2 dB) | 0 % |

**Total: 0 %.** Los originales ya están comprimidos al límite de lo razonable.
Recomprimir más significa perder calidad visible a cambio de nada.

### 2.2 AVIF en el optimizador de Next — no es univoco

Se activó `images.formats: ['image/avif', 'image/webp']` y se midió el peso
real de las 9 fotos más pesadas en los anchos que se piden (640/828/1080/1200):

```
TOTAL 4776 KB avif vs 5034 KB webp  ->  5 % con avif
```

Pero el resultado no es uniforme: en las fotos de ramo con más detalle
(`ramo-chocolates-1`, `ramo-futbolero-2`, `ramo-oso-2`) **AVIF pesa entre 7 % y
10 % MÁS** que WebP en los anchos de mobile (640 px). Como la diferencia no
favorece de forma consistente, se dejó el default de Next (WebP).

### 2.3 El peso real de las imágenes no está en `public/`

`next/image` re-codifica y redimensiona en el servidor, así que el archivo
original casi nunca se sirve. El peso que llega al navegador es la salida del
optimizador: 38 KB (ramo común, 640 px) a 238 KB (ramo de chocolates, 1080 px).
Los `sizes` de todos los `<Image>` están correctos y la primera imagen del home
va con `priority`, así que el preload está donde debe.

---

## 3. Pendiente que depende de terceros

| # | Qué falta | Quién lo resuelve | Por qué bloquea |
|---|---|---|---|
| 3.1 | Textos de las 3 reseñas de Google (nombre, texto, fecha) | El dueño | Los links de Maps cargan por JS y no se pueden extraer; sin texto real no se inventan reseñas |
| 3.2 | Fotos de cartas personalizadas y de pedidos empresariales | El dueño | Son dos servicios sin una sola imagen propia |
| 3.3 | Qué incluye la propuesta empresarial (cantidad mínima, branding, factura) | El dueño | Sin eso la landing es genérica y no se publica nada inventado |
| 3.4 | `NEXT_PUBLIC_GA_ID=G-KESWRNLJ8Y` en las variables de Vercel | El dueño | El código ya lo soporta; sin la variable en Vercel no se registra en producción |
| 3.5 | Click en "Verificar" en Search Console | El dueño | La verificación está lista por partida doble (meta tag + archivo HTML) |
| 3.6 | Confirmar "+100 entregas hechas" | El dueño | Es un dato del dueño, pero no es verificable desde afuera |
| 3.7 | Dominio pelado: 301 vs 308 | Panel de Vercel | `next.config.ts` declara 301, pero Vercel responde 308 en su propio redirect de dominio, que tiene prioridad. Impacto bajo (308 también es permanente y el canonical ya apunta a `www`) |

---

## 4. Archivos modificados en esta tanda

```
src/app/page.tsx                                  home sin "Seguí explorando"
src/app/catalogo/catalogo-client.tsx              H1 con keyword + breadcrumbs
src/app/catalogo/page.tsx                         og:type
src/app/dia-de-la-madre/page.tsx                   fecha corregida + FAQ
src/app/desayunos-sorpresa-catamarca/page.tsx    og:type
src/app/enviar-regalo-a-catamarca/page.tsx        og:type
src/app/ramos-de-golosinas-catamarca/page.tsx     og:type
src/app/desayunos/caja-de-madera/page.tsx         og:type
src/app/desayunos/caja-de-carton/page.tsx         og:type
src/app/ramos/ramo-comun/page.tsx                 og:type
src/app/ramos/ramo-con-oso/page.tsx               og:type
src/app/ramos/ramo-de-chocolates/page.tsx         og:type
src/app/ramos/ramo-futbolero/page.tsx             og:type
src/components/Hero.tsx                           conectado al home, <img> -> Image
src/components/GeoBanner.tsx                      CTA sin duplicar + import
src/components/ProvinciasSection.tsx              enlaces internos contextuales
src/components/SolutionSection.tsx                enlaces internos contextuales
src/components/ProductDetail.tsx                  FAQ por producto
src/lib/faqs.ts                                   FAQs por producto + Día de la Madre
src/lib/products.ts                               stats viejo eliminado
next.config.ts                                    comentario de formatos
.gitignore / .env.example                          GA4 y variables documentadas
TODO-contenido.md                                 pendientes actualizados
```

---

## Tanda noviembre 2026

Fecha: 2 de noviembre de 2026. Objetivo: atraer al que vive en Catamarca y, sobre
todo, al que manda el regalo desde otra provincia u otro país. La entrega sigue
siendo solo en Catamarca.

**Los precios no se publican.** No están en la web ni en el schema: se pasan por
WhatsApp y `showPrices` sigue en `false`. Por eso `Product` no lleva `offers` y no
va a tener rich results de precio.

### Datos de Search Console de partida (3 semanas indexado)

Total: 16 clics, 163 impresiones, posición media 5,4; 85 % de los clics desde
celulares.

| Dato | Lectura | Qué se hizo |
|---|---|---|
| `/dia-de-la-madre`: 8 clics, 58 impresiones | Las fechas especiales funcionan | Landing evergreen `/navidad` con banner en la home |
| `/catalogo`: posición 4,1, 21 impresiones, 0 clics | Buena posición, mal CTR | Title y description nuevos |
| `/desayunos-sorpresa-catamarca`: posición 7,7, 35 impresiones, 0 clics | Mal CTR | Title y description nuevos, H2 con "desayunos en Catamarca" |
| "desayunos catamarca": posición 6,3 | Se busca sin "sorpresa" | H2 y párrafo en la home y en la categoría |
| 12 indexadas y 2 sin indexar (probablemente futbolero y con oso, con 0 impresiones) | Contenido y enlaces flojos | Texto propio, FAQ y enlaces con anchor descriptivo |
| IA generativa: 3 impresiones | Poca presencia | FAQ con respuesta directa y bloque "Datos rápidos" |

### Qué se cambió

- **Schema:** `ItemList` en las dos categorías; `logo` y `hasMap` en `Store`.
- **CTR:** titles y descriptions de home, catálogo, categorías y las 6 fichas. Las
  fichas y categorías usan la foto de su producto como imagen social.
- **Fichas:** secciones "Para quién es" y "Para qué ocasiones", y FAQ ampliada en
  futbolero y con oso.
- **Error corregido:** los ids `ramo-chocolates` y `ramo-oso` no coincidían con las
  claves usadas en `product-pages.ts` y en la categoría de ramos. La tarjeta de
  chocolates y la de oso no se mostraban en la categoría, el relacionado de
  chocolates llevaba a `/catalogo` y esa ficha se ofrecía a sí misma como relacionada.
- **Internacional:** `/enviar-regalo-a-catamarca` reescrita con pago, horario y
  confirmación. Cuatro páginas nuevas por origen (`src/lib/origins.ts` y
  `OriginPage.tsx`), con textos propios.
- **Visibilidad:** línea "¿Estás lejos?" en home, catálogo, categorías y fichas;
  columna "Enviar desde" en el footer; enlaces por origen en `GeoBanner`.
- **Empresas:** sección y title de fin de año en `/regalos-empresariales`.

### Verificación

`npx eslint src` sin errores ni avisos y `npm run build` OK (24 rutas generadas). Sobre el HTML
generado, las 19 rutas del sitemap cumplen: 1 H1, title ≤60, description ≤155 (sin
duplicados), canonical, `og:image`, `twitter:image`, JSON-LD parseable, sin precios
visibles ni en el schema, breadcrumbs y FAQ donde corresponde, y ningún enlace
interno roto. El único texto largo repetido entre páginas es "¿Cuánto sale?", que
va en la home y en `/enviar-regalo-a-catamarca` a propósito.

### Qué medir

- `/navidad`: impresiones y clics hasta el 25 de diciembre, comparados con el
  rendimiento de `/dia-de-la-madre`.
- CTR de `/catalogo` y `/desayunos-sorpresa-catamarca`, que partían de 0 clics.
- Posición de "desayunos catamarca" (hoy 6,3) y "desayunos a domicilio catamarca".
- Si `/ramos/ramo-futbolero` y `/ramos/ramo-con-oso` pasan a indexadas.
- Consultas del tipo "enviar regalo a catamarca desde..." y el filtro por país en
  Rendimiento (Perú, Italia, Suiza).
- En GA4, `whatsapp_click` por página de salida (requiere el pendiente 3.4).

---

## 5. Cómo medir esto

Con GA4 activo (pendiente 3.4) se puede ver el evento `whatsapp_click`, que
registra la página de salida y el texto del botón pulsado. Es el único evento
que importa: en este negocio, la conversión es un chat de WhatsApp.

Lo que hay que mirar en Search Console, una vez indexadas:

- **Rendimiento → Consultas**: si "desayunos sorpresa catamarca" y "enviar
  regalo catamarca" empiezan a aparecer, el trabajo de las páginas nuevas y de
  los enlaces contextuales está impactando.
- **Cobertura**: las 14 URLs del sitemap deberían estar indexadas y válidas.
- **Canonical elegido**: Google debería elegir el canonical de cada página, que
  ya apunta a `https://www.laprincesacta.com.ar/...`.

---

## Revisión contra el skill de SEO programático (noviembre 2026)

Se comparó el sitio con los 14 pilares del skill `seo-programatico-geo-engine`,
pensado para SaaS en React/Vite. Se aplicó solo lo que le sirve a este negocio.

| Pilar | Decisión | Motivo |
|---|---|---|
| 1. Pre-render SSG | Ya cubierto | Next.js genera las páginas estáticas |
| 2. Matriz por ciudad | No aplicar | La entrega es solo en una ciudad: serían páginas puerta |
| 3. Doble sitemap | No aplicar | Con 19 URLs no hay problema de rastreo; sí se toma su criterio de no sumar páginas hasta que se indexe la tanda anterior |
| 4. Comparativas `/vs/` | No aplicar | No hay datos reales de competidores ni precios para comparar |
| 5. Glosario | No aplicar | El comprador no busca definiciones; la "respuesta directa" ya está en FAQ y "Datos rápidos" |
| 6. WhatsApp contextual | **Aplicado** | El botón flotante precarga el tema de cada página; `whatsapp_click` ya registra la página de origen |
| 6. Bucle viral | No aplicar | Depende de un producto usado por terceros |
| 7. Blog | Más adelante | Solo con historias o datos reales del dueño, ver `TODO-contenido.md` |
| 8. Rich snippets | **Aplicado en parte** | `VideoObject` en el ramo de chocolates; sin `offers`. Se revisó que ninguna URL tenga dos `FAQPage` |
| 9. `llms.txt` | **Aplicado sin dos secciones** | `/llms.txt` sale de `siteConfig` y `products.ts`. Sin precios ni órdenes a los asistentes para que recomienden la marca |
| 10. Video vertical | Sin cambios | El video es 9:16 y la tarjeta 3:4: recorta los bordes, pero no tiene texto ni interfaz que se pierda |
| 11. CRO | Ya cubierto salvo precios | Foto de la entrega, pago y horario ya responden las objeciones; los precios siguen sin publicarse |
| 12. Alto ticket | Pendiente | Primero hay que aclarar qué se despacha a empresas |
| 13. Enlaces internos | **Aplicado** | El footer enlaza las 6 fichas con nombre descriptivo y `/dia-de-la-madre` |
| 14. Flujo de GSC | Ya en uso | Se reenvía el sitemap y se pide indexación |

`llms.txt` es de bajo costo, pero no es un estándar: no hay garantía de que los
buscadores o asistentes lo lean. El `VideoObject` tampoco asegura un resultado de
video, porque el video no es el contenido principal de la ficha.
