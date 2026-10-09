'use client';

import React from 'react';
import { getWhatsAppUrl, contact } from '@/lib/products';
import StickerButton from './ui/StickerButton';
import { GoogleGIcon, StarIcon } from './Icons';

/* Las tres fotos que abren la web. Todas verticales, como las reales. */
const bandPhotos = [
  { src: '/desayuno-sorpresa-caja-de-madera-catamarca.webp', caption: 'Caja de madera', span: 'sm:col-span-5', h: 'h-[300px] sm:h-[420px]' },
  { src: '/ramo-comun-golosinas-catamarca-1.webp', caption: 'Ramo común', span: 'sm:col-span-4', h: 'h-[240px] sm:h-[340px]' },
  { src: '/ramo-oso-peluche-catamarca-1.webp', caption: 'Ramo con oso', span: 'sm:col-span-3', h: 'h-[280px] sm:h-[380px]' },
];

export default function Hero() {
  return (
    <section>
      {/* Barra utilitaria */}
      <div className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-2.5 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] font-semibold text-ink-soft">
          <span className="truncate">Desayunos a domicilio · Catamarca</span>
          <span className="hidden sm:inline">{contact.hours}</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-14">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-10">
          {/* Titular */}
          <div className="lg:col-span-7">
            <span className="label">Regalería · San Fernando del Valle</span>

            <h1 className="display-xl mt-4 text-ink">
              Regalos que
              <br />
              <span className="text-berry italic">se sienten</span>
              <span className="text-rule">.</span>
            </h1>
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
        <div className="mt-12 sm:mt-16 border-t border-rule grid grid-cols-3">
          {[
            { v: '+100', l: 'entregas hechas' },
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
            {bandPhotos.map((photo) => (
              <figure key={photo.src} className={`${photo.span} group`}>
                <div className={`${photo.h} overflow-hidden bg-paper-deep`}>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <figcaption className="label mt-2.5 border-t border-rule pt-2">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-[13px] text-ink-soft">
            <GoogleGIcon className="w-4 h-4 shrink-0" />
            <span className="flex items-center gap-px" aria-label="5 de 5 estrellas">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 text-butter-deep" />
              ))}
            </span>
            <span>
              <span className="font-bold text-ink">{contact.rating}</span> · {contact.reviews}{' '}
              opiniones en Google Maps
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
