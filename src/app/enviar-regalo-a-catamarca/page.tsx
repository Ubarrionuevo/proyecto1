import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { faqJsonLd, breadcrumbJsonLd } from '@/components/JsonLd';
import StickerButton from '@/components/ui/StickerButton';
import { enviarRegaloFaqs } from '@/lib/faqs';
import { destinosDestacados, getWhatsAppUrl, contact } from '@/lib/products';
import { ItalyFlagIcon, BoliviaFlagIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Enviar Regalos a Catamarca desde Afuera | LaPrincesaCta',
  description:
    'Estás lejos y querés regalarle a un familiar en Catamarca? Pedilo por WhatsApp desde donde estés: lo preparamos y entregamos en San Fernando del Valle.',
  alternates: { canonical: '/enviar-regalo-a-catamarca' },
  openGraph: {
    title: 'Enviar Regalos a Catamarca desde Afuera | LaPrincesaCta',
    description:
      'Pedí un regalo por WhatsApp desde donde estés y lo entregamos en San Fernando del Valle de Catamarca.',
    url: '/enviar-regalo-a-catamarca',
    type: 'article',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enviar Regalos a Catamarca desde Afuera | LaPrincesaCta',
    description:
      'Pedí un regalo por WhatsApp desde donde estés y lo entregamos en Catamarca.',
  },
};

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Enviar regalo a Catamarca' },
];

const pasos = [
  {
    n: '01',
    t: 'Vos escribís desde donde estés',
    d: 'Nos contás el nombre de quien recibe y el motivo. Nosotros coordinamos el resto con esa persona.',
  },
  {
    n: '02',
    t: 'Confirmás por transferencia',
    d: 'Te pasamos el detalle del pedido y abonás. Sin comisiones ni intermediarios: hablás directo con nosotras.',
  },
  {
    n: '03',
    t: 'Entregamos en Catamarca',
    d: 'Llevamos el desayuno o el ramo a la puerta, en San Fernando del Valle.',
  },
  {
    n: '04',
    t: 'Te avisamos que llegó',
    d: 'Te escribimos por WhatsApp cuando la entrega está hecha. Sin sorpresas.',
  },
];

export default function EnviarRegaloPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(enviarRegaloFaqs)]} />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <span className="label">Desde donde estés</span>
        <h1 className="display-lg mt-4 text-ink text-balance">
          Enviá un regalo a Catamarca desde donde estés
        </h1>
        <div className="mt-6 space-y-5 text-[15px] sm:text-base leading-relaxed text-ink-soft max-w-prose">
          <p>
            ¿Estás lejos? El regalo llega igual. Nos encargan regalos desde toda la Argentina
            y de otros países para sorprender a familiares y personas queridas que están en
            Catamarca: vos lo pedís desde donde estés y nosotras lo preparamos y lo llevamos
            hasta su puerta en San Fernando del Valle.
          </p>
          <p>
            Ya nos escribieron desde Mendoza, San Juan, San Luis, Santiago del Estero,
            Neuquén, Salta, Córdoba, Buenos Aires, Italia y Bolivia. No necesitás estar
            físicamente en Catamarca: con un mensaje de WhatsApp alcanza.
          </p>
        </div>

        <div className="mt-8">
          <span className="label">Tocá tu lugar y escribinos</span>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {destinosDestacados.map((place) => (
              <a
                key={place.name}
                href={getWhatsAppUrl(
                  `un regalo para un familiar en Catamarca (escribo desde ${place.name})`
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Escribinos por WhatsApp desde ${place.name}`}
                className="destino-chip touch-target"
              >
                {place.flag === 'it' && (
                  <span className="w-5 h-5 rounded-[2px] overflow-hidden shrink-0 ring-1 ring-ink/15">
                    <ItalyFlagIcon className="w-full h-full" />
                  </span>
                )}
                {place.flag === 'bo' && (
                  <span className="w-5 h-5 rounded-[2px] overflow-hidden shrink-0 ring-1 ring-ink/15">
                    <BoliviaFlagIcon className="w-full h-full" />
                  </span>
                )}
                {place.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-rule">
          {pasos.map((paso) => (
            <div
              key={paso.n}
              className="grid grid-cols-12 gap-4 py-6 border-b border-rule"
            >
              <span className="col-span-2 sm:col-span-1 font-display text-2xl text-berry-deep leading-none">
                {paso.n}
              </span>
              <div className="col-span-10 sm:col-span-11">
                <h2 className="font-display text-lg sm:text-xl text-ink">{paso.t}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft max-w-md">
                  {paso.d}
                </p>
              </div>
            </div>
          ))}
        </div>

        <figure className="mt-10 border-l-2 border-butter pl-5">
          <blockquote className="quote text-xl sm:text-2xl leading-snug text-ink">
            Un cliente que vive en Italia nos confió el desayuno de su mamá acá. Nos escribió,
            lo armamos y se lo entregamos.
          </blockquote>
          <figcaption className="label mt-4 text-ink-soft">
            Ya nos pasó — y lo hacemos de nuevo
          </figcaption>
        </figure>

        <div className="mt-8">
          <StickerButton
            href={getWhatsAppUrl('un regalo para un familiar en Catamarca desde otra provincia')}
            variant="wa"
            size="lg"
            wrap
            className="w-full sm:w-auto"
          >
            Quiero enviarle un regalo a un familiar
          </StickerButton>
        </div>

        <p className="mt-6 text-[13px] text-ink-soft">
          {contact.phoneDisplay} · <strong className="font-bold text-ink">{contact.hours}</strong>
        </p>
      </section>

      <Faq
        items={enviarRegaloFaqs}
        label="Dudas para encargar desde lejos"
        title="Preguntas para encargar desde lejos."
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
