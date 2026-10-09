import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';

export const metadata: Metadata = {
  title: 'Ramo de Chocolates | LaPrincesaCta',
  description:
    'Ramo de chocolates a domicilio en Catamarca: todo chocolate, envuelto fino y moño. $24.000. Pedí por WhatsApp.',
  alternates: { canonical: '/ramos/ramo-de-chocolates' },
  openGraph: {
    title: 'Ramo de Chocolates | LaPrincesaCta',
    description: 'Ramo de chocolates a domicilio en Catamarca, envuelto fino y moño. $24.000.',
    url: '/ramos/ramo-de-chocolates',
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramo de Chocolates | LaPrincesaCta',
    description: 'Ramo de chocolates a domicilio en Catamarca. $24.000.',
  },
};

export default function Page() {
  return <ProductDetail data={productPages['ramo-de-chocolates']} />;
}
