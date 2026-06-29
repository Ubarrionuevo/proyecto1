const WHATSAPP_NUMBER = '5493834903387';

export interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  images: string[];
  video?: string;
  price?: string;
  badge?: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'ramos-clasico',
    name: 'Ramo Clásico de Golosinas',
    description: 'El ramo más elegido para sorprender. Perfecto para cumpleaños, anniversarios o simplemente para decir "te quiero".',
    benefits: [
      '20+ golosinas premium',
      'Empaque elegante',
      'Diseño único personalizado',
      'Entrega en el día',
    ],
    images: [
      '/ramocomun.png',
      '/ramocomun1.png',
      '/ramocomun2.png',
    ],
    price: 'Desde $21.000',
    featured: true,
    badge: 'MÁS VENDIDO',
  },
  {
    id: 'ramos-premium',
    name: 'Ramo Premium',
    description: 'El ramo más completo con golosinas importadas y chocolate artesanal. Ideal para ocasiones especiales.',
    benefits: [
      '30+ golosinas premium',
      'Chocolates artesanales',
      'Flores artificiales de lujo',
      'Empaque VIP',
      'Entrega prioritaria',
    ],
    images: [
      '/ramooso.png',
      '/ramos.golosinas.definitivo.jpeg',
    ],
    price: 'Desde $25.000',
    badge: 'PREMIUM',
  },
  {
    id: 'ramos-nuevo',
    name: 'Ramo Nueva Edición',
    description: 'El diseño más fresco y moderno. Ideal para los que buscan algo diferente y único.',
    benefits: [
      '25+ golosinas premium',
      'Packaging innovador',
      'Diseño exclusivo',
      'Video de presentación',
    ],
    images: [
      '/ramos.golosinas3.jpg',
      '/ramos.golosinas4.jpg',
    ],
    video: '/video.mp4',
    price: 'Desde $22.000',
    badge: 'NUEVO MODELO',
  },
];

export const getWhatsAppUrl = (productName?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (productName) {
    return `${baseUrl}?text=Hola!%20Quiero%20consultar%20por%3A%20${encodeURIComponent(productName)}`;
  }
  return `${baseUrl}?text=Hola!%20Quiero%20hacer%20un%20pedido`;
};

export const ramosProducts = products.filter(p => 
  ['ramos-clasico', 'ramos-premium', 'ramos-nuevo'].includes(p.id)
);

export const featuredProduct = products.find(p => p.featured) || products[0];
