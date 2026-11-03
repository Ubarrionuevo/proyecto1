'use client';

import React from 'react';
import Link from 'next/link';
import { ramos, getWhatsAppUrl } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import { siteConfig } from '@/lib/site';
import SectionHead from './ui/SectionHead';
import StickerButton from './ui/StickerButton';
import Reveal from './ui/Reveal';
import Polaroid from './ui/Polaroid';
import ReadMore from './ui/ReadMore';
import ProductCard, { ProductCardButton } from './ProductCard';

const intro =
  'Se suman a cualquier desayuno o van solos. Si estás lejos, también podés sumarlos: decinos el tema y lo armamos como vos lo quieras.';

/* Cada ramo es una tarjeta protagonista: imagen grande arriba, producto y
   precio visibles, CTA inmediato e informacion complementaria despues.
   `compact` es la versión de la home: mismos textos, plegados. */
export default function AdditionalGifts({ compact = false }: { compact?: boolean }) {
  const closing = (
    <>
      <p className="text-sm text-ink-soft max-w-prose">
        ¿Necesitás algo que no esté en la lista? También lo armamos: escribinos y contanos qué
        tenés en mente.
      </p>

      <p className="mt-5 text-sm leading-relaxed text-ink-soft max-w-prose">
        Conocé todos los detalles de nuestros{' '}
        <Link href="/ramos-de-golosinas-catamarca" className="link-underline font-bold text-ink">
          ramos de golosinas en Catamarca
        </Link>
        : modelos, armado por pedido y entrega a domicilio.
      </p>
    </>
  );

  if (compact) {
    return (
      <section id="ramos" className="border-t border-rule bg-paper-deep py-12 sm:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <SectionHead
              title={
                <>
                  Chocolates, golosinas
                  <br className="hidden sm:block" /> y peluches armados a mano.
                </>
              }
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-2 items-start gap-x-4 gap-y-8 lg:grid-cols-4 sm:gap-x-8">
            {ramos.map((ramo, idx) => (
              <Reveal key={ramo.id} as="article" delay={Math.min(idx * 80, 240)} className="min-w-0">
                <ProductCard product={ramo}>
                  <ProductCardButton product={ramo} variant="outline">
                    Quiero este
                  </ProductCardButton>
                  <ReadMore summary="Qué trae" className="mt-1">
                    <p className="text-sm leading-relaxed text-ink-soft">{ramo.description}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{ramo.detail}</p>
                    <Link
                      href={productPageById[ramo.id].urlPath}
                      className="mt-2 inline-block text-sm link-underline font-bold text-ink"
                    >
                      {productPageById[ramo.id].seoName}: ver detalle
                    </Link>
                  </ReadMore>
                </ProductCard>
              </Reveal>
            ))}
          </div>

          <ReadMore summary="Más sobre los ramos" className="mt-6">
            <p className="mb-5 text-sm leading-relaxed text-ink-soft max-w-prose">{intro}</p>
            {closing}
          </ReadMore>
        </div>
      </section>
    );
  }

  return (
    <section id="ramos" className="border-t border-rule bg-paper-deep py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHead
            number="02"
            title={
              <>
                Chocolates, golosinas
                <br className="hidden sm:block" /> y peluches armados a mano.
              </>
            }
            intro={intro}
          />
        </Reveal>

        <div className="mt-12 sm:mt-16 grid gap-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
          {ramos.map((ramo, idx) => (
            <Reveal
              key={ramo.id}
              as="article"
              delay={Math.min(idx * 80, 240)}
              className="min-w-0"
            >
              {/* Foto grande: mantiene marco polaroid y proporcion vertical */}
              {ramo.video ? (
                <figure
                  className="polaroid w-full"
                  style={{ '--rot': idx % 2 === 0 ? '-1.5deg' : '1.5deg' } as React.CSSProperties}
                >
                  <video
                    src={ramo.video}
                    className="w-full aspect-[3/4] object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={ramo.images[0].src}
                  />
                </figure>
              ) : (
                <Polaroid
                  src={ramo.images[0].src}
                  alt={ramo.images[0].alt}
                  rotate={idx % 2 === 0 ? -1.5 : 1.5}
                  sizes="(max-width: 640px) 100vw, 520px"
                  className="w-full"
                  imgClassName="aspect-[3/4]"
                />
              )}

              {/* Producto visible */}
              <div className="mt-6 border-t border-rule pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    {ramo.tag && (
                      <span className="label text-berry text-[10px]">{ramo.tag}</span>
                    )}
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-1">
                      {ramo.name}
                    </h3>
                  </div>
                  {siteConfig.showPrices && (
                    <p className="font-display text-2xl sm:text-3xl font-semibold text-berry leading-none shrink-0">
                      {ramo.price}
                    </p>
                  )}
                </div>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {ramo.description}
                </p>

                <StickerButton
                  href={getWhatsAppUrl(`el ${ramo.name}`)}
                  variant="outline"
                  size="md"
                  className="mt-5 w-full sm:w-auto"
                >
                  Quiero este
                </StickerButton>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft/80 max-w-prose hidden md:block">
                  {ramo.detail}
                </p>
                <Link
                  href={productPageById[ramo.id].urlPath}
                  className="mt-3 inline-block text-sm link-underline font-bold text-ink"
                >
                  {productPageById[ramo.id].seoName}: ver detalle
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">{closing}</div>
      </div>
    </section>
  );
}
