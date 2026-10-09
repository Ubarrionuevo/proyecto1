import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { getWhatsAppUrl } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Página no encontrada | LaPrincesaCta',
  description:
    'Esa página no existe. Volvé al inicio o mirá el catálogo de desayunos y ramos a domicilio en Catamarca.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
        <span className="label">Error 404</span>
        <h1 className="display-lg mt-4 text-ink">Esa página no existe.</h1>
        <p className="mt-5 text-[15px] text-ink-soft max-w-md mx-auto leading-relaxed">
          Pero los desayunos y ramos siguen acá. Elegí por dónde seguir:
        </p>
        <nav aria-label="Secciones principales" className="mt-8 flex flex-col gap-3 max-w-xs mx-auto">
          {[
            { href: '/', label: 'Volver al inicio' },
            { href: '/catalogo', label: 'Ver catálogo y precios' },
            { href: '/desayunos-sorpresa-catamarca', label: 'Desayunos sorpresa' },
            { href: '/ramos-de-golosinas-catamarca', label: 'Ramos de golosinas' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="sticker sticker-outline px-6 py-3.5 text-[15px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-8 text-sm text-ink-soft">
          ¿Buscabas otra cosa?{' '}
          <a
            href={getWhatsAppUrl('una consulta')}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink font-bold"
          >
            Escribinos por WhatsApp
          </a>
        </p>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
