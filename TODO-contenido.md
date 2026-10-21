# TODO-contenido — Preguntas para el dueño de LaPrincesaCta

Nada de lo de abajo está publicado en la web. Son datos que faltan y que
**no se inventan**: cuando el dueño responda, se agregan.

## URLs y redes
- [ ] URL de la ficha de Google Maps (para el botón "Ver nuestras opiniones en
      Google", el mapa embebido y el `sameAs` del JSON-LD).
- [ ] URL de Instagram (si existe).
- [ ] URL de Facebook (si existe).

## Reseñas
- [ ] 5 o 6 reseñas reales copiadas de Google, con nombre de quien la escribió
      y confirmación de que se pueden publicar en la web.
- [x] Nota y cantidad actualizadas a 5.0 y 42 opiniones (`siteConfig`).
- [x] Enlace a la ficha real de Google Maps cargado en `googleMapsUrl`: el bloque
      de reputación (navbar, hero, footer y sección de opiniones) ahora es
      clickeable y abre la ficha.

## Día de la Madre 2026 (domingo 18 de octubre)
- [ ] ¿Hay fecha límite para tomar pedidos? (si no hay, no se publica ninguna).

## Operativa
- [ ] ¿La entrega es solo en San Fernando del Valle o también en otras
      localidades? ¿Cuáles, confirmadas?
- [ ] ¿Anticipación mínima para pedir? (hoy no figura en el sitio).
- [ ] ¿Medios de pago además de transferencia?
- [ ] Dirección exacta del local/taller (solo si se quiere publicar; hoy no figura).

## Productos (lo que falte por producto va acá, no se publica sin confirmar)
- [ ] Contenido detallado, medidas, sabores y opciones de cada desayuno y ramo.
- [ ] Precios confirmados (hoy NO se muestran en la web): Caja de Madera $39.000,
      Caja de Cartón $36.000, Ramo Común $21.000, Ramo con Oso $26.000,
      Ramo de Chocolates $24.000, Ramo Futbolero $28.000. Siguen cargados en
      `products.ts` pero ocultos: para volver a mostrarlos, poner
      `showPrices: true` en `src/lib/site.ts`.

## Cartas personalizadas (servicio a todo el país)
- [ ] Formato y materiales de la carta (papel, sobre, tamaño).
- [ ] ¿Se escribe a mano, se imprime o se diseña? (hoy la web no lo especifica).
- [ ] Medio de envío y plazo estimado por zona (hoy no se publica ningún plazo).
- [ ] Precio y si se puede combinar con un desayuno o ramo.
- [ ] Fotos reales de una carta terminada.

## Regalos empresariales (Catamarca + envíos al país)
- [ ] Qué incluye la propuesta (¿solo desayunos y ramos o más opciones?).
- [ ] Cantidad mínima, si existe.
- [ ] Personalización con logo o marca de la empresa (si está disponible).
- [ ] ¿Se emite factura? Datos fiscales necesarios.
- [ ] Plazos y logística para pedidos al interior del país.
- [ ] Fotos reales de pedidos empresariales.

## Medición
- [ ] ID de GA4 (para `NEXT_PUBLIC_GA_ID`).
- [x] Verificación de Search Console: hecha por partida doble (etiqueta meta en
      `src/app/layout.tsx` con el token público, y archivo
      `public/google4f54e2f7edf963e8.html`). Ninguno de los dos se borra.

## Hosting / dominio (pasos manuales)
- [ ] Verificar que `laprincesacta.com.ar` redirija con 301 a
      `https://www.laprincesacta.com.ar` (hay redirect en `next.config.ts`;
      confirmar que el hosting lo respeta).
- [ ] Definir `https://www.laprincesacta.com.ar` como dominio canónico en el
      hosting y en Search Console.
- [ ] Enviar `sitemap.xml` en Search Console y solicitar indexación de
      `/dia-de-la-madre`, `/cartas-personalizadas` y `/regalos-empresariales`.
