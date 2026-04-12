'use client';

import { useState, useEffect, useRef } from 'react';
import { products, ramosProducts, desayunoProducts, getWhatsAppUrl, Product } from '@/lib/products';

const WHATSAPP_NUMBER = '5493834903387';
const clientImages = [
  '/WhatsApp Image 2025-11-14 at 16.48.51.jpeg',
  '/WhatsApp Image 2026-01-05 at 11.17.56.jpeg',
  '/WhatsApp Image 2026-01-05 at 11.17.57 (1).jpeg',
  '/WhatsApp Image 2026-04-10 at 9.18.49 PM.jpeg',
  '/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg',
  '/WhatsApp Image 2026-04-10 at 9.18.50 PM (1).jpeg',
  '/WhatsApp Image 2026-04-10 at 9.18.51 PM.jpeg',
  '/WhatsApp Image 2026-04-10 at 9.18.51 PM (1).jpeg',
  '/WhatsApp Image 2026-04-10 at 9.18.51 PM (2).jpeg',
  '/WhatsApp Image 2026-04-10 at 9.18.52 PM.jpeg',
  '/WhatsApp Image 2025-11-29 at 21.17.56 (1).jpeg',
];

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    if (product.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
      {product.badge && (
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white z-10 ${
          product.badge === 'MÁS VENDIDO' ? 'bg-pink-500' : 'bg-amber-500'
        }`}>
          {product.badge === 'MÁS VENDIDO' ? '⭐ ' : '✨ '}{product.badge}
        </div>
      )}
      <div className="relative">
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full h-48 sm:h-56 object-cover"
          loading="lazy"
        />
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {product.images.map((_, idx) => (
              <span key={idx} className={`w-2 h-2 rounded-full ${idx === currentImage ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 mb-1">{product.name}</h3>
        {product.price && (
          <p className="text-pink-500 font-semibold text-sm mb-2">{product.price}</p>
        )}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <ul className="text-xs text-gray-500 mb-4 space-y-1">
          {product.benefits.slice(0, 3).map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-1">
              <span className="text-pink-500">✓</span> {benefit}
            </li>
          ))}
        </ul>
        <a
          href={getWhatsAppUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Encargar por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [showFloating, setShowFloating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowFloating(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 pb-20">
      
      {/* HERO - OPTIMIZADO */}
      <section className="min-h-[85vh] flex flex-col justify-center px-4 text-center relative">
        <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full animate-pulse">
          🔥 Entrega hoy en Catamarca
        </span>
        
        <div className="max-w-lg mx-auto pt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            Ramos de Golosinas
            <span className="block text-pink-500 text-2xl sm:text-3xl">regalería</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            El regalo que enamora
          </p>
          
          <div className="flex justify-center gap-4 mb-4 text-xs sm:text-sm text-gray-500">
            <span>✓ +100 entregas</span>
            <span>✓ Hechos con amor</span>
          </div>
          
          <img
            src="/ramos.golosinas.jpg"
            alt="Ramo de golosinas"
            className="rounded-2xl w-full max-w-sm mx-auto mb-6 shadow-2xl"
            loading="eager"
          />
          
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-3 mx-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full max-w-sm"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Pedir por WhatsApp
          </a>
          
          <p className="text-xs text-gray-500 mt-3">Responemos en minutos 💬</p>
        </div>
      </section>

      {/* RAMOS - CATÁLOGO PRINCIPAL */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              🌹 Nuestros Ramos
            </h2>
            <p className="text-gray-600">Elegí el tuyo y encargalo ahora</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ramosProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href={getWhatsAppUrl('Ramos de Golosinas')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
            >
              <WhatsAppIcon />
              Consultá por otros diseños
            </a>
          </div>
        </div>
      </section>

      {/* CARRUSEL DE CLIENTES */}
      <section className="py-10 px-4 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl text-white text-center mb-6 font-bold">
            💖 +100 familias ya confian en nosotros
          </h2>
          
          <div className="overflow-hidden" ref={carouselRef}>
            <style jsx>{`
              @keyframes scrollClients {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .carousel-clients {
                display: flex;
                width: max-content;
                animation: scrollClients 50s linear infinite;
              }
              .carousel-clients:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="carousel-clients gap-4">
              {[...clientImages, ...clientImages].map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt="Cliente feliz con su regalo" 
                  className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg object-cover w-[140px] sm:w-[180px]" 
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESAYUNOS - SECUNDARIO */}
      <section className="py-10 px-4 bg-rose-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">También tenemos</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-1">
              ☕ Desayunos Sorpresa
            </h2>
            <p className="text-gray-600">Para empezar el día con una sonrisa</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {desayunoProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
            ¿Cómo hacer tu pedido?
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</span>
              <div>
                <p className="font-semibold text-gray-800">Elegí tu regalo</p>
                <p className="text-sm text-gray-500">Browse our catalog and pick your favorite</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</span>
              <div>
                <p className="font-semibold text-gray-800">Escribinos por WhatsApp</p>
                <p className="text-sm text-gray-500">Encargate el tuyo en segundos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</span>
              <div>
                <p className="font-semibold text-gray-800">Recibilo en el día</p>
                <p className="text-sm text-gray-500">Entrega en San Fernando del Valle de Catamarca</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-pink-50 to-rose-100">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            ¿Listo para sorprender?
          </h2>
          <p className="text-gray-500 mb-6">Los #1 en regalos de Catamarca</p>
          
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Quiero mi regalo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-4 bg-gray-800 text-center text-gray-400 text-sm">
        <p>💝 Regalos que enamoran en Catamarca</p>
        <p className="mt-1">WhatsApp: +54 9 383 490-3387</p>
      </footer>

      {/* CTA FLOTANTE */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 ${showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </main>
  );
}
