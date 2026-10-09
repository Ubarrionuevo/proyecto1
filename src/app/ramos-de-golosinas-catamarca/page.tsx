import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { faqJsonLd, breadcrumbJsonLd } from '@/components/JsonLd';
import AdditionalGifts from '@/components/AdditionalGifts';
import StickerButton from '@/components/ui/StickerButton';
import { ramosFaqs } from '@/lib/faqs';
import { ramos, getWhatsAppUrl } from '@/lib/products';
import { ArrowIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Ramos de Golosinas en Catamarca | LaPrincesaCta',
  description:
    'Ramos de golosinas y chocolates armados a mano en Catamarca: común, futbolero, de chocolates y con oso. Mirá precios y pedí por WhatsApp.',
  alternates: { canonical: '/ramos-de-golosinas-catamarca' },
  openGraph: {
    title: 'Ramos de Golosinas en Catamarca | LaPrincesaCta',
    description:
      'Ramos de golosinas y chocolates armados a mano en Catamarca: común, futbolero, de chocolates y con oso. Pedí por WhatsApp.',
    url: '/ramos-de-golosinas-catamarca',
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramos de Golosinas en Catamarca | LaPrincesaCta',
    description:
      'Ramos de golosinas y chocolates armados a mano en Catamarca. Pedí por WhatsApp.',
  },
};

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Ramos de golosinas' },
];

const ramoLinks = [
  { href: '/ramos/ramo-comun', key: 'ramo-comun' },
  { href: '/ramos/ramo-futbolero', key: 'ramo-futbolero' },
  { href: '/ramos/ramo-de-chocolates', key: 'ramo-de-chocolates' },
  { href: '/ramos/ramo-con-oso', key: 'ramo-con-oso' },
];

export default function RamosPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(ramosFaqs)]} />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <span className="label">Ramos armados a mano</span>
        <h1 className="display-lg mt-4 text-ink text-balance">
          Ramos de golosinas y chocolates en Catamarca
        </h1>
        <div className="mt-6 space-y-5 text-[15px] sm:text-base leading-relaxed text-ink-soft max-w-prose">
          <p>
            Un ramo de golosinas es un regalo que se ve, se comparte y se disfruta: golosinas
            armadas en forma de ramo, envueltas para regalar y entregadas a domicilio en San
            Fernando del Valle de Catamarca. Van solos o sumados a cualquier desayuno.
          </p>
          <p>
            Tenemos cuatro modelos. El{' '}
            <Link href="/ramos/ramo-comun" className="link-underline font-bold text-ink">
              ramo común
            </Link>
            , el de siempre, con la combinación que más gusta y el que más enviamos a las
            familias. El{' '}
            <Link href="/ramos/ramo-futbolero" className="link-underline font-bold text-ink">
              ramo futbolero
            </Link>
            , que se arma por pedido con los colores de tu club y la camiseta adentro. El{' '}
            <Link href="/ramos/ramo-de-chocolates" className="link-underline font-bold text-ink">
              ramo de chocolates
            </Link>
            , todo chocolate con envuelto fino y moño. Y el{' '}
            <Link href="/ramos/ramo-con-oso" className="link-underline font-bold text-ink">
              ramo con oso
            </Link>
            , con peluche adentro, el que más se regala para novios.
          </p>
          <p>
            Todos se arman a mano y por pedido: decinos el tema —un club, un personaje, un
            color— y lo dejamos a tu manera. Se paga por transferencia y hablás directo con
            nosotras, sin intermediarios. Y si estás lejos, lo pedís por WhatsApp desde donde
            estés y lo entregamos acá.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ramoLinks.map((link) => {
            const ramo = ramos.find((r) => r.id === link.key);
            if (!ramo) return null;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group border border-rule bg-paper-card p-6"
              >
                <span className="label">Ver producto</span>
                <span className="font-display text-xl font-semibold text-ink mt-2 flex items-center gap-2">
                  {ramo.name}
                  <ArrowIcon className="w-4 h-4 text-berry transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                <span className="font-display text-2xl font-semibold text-berry mt-1 block">
                  {ramo.price}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8">
          <StickerButton href={getWhatsAppUrl('un ramo de golosinas')} size="lg">
            Quiero un ramo
          </StickerButton>
        </div>
      </section>

      <AdditionalGifts />
      <Faq
        items={ramosFaqs}
        label="Dudas sobre los ramos"
        title="Preguntas sobre los ramos de golosinas."
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
