import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { faqJsonLd, breadcrumbJsonLd, itemListJsonLd } from '@/components/JsonLd';
import AdditionalGifts from '@/components/AdditionalGifts';
import FarAwayLine from '@/components/FarAwayLine';
import StickerButton from '@/components/ui/StickerButton';
import { ramosFaqs } from '@/lib/faqs';
import { ramos, getWhatsAppUrl } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import { siteConfig } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';
import { pageMetadata, ratingHook } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Ramos de Golosinas a Domicilio en Catamarca | LaPrincesaCta',
  description: `Ramos de golosinas y chocolates a domicilio en Catamarca: común, futbolero, de chocolates y con oso. ${ratingHook}. Pedí por WhatsApp.`,
  path: '/ramos-de-golosinas-catamarca',
  image: ramos[0].images[0],
});

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Ramos de golosinas' },
];

const items = ramos.map((ramo) => ({ ramo, page: productPageById[ramo.id] }));

export default function RamosPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          itemListJsonLd(
            items.map(({ ramo, page }) => ({
              name: page.seoName,
              urlPath: page.urlPath,
              image: ramo.images[0].src,
            }))
          ),
          faqJsonLd(ramosFaqs),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <h1 className="display-lg text-ink text-balance">
          Ramos de golosinas y chocolates en Catamarca
        </h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
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
          <p>
            Si además querés sumar un{' '}
            <Link href="/desayunos-sorpresa-catamarca" className="link-underline font-bold text-ink">
              desayuno sorpresa
            </Link>
            , combinamos ambos en un mismo pedido y lo entregamos junto. Mirá también{' '}
            <Link href="/cartas-personalizadas" className="link-underline font-bold text-ink">
              cartas personalizadas
            </Link>{' '}
            para acompañar el ramo con un mensaje escrito.
          </p>
        </div>

        <FarAwayLine className="mt-6" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map(({ ramo, page }) => (
            <Link
              key={page.urlPath}
              href={page.urlPath}
              className="group border border-rule bg-paper-card p-6"
            >
              <span className="font-display text-xl font-semibold text-ink flex items-center gap-2">
                {page.seoName}
                <ArrowIcon className="w-4 h-4 text-berry transition-transform duration-200 group-hover:translate-x-1" />
              </span>
              {siteConfig.showPrices && (
                <span className="font-display text-2xl font-semibold text-berry mt-1 block">
                  {ramo.price}
                </span>
              )}
            </Link>
          ))}
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
      <FloatingWhatsApp topic="un ramo de golosinas" />
    </main>
  );
}
