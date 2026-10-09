'use client';

import React from 'react';
import Image from 'next/image';
import { desayunos, getWhatsAppUrl } from '@/lib/products';
import SectionHead from './ui/SectionHead';
import StickerButton from './ui/StickerButton';
import Reveal from './ui/Reveal';

export default function SolutionSection() {
  return (
    <section id="desayunos" className="border-t border-rule py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHead
            number="01"
            label="Desayunos a domicilio"
            title={
              <>
                Lo que llega a la puerta
                <br className="hidden sm:block" /> antes de que se despierte.
              </>
            }
            intro="Armamos el desayuno completo, lo envolvemos y lo entregamos nosotros. Vos solo nos decís el nombre de quien lo recibe y el motivo."
          />
        </Reveal>

        {/* Una columna por producto en mobile; composicion amplia en desktop */}
        <div className="mt-12 sm:mt-20 grid gap-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {desayunos.map((product, idx) => (
            <Reveal
              key={product.id}
              as="article"
              /* Escalonado: el segundo entra despues del primero, para que se
                 lea como una composicion y no como un bloque que aparece de golpe. */
              delay={idx * 110}
              className={
                idx === 0
                  ? 'min-w-0 lg:col-span-7'
                  : 'min-w-0 lg:col-span-5 lg:mt-32 lg:border-l lg:border-rule lg:pl-8'
              }
            >
              <div className="min-w-0">
                <div
                  className={`zoom-host relative w-full overflow-hidden bg-paper-deep ${
                    idx === 0
                      ? 'h-[440px] sm:h-[560px] lg:h-[600px]'
                      : 'h-[400px] sm:h-[480px] lg:h-[520px]'
                  }`}
                >
                  {product.video ? (
                    <video
                      src={product.video}
                      className="zoom-media w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                    />
                  ) : (
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 660px"
                      priority={idx === 0}
                      className="zoom-media object-cover"
                    />
                  )}
                </div>

                <div className="mt-5 flex items-start justify-between gap-4 border-t border-rule pt-4">
                  <div className="min-w-0">
                    {product.tag && <span className="label text-berry">{product.tag}</span>}
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-1">
                      {product.name}
                    </h3>
                  </div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-berry leading-none shrink-0">
                    {product.price}
                  </p>
                </div>

                <StickerButton
                  href={getWhatsAppUrl(`el ${product.name}`)}
                  className="mt-6 w-full sm:w-auto"
                  size="md"
                >
                  Quiero este
                </StickerButton>

                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft max-w-prose">
                  {product.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
