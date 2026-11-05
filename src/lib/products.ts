import { siteConfig } from './site';

const WHATSAPP_NUMBER = siteConfig.whatsappNumber;

export const getWhatsAppUrl = (producto: string = 'regalo a domicilio') => {
  const message = `¡Hola! Vengo de la web y quiero consultar por ${producto} 🌸`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/* Las cajas son femeninas y los ramos masculinos: "la Caja de Madera", "el Ramo Común". */
export const isFeminineProduct = (name: string) => name.startsWith('Caja');
export const productTopic = (name: string) => `${isFeminineProduct(name) ? 'la' : 'el'} ${name}`;

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

export type ProductImage = { src: string; alt: string };

export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  detail: string;
  images: ProductImage[];
  video?: string;
  /* Datos del archivo para el VideoObject del schema. */
  videoMeta?: { uploadDate: string; duration: string };
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
        src: '/ramo-comun-golosinas-catamarca-4.webp',
        alt: 'Ramo común de golosinas envuelto en papel rosa, listo para regalar en Catamarca',
      },
      {
        src: '/ramo-comun-golosinas-catamarca-1.webp',
        alt: 'Ramo común de golosinas armado y envuelto para regalar',
      },
      {
        src: '/ramo-comun-golosinas-catamarca-5.webp',
        alt: 'Ramo de golosinas de cumpleaños envuelto en celeste, con tarjeta de saludo',
      },
      {
        src: '/ramo-comun-golosinas-catamarca-2.webp',
        alt: 'Detalle del armado del ramo común de golosinas',
      },
      {
        src: '/ramo-comun-golosinas-catamarca-6.webp',
        alt: 'Ramo de golosinas grande con tarjeta de Feliz Día, envuelto para regalar',
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
    videoMeta: { uploadDate: '2026-10-08', duration: 'PT3.5S' },
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
  {
    id: 'ramo-peluche',
    name: 'Ramo de Peluche',
    /* Sin precio confirmado: no se muestra porque showPrices está en false. */
    price: '',
    description: 'Golosinas armadas en ramo alrededor de un peluche, con moño y tarjeta.',
    detail:
      'Bombones, alfajores y chocolates rodeando un peluche, envueltos para regalar. El de la foto lleva un conejito: preguntanos por WhatsApp qué peluches hay.',
    images: [
      {
        src: '/ramo-de-peluche-golosinas-catamarca-1.webp',
        alt: 'Ramo de peluche con conejito y golosinas envuelto en celeste, entregado en Catamarca',
      },
    ],
  },
];

/* ── Cajas de regalo ─────────────────────────────────────────── */

/* Sin precio confirmado: no se muestra porque showPrices está en false. El
   contenido sale solo de lo que se ve en las fotos. */
export const cajas: Product[] = [
  {
    id: 'corazon-transparente',
    name: 'Corazón transparente',
    price: '',
    description: 'Un corazón transparente lleno de bombones y chocolates, con moño dorado y tarjeta.',
    detail:
      'Se ve todo lo que trae desde afuera. Va con una tarjeta para tu mensaje, como el “Te Amo!!” de la foto.',
    images: [
      {
        src: '/corazon-transparente-bombones-catamarca-1.webp',
        alt: 'Corazón transparente con bombones y chocolates, moño dorado y tarjeta Te Amo',
      },
    ],
  },
  {
    id: 'caja-ventana-corazon',
    name: 'Caja de ventana de corazón',
    price: '',
    description: 'Una caja con ventana en forma de corazón, llena de bombones y chocolates.',
    detail:
      'Por la ventana se ven los chocolates de adentro. Lleva moño rojo y una tarjeta para escribir tu mensaje a mano, como en la foto.',
    images: [
      {
        src: '/caja-ventana-corazon-chocolates-catamarca-1.webp',
        alt: 'Caja con ventana de corazón llena de chocolates, moño rojo y tarjeta escrita a mano',
      },
    ],
  },
  {
    id: 'caja-crema-te-amo',
    name: 'Caja crema Te amo',
    price: '',
    description: 'Una caja crema con “Te amo” en letras doradas y moño blanco.',
    detail:
      'Una presentación elegante para decirlo sin vueltas. Preguntanos por WhatsApp qué trae adentro y cómo la podés armar.',
    images: [
      {
        src: '/caja-crema-te-amo-catamarca-1.webp',
        alt: 'Caja crema con Te amo en letras doradas y moño blanco, para regalar en Catamarca',
      },
    ],
  },
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
    image: '/foto-cliente-ramo-cumpleanos-catamarca.webp',
    tag: 'Cumpleaños',
    alt: 'Recibió su ramo de golosinas de cumpleaños en la puerta de su casa en Catamarca',
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
