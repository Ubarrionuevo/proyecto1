import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { pageMetadata } from '@/lib/seo';

const data = productPages['corazon-transparente'];

export const metadata: Metadata = pageMetadata({
  title: 'Corazón Transparente con Bombones en Catamarca | LaPrincesaCta',
  description:
    'Corazón transparente lleno de bombones y chocolates, con moño y tarjeta. A domicilio en Catamarca. Pedí por WhatsApp, también desde lejos.',
  path: data.urlPath,
  image: data.product.images[0],
});

export default function Page() {
  return <ProductDetail data={data} />;
}
