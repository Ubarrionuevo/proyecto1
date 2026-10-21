import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { faqJsonLd, breadcrumbJsonLd } from '@/components/JsonLd';
import SolutionSection from '@/components/SolutionSection';
import StickerButton from '@/components/ui/StickerButton';
import { desayunosFaqs } from '@/lib/faqs';
import { getWhatsAppUrl } from '@/lib/products';
import { siteConfig } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';
import { openGraphBase, twitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Desayunos Sorpresa: Caja de Madera y Cartón | LaPrincesaCta',
  description:
    'Desayunos sorpresa a domicilio en Catamarca: caja de madera y caja de cartón con café, delicias, taza y nota a mano. Pedí por WhatsApp.',
  alternates: { canonical: '/desayunos-sorpresa-catamarca' },
  openGraph: {
    ...openGraphBase,
    title: 'Desayunos Sorpresa: Caja de Madera y Cartón | LaPrincesaCta',
    description:
      'Desayunos sorpresa a domicilio en Catamarca: caja de madera y caja de cartón con café, delicias, taza y nota a mano. Pedí por WhatsApp.',
    url: '/desayunos-sorpresa-catamarca',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desayunos Sorpresa: Caja de Madera y Cartón | LaPrincesaCta',
    description:
      'Desayunos sorpresa a domicilio en Catamarca: caja de madera y caja de cartón. Pedí por WhatsApp.',
    images: [twitterImage],
  },
};

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Desayunos sorpresa' },
];

export default function DesayunosPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(desayunosFaqs)]} />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <span className="label">Desayunos a domicilio</span>
        <h1 className="display-lg mt-4 text-ink text-balance">Desayunos sorpresa en Catamarca</h1>
        <p className="display-md mt-3 text-berry italic text-balance">
          ¿Vivís lejos de Catamarca? Mandale un desayuno sorpresa a alguien especial.
        </p>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
          <p>
            Comprá desde otra provincia o desde otro país y sorprendé a alguien en San Fernando
            del Valle de Catamarca. Un desayuno sorpresa llega a la puerta antes de que se
            despierte, con todo listo para disfrutar: nosotras lo armamos completo, lo envolvemos
            y coordinamos la entrega por WhatsApp.
          </p>
          <p>
            ¿Estás en Catamarca? También podés pedirlo: hacemos desayunos a domicilio en San
            Fernando del Valle tanto para vos como para regalar.
          </p>
          <p>
            Cada desayuno trae café o té bien caliente, delicias artesanales, taza personalizada
            y una nota escrita a mano con tu mensaje. Podés elegir la presentación: la{' '}
            <Link
              href="/desayunos/caja-de-madera"
              className="link-underline font-bold text-ink"
            >
              caja de madera
            </Link>
            , que después se vuelve a usar para guardar cosas, o la{' '}
            <Link
              href="/desayunos/caja-de-carton"
              className="link-underline font-bold text-ink"
            >
              caja de cartón premium
            </Link>
            , que sale un poco menos y se ve igual de linda en la puerta.
          </p>
          <p>
            Para enviar un desayuno sorpresa a Catamarca solo necesitamos dos cosas: el nombre de
            quien lo recibe y el motivo. Del resto nos ocupamos nosotras, coordinando directamente
            con esa persona para que la sorpresa salga bien. Se paga por transferencia y hablás
            directo con nosotras, sin intermediarios.
          </p>
          <p>
            Los motivos son los de siempre: un cumpleaños, un aniversario, un agradecimiento o un
            regalo espontáneo. Si vivís lejos y querés regalarle a alguien que está en Catamarca,
            alcanza con contárnoslo por WhatsApp y coordinamos la entrega.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              href: '/desayunos/caja-de-madera',
              name: 'Desayuno sorpresa en caja de madera',
              price: '$39.000',
            },
            {
              href: '/desayunos/caja-de-carton',
              name: 'Desayuno sorpresa en caja de cartón',
              price: '$36.000',
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-rule bg-paper-card p-6"
            >
              <span className="label">Ver producto</span>
              <span className="font-display text-xl font-semibold text-ink mt-2 flex items-center gap-2">
                {item.name}
                <ArrowIcon className="w-4 h-4 text-berry transition-transform duration-200 group-hover:translate-x-1" />
              </span>
              {siteConfig.showPrices && (
                <span className="font-display text-2xl font-semibold text-berry mt-1 block">
                  {item.price}
                </span>
              )}
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <StickerButton href={getWhatsAppUrl('un desayuno sorpresa')} size="lg">
            Quiero un desayuno sorpresa
          </StickerButton>
        </div>
      </section>

      <SolutionSection />
      <Faq
        items={desayunosFaqs}
        label="Dudas sobre los desayunos"
        title="Preguntas sobre los desayunos sorpresa."
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
