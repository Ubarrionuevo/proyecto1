import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import { productPages } from '@/lib/product-pages';
import { pageMetadata } from '@/lib/seo';

const data = productPages['caja-ventana-corazon'];

export const metadata: Metadata = pageMetadata({
  title: 'Caja de Chocolates con Ventana de Corazón en Catamarca | LaPrincesaCta',
  description:
    'Caja con ventana de corazón llena de bombones y chocolates, con moño y tarjeta a mano. A domicilio en Catamarca. Pedí por WhatsApp.',
  path: data.urlPath,
  image: data.product.images[0],
});

export default function Page() {
  return <ProductDetail data={data} />;
}
