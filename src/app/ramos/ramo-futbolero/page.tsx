import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { pageMetadata } from '@/lib/seo';

const data = productPages['ramo-futbolero'];

export const metadata: Metadata = pageMetadata({
  title: 'Ramo Futbolero a Domicilio en Catamarca | LaPrincesaCta',
  description:
    'Ramo futbolero con camiseta, escudos y golosinas, armado con los colores de tu club. A domicilio en Catamarca. Pedí por WhatsApp.',
  path: data.urlPath,
  image: data.product.images[0],
});

export default function Page() {
  return <ProductDetail data={data} />;
}
