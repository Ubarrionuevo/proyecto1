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
import { ramosFaqs } from '@/lib/faqs';
import { clientPhotos, ramos, getWhatsAppUrl } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import { siteConfig } from '@/lib/site';
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

const deliveredPhotos = clientPhotos.filter((photo) => photo.image.includes('-ramo-'));

/* Primero los productos. El detalle de qué traen y el pago está en las
   preguntas frecuentes: no repetirlo en párrafos. El bloque plegado presenta los
   modelos con enlaces a sus fichas: no recortarlo sin mirar antes Search Console. */
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

      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-4 sm:pt-8 pb-12 sm:pb-16">
        <h1 className="display-md text-ink text-balance">
          Ramos de golosinas y chocolates en Catamarca
        </h1>
        <p className="mt-1.5 text-base text-ink-soft max-w-prose">
          Armados a mano y entregados a domicilio en {siteConfig.city}.
        </p>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8">
          {items.map(({ ramo, page }, idx) => (
            <article key={ramo.id} className="min-w-0">
              <ProductCard product={ramo} title={page.seoName} Heading="h2" priority={idx < 2}>
                <p className="mt-1 mb-3 text-[13px] leading-snug text-ink-soft sm:text-sm">
                  {ramo.description}
                </p>
                <ProductCardButton product={ramo} className="mt-auto">
                  Pedir
                </ProductCardButton>
              </ProductCard>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-rule bg-paper-card p-5 sm:p-8">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
            ¿Lo querés a tu manera?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft max-w-prose">
            Decinos el tema —un club, un personaje, un color— y lo armamos por pedido. Va solo o
            sumado a un{' '}
            <Link href="/desayunos-sorpresa-catamarca" className="link-underline font-bold text-ink">
              desayuno sorpresa
            </Link>
            , y podés acompañarlo con una{' '}
            <Link href="/cartas-personalizadas" className="link-underline font-bold text-ink">
              carta personalizada
            </Link>
            .
          </p>
          <StickerButton
            href={getWhatsAppUrl('un ramo de golosinas')}
            variant="wa"
            wrap
            className="mt-4 w-full sm:w-auto"
          >
            Quiero un ramo a mi manera
          </StickerButton>
          <FarAwayLine className="mt-5 max-w-prose" />
        </div>

        <ReadMore
          variant="section"
          summary={
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink text-balance">
              Cómo son nuestros ramos de golosinas a domicilio
            </h2>
          }
          className="mt-8"
        >
          <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft max-w-prose">
            <p>
              Un ramo de golosinas es un regalo que se ve, se comparte y se disfruta: golosinas
              armadas en forma de ramo, envueltas para regalar y entregadas a domicilio en{' '}
              {siteConfig.city}. Van solos o sumados a cualquier desayuno.
            </p>
            <p>
              Tenemos cinco modelos. El{' '}
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
              , todo chocolate con envuelto fino y moño. El{' '}
              <Link href="/ramos/ramo-con-oso" className="link-underline font-bold text-ink">
                ramo con oso
              </Link>
              , con peluche adentro, el que más se regala para novios. Y el{' '}
              <Link href="/ramos/ramo-de-peluche" className="link-underline font-bold text-ink">
                ramo de peluche
              </Link>
              , con las golosinas alrededor de un peluche, moño y tarjeta.
            </p>
            <p>
              También van muy bien entre los{' '}
              <Link href="/dia-de-la-madre" className="link-underline font-bold text-ink">
                regalos para el Día de la Madre
              </Link>
              , si tu mamá es más de lo dulce. Si buscás otra idea, mirá todos nuestros{' '}
              <Link href="/regalos-en-catamarca" className="link-underline font-bold text-ink">
                regalos en Catamarca a domicilio
              </Link>
              .
            </p>
          </div>
        </ReadMore>
      </section>

      <DeliveredPhotos title="Ramos que ya entregamos" photos={deliveredPhotos} />

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
