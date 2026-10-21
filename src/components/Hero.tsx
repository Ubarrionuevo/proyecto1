'use client';

import React from 'react';
import Image from 'next/image';
import { getWhatsAppUrl, contact } from '@/lib/products';
import StickerButton from './ui/StickerButton';
import GoogleRating from './GoogleRating';

/* Las tres fotos que abren la web. Todas verticales, como las reales.
   `sizes` refleja el ancho real de cada una en la grilla de 12 columnas
   (max-w-6xl = 1152px): 5/12, 4/12 y 3/12 del contenedor. */
const bandPhotos = [
  {
    src: '/desayuno-sorpresa-caja-de-madera-catamarca.webp',
    caption: 'Caja de madera',
    span: 'sm:col-span-5',
    h: 'h-[300px] sm:h-[420px]',
    sizes: '(max-width: 640px) 100vw, 40vw',
    alt: 'Desayuno sorpresa en caja de madera, listo para entregar en Catamarca',
  },
  {
    src: '/ramo-comun-golosinas-catamarca-1.webp',
    caption: 'Ramo común',
    span: 'sm:col-span-4',
    h: 'h-[240px] sm:h-[340px]',
    sizes: '(max-width: 640px) 100vw, 32vw',
    alt: 'Ramo común de golosinas armado y envuelto para regalar',
  },
  {
    src: '/ramo-oso-peluche-catamarca-1.webp',
    caption: 'Ramo con oso',
    span: 'sm:col-span-3',
    h: 'h-[280px] sm:h-[380px]',
    sizes: '(max-width: 640px) 100vw, 24vw',
    alt: 'Ramo de golosinas con oso de peluche adentro',
  },
];

export default function Hero() {
  return (
    <section>
      {/* Barra utilitaria */}
      <div className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-2.5 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] font-semibold text-ink-soft">
          <span className="truncate">Desayunos y ramos a domicilio · Catamarca</span>
          <span className="hidden sm:inline">{contact.hours}</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-14">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-10">
          {/* Titular.
              No es el h1 de la pagina: el h1 vive en el GeoBanner, que dice
              "Desayunos sorpresa a domicilio en Catamarca" (la keyword que
              se quiere posicionar). Este es el lema de marca y queda como parrafo
              con la misma escala visual, para no tener dos h1 en la home. */}
          <div className="lg:col-span-7">
            <span className="label">Regalería · San Fernando del Valle</span>

            <p className="display-xl mt-4 text-ink">
              Regalos que
              <br />
              <span className="text-berry italic">se sienten</span>
              <span className="text-rule" aria-hidden="true">.</span>
            </p>
          </div>

          {/* Bajada + accion, alineadas a la linea de base del titular */}
          <div className="lg:col-span-5 lg:pt-16">
            <p className="text-[17px] sm:text-lg leading-relaxed text-ink-soft max-w-md">
              Café o té caliente, delicias artesanales, taza personalizada y una nota escrita a
              mano. Vos imaginás el momento; nosotras lo dejamos en la puerta.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <StickerButton href={getWhatsAppUrl('un desayuno a domicilio')} size="lg">
                Quiero armar mi regalo
              </StickerButton>

              <StickerButton
                href="/catalogo"
                variant="outline"
                size="lg"
                icon="none"
              >
                Ver el catálogo
              </StickerButton>
            </div>
          </div>
        </div>

        {/* Cifras, separadas por filetes */}
        <div className="mt-12 sm:mt-16 border-t border-rule grid grid-cols-2">
          {[
            { v: contact.rating, l: 'en Google Maps' },
            { v: String(contact.reviews), l: 'opiniones' },
          ].map((stat, i) => (
            <div
              key={stat.l}
              className={`py-5 ${i > 0 ? 'border-l border-rule pl-4 sm:pl-6' : ''}`}
            >
              <p className="font-display text-3xl sm:text-4xl font-semibold text-ink leading-none">
                {stat.v}
              </p>
              <p className="label mt-2">{stat.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Banda de fotos a sangre, alturas desiguales */}
      <div className="border-t border-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
            {bandPhotos.map((photo, i) => (
              <figure key={photo.src} className={`${photo.span} group`}>
                <div className={`${photo.h} overflow-hidden bg-paper-deep relative`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={photo.sizes}
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
                <figcaption className="label mt-2.5 border-t border-rule pt-2">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8">
            <GoogleRating size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
