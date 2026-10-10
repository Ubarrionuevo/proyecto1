'use client';

import React from 'react';
import { destinosDestacados, getWhatsAppUrl, contact } from '@/lib/products';
import StickerButton from './ui/StickerButton';
import Carousel from './ui/Carousel';
import { ItalyFlagIcon, BoliviaFlagIcon } from './Icons';

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
            Desayunos sorpresa a domicilio en Catamarca
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

      {/* Destinos destacados en carrusel infinito de derecha a izquierda:
          banderitas para Italia y Bolivia, chips con nombre para las
          provincias. Cada uno abre WhatsApp. No se frena nunca (ni con el
          mouse): solo cede mientras se arrastra con el dedo. */}
      <div
        className="relative mt-6 overflow-hidden rise"
        style={{ '--rise-delay': '230ms' } as React.CSSProperties}
      >
        <div className="absolute inset-y-0 left-0 w-14 sm:w-24 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-14 sm:w-24 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />
        <Carousel
          label="Provincias y países desde donde nos compran"
          items={destinosDestacados}
          keyOf={(place) => place.name}
          speed={40}
          gap="0.75rem"
          pauseOnHover={false}
          className="px-5 sm:px-8"
          renderSlide={(place, _i, copy) => (
            <a
              key={place.name}
              href={getWhatsAppUrl(`un regalo desde ${place.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Escribinos por WhatsApp desde ${place.name}`}
              tabIndex={copy === 1 ? -1 : undefined}
              className="destino-chip touch-target"
            >
              {place.flag === 'it' && (
                <span className="w-5 h-5 rounded-[2px] overflow-hidden shrink-0 ring-1 ring-ink/15">
                  <ItalyFlagIcon className="w-full h-full" />
                </span>
              )}
              {place.flag === 'bo' && (
                <span className="w-5 h-5 rounded-[2px] overflow-hidden shrink-0 ring-1 ring-ink/15">
                  <BoliviaFlagIcon className="w-full h-full" />
                </span>
              )}
              {place.name}
            </a>
          )}
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <div
            className="mt-7 flex items-center justify-center rise"
            style={{ '--rise-delay': '300ms' } as React.CSSProperties}
          >
            <StickerButton href={getWhatsAppUrl('un desayuno a domicilio')} size="lg">
              Quiero armar mi regalo
            </StickerButton>
          </div>

          <p
            className="mt-5 text-sm text-ink-soft rise"
            style={{ '--rise-delay': '370ms' } as React.CSSProperties}
          >
            <strong className="font-bold text-ink">{contact.rating}/5</strong> en Google Maps ·{' '}
            <strong className="font-bold text-ink">{contact.reviews} opiniones</strong>
          </p>
        </div>
      </div>
    </section>
  );
}