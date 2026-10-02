const WHATSAPP_NUMBER = '5493834903387';

export const getWhatsAppUrl = (producto: string = 'regalo a domicilio') => {
  const message = `¡Hola! Vengo de la web y quiero consultar por ${producto} 🌸`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const contact = {
  brand: 'LaPrincesaCta',
  phoneDisplay: '+54 9 3834 90-3387',
  phoneHref: `https://wa.me/${WHATSAPP_NUMBER}`,
  city: 'San Fernando del Valle de Catamarca',
  hours: 'Lunes a sábado, 8 a 20 h',
  rating: '5.0',
  reviews: 28,
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

export const cobertura = {
  provinces: provinceOrigen,
  countries: paisesOrigen,
  total: provinceOrigen.length + paisesOrigen.length,
};

export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  detail: string;
  images: string[];
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
    images: ['/desayuno.jpeg', '/cliente1.png', '/cliente4.png'],
    tag: 'La más pedida',
  },
  {
    id: 'desayuno-caja-carton',
    name: 'Caja de Cartón',
    price: '$36.000',
    description: 'La misma sorpresa, con presentación de cartón premium.',
    detail:
      'Café, delicias, taza personalizada y la nota a mano. Sale un poco menos que la de madera y se ve igual de lindo en la puerta.',
    images: ['/desayunocajacarton.jpeg', '/cliente2.png', '/cliente7.png'],
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
    images: ['/ramocomun.png', '/ramocomun1.png', '/ramocomun2.png'],
    tag: 'Más vendido',
  },
  {
    id: 'ramo-mundialista',
    name: 'Ramo Mundialista',
    price: '$28.000',
    description: 'Para los que no se pierden un partido. Camiseta, escudos y golosinas.',
    detail:
      'Armado con los colores que pida tu club y la camiseta adentro. Se arma por pedido: decinos tu equipo y lo dejamos a tu manera.',
    images: ['/RamoMundialista.jpeg', '/ramos.golosinas.jpg'],
  },
  {
    id: 'ramo-chocolates',
    name: 'Ramo de Chocolates',
    price: '$24.000',
    description: 'Un gesto elegante con chocolates que enamoran desde el primer vistazo.',
    detail:
      'Todo chocolate, con envuelto fino y un moño que no se deshace en el camino. Se ve premium incluso sin decir el precio.',
    images: ['/ramos.golosinas.definitivo.jpeg', '/ramos.golosinas2.jpg'],
    video: '/WhatsApp Video 2026-06-28 at 8.47.33 PM.mp4',
  },
  {
    id: 'ramo-oso',
    name: 'Ramo con Oso',
    price: '$26.000',
    description: 'Una combinación tierna: golosinas y un oso de peluche adentro.',
    detail:
      'El ramo con peluche es el que más se regala para novios y para chicas. El oso va envuelto para que llegue entero.',
    images: ['/ramooso.png', '/ramos.golosinas3.jpg'],
  },
];

/* ── Números para mostrar ────────────────────────────────────── */

export const stats = [
  { value: '+100', label: 'entregas hechas' },
  { value: '5.0', label: 'en Google Maps' },
  { value: '28', label: 'opiniones' },
];

/* ── Fotos reales de clientes ────────────────────────────────── */

export const clientPhotos = [
  { image: '/cliente1.png', tag: 'Caja de madera' },
  { image: '/cliente2.png', tag: 'Caja de cartón' },
  { image: '/cliente3.png', tag: 'Ramo de golosinas' },
  { image: '/cliente4.png', tag: 'Caja de madera' },
  { image: '/cliente5.png', tag: 'Ramo común' },
  { image: '/cliente6.png', tag: 'Ramo con oso' },
  { image: '/cliente7.png', tag: 'Caja de cartón' },
  { image: '/WhatsApp Image 2026-01-05 at 11.17.57 (1).jpeg', tag: 'Aniversario' },
  { image: '/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg', tag: 'Desayuno sorpresa' },
  { image: '/WhatsApp Image 2026-04-10 at 9.18.51 PM.jpeg', tag: 'Ramo golosinas' },
  { image: '/WhatsApp Image 2025-11-14 at 16.48.51.jpeg', tag: 'Cumpleaños' },
];
