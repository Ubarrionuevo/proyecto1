import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { pageMetadata } from '@/lib/seo';

const data = productPages['ramo-de-chocolates'];

export const metadata: Metadata = pageMetadata({
  title: 'Ramo de Chocolates a Domicilio en Catamarca | LaPrincesaCta',
  description:
    'Ramo de chocolates con envuelto fino y moño, listo para regalar. A domicilio en Catamarca. Pedí por WhatsApp, también desde el exterior.',
  path: data.urlPath,
  image: data.product.images[0],
});

export default function Page() {
  return <ProductDetail data={data} />;
}
