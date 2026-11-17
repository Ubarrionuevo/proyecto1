import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SeasonalLink from '@/components/SeasonalLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd, { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/components/JsonLd';
import StickerButton from '@/components/ui/StickerButton';
import { desayunos, getWhatsAppUrl } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import { pageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import type { FaqItem } from '@/lib/faqs';

/* Meriendas sorpresa: confirmado por la dueña que es lo mismo que el desayuno
   (misma caja y mismo contenido), entregado a la tarde. No sumar productos ni
   contenidos que no estén en el desayuno. */

const path = '/meriendas-sorpresa-catamarca';
const title = 'Meriendas Sorpresa y Box de Merienda a Domicilio en Catamarca';
const description =
  'Meriendas sorpresa a domicilio en Catamarca: café o té, delicias, taza personalizada y nota a mano, en caja de madera o de cartón. Pedí por WhatsApp.';

export const metadata: Metadata = pageMetadata({ title, description, path, image: desayunos[0].images[0] });

const crumbs = [{ name: 'Inicio', path: '/' }, { name: 'Meriendas sorpresa' }];

const trae = ['Café o té', 'Delicias artesanales', 'Taza personalizada', 'Nota escrita a mano'];

const cajas = desayunos.map((product) => ({
  product,
  page: productPageById[product.id],
  label: product.id.includes('madera') ? 'Caja de madera' : 'Caja de cartón premium',
}));

const faqs: FaqItem[] = [
  {
    q: '¿Dónde comprar una merienda sorpresa en Catamarca?',
    a: `En ${siteConfig.name}, por WhatsApp al ${siteConfig.phoneDisplay}. La armamos y la llevamos a domicilio en ${siteConfig.city}.`,
  },
  {
    q: '¿Qué trae la merienda sorpresa?',
    a: 'Lo mismo que el desayuno sorpresa: café o té, delicias artesanales, taza personalizada y una nota escrita a mano, en caja de madera o de cartón premium.',
  },
  {
    q: '¿Cuál es la diferencia con el desayuno sorpresa?',
    a: 'El contenido es el mismo. Cambia el momento: la merienda se entrega a la tarde, en el horario que coordinemos por WhatsApp.',
  },
  {
    q: '¿Hacen box de merienda?',
    a: 'Sí. La merienda va armada en una caja (box) de madera o de cartón premium, bien envuelta y lista para regalar.',
  },
  {
    q: '¿Se puede mandar una merienda desde otra provincia o desde otro país?',
    a: `Sí. La pedís por WhatsApp y la entregamos en ${siteConfig.city}. Te mandamos foto o video de la entrega.`,
  },
  {
    q: '¿Cuánto sale?',
    a: 'Te pasamos el presupuesto por WhatsApp según la caja que elijas.',
  },
  {
    q: '¿En qué horario atienden?',
    a: `${siteConfig.hours}, en hora de Argentina.`,
  },
];

const whatsapp = 'una merienda sorpresa';

export default function MeriendasPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: 'Meriendas sorpresa a domicilio en Catamarca',
            description,
            urlPath: path,
            serviceType: 'Meriendas sorpresa a domicilio',
            areaServed: { '@type': 'City', name: siteConfig.city },
          }),
          faqJsonLd(faqs),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <h1 className="display-lg text-ink text-balance">Meriendas sorpresa a domicilio en Catamarca</h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
          <p className="text-ink">
            Una merienda armada en caja y entregada a la tarde en {siteConfig.city}. Trae lo mismo
            que nuestro desayuno sorpresa: café o té, delicias artesanales, taza personalizada y una
            nota escrita a mano.
          </p>
          <p>
            Es ideal si la persona no está en casa a la mañana o si querés que la sorpresa llegue
            después del trabajo o del colegio. Coordinamos el horario por WhatsApp.
          </p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {trae.map((item) => (
            <li key={item} className="rounded-full bg-paper-card px-4 py-2 text-sm font-bold text-ink">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <StickerButton href={getWhatsAppUrl(whatsapp)} variant="wa" size="lg" wrap className="w-full sm:w-auto">
            Quiero una merienda sorpresa
          </StickerButton>
        </div>

        <h2 className="display-md mt-14 text-ink text-balance">Elegí la caja</h2>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {cajas.map(({ product, page, label }) => (
            <div key={product.id} className="min-w-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-paper-deep">
                <Image
                  src={product.images[0].src}
                  alt={`${label} como la que usamos para desayunos y meriendas sorpresa en Catamarca`}
                  fill
                  sizes="(max-width: 640px) 50vw, 360px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 font-display text-lg text-ink">{label}</h3>
              <p className="mt-1 text-sm leading-snug text-ink-soft">{product.description}</p>
              <Link href={page.urlPath} className="mt-2 inline-block text-sm link-underline font-bold text-ink">
                Ver la {label.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>

        <h2 className="display-md mt-14 text-ink text-balance">¿Desayuno o merienda?</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          Es la misma sorpresa; solo cambia la hora de la entrega. Si querés que arranque el día
          festejando, mirá los{' '}
          <Link href="/desayunos-sorpresa-catamarca" className="link-underline font-bold text-ink">
            desayunos sorpresa en Catamarca
          </Link>
          . Para sumarle algo dulce, están los{' '}
          <Link href="/ramos-de-golosinas-catamarca" className="link-underline font-bold text-ink">
            ramos de golosinas
          </Link>
          .
        </p>

        <h2 className="display-md mt-14 text-ink text-balance">¿Vivís lejos?</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
          La pedís desde cualquier provincia o país y te mandamos la foto de la entrega. Mirá cómo{' '}
          <Link href="/enviar-regalo-a-catamarca" className="link-underline font-bold text-ink">
            enviar un regalo a Catamarca
          </Link>
          .
        </p>

        <SeasonalLink className="mt-8" />

        <div className="mt-8">
          <StickerButton href={getWhatsAppUrl(whatsapp)} variant="wa" size="lg" wrap className="w-full sm:w-auto">
            Quiero una merienda sorpresa
          </StickerButton>
        </div>
      </section>

      <Faq items={faqs} label="Dudas sobre las meriendas" title="Preguntas frecuentes." />
      <Footer />
      <FloatingWhatsApp topic={whatsapp} />
    </main>
  );
}
