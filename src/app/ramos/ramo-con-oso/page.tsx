import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { pageMetadata } from '@/lib/seo';

const data = productPages['ramo-con-oso'];

export const metadata: Metadata = pageMetadata({
  title: 'Ramo con Oso a Domicilio en Catamarca | LaPrincesaCta',
  description:
    'Ramo con oso de peluche y golosinas, envuelto para que llegue entero. A domicilio en Catamarca. Pedí por WhatsApp, también desde lejos.',
  path: data.urlPath,
  image: data.product.images[0],
});

export default function Page() {
  return <ProductDetail data={data} />;
}
