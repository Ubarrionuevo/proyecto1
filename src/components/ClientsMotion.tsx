'use client';

import React from 'react';
import { clientPhotos } from '@/lib/products';
import Polaroid from './ui/Polaroid';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';
import Carousel from './ui/Carousel';

/* Rotaciones fijas: el collage se ve tombeado a mano, no alineado. */
const rotations = [-3, 2.5, -1.5, 3, -2.5, 1.5, -3, 2, -1, 2.5, -2, 3];

/* Una sola fila en carrusel, mobile-first: en celular se ve una polaroid
   grande (mas un asomo de la siguiente, para insinuar que hay mas) y en
   desktop entran tres. Nada de comprimir fotos para que entren todas. */
export default function ClientsMotion({
  number,
  label = 'Los que ya nos eligieron',
  title = 'Fotos reales de entregas.',
  intro = 'Ninguna está retocada: son personas de Catamarca que recibieron una sorpresa un día cualquiera.',
}: {
  number?: string;
  label?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section
      id="clientes"
      className="border-t border-rule py-16 sm:py-24 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHead number={number} label={label} title={title} intro={intro} />
        </Reveal>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-10 sm:w-24 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 sm:w-24 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />
        <Carousel
          label="Fotos reales de entregas a clientes"
          items={clientPhotos}
          keyOf={(photo, i) => `${photo.image}-${i}`}
          speed={64}
          gap="1.25rem"
          className="px-5 sm:px-8"
          renderSlide={(photo, i, copy) => (
            <Polaroid
              src={photo.image}
              caption={photo.tag}
              alt={photo.alt}
              decorative={copy === 1}
              rotate={rotations[i % rotations.length]}
              className="w-[min(76vw,300px)] sm:w-[300px] lg:w-[330px] shrink-0"
              imgClassName="aspect-[3/4]"
            />
          )}
        />
      </div>
    </section>
  );
}
