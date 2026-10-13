import { siteConfig } from './site';

/* Piezas de metadatos sociales compartidas por todas las páginas.
   Next fusiona los metadatos de forma superficial: cuando una página define su
   propio `openGraph`, reemplaza TODO el objeto `openGraph` del layout (los
   `images` y `siteName` incluidos). Por eso cada página que declara `openGraph`
   vuelve a incluir estas piezas; si no, los previews en WhatsApp, Facebook y X
   salen sin imagen. Documentado en generate-metadata (sección "Merging"). */

/* Imagen social 1200x630 (misma que usa la home). */
export const openGraphImage = {
  url: '/og-laprincesacta.jpg',
  width: 1200,
  height: 630,
  alt: 'Desayuno sorpresa a domicilio de LaPrincesaCta en Catamarca',
};

/* Se mezcla al inicio del `openGraph` de cada página. */
export const openGraphBase = {
  siteName: siteConfig.name,
  images: [openGraphImage],
};

export const twitterImage = '/og-laprincesacta.jpg';
