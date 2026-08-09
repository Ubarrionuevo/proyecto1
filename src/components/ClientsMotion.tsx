'use client';

import React from 'react';
import { clientPhotos } from '@/lib/products';

export default function ClientsMotion() {
  const rowA = [...clientPhotos, ...clientPhotos];
  const rowB = [...clientPhotos.slice().reverse(), ...clientPhotos.slice().reverse()];

  return (
    <section className="py-12 sm:py-16 bg-[#FFFDF9] border-t border-[#F7D0D0]/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
        <span className="text-[#5B7A62] font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#F0F5F1] px-3.5 py-1 rounded-full inline-block mb-3">
          Nuestros Clientes
        </span>
        <h2 className="font-display font-bold fluid-section-title text-[#2D1520] mb-2">
          Mira a quiénes ya sorprendimos
        </h2>
      </div>

      {/* Collage de fotos con motion en dos direcciones */}
      <div className="space-y-3 sm:space-y-4">

        {/* Fila 1: hacia la izquierda */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-24 bg-gradient-to-r from-[#FFFDF9] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-24 bg-gradient-to-l from-[#FFFDF9] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-left flex gap-3 sm:gap-4">
            {rowA.map((item, idx) => (
              <figure
                key={idx}
                className={`shrink-0 rounded-2xl overflow-hidden border border-[#F7D0D0]/80 shadow-xs bg-[#FFFDF9] flex items-center justify-center ${
                  idx % 3 === 0 ? 'w-40 sm:w-60 h-48 sm:h-64' : idx % 3 === 1 ? 'w-44 sm:w-64 h-52 sm:h-72' : 'w-36 sm:w-52 h-44 sm:h-60'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.tag}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>

        {/* Fila 2: hacia la derecha */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-24 bg-gradient-to-r from-[#FFFDF9] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-24 bg-gradient-to-l from-[#FFFDF9] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-right flex gap-3 sm:gap-4">
            {rowB.map((item, idx) => (
              <figure
                key={idx}
                className={`shrink-0 rounded-2xl overflow-hidden border border-[#F7D0D0]/80 shadow-xs bg-[#FFFDF9] flex items-center justify-center ${
                  idx % 3 === 0 ? 'w-36 sm:w-52 h-44 sm:h-60' : idx % 3 === 1 ? 'w-44 sm:w-64 h-48 sm:h-68' : 'w-40 sm:w-60 h-52 sm:h-72'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.tag}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}