'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/site';
import { MenuIcon, CloseIcon } from './Icons';
import GoogleRating from './GoogleRating';

/* Cuatro destinos principales: los dos que más venden y los dos nuevos, más la
   fecha de temporada mientras esté activa en siteConfig.
   Catálogo y Enviar regalo siguen accesibles desde el grupo "Más" del menú
   mobile y desde el footer, sin competir en la barra. */
const { seasonalBanner } = siteConfig;
const primaryLinks = [
  ...(seasonalBanner.enabled ? [{ href: seasonalBanner.href, label: seasonalBanner.label }] : []),
  { href: '/desayunos-sorpresa-catamarca', label: 'Desayunos' },
  { href: '/ramos-de-golosinas-catamarca', label: 'Ramos' },
  { href: '/cartas-personalizadas', label: 'Cartas' },
  { href: '/regalos-empresariales', label: 'Empresas' },
];

const secondaryLinks = [
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/enviar-regalo-a-catamarca', label: 'Enviar regalo a Catamarca' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /* Estado de scroll para la transicion de la barra. Pasa por un listener
     pasivo y solo guarda un booleano: no fuerza re-renders por pixel. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    /* rAF en vez de llamada directa: evita el setState sincrónico dentro del
       efecto y ademas cubre el caso de restaurar scroll al recargar. */
    const id = requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* Cierra el menu mobile al cambiar de ruta. */
  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper border-b border-rule transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_6px_16px_-12px_rgb(36_26_20/0.5)]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Marca */}
          <Link
            href="/"
            className="flex items-baseline gap-2 shrink-0 group transition-opacity duration-200 hover:opacity-70"
          >
            <span className="font-display text-[1.35rem] sm:text-[1.6rem] font-semibold tracking-tight text-ink leading-none">
              LaPrincesa
              <span className="text-berry">Cta</span>
            </span>
            <span className="hidden md:inline text-[10px] uppercase tracking-[0.18em] text-ink-soft font-bold">
              Catamarca
            </span>
          </Link>

          {/* Links de escritorio: solo los cuatro principales */}
          <nav className="hidden lg:flex items-center gap-8">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="link-underline text-[13px] font-semibold text-ink-soft hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Rating + WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-5">
            <GoogleRating size="sm" hideCount className="hidden sm:inline-flex" />

            {/* Menú mobile */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              className="lg:hidden w-11 h-11 -mr-2 flex items-center justify-center text-ink transition-transform duration-200 active:scale-90"
            >
              <span className="relative flex items-center justify-center">
                {open ? (
                  <CloseIcon className="w-6 h-6 animate-[rise-in_200ms_ease_both]" />
                ) : (
                  <MenuIcon className="w-6 h-6 animate-[rise-in_200ms_ease_both]" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable mobile. Se abre con un fundido corto: instantáneo se siente
          mechanical, y el delay de 200ms se percibe como intencionado. */}
      {open && (
        <div className="lg:hidden border-t border-rule bg-paper-card animate-[rise-in_240ms_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none">
          <nav className="px-5 sm:px-8 py-2 flex flex-col">
            {primaryLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="rise py-3.5 font-display text-xl text-ink border-b border-rule-soft transition-[color,transform] duration-200 hover:text-berry active:scale-[0.98]"
                style={{ '--rise-delay': `${i * 35}ms` } as React.CSSProperties}
              >
                {link.label}
              </Link>
            ))}

            {/* Secundarios: presentes pero en segundo plano */}
            <div
              className="rise pt-5 pb-1"
              style={{ '--rise-delay': '140ms' } as React.CSSProperties}
            >
              <span className="label">Más</span>
              <div className="mt-2.5 flex flex-col items-start gap-1">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="link-underline py-1.5 text-sm font-semibold text-ink-soft hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center py-4 border-t border-rule-soft">
              <GoogleRating size="md" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
