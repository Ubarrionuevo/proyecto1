import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';

export const metadata: Metadata = {
  title: 'Ramo Futbolero | LaPrincesaCta',
  description:
    'Ramo futbolero de golosinas en Catamarca: se arma con los colores de tu club y la camiseta adentro. $28.000. Pedí por WhatsApp.',
  alternates: { canonical: '/ramos/ramo-futbolero' },
  openGraph: {
    title: 'Ramo Futbolero | LaPrincesaCta',
    description: 'Ramo futbolero de golosinas en Catamarca, armado con los colores de tu club. $28.000.',
    url: '/ramos/ramo-futbolero',
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramo Futbolero | LaPrincesaCta',
    description: 'Ramo futbolero de golosinas en Catamarca. $28.000.',
  },
};

export default function Page() {
  return <ProductDetail data={productPages['ramo-futbolero']} />;
}
