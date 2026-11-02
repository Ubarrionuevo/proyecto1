import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { pageMetadata } from '@/lib/seo';

const data = productPages['ramo-comun'];

export const metadata: Metadata = pageMetadata({
  title: 'Ramo Común a Domicilio en Catamarca | LaPrincesaCta',
  description:
    'Ramo común de golosinas de todo tipo, armado y envuelto para regalar. A domicilio en Catamarca. Pedí por WhatsApp, también desde lejos.',
  path: data.urlPath,
  image: data.product.images[0],
});

export default function Page() {
  return <ProductDetail data={data} />;
}
