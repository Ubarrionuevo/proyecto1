'use client';

import React from 'react';
import { getWhatsAppUrl, desayunoModels } from '@/lib/products';
import { WhatsAppIcon } from './Icons';

export default function SolutionSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFFDF9] border-t border-[#F7D0D0]/40">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#D93864] font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#FCE8E8] px-3.5 py-1 rounded-full mb-3">
            Desayunos a Domicilio
          </span>
          
          <h2 className="font-display font-bold fluid-section-title text-[#2D1520] mb-4">
            Elegí el modelo que quieras. Nosotros lo llevamos a su puerta.
          </h2>

          <p className="text-base sm:text-lg text-[#6B4E5B] leading-relaxed">
            Desayunos a domicilio para cumpleaños, aniversarios, agradecimientos y esos días en que una sorpresa cambia todo el día.
          </p>
        </div>

        {/* 2 Desayuno Models */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {desayunoModels.map((model) => (
            <div
              key={model.id}
              className="bg-[#FAF6F0] rounded-3xl overflow-hidden border border-[#F7D0D0]/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#FAF6F0]">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#2D1520] mb-2">
                    {model.name}
                  </h3>
                  <p className="text-sm text-[#6B4E5B] mb-5 leading-relaxed">
                    {model.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F7D0D0]/50 flex items-center justify-between">
                  <span className="font-display font-bold text-xl text-[#D93864]">
                    {model.price}
                  </span>
                  <a
                    href={getWhatsAppUrl(`Desayuno a Domicilio - ${model.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#D93864] hover:bg-[#C22B55] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full transition-colors"
                  >
                    <span>Armar este desayuno</span>
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href={getWhatsAppUrl('desayuno a domicilio')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D93864] hover:bg-[#C22B55] text-white px-8 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] touch-target"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            <span>Consultar por un Desayuno a Domicilio</span>
          </a>
        </div>

      </div>
    </section>
  );
}