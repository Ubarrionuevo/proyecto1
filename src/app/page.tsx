import Navbar from '@/components/Navbar';
import GeoBanner from '@/components/GeoBanner';
import SolutionSection from '@/components/SolutionSection';
import AdditionalGifts from '@/components/AdditionalGifts';
import ClientsMotion from '@/components/ClientsMotion';
import ClientReview from '@/components/ClientReview';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Faq from '@/components/Faq';
import JsonLd, { websiteJsonLd, localBusinessJsonLd, faqJsonLd } from '@/components/JsonLd';
import { homeFaqs } from '@/lib/faqs';

export default function Home() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <JsonLd data={[websiteJsonLd(), localBusinessJsonLd(), faqJsonLd(homeFaqs)]} />
      <Navbar />
      <GeoBanner />
      <SolutionSection />
      <AdditionalGifts />
      <ClientsMotion number="03" />
      <ClientReview />

      <Faq items={homeFaqs} title="Preguntas sobre cómo pedir." />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
