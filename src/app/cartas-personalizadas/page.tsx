import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { faqJsonLd, breadcrumbJsonLd, serviceJsonLd } from '@/components/JsonLd';
import StickerButton from '@/components/ui/StickerButton';
import { cartasFaqs } from '@/lib/faqs';
import { getWhatsAppUrl, contact } from '@/lib/products';
import { openGraphBase, twitterImage } from '@/lib/seo';

const title = 'Cartas Personalizadas a Todo el País | LaPrincesaCta';
const description =
  'Cartas personalizadas con tu mensaje, enviadas a todo el país. Contanos a quién va dirigida y qué querés decirle: la preparamos y la despachamos.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/cartas-personalizadas' },
  openGraph: {
    ...openGraphBase,
    title,
    description,
    url: '/cartas-personalizadas',
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
  { name: 'Cartas personalizadas' },
];

const pasos = [
  {
    n: '01',
    t: 'Elegís a quién y qué decirle',
    d: 'Nos pasás el nombre de quien la recibe y el mensaje. Si no sabés cómo escribirlo, contanos la idea y lo armamos juntas.',
  },
  {
    n: '02',
    t: 'La preparamos',
    d: 'Pasamos el texto a la carta, cuidamos la presentación y la dejamos lista para viajar.',
  },
  {
    n: '03',
    t: 'La despachamos a su destino',
    d: 'Coordinamos la dirección y el envío a cualquier provincia del país.',
  },
  {
    n: '04',
    t: 'Te avisamos',
    d: 'Te escribimos por WhatsApp cuando la carta sale, para que sepas que el regalo ya está en camino.',
  },
];

const ocasiones = [
  {
    t: 'Cumpleaños',
    d: 'Para saludar a quien está lejos y que el día no pase como uno más.',
  },
  {
    t: 'Aniversarios',
    d: 'Para decir lo importante con tiempo y en papel.',
  },
  {
    t: 'Agradecimientos',
    d: 'Para cerrar un ciclo o reconocer un gesto que quedó pendiente.',
  },
  {
    t: 'Distancias',
    d: 'Para acortar la distancia con alguien que vive en otra provincia.',
  },
];

export default function CartasPersonalizadasPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: 'Cartas personalizadas a todo el país',
            description:
              'Cartas físicas personalizadas con tu mensaje, enviadas a cualquier punto de Argentina.',
            urlPath: '/cartas-personalizadas',
            serviceType: 'Cartas personalizadas',
            areaServed: { '@type': 'Country', name: 'Argentina' },
          }),
          faqJsonLd(cartasFaqs),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <span className="label">Cartas a todo el país</span>
        <h1 className="display-lg mt-4 text-ink text-balance">
          Cartas personalizadas enviadas a todo el país
        </h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
          <p>
            Una carta personalizada es un regalo que se guarda: la preparamos con el mensaje que
            vos nos dictes y la enviamos, físicamente, a cualquier punto de Argentina. No hace
            falta que estés en Catamarca ni que quien la reciba viva acá.
          </p>
          <p>
            La carta se arma a partir de lo que quieras decir: un cumpleaños, un aniversario, un
            agradecimiento o esas palabras que cuesta decir en voz alta. Nos pasás el nombre de
            quien la recibe y el texto; nosotras la dejamos lista para que llegue bien.
          </p>
          <p>
            Como es un envío físico, coordinamos todo por WhatsApp: destino, dirección y fecha.
            Se paga por transferencia y hablás directo con nosotras, sin intermediarios.
          </p>
          <p>
            Si además querés regalar un desayuno o un ramo en Catamarca, podés sumarlo desde el{' '}
            <Link href="/catalogo" className="link-underline font-bold text-ink">
              catálogo
            </Link>
            . Y si lo que buscás es sorprender a una empresa, mirá{' '}
            <Link href="/regalos-empresariales" className="link-underline font-bold text-ink">
              regalos empresariales
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 border-t border-rule">
          <h2 className="display-md mt-8 text-ink">Cómo se pide</h2>
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

        <h2 className="display-md mt-14 text-ink">Para qué ocasiones</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {ocasiones.map((item) => (
            <div key={item.t} className="border border-rule bg-paper-card p-5">
              <h3 className="font-display text-xl font-semibold text-ink">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-butter pl-5">
          <span className="label">Envíos</span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-2 text-balance">
            De Catamarca a todo el país.
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink-soft max-w-prose">
            Las cartas se envían físicamente a cualquier provincia de Argentina. Coordinamos el
            destino y la fecha por WhatsApp para que llegue en el momento que necesitás.
          </p>
        </div>

        <div className="mt-8">
          <StickerButton href={getWhatsAppUrl('una carta personalizada')} size="lg" wrap>
            Quiero enviar una carta
          </StickerButton>
        </div>

        <p className="mt-6 text-[13px] text-ink-soft">
          {contact.phoneDisplay} · <strong className="font-bold text-ink">{contact.hours}</strong>
        </p>
      </section>

      <Faq
        items={cartasFaqs}
        label="Dudas sobre las cartas"
        title="Preguntas sobre las cartas personalizadas."
      />
      <Footer />
      <FloatingWhatsApp topic="una carta personalizada" />
    </main>
  );
}
