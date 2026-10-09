import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';

export const metadata: Metadata = {
  title: 'Desayuno Sorpresa en Caja de Cartón | LaPrincesaCta',
  description:
    'Desayuno sorpresa en caja de cartón a domicilio en Catamarca: café, delicias, taza personalizada y nota a mano. $36.000. Pedí por WhatsApp.',
  alternates: { canonical: '/desayunos/caja-de-carton' },
  openGraph: {
    title: 'Desayuno Sorpresa en Caja de Cartón | LaPrincesaCta',
    description:
      'Desayuno sorpresa en caja de cartón a domicilio en Catamarca. $36.000. Pedí por WhatsApp.',
    url: '/desayunos/caja-de-carton',
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desayuno Sorpresa en Caja de Cartón | LaPrincesaCta',
    description: 'Desayuno sorpresa en caja de cartón a domicilio en Catamarca. $36.000.',
  },
};

export default function Page() {
  return <ProductDetail data={productPages['caja-de-carton']} />;
}
