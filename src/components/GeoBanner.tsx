'use client';

import React from 'react';
import { cobertura, getWhatsAppUrl, contact } from '@/lib/products';
import StickerButton from './ui/StickerButton';
import Carousel from './ui/Carousel';
import Reveal from './ui/Reveal';

export default function GeoBanner() {
  return (
    <section className="bg-paper text-ink py-10 sm:py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Titular del banner. Entrada escalonada: pregunta -> promesa -> bajada ->
            CTA -> rating, con 80ms entre cada bloque.
            La pregunta es el ancla visual y la cinta de provincias de abajo
            funciona como la prueba de lo que promete. */}
        <div className="text-center">
          <h2
            className="display-lg text-ink mx-auto text-balance rise"
            style={{ '--rise-delay': '0ms' } as React.CSSProperties}
          >
            ¿Estás lejos?
          </h2>

          <p
            className="display-md mt-1 text-berry italic rise"
            style={{ '--rise-delay': '80ms' } as React.CSSProperties}
          >
            El regalo llega igual.
          </p>

          <p
            className="mt-5 text-[15px] text-ink-soft max-w-lg mx-auto leading-relaxed rise"
            style={{ '--rise-delay': '160ms' } as React.CSSProperties}
          >
            Nos encargan regalos desde toda la Argentina y otros países para sorprender a
            familiares y personas queridas que están en Catamarca. Vos lo pedís desde donde
            estés; nosotras lo preparamos y lo llevamos hasta su puerta.
          </p>

          <div
            className="mt-7 flex flex-wrap items-center justify-center gap-4 rise"
            style={{ '--rise-delay': '240ms' } as React.CSSProperties}
          >
            <StickerButton href={getWhatsAppUrl('un desayuno a domicilio')} size="lg">
              Quiero armar mi regalo
            </StickerButton>
            <StickerButton href="/catalogo" variant="outline" size="lg" icon="none">
              Ver el catálogo
            </StickerButton>
          </div>

          <p
            className="mt-5 text-sm text-ink-soft rise"
            style={{ '--rise-delay': '320ms' } as React.CSSProperties}
          >
            <strong className="font-bold text-ink">{contact.rating}/5</strong> en Google Maps ·{' '}
            <strong className="font-bold text-ink">{contact.reviews} opiniones</strong>
          </p>
        </div>
      </div>

      {/* Destinos: todas las provincias mencionadas en la web, mas Italia y Bolivia.
          Carrusel lento en loop: en mobile se ve una parte y el resto aparece
          al pasar; tambien se puede deslizar con el dedo. Cada destino abre
          WhatsApp con el mensaje ya armado. */}
      <div className="mt-12 text-center px-5 sm:px-8">
        <Reveal>
          <span className="label text-berry-deep">Clientes de todo el país</span>
          <h3 className="display-md text-ink mt-3">También nos compran desde</h3>
        </Reveal>
      </div>

      <div className="relative mt-7 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-14 sm:w-24 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-14 sm:w-24 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />
        <Carousel
          label="Provincias y países desde donde nos compran"
          items={[
            ...cobertura.provinces.map((name) => ({ name, pais: false })),
            ...cobertura.countries.map((name) => ({ name, pais: true })),
          ]}
          keyOf={(place) => place.name}
          speed={48}
          gap="1rem"
          className="px-5 sm:px-8"
          renderSlide={(place, _i, copy) => (
            <a
              href={getWhatsAppUrl(`un regalo desde ${place.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Escribinos por WhatsApp desde ${place.name}`}
              tabIndex={copy === 1 ? -1 : undefined}
              className={`destino-chip touch-target ${place.pais ? 'destino-chip--pais' : ''}`}
            >
              {place.name}
            </a>
          )}
        />
      </div>
    </section>
  );
}