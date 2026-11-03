'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { desayunos, ramos, getWhatsAppUrl, type Product } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import FarAwayLine from '@/components/FarAwayLine';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ClientsMotion from '@/components/ClientsMotion';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import GoogleRating from '@/components/GoogleRating';
import CatalogPromo from '@/components/CatalogPromo';
import ProductCard, { ProductCardButton } from '@/components/ProductCard';
import StickerButton from '@/components/ui/StickerButton';
import ReadMore from '@/components/ui/ReadMore';

type Filter = 'todos' | 'desayunos' | 'ramos';

const filters: { id: Filter; label: string }[] = [
  { id: 'todos', label: 'Todo' },
  { id: 'desayunos', label: 'Desayunos' },
  { id: 'ramos', label: 'Ramos' },
];

const catalog: (Product & { category: Exclude<Filter, 'todos'> })[] = [
  ...desayunos.map((p) => ({ ...p, category: 'desayunos' as const })),
  ...ramos.map((p) => ({ ...p, category: 'ramos' as const })),
];

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Catálogo' },
];

/* Pensado para abrirse desde un link de WhatsApp en el celular: los productos
   arriba de todo, sin el menú del sitio, y un botón de pedido en cada tarjeta. */
export default function CatalogoClient() {
  const [filter, setFilter] = useState<Filter>('todos');
  const visible = filter === 'todos' ? catalog : catalog.filter((p) => p.category === filter);

  return (
    <main className="min-h-dvh bg-paper text-ink">
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="font-display text-[1.35rem] font-semibold tracking-tight text-ink leading-none"
          >
            LaPrincesa
            <span className="text-berry">Cta</span>
          </Link>
          <GoogleRating size="sm" hideCount />
        </div>
      </header>

      <Breadcrumbs items={crumbs} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-4">
        <h1 className="display-md text-ink text-balance">
          Catálogo de desayunos y ramos en Catamarca
        </h1>
        <p className="mt-1.5 text-base text-ink-soft">Elegí uno y pedilo por WhatsApp.</p>
      </div>

      {/* Filtro fijo arriba para cambiar de categoría sin volver a subir */}
      <div className="sticky top-0 z-30 mt-3 bg-paper border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex gap-6">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`relative h-11 text-sm font-bold transition-colors ${
                filter === f.id ? 'text-ink' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {f.label}
              {filter === f.id && (
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-berry" />
              )}
            </button>
          ))}
        </div>
      </div>

      <section aria-label="Productos" className="py-6 sm:py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-8">
            {visible.map((item, idx) => (
              <article key={item.id} className="min-w-0">
                <ProductCard
                  product={item}
                  title={productPageById[item.id].seoName}
                  Heading="h2"
                  priority={idx < 2}
                >
                  <p className="mt-1 mb-3 line-clamp-3 text-[13px] leading-snug text-ink-soft">
                    {item.description}
                  </p>
                  <ProductCardButton product={item} className="mt-auto">
                    Pedir
                  </ProductCardButton>
                </ProductCard>
              </article>
            ))}
          </div>

          <div className="mt-10 border border-rule bg-paper-card p-5 sm:p-8">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
              ¿No está lo que buscabas?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft max-w-prose">
              Armamos el desayuno o el ramo a tu gusto: los sabores, el tema, la decoración y el
              mensaje. Contanos qué tenés en mente y te pasamos el presupuesto.
            </p>
            <StickerButton
              href={getWhatsAppUrl('un regalo a mi manera')}
              variant="wa"
              wrap
              className="mt-4 w-full sm:w-auto"
            >
              Quiero uno a mi manera
            </StickerButton>
          </div>

          <ReadMore summary="Más sobre el catálogo" className="mt-6">
            <p className="text-sm leading-relaxed text-ink-soft max-w-prose">
              Dos desayunos sorpresa —caja de madera o de cartón— y cuatro ramos de golosinas, cada
              uno con su ficha y su botón para pedir por WhatsApp. Por cantidades, temas especiales
              o entrega en otra ciudad, consultanos.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft max-w-prose">
              Si querés conocer el detalle de la entrega y las presentaciones, mirá los{' '}
              <Link
                href="/desayunos-sorpresa-catamarca"
                className="link-underline font-bold text-ink"
              >
                desayunos sorpresa en Catamarca
              </Link>{' '}
              o los{' '}
              <Link
                href="/ramos-de-golosinas-catamarca"
                className="link-underline font-bold text-ink"
              >
                ramos de golosinas
              </Link>
              .
            </p>
            <FarAwayLine className="mt-4 max-w-prose" />
          </ReadMore>
        </div>
      </section>

      <ClientsMotion
        title="También nos llegan desde lejos."
        intro="Personas de Catamarca y de todo el país que recibieron su regalo en la puerta."
      />

      <Footer />
      <CatalogPromo />
      <FloatingWhatsApp />
    </main>
  );
}
