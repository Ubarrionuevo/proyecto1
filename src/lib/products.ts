import { siteConfig } from './site';

const WHATSAPP_NUMBER = siteConfig.whatsappNumber;

export const getWhatsAppUrl = (producto: string = 'regalo a domicilio') => {
  const message = `¡Hola! Vengo de la web y quiero consultar por ${producto} 🌸`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/* Contacto y prueba social: salen de siteConfig para no tener dos fuentes. */
export const contact = {
  brand: siteConfig.name,
  phoneDisplay: siteConfig.phoneDisplay,
  phoneHref: siteConfig.phoneHref,
  city: siteConfig.city,
  hours: siteConfig.hours,
  rating: siteConfig.googleRating,
  reviews: siteConfig.googleReviews,
};

/* ── Cobertura: de dónde nos compran ────────────────────────────
   IMPORTANTE: esta lista dice de dónde NOS ESCRIBEN los clientes.
   Los regalos siempre se entregan en San Fernando del Valle.
   Editar acá para sumar o sacar destinos. */

export const provinceOrigen = [
  'Córdoba',
  'Santiago del Estero',
  'Tucumán',
  'Mendoza',
  'Buenos Aires',
  'Santa Cruz',
  'Salta',
  'Santa Fe',
  'Entre Ríos',
  'Corrientes',
  'Chaco',
  'Formosa',
  'Jujuy',
  'La Rioja',
  'San Juan',
  'San Luis',
  'La Pampa',
  'Neuquén',
  'Río Negro',
  'Chubut',
  'Tierra del Fuego',
];

export const paisesOrigen = ['Italia', 'Bolivia'];

/* Destinos destacados del hero: van con banderita los paises; las provincias
   van como chip con nombre porque sus banderas no son reconocibles. */
export const destinosDestacados: { name: string; flag?: 'it' | 'bo' }[] = [
  { name: 'Mendoza' },
  { name: 'San Juan' },
  { name: 'San Luis' },
  { name: 'Santiago del Estero' },
  { name: 'Neuquén' },
  { name: 'Salta' },
  { name: 'Córdoba' },
  { name: 'Buenos Aires' },
  { name: 'Italia', flag: 'it' },
  { name: 'Bolivia', flag: 'bo' },
];

export const cobertura = {
  provinces: provinceOrigen,
  countries: paisesOrigen,
  total: provinceOrigen.length + paisesOrigen.length,
};

export type ProductImage = { src: string; alt: string };

export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  detail: string;
  images: ProductImage[];
  video?: string;
  tag?: string;
};

/* ── Desayunos a domicilio ───────────────────────────────────── */

export const desayunos: Product[] = [
  {
    id: 'desayuno-caja-madera',
    name: 'Caja de Madera',
    price: '$39.000',
    description: 'La que más pedimos. Una caja de madera con todo ordenado y bien envuelta.',
    detail:
      'Café o té bien caliente, delicias artesanales, una taza y una nota escrita a mano. La madera se queda: muchas familias la vuelven a usar para guardar cosas.',
    images: [
      {
        src: '/desayuno-sorpresa-caja-de-madera-catamarca.webp',
        alt: 'Desayuno sorpresa en caja de madera entregado a domicilio en Catamarca',
      },
      {
        src: '/foto-cliente-caja-madera-catamarca-1.webp',
        alt: 'Desayuno en caja de madera recibido por una clienta en Catamarca',
      },
      {
        src: '/foto-cliente-caja-madera-catamarca-2.webp',
        alt: 'Caja de madera con desayuno completo para regalar',
      },
    ],
    tag: 'La más pedida',
  },
  {
    id: 'desayuno-caja-carton',
    name: 'Caja de Cartón',
    price: '$36.000',
    description: 'La misma sorpresa, con presentación de cartón premium.',
    detail:
      'Café, delicias, taza personalizada y la nota a mano. Sale un poco menos que la de madera y se ve igual de lindo en la puerta.',
    images: [
      {
        src: '/desayuno-sorpresa-caja-de-carton-catamarca.webp',
        alt: 'Desayuno sorpresa en caja de cartón premium entregado en Catamarca',
      },
      {
        src: '/foto-cliente-caja-carton-catamarca-1.webp',
        alt: 'Desayuno en caja de cartón entregado a domicilio',
      },
      {
        src: '/foto-cliente-caja-carton-catamarca-2.webp',
        alt: 'Caja de cartón con desayuno sorpresa entregada en puerta',
      },
    ],
  },
];

/* ── Ramos de golosinas ──────────────────────────────────────── */

export const ramos: Product[] = [
  {
    id: 'ramo-comun',
    name: 'Ramo Común',
    price: '$21.000',
    description: 'El ramo de siempre, bien armado y con la combinación que más gusta.',
    detail:
      'Golosinas de todo tipo armadas en forma de ramo y envueltas para regalar. Es el que más enviamos a las familias.',
    images: [
      {
        src: '/ramo-comun-golosinas-catamarca-1.webp',
        alt: 'Ramo común de golosinas armado y envuelto para regalar',
      },
      {
        src: '/ramo-comun-golosinas-catamarca-2.webp',
        alt: 'Detalle del armado del ramo común de golosinas',
      },
      {
        src: '/ramo-comun-golosinas-catamarca-3.webp',
        alt: 'Ramo común de golosinas con moño, listo para entregar',
      },
    ],
    tag: 'Más vendido',
  },
  {
    id: 'ramo-futbolero',
    name: 'Ramo Futbolero',
    price: '$28.000',
    description: 'Para los que no se pierden un partido. Camiseta, escudos y golosinas.',
    detail:
      'Armado con los colores que pida tu club y la camiseta adentro. Se arma por pedido: decinos tu equipo y lo dejamos a tu manera.',
    images: [
      {
        src: '/ramo-futbolero-golosinas-catamarca-1.webp',
        alt: 'Ramo futbolero de golosinas con camiseta y escudos del club',
      },
      {
        src: '/ramo-futbolero-golosinas-catamarca-2.webp',
        alt: 'Detalle de golosinas y escudos del ramo futbolero',
      },
    ],
  },
  {
    id: 'ramo-chocolates',
    name: 'Ramo de Chocolates',
    price: '$24.000',
    description: 'Un gesto elegante con chocolates que enamoran desde el primer vistazo.',
    detail:
      'Todo chocolate, con envuelto fino y un moño que no se deshace en el camino. Se ve premium incluso sin decir el precio.',
    images: [
      {
        src: '/ramo-chocolates-catamarca-1.webp',
        alt: 'Ramo de chocolates con envuelto fino y moño',
      },
      {
        src: '/ramo-chocolates-catamarca-2.webp',
        alt: 'Detalle del moño del ramo de chocolates',
      },
    ],
    video: '/video-ramo-chocolates-catamarca.mp4',
  },
  {
    id: 'ramo-oso',
    name: 'Ramo con Oso',
    price: '$26.000',
    description: 'Una combinación tierna: golosinas y un oso de peluche adentro.',
    detail:
      'El ramo con peluche es el que más se regala para novios y para chicas. El oso va envuelto para que llegue entero.',
    images: [
      {
        src: '/ramo-oso-peluche-catamarca-1.webp',
        alt: 'Ramo con oso de peluche entre golosinas',
      },
      {
        src: '/ramo-oso-peluche-catamarca-2.webp',
        alt: 'Detalle del peluche envuelto del ramo con oso',
      },
    ],
  },
];

/* ── Números para mostrar ────────────────────────────────────── */

export const stats = [
  { value: '+100', label: 'entregas hechas' },
  { value: '5.0', label: 'en Google Maps' },
  { value: '33', label: 'opiniones' },
];

/* ── Fotos reales de clientes ────────────────────────────────── */

export const clientPhotos = [
  {
    image: '/foto-cliente-caja-madera-catamarca-1.webp',
    tag: 'Caja de madera',
    alt: 'Desayuno en caja de madera recibido por una clienta en Catamarca',
  },
  {
    image: '/foto-cliente-caja-carton-catamarca-1.webp',
    tag: 'Caja de cartón',
    alt: 'Desayuno en caja de cartón entregado a domicilio',
  },
  {
    image: '/foto-cliente-ramo-golosinas-catamarca-1.webp',
    tag: 'Ramo de golosinas',
    alt: 'Ramo de golosinas entregado a un cliente',
  },
  {
    image: '/foto-cliente-caja-madera-catamarca-2.webp',
    tag: 'Caja de madera',
    alt: 'Caja de madera con desayuno completo para regalar',
  },
  {
    image: '/foto-cliente-ramo-comun-catamarca.webp',
    tag: 'Ramo común',
    alt: 'Ramo común de golosinas entregado a una familia',
  },
  {
    image: '/foto-cliente-ramo-oso-catamarca.webp',
    tag: 'Ramo con oso',
    alt: 'Ramo con oso de peluche regalado en Catamarca',
  },
  {
    image: '/foto-cliente-caja-carton-catamarca-2.webp',
    tag: 'Caja de cartón',
    alt: 'Caja de cartón con desayuno sorpresa entregada en puerta',
  },
  {
    image: '/foto-cliente-aniversario-catamarca.webp',
    tag: 'Aniversario',
    alt: 'Desayuno sorpresa de aniversario entregado en Catamarca',
  },
  {
    image: '/foto-cliente-desayuno-sorpresa-catamarca.webp',
    tag: 'Desayuno sorpresa',
    alt: 'Desayuno sorpresa entregado de mañana en Catamarca',
  },
  {
    image: '/foto-cliente-ramo-golosinas-catamarca-2.webp',
    tag: 'Ramo golosinas',
    alt: 'Ramo de golosinas entregado como regalo en Catamarca',
  },
  {
    image: '/foto-cliente-cumpleanos-catamarca.webp',
    tag: 'Cumpleaños',
    alt: 'Desayuno sorpresa de cumpleaños en caja de cartón en Catamarca',
  },
];
