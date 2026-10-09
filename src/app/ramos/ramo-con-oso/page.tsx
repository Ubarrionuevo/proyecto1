import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';

export const metadata: Metadata = {
  title: 'Ramo con Oso de Peluche | LaPrincesaCta',
  description:
    'Ramo con oso de peluche y golosinas en Catamarca: el que más se regala para novios. $26.000. Pedí por WhatsApp.',
  alternates: { canonical: '/ramos/ramo-con-oso' },
  openGraph: {
    title: 'Ramo con Oso de Peluche | LaPrincesaCta',
    description: 'Ramo con oso de peluche y golosinas en Catamarca. $26.000. Pedí por WhatsApp.',
    url: '/ramos/ramo-con-oso',
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramo con Oso de Peluche | LaPrincesaCta',
    description: 'Ramo con oso de peluche y golosinas en Catamarca. $26.000.',
  },
};

export default function Page() {
  return <ProductDetail data={productPages['ramo-con-oso']} />;
}
