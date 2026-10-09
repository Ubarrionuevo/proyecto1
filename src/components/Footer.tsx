'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl, contact } from '@/lib/products';
import { siteConfig } from '@/lib/site';
import { GoogleGIcon, StarIcon, WhatsAppIcon } from './Icons';
import Reveal from './ui/Reveal';

const pageLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo y precios' },
  { href: '/desayunos-sorpresa-catamarca', label: 'Desayunos sorpresa' },
  { href: '/ramos-de-golosinas-catamarca', label: 'Ramos de golosinas' },
  { href: '/dia-de-la-madre', label: 'Día de la Madre' },
  { href: '/enviar-regalo-a-catamarca', label: 'Enviar regalo a Catamarca' },
];

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
            <p className="mt-3 text-sm leading-relaxed text-ink-soft max-w-xs">
              Desayunos a domicilio y ramos de golosinas en San Fernando del Valle de Catamarca.
            </p>
          </Reveal>

          <Reveal delay={80} y={10} className="sm:border-l sm:border-ink/15 sm:pl-8">
            <span className="label">Contacto</span>
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
              <li>
                <strong className="font-bold text-ink">{contact.hours}</strong>
              </li>
              <li className="text-ink-soft">{contact.city}</li>
            </ul>
          </Reveal>

          <Reveal delay={160} y={10} className="sm:border-l sm:border-ink/15 sm:pl-8">
            <span className="label">Secciones</span>
            <ul className="mt-4 space-y-2.5 text-sm">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-ink-soft hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Redes: solo si hay URL en siteConfig */}
        {(siteConfig.instagramUrl || siteConfig.facebookUrl) && (
          <div className="border-t border-ink/15 py-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {siteConfig.instagramUrl && (
                <li>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-bold text-ink"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {siteConfig.facebookUrl && (
                <li>
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-bold text-ink"
                  >
                    Facebook
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Rating */}
        <Reveal
          y={8}
          className="border-t border-ink/15 py-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="stars-hover flex items-center gap-2 text-sm text-ink-soft">
            <GoogleGIcon className="w-4 h-4" />
            <span className="flex items-center gap-px" role="img" aria-label="5 de 5 estrellas">
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
          <p className="max-w-6xl mx-auto px-5 sm:px-8 py-5 text-[11px] text-ink-soft">
          © {new Date().getFullYear()} LaPrincesaCta. Vos imaginás el momento; nosotras lo hacemos
          llegar a domicilio.
        </p>
      </div>
    </footer>
  );
}
