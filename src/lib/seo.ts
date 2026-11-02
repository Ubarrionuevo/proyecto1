import type { Metadata } from 'next';
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

/* Gancho de reputación para descriptions: sale de siteConfig. */
export const ratingHook = `⭐ ${siteConfig.googleRating} en Google`;

/* Metadata completa de una página. Sin `image` usa la imagen social general;
   las fichas y las categorías pasan la foto de su producto. */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: { src: string; alt: string };
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...openGraphBase,
      ...(image ? { images: [{ url: image.src, alt: image.alt }] } : {}),
      title,
      description,
      url: path,
      type: 'website',
      locale: 'es_AR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [{ url: image.src, alt: image.alt }] : [twitterImage],
    },
  };
}
