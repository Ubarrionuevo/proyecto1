import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { faqJsonLd, breadcrumbJsonLd, itemListJsonLd } from '@/components/JsonLd';
import DeliveredPhotos from '@/components/DeliveredPhotos';
import FarAwayLine from '@/components/FarAwayLine';
import ProductCard, { ProductCardButton } from '@/components/ProductCard';
import ReadMore from '@/components/ui/ReadMore';
import StickerButton from '@/components/ui/StickerButton';
import { desayunosFaqs } from '@/lib/faqs';
import { clientPhotos, desayunos, getWhatsAppUrl } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import { siteConfig } from '@/lib/site';
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

const deliveredPhotos = clientPhotos.filter((photo) => !photo.image.includes('-ramo-')).slice(0, 4);

/* Primero los productos. El detalle de qué trae, la entrega y el pago está en
   las preguntas frecuentes: no repetirlo en párrafos. El bloque plegado lleva lo
   que no está ahí: presentaciones, motivos y búsquedas como "desayunos a
   domicilio". Esta página está cerca de la primera página de Google: no recortarlo
   sin mirar antes Search Console. */
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

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-4 sm:pt-8 pb-12 sm:pb-16">
        <h1 className="display-md text-ink text-balance">Desayunos sorpresa en Catamarca</h1>
        <p className="mt-1.5 text-base text-ink-soft max-w-prose">
          Café o té, delicias y una nota escrita a mano, a domicilio en {siteConfig.city}.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8">
          {items.map(({ product, page }, idx) => (
            <article key={product.id} className="min-w-0">
              <ProductCard product={product} title={page.seoName} Heading="h2" priority={idx < 2}>
                <p className="mt-1 mb-3 text-[13px] leading-snug text-ink-soft sm:text-sm">
                  {product.description}
                </p>
                <ProductCardButton product={product} className="mt-auto">
                  Pedir
                </ProductCardButton>
              </ProductCard>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-rule bg-paper-card p-5 sm:p-8">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
            Desayunos en Catamarca, para regalar o para vos
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft max-w-prose">
            Para un cumpleaños, un aniversario o darte un gusto un domingo. Podés sumarle un{' '}
            <Link href="/ramos-de-golosinas-catamarca" className="link-underline font-bold text-ink">
              ramo de golosinas
            </Link>{' '}
            o una{' '}
            <Link href="/cartas-personalizadas" className="link-underline font-bold text-ink">
              carta personalizada
            </Link>
            .
          </p>
          <StickerButton
            href={getWhatsAppUrl('un desayuno sorpresa')}
            variant="wa"
            wrap
            className="mt-4 w-full sm:w-auto"
          >
            Quiero un desayuno sorpresa
          </StickerButton>
          <FarAwayLine className="mt-5 max-w-prose" />
        </div>

        <ReadMore
          variant="section"
          summary={
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink text-balance">
              Cómo son nuestros desayunos a domicilio
            </h2>
          }
          className="mt-8"
        >
          <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft max-w-prose">
            <p>
              Comprá desde otra provincia o desde otro país y sorprendé a alguien en{' '}
              {siteConfig.city}. Un desayuno sorpresa llega a la puerta antes de que se despierte,
              con todo listo para disfrutar: nosotras lo armamos completo, lo envolvemos y
              coordinamos la entrega por WhatsApp.
            </p>
            <p>
              No hace falta que sea una sorpresa. Si buscás desayunos en Catamarca para un
              cumpleaños en la oficina o para darte un gusto un domingo, también los llevamos: son
              desayunos a domicilio con el mismo armado y la misma nota, y los pedís{' '}
              {siteConfig.hoursCopy}.
            </p>
            <p>
              Podés elegir la presentación: la{' '}
              <Link href="/desayunos/caja-de-madera" className="link-underline font-bold text-ink">
                caja de madera
              </Link>
              , que después se vuelve a usar para guardar cosas, o la{' '}
              <Link href="/desayunos/caja-de-carton" className="link-underline font-bold text-ink">
                caja de cartón premium
              </Link>
              , que se ve igual de linda en la puerta.
            </p>
            <p>
              Los motivos son los de siempre: un cumpleaños, un aniversario, un agradecimiento o un
              regalo espontáneo. Para octubre, mirá los{' '}
              <Link href="/dia-de-la-madre" className="link-underline font-bold text-ink">
                regalos para el Día de la Madre
              </Link>
              . Si buscás otra idea, mirá todos nuestros{' '}
              <Link href="/regalos-en-catamarca" className="link-underline font-bold text-ink">
                regalos en Catamarca a domicilio
              </Link>
              .
            </p>
          </div>
        </ReadMore>
      </section>

      <DeliveredPhotos title="Desayunos que ya entregamos" photos={deliveredPhotos} />

      <Faq
        items={desayunosFaqs}
        label="Dudas sobre los desayunos"
        title="Preguntas sobre los desayunos sorpresa."
      />
      <Footer />
      <FloatingWhatsApp topic="un desayuno sorpresa" />
    </main>
  );
}
