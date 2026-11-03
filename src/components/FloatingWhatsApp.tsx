'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/products';
import { WhatsAppIcon } from './Icons';

/* Boton fijo con el mismo sistema visual que el resto de los botones
   (.sticker .sticker-wa: verde WhatsApp, radio 3px, hover y press). El wrapper
   maneja la aparicion al hacer scroll; el anchor es un sticker comun, con una
   sombra suave porque flota sobre el contenido.
   `topic` arma el mensaje precargado según la página: es el mismo texto de su CTA. */
export default function FloatingWhatsApp({ topic = 'un regalo' }: { topic?: string }) {
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      /* bottom-* con env(safe-area-inset-bottom): en iPhone con barra de gesto
         el botón no queda pegado ni tapado por el área del sistema. */
      className={`fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-5 z-50 transition-[opacity,transform] duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href={getWhatsAppUrl(topic)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="sticker sticker-wa pl-4 pr-4 py-3.5 text-sm touch-target shadow-[0_8px_18px_rgb(36_26_20/0.16)]"
      >
        <WhatsAppIcon className="w-6 h-6 shrink-0" />
        <span className="whitespace-nowrap font-bold">Escribinos</span>
      </a>
    </div>
  );
}
