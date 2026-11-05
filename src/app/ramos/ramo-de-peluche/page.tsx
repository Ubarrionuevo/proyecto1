import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { pageMetadata } from '@/lib/seo';

const data = productPages['ramo-de-peluche'];

export const metadata: Metadata = pageMetadata({
  title: 'Ramo de Peluche con Conejito y Golosinas en Catamarca | LaPrincesaCta',
  description:
    'Ramo de golosinas con un conejito u otro peluche, moño y tarjeta. A domicilio en Catamarca. Pedí por WhatsApp, también desde lejos.',
  path: data.urlPath,
  image: data.product.images[0],
});

export default function Page() {
  return <ProductDetail data={data} />;
}
