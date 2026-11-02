import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { pageMetadata } from '@/lib/seo';

const data = productPages['caja-de-madera'];

export const metadata: Metadata = pageMetadata({
  title: 'Desayuno en Caja de Madera a Domicilio en Catamarca',
  description:
    'Desayuno sorpresa en caja de madera: café o té, delicias artesanales, taza y nota a mano. A domicilio en Catamarca. Pedí por WhatsApp.',
  path: data.urlPath,
  image: data.product.images[0],
});

export default function Page() {
  return <ProductDetail data={data} />;
}
