import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';
import StickerButton from '@/components/ui/StickerButton';
import { getWhatsAppUrl } from '@/lib/products';
import { ArrowIcon } from '@/components/Icons';

const productLinks = [
  { href: '/desayunos/caja-de-madera', name: 'Caja de Madera', price: '$39.000' },
  { href: '/desayunos/caja-de-carton', name: 'Caja de Cartón', price: '$36.000' },
  { href: '/ramos/ramo-comun', name: 'Ramo Común', price: '$21.000' },
  { href: '/ramos/ramo-futbolero', name: 'Ramo Futbolero', price: '$28.000' },
  { href: '/ramos/ramo-de-chocolates', name: 'Ramo de Chocolates', price: '$24.000' },
  { href: '/ramos/ramo-con-oso', name: 'Ramo con Oso', price: '$26.000' },
];

/* Estructura reutilizable para fechas especiales: si se suma San Valentín,
   Navidad o Día del Niño, copiar esta página cambiando fecha, H1 y CTAs.
   No publicar promos ni fechas límite sin confirmar (ver TODO-contenido.md). */

export const metadata: Metadata = {
  title: 'Regalos Día de la Madre en Catamarca | LaPrincesaCta',
  description:
    'Desayunos sorpresa y ramos de golosinas para el Día de la Madre en Catamarca. Encargá por WhatsApp con anticipación y sorprendela en su día.',
  alternates: { canonical: '/dia-de-la-madre' },
  openGraph: {
    title: 'Regalos Día de la Madre en Catamarca | LaPrincesaCta',
    description:
      'Desayunos sorpresa y ramos de golosinas para el Día de la Madre en Catamarca. Encargá por WhatsApp con anticipación.',
    url: '/dia-de-la-madre',
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regalos Día de la Madre en Catamarca | LaPrincesaCta',
    description:
      'Desayunos sorpresa y ramos para el Día de la Madre en Catamarca. Pedí por WhatsApp.',
  },
};

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Día de la Madre' },
];

export default function DiaDeLaMadrePage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <span className="label">Domingo 18 de octubre de 2026</span>
        <h1 className="display-lg mt-4 text-ink text-balance">
          Regalos y desayunos para el Día de la Madre en Catamarca
        </h1>
        <div className="mt-6 space-y-5 text-[15px] sm:text-base leading-relaxed text-ink-soft max-w-prose">
          <p>
            Para el Día de la Madre, un desayuno sorpresa que llega a la puerta a la mañana
            es de esos regalos que se acuerdan todo el año. Lo armamos completo —café o té,
            delicias, taza y nota a mano— y lo entregamos en San Fernando del Valle de
            Catamarca.
          </p>
          <p>
            Si tu mamá es más de lo dulce, los ramos de golosinas y chocolates también van
            perfecto: se regalan solos o sumados al desayuno. Y si estás lejos, mejor todavía:
            lo encargás por WhatsApp desde donde estés y nosotras lo llevamos hasta su puerta.
          </p>
          <p>
            Ese día los pedidos se juntan, así que te conviene encargarlo con anticipación:
            escribinos, contanos para quién es y coordinamos la entrega.
          </p>
        </div>

        <div className="mt-8">
          <StickerButton
            href={getWhatsAppUrl('un regalo para el Día de la Madre')}
            size="lg"
          >
            Quiero un regalo para mamá
          </StickerButton>
        </div>

        <h2 className="display-md mt-14 text-ink">Opciones para regalarle</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {productLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-rule bg-paper-card p-6"
            >
              <span className="font-display text-xl font-semibold text-ink flex items-center gap-2">
                {item.name}
                <ArrowIcon className="w-4 h-4 text-berry transition-transform duration-200 group-hover:translate-x-1" />
              </span>
              <span className="font-display text-2xl font-semibold text-berry mt-1 block">
                {item.price}
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-soft max-w-prose">
          ¿Buscás otra fecha? También armamos regalos para cumpleaños, aniversarios y{' '}
          <Link href="/catalogo" className="link-underline font-bold text-ink">
            todo el catálogo
          </Link>
          .
        </p>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
