import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '@/components/JsonLd';
import StickerButton from '@/components/ui/StickerButton';
import { getWhatsAppUrl } from '@/lib/products';
import { pageMetadata } from '@/lib/seo';
import { guides, type Guide } from '@/lib/guias';

export const GUIDES_PATH = '/guias-de-regalo';

export function guideMetadata(guide: Guide) {
  return pageMetadata({
    title: `${guide.title} | LaPrincesaCta`,
    description: guide.description,
    path: `${GUIDES_PATH}/${guide.slug}`,
  });
}

/* Guía de regalo: la estructura es común y el texto sale de guias.ts. */
export default function GuidePage({ guide }: { guide: Guide }) {
  const crumbs = [
    { name: 'Inicio', path: '/' },
    { name: 'Guías de regalo', path: GUIDES_PATH },
    { name: guide.crumb },
  ];
  const whatsappUrl = getWhatsAppUrl(guide.whatsapp);
  const others = guides.filter((g) => g.slug !== guide.slug);

  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(guide.faqs)]} />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <article className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <h1 className="display-lg text-ink text-balance">{guide.h1}</h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
          {guide.lead.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {guide.sections.map((section) => (
          <section key={section.h2}>
            <h2 className="display-md mt-14 text-ink text-balance">{section.h2}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="mt-4 space-y-2 list-disc pl-5 text-base leading-relaxed text-ink-soft max-w-prose marker:text-berry">
                {section.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
            {section.items && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.t} className="border border-rule bg-paper-card p-5">
                    <h3 className="font-display text-xl font-semibold text-ink">{item.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.d}</p>
                    {item.links && (
                      <ul className="mt-3 space-y-1 text-sm">
                        {item.links.map((link) => (
                          <li key={link.href}>
                            <Link href={link.href} className="link-underline font-bold text-ink">
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <div className="mt-10">
          <StickerButton href={whatsappUrl} variant="wa" size="lg" wrap className="w-full sm:w-auto">
            {guide.cta}
          </StickerButton>
        </div>

        <h2 className="display-md mt-14 text-ink text-balance">Otras guías</h2>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {others.map((g) => (
            <li key={g.slug}>
              <Link href={`${GUIDES_PATH}/${g.slug}`} className="link-underline font-bold text-ink">
                {g.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-ink-soft max-w-prose">
          ¿Ya sabés qué querés? Mirá el{' '}
          <Link href="/catalogo" className="link-underline font-bold text-ink">
            catálogo de regalos a domicilio en Catamarca
          </Link>
          .
        </p>
      </article>

      <Faq items={guide.faqs} label={`Dudas: ${guide.crumb.toLowerCase()}`} title="Preguntas frecuentes." />
      <Footer />
      <FloatingWhatsApp topic={guide.whatsapp} />
    </main>
  );
}
