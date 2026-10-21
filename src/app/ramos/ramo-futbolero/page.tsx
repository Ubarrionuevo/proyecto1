import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { openGraphBase, twitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Ramo Futbolero | LaPrincesaCta',
  description:
    'Ramo futbolero de golosinas en Catamarca: se arma con los colores de tu club y la camiseta adentro. Pedí por WhatsApp.',
  alternates: { canonical: '/ramos/ramo-futbolero' },
  openGraph: {
    ...openGraphBase,
    title: 'Ramo Futbolero | LaPrincesaCta',
    description: 'Ramo futbolero de golosinas en Catamarca, armado con los colores de tu club.',
    url: '/ramos/ramo-futbolero',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramo Futbolero | LaPrincesaCta',
    description: 'Ramo futbolero de golosinas en Catamarca.',
    images: [twitterImage],
  },
};

export default function Page() {
  return <ProductDetail data={productPages['ramo-futbolero']} />;
}
