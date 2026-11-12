import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd, { breadcrumbJsonLd } from '@/components/JsonLd';
import { GUIDES_PATH } from '@/components/GuidePage';
import { guides } from '@/lib/guias';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Guías de Regalo: Qué Regalar y Cómo Sorprender | LaPrincesaCta',
  description:
    'Ideas de qué regalar según para quién y la ocasión, cómo dar una sorpresa y qué escribir en la tarjeta. Regalos a domicilio en Catamarca.',
  path: GUIDES_PATH,
});

const crumbs = [{ name: 'Inicio', path: '/' }, { name: 'Guías de regalo' }];

const groups = [
  { title: 'Qué regalar', kind: 'que-regalar' as const },
  { title: 'Cómo hacerlo', kind: 'como' as const },
];

export default function GuiasPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd data={[breadcrumbJsonLd(crumbs)]} />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-16">
        <h1 className="display-lg text-ink text-balance">Guías de regalo</h1>
        <p className="mt-6 text-base leading-relaxed text-ink-soft max-w-prose">
          Ideas para cuando no sabés qué regalar, y consejos para que la sorpresa salga bien. Todo lo
          que recomendamos se entrega a domicilio en San Fernando del Valle de Catamarca.
        </p>

        {groups.map((group) => (
          <div key={group.kind}>
            <h2 className="display-md mt-14 text-ink">{group.title}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {guides
                .filter((g) => g.kind === group.kind)
                .map((g) => (
                  <Link
                    key={g.slug}
                    href={`${GUIDES_PATH}/${g.slug}`}
                    className="block border border-rule bg-paper-card p-5 hover:border-ink/40"
                  >
                    <span className="font-display text-xl font-semibold text-ink link-underline">
                      {g.label}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-ink-soft">
                      {g.description}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
      <FloatingWhatsApp topic="una idea de regalo" />
    </main>
  );
}
