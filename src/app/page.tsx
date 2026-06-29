'use client';

import { useState, useEffect } from 'react';
import { ramosProducts, getWhatsAppUrl, Product } from '@/lib/products';

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
  '/cliente1.png',
  '/cliente2.png',
  '/cliente3.png',
  '/cliente4.png',
  '/cliente5.png',
  '/cliente6.png',
  '/cliente7.png',
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
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col border border-gray-100/80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'translateY(-4px)' : 'translateY(0)' }}
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        {product.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold z-10 shadow-sm ${
            product.badge === 'MÁS VENDIDO' 
              ? 'bg-pink-500 text-white' 
              : product.badge === 'NUEVO MODELO'
              ? 'bg-emerald-500 text-white'
              : 'bg-amber-500 text-white'
          }`}>
            {product.badge === 'MÁS VENDIDO' ? '⭐ ' : product.badge === 'NUEVO MODELO' ? '🆕 ' : '✨ '}{product.badge}
          </div>
        )}
        {product.video ? (
          <video
            src={product.video}
            className="w-full h-48 sm:h-56 lg:h-64 object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={product.images[currentImage]}
            alt={product.name}
            className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700"
            style={{ transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
            loading="lazy"
          />
        )}
        {product.images.length > 1 && !product.video && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {product.images.map((_, idx) => (
              <span key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImage ? 'bg-white w-4' : 'bg-white/50'}`} />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">{product.name}</h3>
        
        {product.price && (
          <p className="text-xl sm:text-2xl font-bold text-pink-600 mb-3">
            {product.price}
          </p>
        )}
        
        <p className="text-gray-500 text-sm sm:text-base mb-5 leading-relaxed">{product.description}</p>
        
        <a
          href={getWhatsAppUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-md hover:shadow-green-500/20 active:scale-[0.98] touch-target"
        >
          <WhatsAppIcon className="w-4 sm:w-5 h-4 sm:h-5" />
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
    <main className="min-h-screen bg-gray-50">
      
      {/* HEADER */}
      <header className="py-3 sm:py-4 px-4 sm:px-6 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 min-h-[56px]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-800">LAPRINCESA.CTA</h1>
            <p className="text-[10px] sm:text-xs text-pink-500 font-medium">Regalos que enamoran</p>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105 min-h-[36px] sm:min-h-[44px] touch-target"
          >
            <WhatsAppIcon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <span className="hidden sm:inline">Contactar</span>
          </a>
        </div>
      </header>

      {/* PRODUCTO DESTACADO - EDICIÓN LIMITADA */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Hero Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 animate-slide-up">
              <span className="inline-block bg-amber-50 text-amber-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5 border border-amber-200/50">
                ⏳ Por tiempo limitado
              </span>
              
              <h1 className="fluid-h1 font-bold text-gray-900 mb-2 sm:mb-3">
                🏆 Edición
                <span className="block bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                  Limitada
                </span>
              </h1>
              
              <p className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 sm:mb-5">
                $23.000
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-500 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                El ramo de golosinas inspirado en el Mundial. El regalo perfecto para sorprender a cualquier fanático del fútbol. Disponible por tiempo limitado.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-10 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center text-[10px] border border-amber-200/50">★</span>
                  Edición exclusiva
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center text-[10px] border border-amber-200/50">★</span>
                  Stock limitado
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-[10px] border border-green-200/50">✓</span>
                  Envío en el día
                </span>
              </div>
              
              <a
                href={getWhatsAppUrl('Ramo Mundialista')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] touch-target"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Pedir por WhatsApp
              </a>
            </div>
            
            {/* Hero Image */}
            <div className="order-1 lg:order-2 animate-slide-up animate-delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-100/40 to-amber-50/20 rounded-[3rem] blur-2xl"></div>
                <img
                  src="/RamoMundialista.jpeg"
                  alt="Ramo Mundialista - Edición Limitada"
                  className="relative rounded-2xl sm:rounded-3xl shadow-sm w-full max-w-lg mx-auto object-cover aspect-[4/3] sm:aspect-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAMOS */}
      <section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-pink-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">Nuestros productos</span>
            <h2 className="fluid-h2 font-bold text-gray-900 mt-2 mb-4">
              🌹 Ramos de Golosinas
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
              Cada ramo está diseñado para hacer feliz a quien más querés
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {ramosProducts.map((product, i) => (
              <div key={product.id} className={i === ramosProducts.length - 1 && ramosProducts.length % 2 !== 0 ? 'md:col-span-2 md:flex md:justify-center' : ''}>
                <div className={i === ramosProducts.length - 1 && ramosProducts.length % 2 !== 0 ? 'w-full md:w-1/2' : ''}>
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <a
              href={getWhatsAppUrl('Ramos de Golosinas')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-semibold transition-colors text-sm sm:text-base touch-target"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Consultá por diseños personalizados
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - GALERÍA */}
      <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="fluid-h2 font-bold text-gray-900 mb-3">
              💖 Familias ya confían en nosotros
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">Ellos ya descubrieron el regalo perfecto</p>
          </div>
          
          <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-sm border border-gray-100/80">
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-6px); }
              }
              @keyframes float-delayed {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-4px); }
              }
              .gallery-item:nth-child(4n+1) { animation: float 5s ease-in-out infinite; }
              .gallery-item:nth-child(4n+2) { animation: float-delayed 4s ease-in-out infinite 0.5s; }
              .gallery-item:nth-child(4n+3) { animation: float 4.5s ease-in-out infinite 1s; }
              .gallery-item:nth-child(4n+4) { animation: float-delayed 3.5s ease-in-out infinite 0.3s; }
            `}</style>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {clientImages.map((img, index) => (
                <div 
                  key={index}
                  className="gallery-item aspect-square overflow-hidden rounded-xl sm:rounded-2xl shadow-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={img} 
                    alt="Cliente feliz" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-gray-400 text-xs sm:text-sm">
              Y muchos más clientes satisfechos en Catamarca 💝
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="fluid-h1 font-bold text-gray-900 mb-4">
            ¿Listo para<br/>
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              sorprender?
            </span>
          </h2>
          <p className="text-gray-500 mb-10 sm:mb-12 text-base sm:text-lg">
            Los #1 en regalos de Catamarca
          </p>
          
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-9 sm:px-12 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-green-500/25 active:scale-[0.98] touch-target"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Quiero mi regalo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 sm:py-16 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-800 pt-10 sm:pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center sm:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">LAPRINCESA.CTA</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                  Regalos que enamoran en San Fernando del Valle de Catamarca
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contacto</h4>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors touch-target"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  +54 9 383 490-3387
                </a>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Links</h4>
                <div className="flex flex-col gap-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 transition-colors text-sm touch-target"
                  >
                    Hacé tu pedido
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-xs text-center mt-10 sm:mt-12">© {new Date().getFullYear()} LAPRINCESA.CTA. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-4 right-4 sm:bottom-6 lg:bottom-8 sm:right-6 lg:right-8 bg-green-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl z-50 transition-all duration-500 ${
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
