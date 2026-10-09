import Link from 'next/link';
import Navbar from '@/components/Navbar';
import GeoBanner from '@/components/GeoBanner';
import SolutionSection from '@/components/SolutionSection';
import AdditionalGifts from '@/components/AdditionalGifts';
import ClientsMotion from '@/components/ClientsMotion';
import ProvinciasSection from '@/components/ProvinciasSection';
import AdditionalCta from '@/components/AdditionalCta';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Faq from '@/components/Faq';
import Reviews from '@/components/Reviews';
import JsonLd, { websiteJsonLd, localBusinessJsonLd, faqJsonLd } from '@/components/JsonLd';
import { homeFaqs } from '@/lib/faqs';
import { ArrowIcon } from '@/components/Icons';

const exploreLinks = [
  {
    href: '/desayunos-sorpresa-catamarca',
    title: 'Desayunos sorpresa',
    text: 'Qué traen, cómo se entregan y los dos modelos con precio.',
  },
  {
    href: '/ramos-de-golosinas-catamarca',
    title: 'Ramos de golosinas',
    text: 'Común, futbolero, de chocolates y con oso, armados a mano.',
  },
  {
    href: '/catalogo',
    title: 'Catálogo y precios',
    text: 'La lista completa de desayunos y ramos con lo que incluye cada uno.',
  },
  {
    href: '/dia-de-la-madre',
    title: 'Día de la Madre',
    text: 'Opciones para sorprender a mamá el domingo 18 de octubre.',
  },
  {
    href: '/enviar-regalo-a-catamarca',
    title: 'Enviar un regalo a Catamarca',
    text: 'Cómo encargarlo desde otra ciudad o país, paso a paso.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <JsonLd data={[websiteJsonLd(), localBusinessJsonLd(), faqJsonLd(homeFaqs)]} />
      <Navbar />
      <GeoBanner />
      <SolutionSection />
      <AdditionalGifts />
      <ClientsMotion number="03" />
      <ProvinciasSection />

      {/* Links descriptivos a las páginas internas */}
      <section aria-label="Seguí explorando" className="border-t border-rule py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <span className="label">Seguí explorando</span>
          <h2 className="display-md mt-3 text-ink">Todo lo que hacemos, en detalle.</h2>
          <div className="mt-8 border-t border-rule">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group grid grid-cols-12 gap-4 items-baseline py-5 border-b border-rule"
              >
                <span className="col-span-10 sm:col-span-11">
                  <span className="font-display text-xl sm:text-2xl font-semibold text-ink link-underline">
                    {link.title}
                  </span>
                  <span className="block mt-1 text-sm text-ink-soft">{link.text}</span>
                </span>
                <ArrowIcon className="col-span-2 sm:col-span-1 w-5 h-5 text-berry justify-self-end transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq items={homeFaqs} title="Preguntas sobre cómo pedir." />
      <Reviews />
      <AdditionalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
