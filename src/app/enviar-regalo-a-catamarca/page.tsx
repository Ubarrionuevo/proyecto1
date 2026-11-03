import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { faqJsonLd, breadcrumbJsonLd, serviceJsonLd } from '@/components/JsonLd';
import ProductGrid from '@/components/ProductGrid';
import StickerButton from '@/components/ui/StickerButton';
import { enviarRegaloFaqs } from '@/lib/faqs';
import { getWhatsAppUrl, contact } from '@/lib/products';
import { pageMetadata } from '@/lib/seo';
import { originLinks, siteConfig } from '@/lib/site';

const title = 'Enviar Regalos a Catamarca desde Cualquier Lugar';
const description =
  'Mandá un regalo a Catamarca desde otra provincia o país. Pagás con transferencia o Prex y te enviamos foto o video de la entrega. Pedí por WhatsApp.';

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: '/enviar-regalo-a-catamarca',
});

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Enviar regalo a Catamarca' },
];

const pasos = [
  {
    n: '01',
    t: 'Nos escribís por WhatsApp',
    d: 'Desde donde estés. Elegís el desayuno o el ramo, y si tenés dudas te ayudamos a decidir.',
  },
  {
    n: '02',
    t: 'Nos pasás los datos',
    d: 'El nombre de quien lo recibe, el motivo y el mensaje. Coordinamos el resto con esa persona.',
  },
  {
    n: '03',
    t: 'Confirmás el pago',
    d: 'Te pasamos el total en pesos y los datos para pagar. Hablás directo con nosotras, sin intermediarios.',
  },
  {
    n: '04',
    t: 'Lo entregamos y te lo mostramos',
    d: 'Lo llevamos a la puerta, en San Fernando del Valle, y te mandamos foto o video de la entrega.',
  },
];

const pagos = [
  {
    t: '¿Todavía tenés cuenta en Argentina?',
    d: 'Transferís en pesos, como si estuvieras acá.',
  },
  {
    t: '¿Solo tenés Prex?',
    d: 'Pagás desde Prex, sin necesidad de cuenta argentina.',
  },
];

export default function EnviarRegaloPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: 'Envío de regalos a Catamarca desde otras provincias y países',
            description,
            urlPath: '/enviar-regalo-a-catamarca',
            serviceType: 'Entrega de regalos a domicilio',
            areaServed: { '@type': 'City', name: siteConfig.city },
          }),
          faqJsonLd(enviarRegaloFaqs),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <h1 className="display-lg text-ink text-balance">
          Enviar regalos a Catamarca desde cualquier lugar del mundo
        </h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
          <p>
            <strong className="font-bold text-ink">Te mandamos foto o video de la entrega.</strong>{' '}
            Esa es la diferencia cuando estás lejos: no te quedás con la duda de si llegó, lo ves.
          </p>
          <p>
            Vos estás en otra provincia o en otro país; la persona que querés sorprender está en
            Catamarca. Nos escribís, y nosotras preparamos el desayuno o el ramo y lo llevamos hasta
            su puerta en San Fernando del Valle.
          </p>
        </div>

        <div className="mt-8">
          <StickerButton
            href={getWhatsAppUrl('un regalo a entregar en Catamarca desde lejos')}
            variant="wa"
            size="lg"
            wrap
            className="w-full sm:w-auto"
          >
            Quiero enviar un regalo
          </StickerButton>
        </div>

        <h2 className="display-md mt-14 text-ink">Cómo pedir desde lejos</h2>
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

        <h2 className="display-md mt-14 text-ink">Cómo pagar desde el exterior</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {pagos.map((pago) => (
            <div key={pago.t} className="border border-rule bg-paper-card p-5">
              <h3 className="font-display text-xl font-semibold text-ink">{pago.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pago.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          Te pasamos los datos por WhatsApp y te confirmamos el total en pesos.
        </p>

        <h2 className="display-md mt-14 text-ink">Día y horario de entrega</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          Atendemos de {siteConfig.hours.toLowerCase()}, siempre en hora de Argentina. El día y el
          horario de la entrega se coordinan por WhatsApp, también en hora de Argentina, así no hay
          confusiones con la diferencia horaria de donde estés.
        </p>

        <h2 className="display-md mt-14 text-ink">Una nota o una carta con tu mensaje</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          Los desayunos traen una nota escrita a mano con lo que quieras decirle. Si necesitás más
          espacio, mirá las{' '}
          <Link href="/cartas-personalizadas" className="link-underline font-bold text-ink">
            cartas personalizadas
          </Link>
          .
        </p>

        <div className="mt-14 border-l-2 border-butter pl-5">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink text-balance">
            La confirmación es la foto
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink-soft max-w-prose">
            Cuando lo entregamos, te llega por WhatsApp la foto o el video. Tu regalo también es
            para vos: ves el momento aunque estés a miles de kilómetros.
          </p>
        </div>

        <h2 className="display-md mt-14 text-ink">Nos compran desde</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          Toda la Argentina, Perú, Italia y Suiza. Son argentinos y catamarqueños que viven lejos y
          le mandan un regalo a alguien en Catamarca. Cada caso tiene su diferencia horaria y sus
          detalles:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {originLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border border-rule bg-paper-card p-4 font-display text-lg font-semibold text-ink link-underline"
            >
              Enviar regalo a Catamarca {link.label.toLowerCase()}
            </Link>
          ))}
        </div>

        <h2 className="display-md mt-14 text-ink">Qué podés mandar</h2>
        <ProductGrid />

        <div className="mt-8">
          <StickerButton
            href={getWhatsAppUrl('un regalo a entregar en Catamarca desde lejos')}
            variant="wa"
            size="lg"
            wrap
            className="w-full sm:w-auto"
          >
            Quiero enviar un regalo
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
      <FloatingWhatsApp topic="un regalo a entregar en Catamarca desde lejos" />
    </main>
  );
}
