'use client';

import React from 'react';
import Link from 'next/link';
import { contact } from '@/lib/products';
import { countryLinks, localityLinks, originLinks, productLinks, provinceLinks, siteConfig } from '@/lib/site';
import GoogleRating from './GoogleRating';
import Reveal from './ui/Reveal';

export const pageLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/regalos-en-catamarca', label: 'Regalos en Catamarca' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/desayunos-sorpresa-catamarca', label: 'Desayunos sorpresa' },
  { href: '/ramos-de-golosinas-catamarca', label: 'Ramos de golosinas' },
  { href: '/regalos-personalizados-catamarca', label: 'Regalos personalizados' },
  { href: '/cartas-personalizadas', label: 'Cartas personalizadas' },
  { href: '/regalos-empresariales', label: 'Regalos empresariales' },
  { href: '/dia-de-la-madre', label: 'Regalos para el Día de la Madre' },
  { href: '/navidad', label: 'Regalos de Navidad' },
  { href: '/enviar-regalo-a-catamarca', label: 'Enviar regalo a Catamarca' },
  { href: '/guias-de-regalo', label: 'Guías de regalo' },
];

export default function Footer() {
  return (
    <footer className="bg-paper-deep text-ink">
      {/* Rejilla editorial de 4 columnas con filetes */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 py-14">
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
            <p className="mt-4 text-sm text-ink">
              <a
                href={contact.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink hover:text-berry-deep"
              >
                {contact.phoneDisplay}
              </a>
              <span className="text-ink-soft"> · </span>
              <strong className="font-bold text-ink">{contact.hours}</strong>
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              {siteConfig.streetAddress}, {contact.city}
            </p>
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

          <Reveal delay={240} y={10} className="sm:border-l sm:border-ink/15 sm:pl-8">
            <span className="label">Enviar desde</span>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[...originLinks, ...countryLinks].map((link) => (
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

        {/* Fichas de producto: enlace interno desde todas las páginas */}
        <div className="border-t border-ink/15 py-6">
          <span className="label">Productos</span>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 text-sm">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline text-ink-soft hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Envíos por provincia y desde el interior de Catamarca */}
        <div className="border-t border-ink/15 py-6 grid gap-6 sm:grid-cols-2">
          <div>
            <span className="label">Desde tu provincia</span>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 text-sm">
              {provinceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline text-ink-soft hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="label">Desde el interior a la Capital</span>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 text-sm">
              {localityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline text-ink-soft hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
          <GoogleRating size="lg" />
        </Reveal>
      </div>

      <div className="border-t border-ink/15">
          {/* pb extra en mobile: deja aire para el botón flotante de WhatsApp. */}
          <p className="max-w-6xl mx-auto px-5 sm:px-8 pt-5 pb-24 sm:pb-5 text-[11px] text-ink-soft">
          © {new Date().getFullYear()} LaPrincesaCta. Vos imaginás el momento; nosotras lo hacemos
          llegar a domicilio.
        </p>
      </div>
    </footer>
  );
}
