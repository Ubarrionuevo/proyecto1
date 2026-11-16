import Link from 'next/link';
import Navbar from '@/components/Navbar';
import {
  AnnounceBar,
  CajasPop,
  DesayunosPop,
  FarPop,
  HowPop,
  PhotosPop,
  PopHero,
  PopTicker,
  RamosPop,
  ReviewPop,
} from '@/components/home/PopHome';
import QuickFacts from '@/components/QuickFacts';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Faq from '@/components/Faq';
import ReadMore from '@/components/ui/ReadMore';
import JsonLd, { websiteJsonLd, localBusinessJsonLd, faqJsonLd } from '@/components/JsonLd';
import { homeFaqs } from '@/lib/faqs';
import { siteConfig } from '@/lib/site';

export default function Home() {
  return (
    <main className="min-h-dvh overflow-x-clip bg-cream text-ink">
      <JsonLd data={[websiteJsonLd(), localBusinessJsonLd(), faqJsonLd(homeFaqs)]} />
      <AnnounceBar />
      <Navbar />
      <PopHero />
      <PopTicker />

      <DesayunosPop />
      <RamosPop />
      <CajasPop />
      <HowPop />
      <FarPop />
      <PhotosPop />
      <ReviewPop />

      <section className="border-t border-rule py-8 sm:py-10">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <ReadMore
            variant="section"
            summary={
              <h2 className="display-md text-ink text-balance">
                Desayunos a domicilio en Catamarca, con o sin sorpresa
              </h2>
            }
          >
            <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
              Si buscás desayunos en Catamarca, los armamos completos y los llevamos hasta la puerta
              en {siteConfig.city}. Pueden ser para regalar o para vos: los desayunos a domicilio se
              piden por WhatsApp, {siteConfig.hoursCopy}. Mirá la{' '}
              <Link href="/desayunos/caja-de-madera" className="link-underline font-bold text-ink">
                caja de madera
              </Link>
              , la{' '}
              <Link href="/desayunos/caja-de-carton" className="link-underline font-bold text-ink">
                caja de cartón
              </Link>{' '}
              o sumale un{' '}
              <Link href="/ramos/ramo-futbolero" className="link-underline font-bold text-ink">
                ramo futbolero de golosinas
              </Link>{' '}
              o un{' '}
              <Link href="/ramos/ramo-con-oso" className="link-underline font-bold text-ink">
                ramo con oso de peluche
              </Link>
              .
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
              ¿Buscás otra idea? Mirá todos nuestros{' '}
              <Link href="/regalos-en-catamarca" className="link-underline font-bold text-ink">
                regalos en Catamarca a domicilio
              </Link>
              , según para quién sea.
            </p>
          </ReadMore>
        </div>
      </section>

      <QuickFacts />

      <Faq items={homeFaqs} title="Preguntas sobre cómo pedir." />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
