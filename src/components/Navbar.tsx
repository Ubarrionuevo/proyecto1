'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/products';
import { WhatsAppIcon, GoogleGIcon } from './Icons';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#F7D0D0]/50">
      <div className="max-w-5xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand & Google Maps Trust Tag */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl sm:text-2xl text-[#2D1520] tracking-tight">
              LaPrincesa<span className="text-[#D93864]">Cta</span>
            </span>
            <span className="text-[11px] text-[#5B7A62] font-medium hidden sm:inline-block">
              Desayunos a Domicilio • Catamarca
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 bg-[#FFFDF9] border border-[#F7D0D0] px-2.5 py-1 rounded-full text-[11px] text-[#6B4E5B] font-medium shadow-xs">
            <GoogleGIcon className="w-3.5 h-3.5" />
            <span>Google Maps</span>
          </div>
        </div>

        {/* Single WhatsApp CTA */}
        <a
          href={getWhatsAppUrl('desayuno a domicilio')}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-95 touch-target"
        >
          <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          <span>Consultar por WhatsApp</span>
        </a>

      </div>
    </header>
  );
}
