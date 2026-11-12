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
  /* WhatsApp de quien hizo la web: lo usa el aviso "catálogo igual" de /catalogo.
     No es el número del negocio. */
  catalogPromoWhatsappNumber: '5493834035119',
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
  instagramUrl: 'https://www.instagram.com/laprincesa.cta',
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

/* Provincias más pobladas y localidades del interior de Catamarca. Los textos
   están en origins-argentina.ts; si se agrega una página allá, sumarla acá. */
export const provinceLinks = [
  { href: '/enviar-regalo-a-catamarca/desde-buenos-aires', label: 'Desde Buenos Aires' },
  { href: '/enviar-regalo-a-catamarca/desde-cordoba', label: 'Desde Córdoba' },
  { href: '/enviar-regalo-a-catamarca/desde-santa-fe', label: 'Desde Santa Fe' },
  { href: '/enviar-regalo-a-catamarca/desde-tucuman', label: 'Desde Tucumán' },
  { href: '/enviar-regalo-a-catamarca/desde-mendoza', label: 'Desde Mendoza' },
  { href: '/enviar-regalo-a-catamarca/desde-salta', label: 'Desde Salta' },
];

export const localityLinks = [
  { href: '/enviar-regalo-a-catamarca/desde-belen', label: 'Desde Belén' },
  { href: '/enviar-regalo-a-catamarca/desde-andalgala', label: 'Desde Andalgalá' },
  { href: '/enviar-regalo-a-catamarca/desde-tinogasta', label: 'Desde Tinogasta' },
  { href: '/enviar-regalo-a-catamarca/desde-santa-maria', label: 'Desde Santa María' },
  { href: '/enviar-regalo-a-catamarca/desde-recreo', label: 'Desde Recreo' },
  { href: '/enviar-regalo-a-catamarca/desde-fiambala', label: 'Desde Fiambalá' },
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
  { id: 'ramo-peluche', href: '/ramos/ramo-de-peluche', label: 'Ramo de peluche con conejito' },
  { id: 'corazon-transparente', href: '/cajas/corazon-transparente', label: 'Corazón transparente con bombones' },
  { id: 'caja-ventana-corazon', href: '/cajas/caja-ventana-corazon', label: 'Caja de ventana de corazón con chocolates' },
  { id: 'caja-crema-te-amo', href: '/cajas/caja-crema-te-amo', label: 'Caja crema Te amo' },
];
