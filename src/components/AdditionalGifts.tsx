'use client';

import Link from 'next/link';
import { ramos } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';
import ReadMore from './ui/ReadMore';
import ProductCard, { ProductCardButton } from './ProductCard';

/* Los ramos en la home: foto, nombre y CTA a la vista, y el texto plegado. */
export default function AdditionalGifts() {
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
          <p className="mb-5 text-sm leading-relaxed text-ink-soft max-w-prose">
            Se suman a cualquier desayuno o van solos. Si estás lejos, también podés sumarlos:
            decinos el tema y lo armamos como vos lo quieras.
          </p>
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
        </ReadMore>
      </div>
    </section>
  );
}
