'use client';

import React from 'react';
import { getWhatsAppUrl, contact } from '@/lib/products';
import StickerButton from './ui/StickerButton';

export default function GeoBanner() {
  return (
    <section className="bg-paper text-ink py-10 sm:py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Titular del banner. Entrada escalonada: pregunta -> promesa -> bajada ->
            CTA -> rating, con 80ms entre cada bloque. */}
        <div className="text-center">
          <h1
            className="display-lg text-ink mx-auto text-balance rise"
            style={{ '--rise-delay': '0ms' } as React.CSSProperties}
          >
            Desayunos y ramos sorpresa en Catamarca
          </h1>

          <p
            className="display-md mt-1 text-berry italic rise"
            style={{ '--rise-delay': '80ms' } as React.CSSProperties}
          >
            ¿Estás lejos? El regalo llega igual.
          </p>

          <p
            className="mt-5 text-[15px] text-ink-soft max-w-lg mx-auto leading-relaxed rise"
            style={{ '--rise-delay': '160ms' } as React.CSSProperties}
          >
            Pedilo desde donde estés.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <div
            className="mt-7 flex items-center justify-center rise"
            style={{ '--rise-delay': '230ms' } as React.CSSProperties}
          >
            <StickerButton href={getWhatsAppUrl('un desayuno a domicilio')} size="lg">
              Quiero armar mi regalo
            </StickerButton>
          </div>

          <p
            className="mt-5 text-sm text-ink-soft rise"
            style={{ '--rise-delay': '300ms' } as React.CSSProperties}
          >
            <strong className="font-bold text-ink">{contact.rating}/5</strong> en Google Maps ·{' '}
            <strong className="font-bold text-ink">{contact.reviews} opiniones</strong>
          </p>
        </div>
      </div>
    </section>
  );
}