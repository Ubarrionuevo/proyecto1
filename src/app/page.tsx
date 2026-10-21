import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GeoBanner from '@/components/GeoBanner';
import SolutionSection from '@/components/SolutionSection';
import AdditionalGifts from '@/components/AdditionalGifts';
import ClientsMotion from '@/components/ClientsMotion';
import ProvinciasSection from '@/components/ProvinciasSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Faq from '@/components/Faq';
import Reviews from '@/components/Reviews';
import JsonLd, { websiteJsonLd, localBusinessJsonLd, faqJsonLd } from '@/components/JsonLd';
import { homeFaqs } from '@/lib/faqs';

export default function Home() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd data={[websiteJsonLd(), localBusinessJsonLd(), faqJsonLd(homeFaqs)]} />
      <Navbar />
      <Hero />
      <GeoBanner />
      <SolutionSection />
      <AdditionalGifts />
      <ClientsMotion number="03" />
      <ProvinciasSection />

      <Faq items={homeFaqs} title="Preguntas sobre cómo pedir." />
      <Reviews />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
