'use client';

import React from 'react';
import Image from 'next/image';
import { clientPhotos } from '@/lib/products';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';

export default function ClientsMotion({
  number,
  title = 'Fotos reales de entregas.',
  intro = 'Ninguna está retocada: son personas de Catamarca que recibieron una sorpresa un día cualquiera.',
}: {
  number?: string;
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
          <SectionHead number={number} title={title} intro={intro} />
        </Reveal>
      </div>

      {/* Grilla con todas las fotos, cada una una sola vez, en cuadrados
          recortados. Sin autoplay ni scroll horizontal. Son 12, que cierran la
          grilla a 2, 3 y 4 columnas. Si se agrega o se saca una, revisar que el
          total siga siendo múltiplo de 12 o que la última fila quede pareja. */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-10 lg:mt-12">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {clientPhotos.map((photo) => (
            <li
              key={photo.image}
              className="relative aspect-square overflow-hidden border border-rule bg-paper-deep"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
