import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { faqJsonLd, breadcrumbJsonLd, serviceJsonLd } from '@/components/JsonLd';
import StickerButton from '@/components/ui/StickerButton';
import { empresasFaqs } from '@/lib/faqs';
import { getWhatsAppUrl, contact } from '@/lib/products';
import { siteConfig } from '@/lib/site';
import { openGraphBase, twitterImage } from '@/lib/seo';

const title = 'Regalos Empresariales de Fin de Año en Catamarca';
const description =
  'Regalos empresariales y de fin de año para empleados y clientes: propuestas con desayunos y ramos en Catamarca. Pedí tu propuesta por WhatsApp.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/regalos-empresariales' },
  openGraph: {
    ...openGraphBase,
    title,
    description,
    url: '/regalos-empresariales',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [twitterImage],
  },
};

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Regalos empresariales' },
];

const pasos = [
  {
    n: '01',
    t: 'Nos contás qué necesitás',
    d: 'Cantidad de regalos, fecha, destino y para quién son: empleados, clientes o equipo.',
  },
  {
    n: '02',
    t: 'Te pasamos una propuesta',
    d: 'Armamos la selección con nuestros desayunos y ramos y la adaptamos a tu presupuesto.',
  },
  {
    n: '03',
    t: 'Confirmás el pedido',
    d: 'Se paga por transferencia y coordinamos la entrega o el envío de cada regalo.',
  },
  {
    n: '04',
    t: 'Entregamos',
    d: 'Llevamos los regalos en Catamarca o los despachamos al resto del país.',
  },
];

const momentos = [
  {
    t: 'Fin de año',
    d: 'Para cerrar el año con el equipo y con los clientes que acompañaron.',
  },
  {
    t: 'Cumpleaños del equipo',
    d: 'Para que cada persona tenga su momento dentro de la empresa.',
  },
  {
    t: 'Agradecimientos a clientes',
    d: 'Para reforzar el vínculo después de un proyecto o una compra.',
  },
  {
    t: 'Eventos y aniversarios',
    d: 'Para fechas especiales, lanzamientos o encuentros de la empresa.',
  },
];

export default function RegalosEmpresarialesPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: 'Regalos empresariales en Catamarca y todo el país',
            description:
              'Propuestas de desayunos y ramos para empleados y clientes de empresas, con entrega en Catamarca y envíos al resto del país.',
            urlPath: '/regalos-empresariales',
            serviceType: 'Regalos empresariales',
            areaServed: [
              { '@type': 'City', name: siteConfig.city },
              { '@type': 'Country', name: 'Argentina' },
            ],
          }),
          faqJsonLd(empresasFaqs),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <h1 className="display-lg text-ink text-balance">
          Regalos empresariales en Catamarca y a todo el país
        </h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
          <p>
            Los regalos empresariales son una forma concreta de cuidar el vínculo con tu equipo y
            con tus clientes. Armamos propuestas con nuestros desayunos y ramos, pensadas para
            pedidos de empresa, y las adaptamos a la cantidad, la fecha y el presupuesto.
          </p>
          <p>
            Sirven para fin de año, para el cumpleaños de alguien del equipo, para agradecer a un
            cliente o para acompañar un evento. Nos contás para quién son y qué querés transmitir,
            y te pasamos una propuesta por WhatsApp.
          </p>
          <p>
            Entregamos en San Fernando del Valle de Catamarca y despachamos pedidos al resto del
            país. Se paga por transferencia y hablás directo con nosotras, sin intermediarios.
          </p>
          <p>
            Si además querés sumar una carta personalizada a cada regalo, mirá{' '}
            <Link href="/cartas-personalizadas" className="link-underline font-bold text-ink">
              cartas personalizadas
            </Link>
            . Y si querés ver las opciones una por una, está el{' '}
            <Link href="/catalogo" className="link-underline font-bold text-ink">
              catálogo
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 border-t border-rule">
          <h2 className="display-md mt-8 text-ink">Cómo trabajamos</h2>
          <div className="mt-4">
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
        </div>

        <h2 className="display-md mt-14 text-ink">Para qué momentos</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {momentos.map((item) => (
            <div key={item.t} className="border border-rule bg-paper-card p-5">
              <h3 className="font-display text-xl font-semibold text-ink">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.d}</p>
            </div>
          ))}
        </div>

        <h2 className="display-md mt-14 text-ink text-balance">
          Regalos de fin de año para empresas
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          Diciembre es el momento en que más se nota un gesto con el equipo y con los clientes que
          te acompañaron. Pasanos cuántos regalos necesitás y para qué fecha, y armamos una
          propuesta de fin de año con desayunos y ramos. Si es un regalo más personal, también
          tenemos{' '}
          <Link href="/navidad" className="link-underline font-bold text-ink">
            regalos de Navidad a domicilio
          </Link>
          .
        </p>

        <div className="mt-12 border-l-2 border-butter pl-5">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink text-balance">
            En Catamarca y a todo el país.
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink-soft max-w-prose">
            Entregamos en San Fernando del Valle y despachamos pedidos al resto de Argentina.
            Contanos el destino de cada regalo y coordinamos la entrega.
          </p>
        </div>

        <div className="mt-8">
          <StickerButton href={getWhatsAppUrl('regalos empresariales para mi empresa')} size="lg" wrap>
            Pedir una propuesta
          </StickerButton>
        </div>

        <p className="mt-6 text-[13px] text-ink-soft">
          {contact.phoneDisplay} · <strong className="font-bold text-ink">{contact.hours}</strong>
        </p>
      </section>

      <Faq
        items={empresasFaqs}
        label="Dudas para empresas"
        title="Preguntas sobre regalos empresariales."
      />
      <Footer />
      <FloatingWhatsApp topic="regalos empresariales para mi empresa" />
    </main>
  );
}
