'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/products';
import { WhatsAppIcon } from './Icons';

/* Boton fijo sin pulso: aparece al hacer scroll y se expande al hover.
   La etiqueta de texto evita depender solo del icono. */
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={getWhatsAppUrl('un regalo')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden bg-wa text-white pl-3.5 pr-3.5 py-3.5 rounded-full border-2 border-ink transition-[opacity,transform,max-width] duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 max-w-[13rem]'
          : 'opacity-0 translate-y-4 max-w-0 pointer-events-none'
      } hover:max-w-[16rem]`}
    >
      <WhatsAppIcon className="w-6 h-6 shrink-0" />
      <span className="whitespace-nowrap text-sm font-bold pl-2.5 max-w-[11rem]">
        Escribinos
      </span>
    </a>
  );
}
