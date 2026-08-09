'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientsMotion from '@/components/ClientsMotion';
import SolutionSection from '@/components/SolutionSection';
import AdditionalGifts from '@/components/AdditionalGifts';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#2D1520] font-sans antialiased selection:bg-[#FCE8E8] selection:text-[#D93864]">
      <Navbar />
      <Hero />
      <SolutionSection />
      <ClientsMotion />
      <AdditionalGifts />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}