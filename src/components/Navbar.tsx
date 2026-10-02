'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getWhatsAppUrl, contact } from '@/lib/products';
import { GoogleGIcon, StarIcon, MenuIcon, CloseIcon } from './Icons';

const navLinks = [
  { href: '#desayunos', label: 'Desayunos' },
  { href: '#ramos', label: 'Ramos' },
  { href: '#clientes', label: 'Clientes' },
  { href: '/catalogo', label: 'Catálogo' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /* En /catalogo los anchors #desayunos y #ramos no existen: resolvemos al Home. */
  const resolveHref = (href: string) =>
    href.startsWith('#') && pathname !== '/' ? `/${href}` : href;

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

          {/* Links de escritorio */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                className="link-underline text-[13px] font-semibold text-ink-soft hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Rating + WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="stars-hover hidden sm:flex items-center gap-1.5">
              <GoogleGIcon className="w-4 h-4" />
              <span className="flex items-center gap-px" aria-label="5 de 5 estrellas">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="star w-3 h-3 text-butter-deep" />
                ))}
              </span>
              <span className="ml-0.5 text-[12px] font-bold text-ink">{contact.rating}</span>
              <span className="text-[12px] text-ink-soft">({contact.reviews})</span>
            </div>

            <a
              href={getWhatsAppUrl('un regalo')}
              target="_blank"
              rel="noopener noreferrer"
              className="sticker sticker-wa px-4 py-2.5 text-[13px]"
            >
              WhatsApp
            </a>

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
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                onClick={() => setOpen(false)}
                className="rise py-3.5 font-display text-xl text-ink border-b border-rule-soft last:border-0 transition-[color,transform] duration-200 hover:text-berry active:scale-[0.98]"
                style={{ '--rise-delay': `${i * 35}ms` } as React.CSSProperties}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-1.5 py-4">
              <GoogleGIcon className="w-4 h-4" />
              <span className="flex items-center gap-px">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5 text-butter-deep" />
                ))}
              </span>
              <span className="ml-1 text-[13px] text-ink-soft">
                <span className="font-bold text-ink">{contact.rating}</span> · {contact.reviews}{' '}
                opiniones
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
