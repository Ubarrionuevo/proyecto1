import type { Metadata } from 'next';
import CatalogoClient from './catalogo-client';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';
import { openGraphBase, twitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Catálogo de Desayunos y Ramos en Catamarca | LaPrincesaCta',
  description:
    'Catálogo de desayunos sorpresa y ramos de golosinas en Catamarca: caja de madera, de cartón y cuatro ramos. Elegí el tuyo y pedí por WhatsApp.',
  alternates: { canonical: '/catalogo' },
  openGraph: {
    ...openGraphBase,
    title: 'Catálogo de Desayunos y Ramos en Catamarca | LaPrincesaCta',
    description:
      'Catálogo de desayunos sorpresa y ramos de golosinas en Catamarca: mirá las opciones y pedí por WhatsApp.',
    url: '/catalogo',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catálogo de Desayunos y Ramos en Catamarca | LaPrincesaCta',
    description:
      'Desayunos sorpresa y ramos de golosinas en Catamarca.',
    images: [twitterImage],
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
