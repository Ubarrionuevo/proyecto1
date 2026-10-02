'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl, contact } from '@/lib/products';
import { GoogleGIcon, StarIcon, WhatsAppIcon } from './Icons';
import Reveal from './ui/Reveal';

export default function Footer() {
  return (
    <footer className="bg-paper-deep text-ink">
      {/* Rejilla editorial de 3 columnas con filetes */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-y-10 gap-x-8 py-14">
          <Reveal y={10}>
            <p className="font-display text-2xl font-semibold text-ink">
              LaPrincesa<span className="text-berry-deep">Cta</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/55 max-w-xs">
              Desayunos a domicilio y ramos de golosinas en San Fernando del Valle de Catamarca.
            </p>
          </Reveal>

          <Reveal delay={80} y={10} className="sm:border-l sm:border-ink/15 sm:pl-8">
            <span className="label text-ink/40">Contacto</span>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={contact.phoneHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink hover:text-berry-deep"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="text-ink/55">
                <strong className="font-bold text-ink">{contact.hours}</strong>
              </li>
              <li className="text-ink/55">{contact.city}</li>
            </ul>
          </Reveal>

          <Reveal delay={160} y={10} className="sm:border-l sm:border-ink/15 sm:pl-8">
            <span className="label text-ink/40">Secciones</span>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: '#desayunos', label: 'Desayunos' },
                { href: '#ramos', label: 'Ramos' },
                { href: '#clientes', label: 'Clientes' },
                { href: '/catalogo', label: 'Catálogo' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-ink/70 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Rating */}
        <Reveal
          y={8}
          className="border-t border-ink/15 py-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="stars-hover flex items-center gap-2 text-sm text-ink/60">
            <GoogleGIcon className="w-4 h-4" />
            <span className="flex items-center gap-px" aria-label="5 de 5 estrellas">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="star w-3.5 h-3.5 text-berry-deep" />
              ))}
            </span>
            <span>
              <span className="font-bold text-ink">{contact.rating}</span> · {contact.reviews}{' '}
              opiniones
            </span>
          </div>

          <a
            href={getWhatsAppUrl('un regalo')}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker sticker-wa px-5 py-2.5 text-[13px]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Escribinos
          </a>
        </Reveal>
      </div>

      <div className="border-t border-ink/15">
        <p className="max-w-6xl mx-auto px-5 sm:px-8 py-5 text-[11px] text-ink/35">
          © {new Date().getFullYear()} LaPrincesaCta. Vos imaginás el momento; nosotras lo hacemos
          llegar a domicilio.
        </p>
      </div>
    </footer>
  );
}
