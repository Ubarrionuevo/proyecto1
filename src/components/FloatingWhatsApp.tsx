'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/products';
import { WhatsAppIcon } from './Icons';

/* Boton fijo con el mismo sistema visual que el resto de los botones
   (.sticker .sticker-wa: verde WhatsApp, radio 3px, sombra dura, hover lift
   y press). El wrapper maneja la aparicion al hacer scroll; el anchor es un
   sticker comun, sin estilos propios. En mobile queda compacto con solo icono. */
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-[opacity,transform] duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href={getWhatsAppUrl('un regalo')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="sticker sticker-wa pl-4 pr-4 py-3.5 text-sm touch-target"
      >
        <WhatsAppIcon className="w-6 h-6 shrink-0" />
        <span className="whitespace-nowrap font-bold">Escribinos</span>
      </a>
    </div>
  );
}
