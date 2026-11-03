'use client';

import React, { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/site';
import { CloseIcon } from './Icons';
import StickerButton from './ui/StickerButton';

const message = `¡Hola! Vi el catálogo de ${siteConfig.name} y quiero uno igual para mi negocio.`;
const href = `https://wa.me/${siteConfig.catalogPromoWhatsappNumber}?text=${encodeURIComponent(message)}`;
const question = '¿Querés un catálogo igual para tu negocio?';

const visibleMs = 10000;

/* Aviso arriba a la izquierda, sobre el encabezado. Va con absolute y no fixed
   para que al bajar no tape el filtro ni las tarjetas. Se cierra solo o con la X;
   el CTA del pie queda siempre disponible. */
export default function CatalogPromo() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), visibleMs);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <aside
      className="rise absolute left-2 top-1.5 z-40 w-[calc(100vw-11.5rem)] max-w-[220px]"
      style={{ '--rise-delay': '800ms' } as React.CSSProperties}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-[3px] bg-butter py-1.5 pl-2.5 pr-6 text-xs font-bold leading-snug text-ink shadow-[0_8px_18px_rgb(36_26_20/0.16)]"
      >
        {question}
      </a>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Cerrar aviso"
        className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center text-ink"
      >
        <CloseIcon className="h-3.5 w-3.5" />
      </button>
    </aside>
  );
}

export function CatalogPromoFooter() {
  return (
    <footer className="border-t border-rule bg-paper-deep">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-wrap items-center justify-between gap-4">
        <p className="font-display text-lg font-semibold text-ink text-balance">{question}</p>
        <StickerButton href={href} size="sm" wrap className="w-full sm:w-auto">
          Quiero uno igual
        </StickerButton>
      </div>
    </footer>
  );
}
