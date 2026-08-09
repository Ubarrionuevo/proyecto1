'use client';

import React from 'react';
import { getWhatsAppUrl, ramosProducts } from '@/lib/products';
import { WhatsAppIcon } from './Icons';

export default function AdditionalGifts() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF6F0] border-t border-[#F7D0D0]/40">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#D93864] font-bold text-xs uppercase tracking-wider bg-[#FCE8E8] px-3.5 py-1 rounded-full inline-block mb-3">
            Opciones Complementarias
          </span>
          
          <h2 className="font-display font-bold fluid-section-title text-[#2D1520] mb-4">
            Ramos de golosinas y regalos que también cuentan una historia.
          </h2>

          <p className="text-base text-[#6B4E5B] leading-relaxed">
            Podés sumar un ramo de golosinas o chocolate para acompañar tu desayuno a domicilio y hacerlo aún más inolvidable.
          </p>
        </div>

        {/* 3 Product Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ramosProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#F7D0D0]/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-52 overflow-hidden bg-[#FFFDF9]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain p-2"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#D93864] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#2D1520] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B4E5B] mb-4 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F7D0D0]/50 flex items-center justify-between">
                  <span className="font-bold text-[#D93864] text-base">
                    {product.price}
                  </span>
                  <a
                    href={getWhatsAppUrl(`Ramo de Golosinas - ${product.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-[#FCE8E8] hover:bg-[#F7D0D0] text-[#D93864] font-bold px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
                  >
                    <span>Sumar regalo</span>
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single Goal Reminder */}
        <div className="text-center bg-[#FFFDF9] p-6 rounded-2xl border border-[#F7D0D0]/80 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-[#6B4E5B] mb-3">
            💡 ¿Querés combinar un desayuno a domicilio con un ramo de golosinas?
          </p>
          <a
            href={getWhatsAppUrl('combo de desayuno a domicilio + ramo de golosinas')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D93864] hover:text-[#C22B55] font-bold text-sm underline transition-colors"
          >
            <span>Consultar por combo especial en WhatsApp</span>
            <WhatsAppIcon className="w-4 h-4 fill-current" />
          </a>
        </div>

      </div>
    </section>
  );
}
