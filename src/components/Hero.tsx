'use client';

import React from 'react';
import { getWhatsAppUrl, mainDesayuno } from '@/lib/products';
import { WhatsAppIcon, HeartIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
      {/* Delicate background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#FCE8E8] rounded-full blur-3xl opacity-70 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#F0F5F1] rounded-full blur-3xl opacity-60 pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Emotional Pitch & Primary Action */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Category & Location Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFFDF9] border border-[#F7D0D0] text-[#D93864] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D93864] animate-ping" />
              <span>Regalos a Domicilio en Catamarca</span>
            </div>

            {/* Emotional Main Title */}
            <h1 className="font-display font-bold fluid-hero-title text-[#2D1520] mb-4 tracking-tight">
              Un desayuno a domicilio pensado para decir <span className="text-[#D93864] relative inline-block">‘te quiero’.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#6B4E5B] mb-8 leading-relaxed max-w-xl">
              {mainDesayuno.subtitle}
            </p>

            {/* Core Action: Single Conversion Goal */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWhatsAppUrl('desayuno a domicilio')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#D93864] hover:bg-[#C22B55] text-white px-7 py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] touch-target group"
              >
                <WhatsAppIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span>Quiero armar mi desayuno</span>
              </a>
            </div>

            {/* Reassurance pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-[#5B7A62]">
              <span className="flex items-center gap-1.5 font-medium bg-[#F0F5F1] px-3 py-1 rounded-full border border-[#D5E3D8]">
                <HeartIcon className="w-4 h-4 text-[#7D9B84]" />
                100% Personalizado a su gusto
              </span>
              <span className="flex items-center gap-1.5 font-medium bg-[#F0F5F1] px-3 py-1 rounded-full border border-[#D5E3D8]">
                🚚 Entrega puntual a domicilio
              </span>
            </div>


          </div>

          {/* Right Column: Protagonist Real Delivery Photo */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame & Delicate Styling */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFFDF9] transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-[#FAF6F0]">
                <img
                  src={mainDesayuno.heroImage}
                  alt={mainDesayuno.alt}
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-contain p-2"
                />
                
                {/* Floating Ribbon / Label on Photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FFFDF9]/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#F7D0D0]/80 shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FCE8E8] flex items-center justify-center text-[#D93864] shrink-0 font-bold">
                    ☕
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2D1520]">Desayuno a Domicilio Real</p>
                    <p className="text-[11px] text-[#6B4E5B]">Llevado directo a su puerta en Catamarca</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
