import type { Metadata } from 'next';
import CatalogoClient from './catalogo-client';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Catálogo de Desayunos y Ramos | LaPrincesaCta',
  description:
    'Catálogo de desayunos sorpresa y ramos de golosinas en Catamarca: caja de madera, caja de cartón, ramos con oso y de chocolates. Pedí por WhatsApp.',
  alternates: { canonical: '/catalogo' },
  openGraph: {
    title: 'Catálogo de Desayunos y Ramos | LaPrincesaCta',
    description:
      'Desayunos sorpresa y ramos de golosinas en Catamarca. Pedí por WhatsApp.',
    url: '/catalogo',
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catálogo de Desayunos y Ramos | LaPrincesaCta',
    description:
      'Desayunos sorpresa y ramos de golosinas en Catamarca.',
  },
};

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Catálogo' },
];

export default function CatalogoPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <CatalogoClient />
    </>
  );
}
