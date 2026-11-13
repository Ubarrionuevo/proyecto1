import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/components/JsonLd';
import ProductGrid from '@/components/ProductGrid';
import StickerButton from '@/components/ui/StickerButton';
import { getWhatsAppUrl } from '@/lib/products';
import { pageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import type { FaqItem } from '@/lib/faqs';

/* Regalos personalizados: solo lo que ya está confirmado en la web (sabores,
   tema, decoración y mensaje a elección; taza personalizada y nota a mano en
   los desayunos; ramo futbolero del club; tarjeta en las cajas de corazón;
   cartas personalizadas). Nada de estampados, grabados ni nombres impresos:
   no es lo que se hace. */

const path = '/regalos-personalizados-catamarca';
const title = 'Regalos Personalizados en Catamarca a Domicilio | LaPrincesaCta';
const description =
  'Desayunos y ramos personalizados en Catamarca: elegís sabores, tema, decoración y mensaje, y lo llevamos a domicilio. Pedí por WhatsApp.';

export const metadata: Metadata = pageMetadata({ title, description, path });

const crumbs = [{ name: 'Inicio', path: '/' }, { name: 'Regalos personalizados' }];

const opciones = [
  {
    t: 'Desayunos personalizados',
    d: 'Café o té, delicias artesanales, taza personalizada y una nota escrita a mano con tu mensaje. Elegís la caja: de madera o de cartón.',
    links: [
      { href: '/desayunos/caja-de-madera', name: 'Desayuno en caja de madera' },
      { href: '/desayunos/caja-de-carton', name: 'Desayuno en caja de cartón' },
    ],
  },
  {
    t: 'Ramo futbolero de su club',
    d: 'Se arma por pedido con los colores del club que nos digas, escudos, golosinas y la camiseta adentro.',
    links: [{ href: '/ramos/ramo-futbolero', name: 'Ramo futbolero' }],
  },
  {
    t: 'Ramos a tu manera',
    d: 'Golosinas, chocolates, con oso o con otro peluche. Contanos qué le gusta y lo armamos con esa combinación.',
    links: [
      { href: '/ramos/ramo-comun', name: 'Ramo común de golosinas' },
      { href: '/ramos/ramo-de-chocolates', name: 'Ramo de chocolates' },
      { href: '/ramos/ramo-de-peluche', name: 'Ramo de peluche' },
    ],
  },
  {
    t: 'Chocolates con tu mensaje',
    d: 'Cajas con forma de corazón, con moño y una tarjeta con lo que le quieras decir.',
    links: [
      { href: '/cajas/caja-ventana-corazon', name: 'Caja de ventana de corazón' },
      { href: '/cajas/corazon-transparente', name: 'Corazón transparente' },
    ],
  },
  {
    t: 'Una carta con tus palabras',
    d: 'Con el nombre de quien la recibe y el mensaje que nos pases. Se puede sumar a cualquier regalo.',
    links: [{ href: '/cartas-personalizadas', name: 'Cartas personalizadas' }],
  },
];

const pasos = [
  { n: '01', t: 'Contanos para quién es', d: 'El nombre, la ocasión y qué le gusta: sabores, colores, su club, lo que no come.' },
  { n: '02', t: 'Elegimos juntos', d: 'Te proponemos cómo armarlo y te pasamos el presupuesto por WhatsApp.' },
  { n: '03', t: 'Nos pasás el mensaje', d: 'Para la nota, la tarjeta o la carta. Con tus palabras.' },
  { n: '04', t: 'Lo llevamos a su puerta', d: `En ${siteConfig.city}, el día y el horario que coordinemos. Si estás lejos, te mandamos foto o video.` },
];

const faqs: FaqItem[] = [
  {
    q: '¿Dónde comprar regalos personalizados en Catamarca?',
    a: `En ${siteConfig.name}, una regalería de ${siteConfig.city}. Armamos desayunos y ramos a tu manera y los llevamos a domicilio. Se piden por WhatsApp al ${siteConfig.phoneDisplay}, ${siteConfig.hoursCopy}.`,
  },
  {
    q: '¿Qué se puede personalizar?',
    a: 'Los sabores, el tema, la decoración y el mensaje. Los desayunos traen taza personalizada y una nota escrita a mano, y el ramo futbolero se arma con los colores del club que elijas.',
  },
  {
    q: '¿Cuánto sale un regalo personalizado?',
    a: 'Depende de lo que elijas. Contanos qué tenés en mente y te pasamos el presupuesto por WhatsApp.',
  },
  {
    q: '¿Con cuánta anticipación tengo que pedir?',
    a: 'No tenemos un plazo fijo publicado. Escribinos por WhatsApp con la fecha que necesitás y te confirmamos la disponibilidad.',
  },
  {
    q: '¿Dónde entregan?',
    a: `Solo en ${siteConfig.city}. Vos podés pedir desde otra provincia o desde otro país; quien lo recibe tiene que estar en la Capital de Catamarca.`,
  },
];

const whatsapp = 'un regalo personalizado';

export default function RegalosPersonalizadosPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: 'Regalos personalizados a domicilio en Catamarca',
            description,
            urlPath: path,
            serviceType: 'Regalos personalizados a domicilio',
            areaServed: { '@type': 'City', name: siteConfig.city },
          }),
          faqJsonLd(faqs),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <h1 className="display-lg text-ink text-balance">
          Regalos personalizados en Catamarca, armados a tu manera
        </h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
          <p className="text-ink">
            Desayunos y ramos personalizados, entregados a domicilio en {siteConfig.city}. Elegís
            los sabores, el tema, la decoración y el mensaje, y nosotras lo armamos y lo llevamos
            hasta su puerta.
          </p>
          <p>
            Somos una regalería de Catamarca y armamos cada regalo a tu manera: nos contás para
            quién es y qué le gusta, y lo preparamos pensando en esa persona.
          </p>
        </div>

        <div className="mt-8">
          <StickerButton href={getWhatsAppUrl(whatsapp)} variant="wa" size="lg" wrap className="w-full sm:w-auto">
            Quiero un regalo personalizado
          </StickerButton>
        </div>

        <h2 className="display-md mt-14 text-ink text-balance">Qué podés personalizar</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {opciones.map((op) => (
            <div key={op.t} className="border border-rule bg-paper-card p-5">
              <h3 className="font-display text-xl font-semibold text-ink">{op.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{op.d}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {op.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link-underline font-bold text-ink">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="display-md mt-14 text-ink">Cómo se arma</h2>
        <div className="mt-4 border-t border-rule">
          {pasos.map((paso) => (
            <div key={paso.n} className="grid grid-cols-12 gap-4 py-6 border-b border-rule">
              <span className="col-span-2 sm:col-span-1 font-display text-2xl text-berry-deep leading-none">
                {paso.n}
              </span>
              <div className="col-span-10 sm:col-span-11">
                <h3 className="font-display text-lg sm:text-xl text-ink">{paso.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft max-w-md">{paso.d}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="display-md mt-14 text-ink text-balance">¿No sabés qué mensaje poner?</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          Tenemos ideas y ejemplos en{' '}
          <Link href="/guias-de-regalo/que-escribir-en-la-tarjeta" className="link-underline font-bold text-ink">
            qué escribir en la tarjeta de un regalo
          </Link>
          , y más ideas según para quién es en las{' '}
          <Link href="/guias-de-regalo" className="link-underline font-bold text-ink">
            guías de regalo
          </Link>
          .
        </p>

        <h2 className="display-md mt-14 text-ink">Todos los regalos</h2>
        <ProductGrid />

        <div className="mt-8">
          <StickerButton href={getWhatsAppUrl(whatsapp)} variant="wa" size="lg" wrap className="w-full sm:w-auto">
            Quiero un regalo personalizado
          </StickerButton>
        </div>
      </section>

      <Faq items={faqs} label="Dudas sobre regalos personalizados" title="Preguntas frecuentes." />
      <Footer />
      <FloatingWhatsApp topic={whatsapp} />
    </main>
  );
}
