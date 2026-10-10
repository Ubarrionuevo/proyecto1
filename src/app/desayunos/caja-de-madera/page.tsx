import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';

export const metadata: Metadata = {
  title: 'Desayuno Sorpresa en Caja de Madera | LaPrincesaCta',
  description:
    'Desayuno sorpresa en caja de madera a domicilio en Catamarca: café o té, delicias, taza personalizada y nota a mano. Pedí por WhatsApp.',
  alternates: { canonical: '/desayunos/caja-de-madera' },
  openGraph: {
    title: 'Desayuno Sorpresa en Caja de Madera | LaPrincesaCta',
    description:
      'Desayuno sorpresa en caja de madera a domicilio en Catamarca. Pedí por WhatsApp.',
    url: '/desayunos/caja-de-madera',
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desayuno Sorpresa en Caja de Madera | LaPrincesaCta',
    description: 'Desayuno sorpresa en caja de madera a domicilio en Catamarca.',
  },
};

export default function Page() {
  return <ProductDetail data={productPages['caja-de-madera']} />;
}
