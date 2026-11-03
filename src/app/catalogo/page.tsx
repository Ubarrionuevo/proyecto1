import type { Metadata } from 'next';
import CatalogoClient from './catalogo-client';
import JsonLd, { breadcrumbJsonLd, itemListJsonLd } from '@/components/JsonLd';
import { pageMetadata, ratingHook } from '@/lib/seo';
import { desayunos, ramos } from '@/lib/products';
import { productPages } from '@/lib/product-pages';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Catálogo de Desayunos y Ramos a Domicilio en Catamarca',
  description: `Mirá las fotos de ${desayunos.length} desayunos y ${ramos.length} ramos a domicilio en Catamarca. ${ratingHook}. Pedí por WhatsApp ${siteConfig.hoursCopy}.`,
  path: '/catalogo',
});

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Catálogo' },
];

export default function CatalogoPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          itemListJsonLd(
            Object.values(productPages).map(({ product, seoName, urlPath }) => ({
              name: seoName,
              urlPath,
              image: product.images[0].src,
            }))
          ),
        ]}
      />
      <CatalogoClient />
    </>
  );
}
