import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';

export const metadata: Metadata = {
  title: 'Ramo Común de Golosinas | LaPrincesaCta',
  description:
    'Ramo común de golosinas armado a mano en Catamarca: la combinación que más gusta, envuelto para regalar. $21.000. Pedí por WhatsApp.',
  alternates: { canonical: '/ramos/ramo-comun' },
  openGraph: {
    title: 'Ramo Común de Golosinas | LaPrincesaCta',
    description: 'Ramo común de golosinas armado a mano en Catamarca. $21.000. Pedí por WhatsApp.',
    url: '/ramos/ramo-comun',
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramo Común de Golosinas | LaPrincesaCta',
    description: 'Ramo común de golosinas armado a mano en Catamarca. $21.000.',
  },
};

export default function Page() {
  return <ProductDetail data={productPages['ramo-comun']} />;
}
