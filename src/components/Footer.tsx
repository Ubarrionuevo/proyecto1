'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/products';
import { WhatsAppIcon, MapPinIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-[#1A0A12] text-[#FCE8E8]/80 py-12 px-4 sm:px-6 border-t border-[#3B1E2B]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div>
          <span className="font-display font-bold text-2xl text-white block mb-1">
            LaPrincesa<span className="text-[#D93864]">Cta</span>
          </span>
          <p className="text-xs text-[#FAF6F0]/70 flex items-center justify-center md:justify-start gap-1">
            <MapPinIcon className="w-3.5 h-3.5 text-[#7D9B84]" />
            Desayunos a Domicilio en San Fernando del Valle de Catamarca
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={getWhatsAppUrl('desayuno a domicilio')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#3B1E2B]/60 text-center text-[11px] text-[#FAF6F0]/40">
        © {new Date().getFullYear()} LaPrincesaCta. Vos imaginás el momento; nosotras lo hacemos llegar a domicilio. Todos los derechos reservados.
      </div>
    </footer>
  );
}
