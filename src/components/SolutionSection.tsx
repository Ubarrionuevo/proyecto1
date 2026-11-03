'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { desayunos, getWhatsAppUrl, productTopic } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import { siteConfig } from '@/lib/site';
import SectionHead from './ui/SectionHead';
import StickerButton from './ui/StickerButton';
import Reveal from './ui/Reveal';
import ReadMore from './ui/ReadMore';
import ProductCard, { ProductCardButton } from './ProductCard';

const intro =
  'Estés donde estés, nosotras nos encargamos: armamos el desayuno completo, lo envolvemos y lo entregamos a domicilio. Vos solo nos decís el nombre de quien lo recibe y el motivo.';

/* `compact` es la versión de la home: mismos textos, plegados. */
export default function SolutionSection({ compact = false }: { compact?: boolean }) {
  const moreLinks = (
    <>
      Conocé los{' '}
      <Link
        href="/desayunos-sorpresa-catamarca"
        className="link-underline font-bold text-ink"
      >
        desayunos sorpresa en Catamarca
      </Link>
      : qué traen, las dos presentaciones disponibles y cómo se entregan. Si preferís
      comparar todo junto, mirá el{' '}
      <Link href="/catalogo" className="link-underline font-bold text-ink">
        catálogo de desayunos y ramos
      </Link>
      . Y si querés sumarle un mensaje escrito a mano, también hacemos{' '}
      <Link
        href="/cartas-personalizadas"
        className="link-underline font-bold text-ink"
      >
        cartas personalizadas
      </Link>{' '}
      para enviar a todo el país.
    </>
  );

  if (compact) {
    return (
      <section id="desayunos" className="border-t border-rule py-12 sm:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <SectionHead
              title={
                <>
                  Lo que llega a la puerta
                  <br className="hidden sm:block" /> antes de que se despierte.
                </>
              }
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:gap-x-8">
            {desayunos.map((product, idx) => (
              <Reveal key={product.id} as="article" delay={idx * 110} className="min-w-0">
                <ProductCard product={product} priority={idx === 0}>
                  <ProductCardButton product={product}>Quiero esta</ProductCardButton>
                  <ReadMore summary="Qué trae" className="mt-1">
                    <p className="text-sm leading-relaxed text-ink-soft">{product.detail}</p>
                    <Link
                      href={productPageById[product.id].urlPath}
                      className="mt-2 inline-block text-sm link-underline font-bold text-ink"
                    >
                      {productPageById[product.id].seoName}: ver detalle
                    </Link>
                  </ReadMore>
                </ProductCard>
              </Reveal>
            ))}
          </div>

          <ReadMore summary="Más sobre los desayunos" className="mt-6">
            <p className="text-base leading-relaxed text-ink-soft max-w-prose">{intro}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">{moreLinks}</p>
          </ReadMore>
        </div>
      </section>
    );
  }

  return (
    <section id="desayunos" className="border-t border-rule py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHead
            number="01"
            title={
              <>
                Lo que llega a la puerta
                <br className="hidden sm:block" /> antes de que se despierte.
              </>
            }
            intro={intro}
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
                  {siteConfig.showPrices && (
                    <p className="font-display text-2xl sm:text-3xl font-semibold text-berry leading-none shrink-0">
                      {product.price}
                    </p>
                  )}
                </div>

                <StickerButton
                  href={getWhatsAppUrl(productTopic(product.name))}
                  className="mt-6 w-full sm:w-auto"
                  size="md"
                >
                  Quiero esta
                </StickerButton>

                <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
                  {product.detail}
                </p>
                <Link
                  href={productPageById[product.id].urlPath}
                  className="mt-3 inline-block text-sm link-underline font-bold text-ink"
                >
                  {productPageById[product.id].seoName}: ver detalle
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-base leading-relaxed text-ink-soft max-w-prose">{moreLinks}</p>
      </div>
    </section>
  );
}
