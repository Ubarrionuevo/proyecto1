'use client';

import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '@/lib/products';
import { WhatsAppIcon } from './Icons';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={getWhatsAppUrl('desayuno a domicilio')}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-[calc(env(safe-area-inset-bottom)_+_1.25rem)] right-4 sm:right-6 z-50 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center touch-target animate-pulse-glow ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-6 scale-75 pointer-events-none'
      }`}
      aria-label="Consultar por Desayuno a Domicilio en WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
    </a>
  );
}
