/* Configuración central del sitio: una sola fuente de verdad para los datos
   del negocio. Se usa en metadatos, JSON-LD, UI y enlaces de WhatsApp.
   Las URL de Maps/Instagram/Facebook vienen vacías: los elementos de UI que
   las usan solo se renderizan si hay valor. */

export const siteConfig = {
  name: 'LaPrincesaCta',
  url: 'https://www.laprincesacta.com.ar',
  phoneDisplay: '+54 9 3834 90-3387',
  whatsappNumber: '5493834903387',
  phoneHref: 'https://wa.me/5493834903387',
  city: 'San Fernando del Valle de Catamarca',
  region: 'Catamarca',
  country: 'AR',
  hours: 'Lunes a domingo, 8 a 23 h',
  googleRating: '5.0',
  googleReviews: 33,
  googleMapsUrl: '',
  instagramUrl: '',
  facebookUrl: '',
};

export type SiteConfig = typeof siteConfig;
