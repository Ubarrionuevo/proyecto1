'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import StickerButton from './ui/StickerButton';
import ReadMore from './ui/ReadMore';
import { ArrowIcon } from './Icons';
import { getWhatsAppUrl } from '@/lib/products';
import { originLinks } from '@/lib/site';

/* El primero es el que queda en el HTML del servidor: nombra los dos productos,
   como el title de la home. Si dijera solo "Desayunos sorpresa" competiría con
   /desayunos-sorpresa-catamarca por la misma búsqueda. */
const headlineProducts = ['Desayunos y ramos', 'Desayunos sorpresa', 'Ramos de golosinas'];
const headlineIntervalMs = 3500;

/* Producto del titular, cambia solo. Con movimiento reducido cambia sin
   animación: .rise ya se apaga en ese caso. */
function RotatingProduct() {
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setChanges((count) => count + 1), headlineIntervalMs);
    return () => clearInterval(id);
  }, []);

  return (
    /* La key remonta el span para que la animación corra en cada cambio. */
    <span key={changes} className={`inline-block text-berry ${changes > 0 ? 'rise' : ''}`}>
      {headlineProducts[changes % headlineProducts.length]}
    </span>
  );
}

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
            <RotatingProduct /> a domicilio en Catamarca
          </h1>

          <p
            className="display-md mt-1 text-berry italic rise"
            style={{ '--rise-delay': '80ms' } as React.CSSProperties}
          >
            ¿Vivís lejos y tenés familia o amigos en Catamarca?
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

          <div className="rise" style={{ '--rise-delay': '300ms' } as React.CSSProperties}>
            <ReadMore
              summary={
                <span className="text-lg sm:text-xl underline decoration-berry decoration-2 underline-offset-4">
                  Cómo funciona
                </span>
              }
              align="center"
              className="mt-4"
            >
              <p className="text-base text-ink-soft max-w-2xl mx-auto leading-relaxed">
                Quedate tranquilo: nos encargamos de todo. Elegís el regalo, nos decís para quién
                es y lo entregamos en la puerta. Te mandamos foto o video de la entrega.
              </p>

              <div className="mt-4 flex items-center justify-center">
                <Link
                  href="/enviar-regalo-a-catamarca"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink link-underline"
                >
                  ¿Estás lejos? Lo mandás desde cualquier provincia o país y te enviamos foto de la
                  entrega
                  <ArrowIcon className="w-4 h-4 shrink-0 text-berry" />
                </Link>
              </div>

              <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px]">
                {originLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link-underline text-ink-soft hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ReadMore>
          </div>
        </div>
      </div>
    </section>
  );
}