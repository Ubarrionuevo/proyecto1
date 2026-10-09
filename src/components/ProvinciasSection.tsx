'use client';

import { getWhatsAppUrl } from '@/lib/products';
import StickerButton from './ui/StickerButton';
import Reveal from './ui/Reveal';

const steps = [
  {
    n: '01',
    t: 'Vos escribís desde donde estés',
    d: 'Nos contás el nombre de quien recibe y el motivo. Nosotros coordinamos el resto con esa persona.',
  },
  {
    n: '02',
    t: 'Confirmás por transferencia',
    d: 'Te pasamos el detalle del pedido y abonás. Sin comisiones ni intermediarios: hablás directo con nosotras.',
  },
  {
    n: '03',
    t: 'Entregamos en Catamarca',
    d: 'Llevamos el desayuno o el ramo a la puerta, en San Fernando del Valle.',
  },
  {
    n: '04',
    t: 'Te avisamos que llegó',
    d: 'Te escribimos por WhatsApp cuando la entrega está hecha. Sin sorpresas.',
  },
];

export default function ProvinciasSection() {
  return (
    <section className="bg-paper-deep text-ink py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* CTA directo en el lugar del bloque eliminado */}
          <div className="lg:col-span-5">
            <Reveal className="border border-rule bg-paper-card p-5 sm:p-6">
              <StickerButton
                href={getWhatsAppUrl('un regalo para un familiar en Catamarca desde otra provincia')}
                variant="wa"
                className="w-full"
                size="md"
                wrap
              >
                Quiero enviarle un regalo a un familiar
              </StickerButton>
            </Reveal>

            {/* Historia Italia: cita, no card */}
            <Reveal delay={120} className="mt-10 border-l-2 border-butter pl-5" as="figure">
              <blockquote className="quote text-xl sm:text-2xl leading-snug text-ink">
                Un cliente que vive en Italia nos confió el desayuno de su mamá acá. Nos escribió,
                lo armamos y se lo entregamos.
              </blockquote>
              <figcaption className="label mt-4">
                Ya nos pasó — y lo hacemos de nuevo
              </figcaption>
            </Reveal>
          </div>

          {/* Pasos como lista numerada. Cada paso entra escalonado al hacer scroll:
                  leerlos de a uno convierte la lista en una narrativa. */}
          <div className="lg:col-span-7">
            <div className="border-t border-ink/20">
              {steps.map((step, idx) => (
                <Reveal
                  key={step.n}
                  delay={idx * 90}
                  y={10}
                  className="grid grid-cols-12 gap-4 py-6 border-b border-ink/20"
                >
                  <span className="col-span-2 sm:col-span-1 font-display text-2xl text-berry-deep leading-none">
                    {step.n}
                  </span>
                  <div className="col-span-10 sm:col-span-11">
                    <h3 className="font-display text-lg sm:text-xl text-ink">{step.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft max-w-md">
                      {step.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
