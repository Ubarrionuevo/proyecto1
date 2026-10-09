'use client';

import React, { useState } from 'react';
import { desayunos, ramos, contact, getWhatsAppUrl, type Product } from '@/lib/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientsMotion from '@/components/ClientsMotion';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SectionHead from '@/components/ui/SectionHead';
import StickerButton from '@/components/ui/StickerButton';
import Reveal from '@/components/ui/Reveal';
import Polaroid from '@/components/ui/Polaroid';
import { GoogleGIcon, StarIcon } from '@/components/Icons';

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

export default function CatalogoClient() {
  const [filter, setFilter] = useState<Filter>('todos');
  const visible = filter === 'todos' ? catalog : catalog.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />

      {/* 1. Banner */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-x-8 gap-y-8">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="label">Catálogo</span>
                <h1 className="display-lg mt-4 text-ink">
                  Todo lo que armamos,
                  <br />
                  <span className="text-berry italic">con precio.</span>
                </h1>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:pt-12">
              <Reveal delay={110}>
                <p className="text-[15px] sm:text-base leading-relaxed text-ink-soft max-w-sm">
                  Desayunos y ramos con el detalle de lo que incluyen. Si ninguno es lo que
                  buscabas, escribinos y lo armamos a tu manera.
                </p>

                <StickerButton
                  href={getWhatsAppUrl('un regalo del catálogo')}
                  className="mt-6"
                  size="md"
                >
                  Quiero armar un regalo
                </StickerButton>

                <div className="mt-6 flex items-center gap-2 text-[13px] text-ink-soft">
                  <GoogleGIcon className="w-4 h-4" />
                  <span className="flex items-center gap-px" role="img" aria-label="5 de 5 estrellas">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarIcon key={i} className="w-3.5 h-3.5 text-butter-deep" />
                    ))}
                  </span>
                  <span>
                    <span className="font-bold text-ink">{contact.rating}</span> ·{' '}
                    {contact.reviews} opiniones
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Productos */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHead
            label="Lista de precios"
            title="Elegí uno y pedilo por WhatsApp."
            intro="Los precios son los de lista. Por cantidades, temas especiales o entrega en otra ciudad, consultanos."
          />

          {/* Filtro como tabs con filete, no pills */}
          <div className="mt-10 border-b border-rule flex gap-6">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`relative pb-3 text-sm font-bold transition-colors ${
                  filter === f.id ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {f.label}
                {filter === f.id && (
                  <span className="absolute left-0 -bottom-px h-0.5 w-full bg-berry" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 border-t border-rule">
            {visible.map((item, idx) => (
              <Reveal
                key={item.id}
                as="article"
                /* El tope evita que un catalogo largo termine tardando
                   demasiado en mostrar el ultimo producto. */
                delay={Math.min(idx * 70, 280)}
                className="lift-row grid grid-cols-12 gap-x-4 sm:gap-x-6 items-start py-6 sm:py-8 border-b border-rule"
              >
                <div className="col-span-3 sm:col-span-2">
                  {item.video ? (
                    <figure className="polaroid" style={{ '--rot': '-1.5deg' } as React.CSSProperties}>
                      <video
                        src={item.video}
                        className="w-full aspect-[3/4] object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster={item.images[0].src}
                      />
                    </figure>
                  ) : (
                    <Polaroid
                      src={item.images[0].src}
                      alt={item.images[0].alt}
                      rotate={-1.5}
                      sizes="(max-width: 640px) 30vw, 190px"
                      className="w-full"
                      imgClassName="aspect-[3/4]"
                    />
                  )}
                </div>

                <div className="col-span-9 sm:col-span-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                      {item.name}
                    </h2>
                    {item.tag && (
                      <span className="label text-berry text-[10px]">{item.tag}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/80 max-w-prose hidden md:block">
                    {item.detail}
                  </p>
                </div>

                <div className="col-span-7 sm:col-span-2 mt-4 sm:mt-0 sm:text-right">
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-berry leading-none">
                    {item.price}
                  </p>
                  <p className="label mt-1.5 sm:hidden">Precio</p>
                </div>

                <div className="col-span-5 sm:col-span-3 flex sm:justify-end mt-4 sm:mt-0">
                  <StickerButton
                    href={getWhatsAppUrl(`el ${item.name}`)}
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    Encargar
                  </StickerButton>
                </div>
              </Reveal>
            ))}
          </div>

          {/* A medida */}
          <Reveal className="mt-12 border border-rule bg-paper-card p-6 sm:p-8">
            <div className="grid sm:grid-cols-12 gap-x-8 gap-y-5 items-center">
              <div className="sm:col-span-7">
                <span className="label">A medida</span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-2">
                  ¿No está lo que buscabas?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft max-w-prose">
                  Armamos el desayuno o el ramo a tu gusto: los sabores, el tema, la decoración y
                  el mensaje. Contanos qué tenés en mente y te pasamos el presupuesto.
                </p>
              </div>
              <div className="sm:col-span-5 sm:text-right">
                <StickerButton
                  href={getWhatsAppUrl('un regalo a mi manera')}
                  variant="wa"
                  className="w-full sm:w-auto"
                >
                  Quiero uno a mi manera
                </StickerButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Clientes */}
      <ClientsMotion
        label="Los que ya nos eligieron"
        title="También nos llegan desde lejos."
        intro="Personas de Catamarca y de todo el país que recibieron su regalo en la puerta."
      />

      {/* 4. CTA final */}
      <section className="border-t border-rule py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <SectionHead
              label="Cuando quieras"
              title={
                <>
                  Escribinos y lo armamos
                  <br className="hidden sm:block" /> para el día que elijas.
                </>
              }
              align="center"
            />
            <p className="mt-6 text-[15px] text-ink-soft max-w-md mx-auto leading-relaxed">
              Contanos para quién es y qué día. Te respondemos con opciones y formas de pago en el
              momento.
            </p>
          </Reveal>
          <Reveal delay={130}>
            <div className="mt-8">
              <StickerButton href={getWhatsAppUrl('un regalo')} size="lg">
                Quiero mi regalo
              </StickerButton>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
