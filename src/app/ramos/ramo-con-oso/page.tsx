import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { openGraphBase, twitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Ramo con Oso de Peluche | LaPrincesaCta',
  description:
    'Ramo con oso de peluche y golosinas en Catamarca: el que más se regala para novios. Pedí por WhatsApp.',
  alternates: { canonical: '/ramos/ramo-con-oso' },
  openGraph: {
    ...openGraphBase,
    title: 'Ramo con Oso de Peluche | LaPrincesaCta',
    description: 'Ramo con oso de peluche y golosinas en Catamarca. Pedí por WhatsApp.',
    url: '/ramos/ramo-con-oso',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramo con Oso de Peluche | LaPrincesaCta',
    description: 'Ramo con oso de peluche y golosinas en Catamarca.',
    images: [twitterImage],
  },
};

export default function Page() {
  return <ProductDetail data={productPages['ramo-con-oso']} />;
}
