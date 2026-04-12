const WHATSAPP_NUMBER = '5493834903387';

export interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  images: string[];
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
      '/ramos.golosinas.jpg',
      '/ramos.golosinas2.jpg',
      '/ramos.golosinas22.jpg',
      '/ramos.golosinas.definitivo.jpg',
    ],
    price: 'Desde $8.000',
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
      '/ramos.golosinas2.jpg',
      '/ramos.golosinas.definitivo.jpg',
    ],
    price: 'Desde $15.000',
    badge: 'PREMIUM',
  },
  {
    id: 'ramos-romantico',
    name: 'Ramo Romántico',
    description: 'Diseñado para expresar amor. Ideal para anniversarios y fechas especiales.',
    benefits: [
      '20+ golosinas',
      'Rosas de chocolate',
      'Diseño romántico exclusivo',
      'Tarjeta personalizada',
    ],
    images: [
      '/ramos.golosinas22.jpg',
      '/ramos.golosinas.jpg',
    ],
    price: 'Desde $12.000',
  },
  {
    id: 'desayuno-clasico',
    name: 'Desayuno Sorpresa Clásico',
    description: 'Un desayuno completo para empezar el día con energía y amor. Perfecto para sorpresas.',
    benefits: [
      'Café o té a elección',
      'Medialunas frescas',
      'Jugo de naranja natural',
      'Fruta de estación',
      'Empaque térmico',
    ],
    images: [
      '/download.jpg',
    ],
    price: 'Desde $6.000',
  },
  {
    id: 'desayuno-premium',
    name: 'Desayuno Sorpresa Premium',
    description: 'La experiencia más completa con productos gourmet y decoración especial.',
    benefits: [
      'Café premium',
      'Torta artesanal',
      'Champagne sin alcohol',
      'Flores frescas',
      'Canasta decorada',
      'Tarjeta personalizada',
    ],
    images: [
      '/download.jpg',
    ],
    price: 'Desde $12.000',
    badge: 'PREMIUM',
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
  ['ramos-clasico', 'ramos-premium', 'ramos-romantico'].includes(p.id)
);

export const desayunoProducts = products.filter(p => 
  ['desayuno-clasico', 'desayuno-premium'].includes(p.id)
);

export const featuredProduct = products.find(p => p.featured) || products[0];
