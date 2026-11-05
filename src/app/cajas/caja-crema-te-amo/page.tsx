import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { pageMetadata } from '@/lib/seo';

const data = productPages['caja-crema-te-amo'];

export const metadata: Metadata = pageMetadata({
  title: 'Caja Te Amo para Regalar en Catamarca | LaPrincesaCta',
  description:
    'Caja crema con “Te amo” en letras doradas y moño blanco, para regalar. A domicilio en Catamarca. Pedí por WhatsApp, también desde lejos.',
  path: data.urlPath,
  image: data.product.images[0],
});

export default function Page() {
  return <ProductDetail data={data} />;
}
