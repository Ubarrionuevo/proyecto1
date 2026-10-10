'use client';

import React from 'react';
import { getWhatsAppUrl, contact } from '@/lib/products';
import StickerButton from './ui/StickerButton';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';

export default function AdditionalCta() {
  return (
    <section className="border-t border-rule py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <SectionHead
            label="Último paso"
            title={
              <>
                Mandanos un mensaje
                <br className="hidden sm:block" /> y lo armamos vos.
              </>
            }
            align="center"
          />

          <p className="mt-6 text-[15px] sm:text-base text-ink-soft max-w-md mx-auto leading-relaxed">
            Contanos para quién es, qué día y cuánto querés gastar. Te respondemos con opciones y
            formas de pago en el momento.
          </p>
        </Reveal>

        <Reveal delay={130} className="mt-9 flex items-center justify-center">
          <StickerButton href={getWhatsAppUrl('un regalo')} size="lg">
            Quiero mi regalo
          </StickerButton>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 text-[13px] text-ink-soft">
            {contact.phoneDisplay} ·{' '}
            <strong className="font-bold text-ink">{contact.hours}</strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
