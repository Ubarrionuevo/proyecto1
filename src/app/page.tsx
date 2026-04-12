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
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (product.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % product.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div 
      className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'translateY(-4px)' : 'translateY(0)' }}
    >
      <div className="relative overflow-hidden rounded-t-3xl">
        {product.badge && (
          <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold z-10 shadow-lg ${
            product.badge === 'MÁS VENDIDO' 
              ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white' 
              : 'bg-gradient-to-r from-amber-400 to-amber-500 text-white'
          }`}>
            {product.badge === 'MÁS VENDIDO' ? '⭐ ' : '✨ '}{product.badge}
          </div>
        )}
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full h-56 sm:h-64 object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          loading="lazy"
        />
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {product.images.map((_, idx) => (
              <span key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-white w-4' : 'bg-white/50'}`} />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-gray-800 mb-2">{product.name}</h3>
        
        {product.price && (
          <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-3">
            {product.price}
          </p>
        )}
        
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{product.description}</p>
        
        <ul className="text-sm text-gray-400 mb-6 space-y-2">
          {product.benefits.slice(0, 3).map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> 
              {benefit}
            </li>
          ))}
        </ul>
        
        <a
          href={getWhatsAppUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-6 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:shadow-xl"
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

  useEffect(() => {
    const handleScroll = () => setShowFloating(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-rose-50/30 pb-24">
      
      {/* HEADER */}
      <header className="py-4 px-6 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Regalería</h1>
            <p className="text-xs text-pink-500 font-medium">Regalos que enamoran</p>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Contactar</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Hero Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                🔥 Entrega el mismo día
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                Ramos de
                <span className="block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Golosinas
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-500 mb-6 max-w-md mx-auto lg:mx-0">
                El regalo perfecto para sorprender. Hechos con amor y entregados en el día en Catamarca.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  +100 entregas
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  Hechos con amor
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  Envío en el día
                </span>
              </div>
              
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-green-500/30"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Pedir por WhatsApp
              </a>
            </div>
            
            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-300 rounded-[3rem] blur-3xl opacity-30 transform rotate-6"></div>
                <img
                  src="/ramos.golosinas.jpg"
                  alt="Ramo de golosinas"
                  className="relative rounded-[2.5rem] shadow-2xl w-full max-w-md mx-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAMOS */}
      <section className="py-16 sm:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-pink-500 font-semibold text-sm uppercase tracking-wider">Nuestros productos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              🌹 Ramos de Golosinas
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Cada ramo está diseñado para hacer feliz a quien más querés
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ramosProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href={getWhatsAppUrl('Ramos de Golosinas')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-semibold transition-colors"
            >
              <WhatsAppIcon />
              Consultá por diseños personalizados
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-500 to-rose-600">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl text-white text-center mb-4 font-bold">
            💖 +100 familias ya confian en nosotros
          </h2>
          <p className="text-pink-100 text-center mb-10">Ellos ya descubrieron el regalo perfecto</p>
          
          <div className="overflow-hidden rounded-2xl">
            <style jsx>{`
              @keyframes scrollClients {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .carousel-clients {
                display: flex;
                gap: 1rem;
                animation: scrollClients 60s linear infinite;
              }
              .carousel-clients:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="carousel-clients">
              {[...clientImages, ...clientImages].map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt="Cliente feliz con su regalo" 
                  className="h-40 sm:h-52 rounded-2xl object-cover flex-shrink-0 shadow-xl w-[160px] sm:w-[200px]" 
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESAYUNOS */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">También tenemos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              ☕ Desayunos Sorpresa
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              La mejor forma de empezar el día
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {desayunoProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
            Es más fácil de lo que pensás
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-pink-500">
                1
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Elegí tu regalo</h3>
              <p className="text-sm text-gray-500">Browse our catalog and find the perfect gift</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-pink-500">
                2
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Escribinos</h3>
              <p className="text-sm text-gray-500">Contactanos por WhatsApp</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-500">
                3
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Recibilo</h3>
              <p className="text-sm text-gray-500">Entrega el mismo día en Catamarca</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-32 px-6 bg-gradient-to-b from-stone-50 to-rose-50/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Listo para<br/>
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              sorprender?
            </span>
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Los #1 en regalos de Catamarca
          </p>
          
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all hover:scale-105 shadow-2xl shadow-green-500/30"
          >
            <WhatsAppIcon className="w-7 h-7" />
            Quiero mi regalo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">Regalería</h3>
          <p className="text-gray-400 text-sm mb-4">Regalos que enamoran en San Fernando del Valle de Catamarca</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition-colors"
          >
            WhatsApp: +54 9 383 490-3387
          </a>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-500 ${
          showFloating 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-50 pointer-events-none'
        }`}
        style={{
          boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)',
          animation: 'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite'
        }}
        aria-label="Contactar por WhatsApp"
      >
        <style jsx>{`
          @keyframes pulse-ring {
            0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
            100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          }
        `}</style>
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </main>
  );
}
