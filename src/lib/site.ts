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
  /* Horario en hora de Argentina: la diferencia horaria de las páginas por
     origen se calcula desde acá. */
  hoursCopy: 'todos los días de 8 a 23 h',
  openHour: 8,
  closeHour: 23,
  /* Cuando es false, la UI no muestra precios en ningún lado (los datos de
     precio siguen en products.ts). Se activa de nuevo en true cuando el
     dueño quiera publicarlos. */
  showPrices: false,
  /* Bloque de temporada en la home y link destacado en el navbar. Para
     apagarlo cuando termine la fecha, poner enabled en false: la página
     sigue publicada porque es evergreen. */
  seasonalBanner: { enabled: true, label: 'Navidad', href: '/navidad' },
  googleRating: '5.0',
  googleReviews: 42,
  /* Ficha real de Google Maps (verificada). Se usa para el enlace de opiniones
     y para el bloque de reseñas: al tocar, abre la ficha del negocio. */
  googleMapsUrl:
    'https://www.google.com/maps/place/?q=place_id:ChIJ-RyK7pUpJJQRijlTyxNIULk',
  instagramUrl: '',
  facebookUrl: '',
};

export type SiteConfig = typeof siteConfig;

/* Páginas por origen. Vive acá y no en origins.ts porque la usan Footer y
   GeoBanner, que son componentes de cliente: así no cargan todos los textos. */
export const originLinks = [
  { href: '/enviar-regalo-a-catamarca/desde-peru', label: 'Desde Perú' },
  { href: '/enviar-regalo-a-catamarca/desde-italia', label: 'Desde Italia' },
  { href: '/enviar-regalo-a-catamarca/desde-suiza', label: 'Desde Suiza' },
  { href: '/enviar-regalo-a-catamarca/desde-otras-provincias', label: 'Desde otras provincias' },
];

/* Fichas de producto. Vive acá por lo mismo: el Footer enlaza todas con su
   nombre SEO como anchor text y product-pages.ts toma de acá las URL. */
export const productLinks = [
  { id: 'desayuno-caja-madera', href: '/desayunos/caja-de-madera', label: 'Desayuno sorpresa en caja de madera' },
  { id: 'desayuno-caja-carton', href: '/desayunos/caja-de-carton', label: 'Desayuno sorpresa en caja de cartón' },
  { id: 'ramo-comun', href: '/ramos/ramo-comun', label: 'Ramo común de golosinas' },
  { id: 'ramo-futbolero', href: '/ramos/ramo-futbolero', label: 'Ramo futbolero de golosinas' },
  { id: 'ramo-chocolates', href: '/ramos/ramo-de-chocolates', label: 'Ramo de chocolates' },
  { id: 'ramo-oso', href: '/ramos/ramo-con-oso', label: 'Ramo con oso de peluche' },
];
