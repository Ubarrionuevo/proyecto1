'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import GeoBanner from '@/components/GeoBanner';
import SolutionSection from '@/components/SolutionSection';
import AdditionalGifts from '@/components/AdditionalGifts';
import ClientsMotion from '@/components/ClientsMotion';
import ProvinciasSection from '@/components/ProvinciasSection';
import AdditionalCta from '@/components/AdditionalCta';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />
      <GeoBanner />
      <SolutionSection />
      <AdditionalGifts />
      <ClientsMotion number="03" />
      <ProvinciasSection />
      <AdditionalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
