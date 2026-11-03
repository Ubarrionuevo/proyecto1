import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd, {
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
  serviceJsonLd,
} from '@/components/JsonLd';
import Faq from '@/components/Faq';
import ProductGrid from '@/components/ProductGrid';
import StickerButton from '@/components/ui/StickerButton';
import { getWhatsAppUrl } from '@/lib/products';
import { productPages } from '@/lib/product-pages';
import { regalosFaqs } from '@/lib/faqs';
import { pageMetadata, ratingHook } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

/* Página para la búsqueda "regalos en Catamarca". El primer párrafo responde
   directo y nombra la marca: es lo que pueden citar los resúmenes de IA. Sin
   comparar con otros negocios ni afirmar que somos "los mejores". */

const title = 'Regalos en Catamarca a Domicilio | LaPrincesaCta';
const description = `Regalos a domicilio en Catamarca: desayunos sorpresa y ramos de golosinas. ${ratingHook}. Foto de la entrega. Pedí por WhatsApp.`;
const path = '/regalos-en-catamarca';
const topic = 'un regalo en Catamarca';

export const metadata: Metadata = pageMetadata({ title, description, path });

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Regalos en Catamarca' },
];

const ideas = [
  {
    who: 'Para un cumpleaños o un aniversario',
    href: '/desayunos/caja-de-madera',
    what: 'Desayuno sorpresa en caja de madera',
    why: 'Es la que más pedimos, y la madera queda para guardar cosas.',
  },
  {
    who: 'Para decir “gracias” o “te extraño”',
    href: '/desayunos/caja-de-carton',
    what: 'Desayuno sorpresa en caja de cartón',
    why: 'Café, delicias, taza personalizada y una nota a mano.',
  },
  {
    who: 'Para compartir en familia',
    href: '/ramos/ramo-comun',
    what: 'Ramo común de golosinas',
    why: 'Trae golosinas de todo tipo y es el que más enviamos a las familias.',
  },
  {
    who: 'Para un hincha',
    href: '/ramos/ramo-futbolero',
    what: 'Ramo futbolero de golosinas',
    why: 'Se arma por pedido con los colores del club y la camiseta adentro.',
  },
  {
    who: 'Para quien prefiere el chocolate',
    href: '/ramos/ramo-de-chocolates',
    what: 'Ramo de chocolates',
    why: 'Todo chocolate, con envuelto fino y moño.',
  },
  {
    who: 'Para tu pareja',
    href: '/ramos/ramo-con-oso',
    what: 'Ramo con oso de peluche',
    why: 'Golosinas y un oso de peluche: es el ramo que más se regala a novios y a chicas.',
  },
];

const steps = [
  `Nos escribís por WhatsApp al ${siteConfig.phoneDisplay}, ${siteConfig.hoursCopy}.`,
  'Nos contás el nombre de quien lo recibe, el motivo y el mensaje de la nota.',
  'Pagás por transferencia en pesos. Desde el exterior, también podés hacerlo con Prex.',
  'Lo llevamos hasta la puerta y te mandamos foto o video de la entrega.',
];

export default function RegalosEnCatamarcaPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: 'Regalos a domicilio en Catamarca',
            description,
            urlPath: path,
            serviceType: 'Entrega de regalos a domicilio',
            areaServed: { '@type': 'City', name: siteConfig.city },
          }),
          itemListJsonLd(
            Object.values(productPages).map(({ product, seoName, urlPath }) => ({
              name: seoName,
              urlPath,
              image: product.images[0].src,
            }))
          ),
          faqJsonLd(regalosFaqs),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <span className="label">Regalos a domicilio</span>
        <h1 className="display-lg mt-4 text-ink text-balance">Regalos en Catamarca a domicilio</h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
          <p>
            {siteConfig.name} prepara regalos y los lleva a domicilio en {siteConfig.city}:
            desayunos sorpresa en caja de madera o de cartón, y ramos de golosinas, de chocolates,
            futboleros o con oso de peluche. Se piden por WhatsApp, {siteConfig.hoursCopy}, también
            desde otras provincias o desde el exterior.
          </p>
          <p>
            Te mandamos foto o video de la entrega, y tenemos{' '}
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-bold text-ink"
            >
              {siteConfig.googleRating} en Google con {siteConfig.googleReviews} opiniones
            </a>
            . Los precios te los pasamos por WhatsApp.
          </p>
        </div>

        <div className="mt-8">
          <StickerButton href={getWhatsAppUrl(topic)} size="lg">
            Quiero mandar un regalo
          </StickerButton>
        </div>

        <h2 className="display-md mt-14 text-ink">Qué regalar en Catamarca según para quién sea</h2>
        <dl className="mt-6 border-t border-rule">
          {ideas.map((idea) => (
            <div
              key={idea.href}
              className="grid sm:grid-cols-12 gap-x-6 gap-y-1 py-4 border-b border-rule"
            >
              <dt className="sm:col-span-5 text-sm font-bold text-ink">{idea.who}</dt>
              <dd className="sm:col-span-7 text-sm leading-relaxed text-ink-soft">
                <Link href={idea.href} className="link-underline font-bold text-ink">
                  {idea.what}
                </Link>
                . {idea.why}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-base leading-relaxed text-ink-soft max-w-prose">
          ¿Preferís decirlo por escrito? También hacemos{' '}
          <Link href="/cartas-personalizadas" className="link-underline font-bold text-ink">
            cartas personalizadas
          </Link>
          . Y para fechas puntuales, mirá los{' '}
          <Link href="/navidad" className="link-underline font-bold text-ink">
            regalos de Navidad
          </Link>{' '}
          y los{' '}
          <Link href="/dia-de-la-madre" className="link-underline font-bold text-ink">
            regalos para el Día de la Madre
          </Link>
          .
        </p>

        <h2 className="display-md mt-14 text-ink">Una alternativa a regalar flores</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          No vendemos flores: nuestros ramos son de golosinas y de chocolates. Si pensabas regalar
          flores en Catamarca y querés algo distinto, se entregan como un ramo y además se comen.
          Mirá el{' '}
          <Link href="/ramos/ramo-de-chocolates" className="link-underline font-bold text-ink">
            ramo de chocolates
          </Link>
          , el{' '}
          <Link href="/ramos/ramo-con-oso" className="link-underline font-bold text-ink">
            ramo con oso de peluche
          </Link>{' '}
          o todos los{' '}
          <Link href="/ramos-de-golosinas-catamarca" className="link-underline font-bold text-ink">
            ramos de golosinas
          </Link>
          .
        </p>

        <h2 className="display-md mt-14 text-ink">Todos los regalos</h2>
        <ProductGrid />

        <h2 className="display-md mt-14 text-ink">Cómo mandar un regalo en Catamarca</h2>
        <ol className="mt-6 list-decimal pl-5 space-y-3 text-base leading-relaxed text-ink-soft max-w-prose">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h2 className="display-md mt-14 text-ink">Si no estás en Catamarca</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          Podés pedirlo igual, desde otra provincia o desde otro país. Te contamos cómo funciona en{' '}
          <Link href="/enviar-regalo-a-catamarca" className="link-underline font-bold text-ink">
            enviar un regalo a Catamarca desde lejos
          </Link>
          .
        </p>

        <div className="mt-10">
          <StickerButton href={getWhatsAppUrl(topic)} variant="wa" size="lg">
            Escribinos por tu regalo
          </StickerButton>
        </div>
      </section>

      <Faq
        items={regalosFaqs}
        label="Dudas sobre regalos"
        title="Preguntas sobre regalos en Catamarca."
      />

      <Footer />
      <FloatingWhatsApp topic={topic} />
    </main>
  );
}
