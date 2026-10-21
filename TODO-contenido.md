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

## Día de la Madre
- [x] La fecha que figuraba ("domingo 18 de octubre de 2026") era incorrecta: en
      Argentina el Día de la Madre es el **segundo** domingo de octubre (11/10/2026);
      el 18 de octubre es el Día del Padre. La fecha se saco del sitio y la pagina
      quedo sin fecha fija, para que sirva todos los años.
- [ ] Si se quiere una landing especifica por temporada, definir la fecha del año
      que viene antes de publicarla (Dia de la Madre 2027: domingo 10 de octubre).

## Cifras publicadas (revisar que sigan siendo ciertas)
- [ ] "+100 entregas hechas" (banda del hero en el inicio). Viene del dato del
      dueño, pero no es verificable desde afuera: confirmarlo o cambiarlo.
- [ ] La nota y la cantidad de opiniones deben seguir coincidencia con la ficha
      de Google: hoy son 5.0 y 42, y salen de `siteConfig` (un solo lugar).

## Hero (inicio)
- [x] `Hero.tsx` estaba escrito pero nunca se importaba: no se renderizaba en
      ninguna pagina. Ya se conecto al inicio (masthead, cifras, banda de fotos).
      El H1 unico de la pagina quedo en el GeoBanner, que lleva la keyword
      "Desayunos sorpresa a domicilio en Catamarca".

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
- [x] ID de GA4: `G-KESWRNLJ8Y`. Ya esta cableado en `Analytics.tsx` (se activa
      solo si existe `NEXT_PUBLIC_GA_ID`) y configurado en `.env.local`.
- [ ] **Cargar `NEXT_PUBLIC_GA_ID=G-KESWRNLJ8Y` en las variables de entorno de
      Vercel** (Project → Settings → Environment Variables, para Production y
      Preview). Sin eso, en produccion no se registra nada.
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
