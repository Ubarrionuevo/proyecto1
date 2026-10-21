'use client';

import React from 'react';
import StickerButton from './ui/StickerButton';
import { getWhatsAppUrl } from '@/lib/products';

export default function GeoBanner() {
  return (
    <section className="bg-paper text-ink py-10 sm:py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Titular del banner. Entrada escalonada: titular -> pregunta -> bajada
            -> CTA, con 80ms entre cada bloque. */}
        <div className="text-center">
          <h1
            className="display-lg text-ink mx-auto text-balance rise"
            style={{ '--rise-delay': '0ms' } as React.CSSProperties}
          >
            Desayunos sorpresa a domicilio en Catamarca
          </h1>

          <p
            className="display-md mt-1 text-berry italic rise"
            style={{ '--rise-delay': '80ms' } as React.CSSProperties}
          >
            ¿Estás lejos? El regalo llega igual.
          </p>

          <p
            className="mt-5 text-base text-ink-soft max-w-2xl mx-auto leading-relaxed rise"
            style={{ '--rise-delay': '160ms' } as React.CSSProperties}
          >
            Desayunos sorpresa para un cumpleaños, un aniversario o un regalo sin motivo. Si
            estás en San Fernando del Valle, te lo llevamos a domicilio; si vivís en otra
            provincia o país, lo pedís por WhatsApp y lo entregamos a quien quieras sorprender.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <div
            className="mt-7 flex items-center justify-center rise"
            style={{ '--rise-delay': '230ms' } as React.CSSProperties}
          >
            <StickerButton href={getWhatsAppUrl('un regalo a entregar en Catamarca')} size="lg">
              Quiero enviar un regalo
            </StickerButton>
          </div>
        </div>
      </div>
    </section>
  );
}