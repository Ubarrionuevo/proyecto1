'use client';

import Link from 'next/link';
import { desayunos } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';
import ReadMore from './ui/ReadMore';
import ProductCard, { ProductCardButton } from './ProductCard';

/* Los desayunos en la home: foto, nombre y CTA a la vista, y el texto plegado. */
export default function SolutionSection() {
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
          <p className="text-base leading-relaxed text-ink-soft max-w-prose">
            Estés donde estés, nosotras nos encargamos: armamos el desayuno completo, lo envolvemos
            y lo entregamos a domicilio. Vos solo nos decís el nombre de quien lo recibe y el motivo.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-prose">
            Conocé los{' '}
            <Link href="/desayunos-sorpresa-catamarca" className="link-underline font-bold text-ink">
              desayunos sorpresa en Catamarca
            </Link>
            : qué traen, las dos presentaciones disponibles y cómo se entregan. Si preferís comparar
            todo junto, mirá el{' '}
            <Link href="/catalogo" className="link-underline font-bold text-ink">
              catálogo de desayunos y ramos
            </Link>
            . Y si querés sumarle un mensaje escrito a mano, también hacemos{' '}
            <Link href="/cartas-personalizadas" className="link-underline font-bold text-ink">
              cartas personalizadas
            </Link>{' '}
            para enviar a todo el país.
          </p>
        </ReadMore>
      </div>
    </section>
  );
}
