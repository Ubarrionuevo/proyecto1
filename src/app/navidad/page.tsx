import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '@/components/JsonLd';
import Faq from '@/components/Faq';
import ProductGrid from '@/components/ProductGrid';
import StickerButton from '@/components/ui/StickerButton';
import { getWhatsAppUrl } from '@/lib/products';
import { navidadFaqs } from '@/lib/faqs';
import { pageMetadata } from '@/lib/seo';
import { originLinks } from '@/lib/site';

/* Evergreen: sin año en la URL, el H1 ni el texto, para reutilizarla cada año.
   TODO: sumar la fecha límite y la entrega del 24 y el 25 de diciembre cuando el
   dueño las confirme (ver TODO-contenido.md). Hasta entonces no se publican. */

export const metadata: Metadata = pageMetadata({
  title: 'Regalos de Navidad a Domicilio en Catamarca | LaPrincesaCta',
  description:
    'Desayunos sorpresa y ramos de golosinas para regalar en Navidad en Catamarca. Mandalos desde donde estés y recibí foto de la entrega. Pedí por WhatsApp.',
  path: '/navidad',
});

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Navidad' },
];

export default function NavidadPage() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(navidadFaqs)]} />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <h1 className="display-lg text-ink text-balance">
          Regalos de Navidad a domicilio en Catamarca
        </h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft max-w-prose">
          <p>
            Diciembre pasa rápido y siempre hay alguien a quien te gustaría saludar con algo más
            que un mensaje. Un desayuno sorpresa o un ramo de golosinas son regalos que no hay que
            envolver ni salir a buscar entre el calor y las colas: los armamos nosotras y los
            llevamos hasta la puerta en San Fernando del Valle de Catamarca.
          </p>
          <p>
            Sirven para la familia, para esa amiga que te bancó todo el año o para arrancar la
            Nochebuena con un desayuno distinto. Nos decís para quién es y el mensaje de la nota,
            y del resto nos ocupamos.
          </p>
          <p>
            Para la entrega del 24 y el 25 de diciembre, consultá disponibilidad por WhatsApp:
            pasanos el día que necesitás y te confirmamos.
          </p>
        </div>

        <div className="mt-8">
          <StickerButton href={getWhatsAppUrl('un regalo de Navidad')} size="lg">
            Quiero un regalo de Navidad
          </StickerButton>
        </div>

        <h2 className="display-md mt-14 text-ink">Qué regalar en Navidad</h2>
        <ProductGrid />

        <h2 className="display-md mt-14 text-ink">Navidad a distancia</h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft max-w-prose">
          <p>
            Si este año las fiestas te encuentran en otra provincia o en otro país, el regalo puede
            estar en Catamarca aunque vos no llegues. Lo pedís por WhatsApp y te mandamos foto o
            video de la entrega, así compartís el momento desde donde estés.
          </p>
          <p>
            Te contamos cómo funciona, paso a paso, en{' '}
            <Link href="/enviar-regalo-a-catamarca" className="link-underline font-bold text-ink">
              enviar regalos a Catamarca desde cualquier lugar
            </Link>
            . Y si querés el detalle de la diferencia horaria y el pago desde donde vivís:
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {originLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="link-underline font-bold text-ink">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 border-l-2 border-butter pl-5">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink text-balance">
            Regalos de fin de año para empresas
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink-soft max-w-prose">
            Para cerrar el año con tu equipo o con tus clientes, armamos propuestas con estos mismos
            desayunos y ramos. Mirá cómo trabajamos en{' '}
            <Link href="/regalos-empresariales" className="link-underline font-bold text-ink">
              regalos empresariales de fin de año
            </Link>
            .
          </p>
        </div>

        <div className="mt-10">
          <StickerButton href={getWhatsAppUrl('un regalo de Navidad')} variant="wa" size="lg">
            Escribinos por tu regalo
          </StickerButton>
        </div>
      </section>

      <Faq
        items={navidadFaqs}
        label="Dudas para Navidad"
        title="Preguntas antes de encargar tu regalo de Navidad."
      />

      <Footer />
      <FloatingWhatsApp topic="un regalo de Navidad" />
    </main>
  );
}
