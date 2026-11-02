import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { faqJsonLd, breadcrumbJsonLd, itemListJsonLd } from '@/components/JsonLd';
import FarAwayLine from '@/components/FarAwayLine';
import SolutionSection from '@/components/SolutionSection';
import StickerButton from '@/components/ui/StickerButton';
import { desayunosFaqs } from '@/lib/faqs';
import { desayunos, getWhatsAppUrl } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import { siteConfig } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';
import { pageMetadata, ratingHook } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Desayunos Sorpresa a Domicilio en Catamarca | LaPrincesaCta',
  description: `Desayunos sorpresa a domicilio en Catamarca. ${ratingHook}. Te mandamos foto de la entrega. Pedí por WhatsApp, también desde el exterior.`,
  path: '/desayunos-sorpresa-catamarca',
  image: desayunos[0].images[0],
});

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Desayunos sorpresa' },
];

const items = desayunos.map((product) => ({ product, page: productPageById[product.id] }));

export default function DesayunosPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          itemListJsonLd(
            items.map(({ product, page }) => ({
              name: page.seoName,
              urlPath: page.urlPath,
              image: product.images[0].src,
            }))
          ),
          faqJsonLd(desayunosFaqs),
        ]}
      />
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

        <FarAwayLine className="mt-6" />

        <h2 className="display-md mt-12 text-ink text-balance">
          Desayunos en Catamarca, para regalar o para vos
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          No hace falta que sea una sorpresa. Si buscás desayunos en Catamarca para un cumpleaños
          en la oficina o para darte un gusto un domingo, también los llevamos: son desayunos a
          domicilio en San Fernando del Valle, con el mismo armado y la misma nota, y los pedís{' '}
          {siteConfig.hoursCopy}.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map(({ product, page }) => (
            <Link
              key={page.urlPath}
              href={page.urlPath}
              className="group border border-rule bg-paper-card p-6"
            >
              <span className="label">Ver producto</span>
              <span className="font-display text-xl font-semibold text-ink mt-2 flex items-center gap-2">
                {page.seoName}
                <ArrowIcon className="w-4 h-4 text-berry transition-transform duration-200 group-hover:translate-x-1" />
              </span>
              {siteConfig.showPrices && (
                <span className="font-display text-2xl font-semibold text-berry mt-1 block">
                  {product.price}
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
