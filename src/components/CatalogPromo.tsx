'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/lib/site';
import { CloseIcon } from './Icons';

const message = `¡Hola! Vi el catálogo de ${siteConfig.name} y quiero uno igual para mi negocio.`;
const href = `https://wa.me/${siteConfig.catalogPromoWhatsappNumber}?text=${encodeURIComponent(message)}`;

/* Aviso fijo en la esquina inferior izquierda. El ancho deja lugar al botón
   flotante de WhatsApp, que está en la esquina derecha. Se puede cerrar para que
   no tape las tarjetas. */
export default function CatalogPromo() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <aside
      className="rise fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] left-3 z-40 w-[calc(100vw-11.5rem)] max-w-[220px]"
      style={{ '--rise-delay': '800ms' } as React.CSSProperties}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-[3px] bg-butter py-2 pl-3 pr-6 text-xs font-bold leading-snug text-ink shadow-[0_8px_18px_rgb(36_26_20/0.16)]"
      >
        ¿Querés un catálogo igual para tu negocio?
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
