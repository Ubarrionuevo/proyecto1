import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '@/components/JsonLd';
import ProductGrid from '@/components/ProductGrid';
import StickerButton from '@/components/ui/StickerButton';
import { getWhatsAppUrl } from '@/lib/products';
import { pageMetadata } from '@/lib/seo';
import type { OriginData } from '@/lib/origins';

export function originMetadata(origin: OriginData) {
  return pageMetadata({
    title: origin.title,
    description: origin.description,
    path: origin.path,
  });
}

/* Página por origen: la estructura es común y todo el texto viene de origins.ts. */
export default function OriginPage({ origin }: { origin: OriginData }) {
  const crumbs = [
    { name: 'Inicio', path: '/' },
    { name: 'Enviar regalo a Catamarca', path: '/enviar-regalo-a-catamarca' },
    { name: origin.crumb },
  ];
  const whatsappUrl = getWhatsAppUrl(origin.whatsapp);

  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(origin.faqs)]} />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <span className="label">{origin.label}</span>
        <h1 className="display-lg mt-4 text-ink text-balance">{origin.h1}</h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
          {origin.lead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8">
          <StickerButton href={whatsappUrl} variant="wa" size="lg" wrap className="w-full sm:w-auto">
            {origin.cta}
          </StickerButton>
        </div>

        <h2 className="display-md mt-14 text-ink text-balance">{origin.timeTitle}</h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft max-w-prose">
          {origin.time.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <h2 className="display-md mt-14 text-ink text-balance">{origin.paymentTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {origin.payment.map((option) => (
            <div key={option.t} className="border border-rule bg-paper-card p-5">
              <h3 className="font-display text-xl font-semibold text-ink">{option.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{option.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft max-w-prose">
          Te pasamos los datos por WhatsApp y te confirmamos el total en pesos.
        </p>

        <h2 className="display-md mt-14 text-ink text-balance">{origin.occasionsTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {origin.occasions.map((occasion) => (
            <div key={occasion.t} className="border border-rule bg-paper-card p-5">
              <h3 className="font-display text-xl font-semibold text-ink">{occasion.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{occasion.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft max-w-prose">
          Se acerca fin de año: mirá las opciones de{' '}
          <Link href="/navidad" className="link-underline font-bold text-ink">
            regalos de Navidad a domicilio en Catamarca
          </Link>
          .
        </p>

        <div className="mt-14 border-l-2 border-butter pl-5">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink text-balance">
            {origin.proofTitle}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink-soft max-w-prose">{origin.proof}</p>
        </div>

        {origin.quote && (
          <figure className="mt-10 border-l-2 border-butter pl-5">
            <blockquote className="quote text-xl sm:text-2xl leading-snug text-ink">
              {origin.quote}
            </blockquote>
            <figcaption className="label mt-4 text-ink-soft">
              Ya nos pasó — y lo hacemos de nuevo
            </figcaption>
          </figure>
        )}

        <h2 className="display-md mt-14 text-ink text-balance">Qué le podés mandar</h2>
        <ProductGrid />
        <p className="mt-4 text-sm leading-relaxed text-ink-soft max-w-prose">
          El precio es en pesos argentinos; te confirmamos el total por WhatsApp.
        </p>

        <div className="mt-8">
          <StickerButton href={whatsappUrl} variant="wa" size="lg" wrap className="w-full sm:w-auto">
            {origin.cta}
          </StickerButton>
        </div>

        <p className="mt-6 text-sm text-ink-soft max-w-prose">
          ¿Querés ver cómo funciona en general? Te lo contamos en{' '}
          <Link href="/enviar-regalo-a-catamarca" className="link-underline font-bold text-ink">
            enviar regalos a Catamarca desde cualquier lugar
          </Link>
          .
        </p>
      </section>

      <Faq
        items={origin.faqs}
        label={`Dudas ${origin.crumb.toLowerCase()}`}
        title="Preguntas antes de pedir."
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
