'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-pink-50 to-rose-100">
      
      {/* HERO */}
      <section className="min-h-[85vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Badge top */}
        <span className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 text-[9px] sm:text-xs text-rose-600 font-semibold bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow-sm">
          🏆 Los #1 en San Fernando del Valle de Catamarca
        </span>
        
        {/* Contenido */}
        <div className="max-w-lg mx-auto pt-12 sm:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4">
            Regalos que <span className="text-pink-500">emocionan</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-1 sm:mb-2">
            Ramos de golosinas y desayunos personalizados
          </p>
          
          <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
            Entrega en el día en toda Catamarca 🚚
          </p>
          
          {/* CTA Principal */}
          <a
            href="https://wa.me/5493834903387"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir por WhatsApp
          </a>
        </div>

        {/* Flecha */}
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 absolute bottom-4 sm:bottom-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </section>

      {/* PRODUCTOS - Grid en desktop */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* RAMOS */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center shadow-xl">
              <span className="inline-block bg-pink-100 text-pink-600 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full mb-3 sm:mb-4">⭐ Los favoritos</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Ramos de Golosinas</h2>
              
              <img
                src="/ramos.golosinas.jpg"
                alt="Ramo de golosinas"
                className="rounded-xl sm:rounded-2xl w-full max-w-sm mx-auto mb-4 sm:mb-6 shadow-lg"
              />
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">El regalo perfecto para sorprender</p>
              
              <a
                href="https://wa.me/5493834903387?text=Hola! Quiero un ramo de golosinas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold inline-block transition-colors shadow-md hover:shadow-lg hover:scale-105"
              >
                Pedir ramo
              </a>
            </div>

            {/* DESAYUNOS */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center shadow-xl">
              <span className="inline-block bg-amber-100 text-amber-600 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full mb-3 sm:mb-4">☕ Super completos</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Desayunos Sorpresa</h2>
              
              <img
                src="/download.jpg"
                alt="Desayuno sorpresa"
                className="rounded-xl sm:rounded-2xl w-full max-w-sm mx-auto mb-4 sm:mb-6 shadow-lg"
              />
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Arrancá el día con una sorpresa especial</p>
              
              <a
                href="https://wa.me/5493834903387?text=Hola! Quiero un desayuno sorpresa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold inline-block transition-colors shadow-md hover:shadow-lg hover:scale-105"
              >
                Pedir desayuno
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CARRUSEL */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gradient-to-r from-rose-400 to-pink-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-base sm:text-lg lg:text-xl text-white text-center mb-4 sm:mb-6 font-bold">+100 entregas realizadas 💖</h2>
          
          <div className="overflow-hidden">
            <style jsx>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .carousel {
                animation: scroll 25s linear infinite;
              }
              .carousel:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="carousel flex gap-4 sm:gap-6 lg:gap-8">
              <img src="/WhatsApp Image 2025-11-14 at 16.48.51.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-01-05 at 11.17.56.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-01-05 at 11.17.57 (1).jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.49 PM.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM (1).jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (1).jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (2).jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.52 PM.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              {/* Duplicado */}
              <img src="/WhatsApp Image 2025-11-14 at 16.48.51.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-01-05 at 11.17.56.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-01-05 at 11.17.57 (1).jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.49 PM.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM (1).jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (1).jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (2).jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.52 PM.jpeg" alt="Cliente" className="h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8">Cómo funciona?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-3 p-4 sm:p-5 bg-gray-50 rounded-xl sm:rounded-2xl text-center sm:text-center">
              <span className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">1</span>
              <div>
                <p className="text-sm sm:text-base font-bold text-gray-800">Elegí tu regalo</p>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Ramo o desayuno</p>
              </div>
            </div>
            <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-3 p-4 sm:p-5 bg-gray-50 rounded-xl sm:rounded-2xl text-center sm:text-center">
              <span className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">2</span>
              <div>
                <p className="text-sm sm:text-base font-bold text-gray-800">Escribinos por WhatsApp</p>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Te asesoramos</p>
              </div>
            </div>
            <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-3 p-4 sm:p-5 bg-gray-50 rounded-xl sm:rounded-2xl text-center sm:text-center">
              <span className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">3</span>
              <div>
                <p className="text-sm sm:text-base font-bold text-gray-800">Lo enviamos en el día</p>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Entrega rápida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-pink-50 to-rose-100">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Pedí tu regalo ahora</h2>
          <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">Los #1 en Catamarca</p>
          
          <a
            href="https://wa.me/5493834903387"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-10 sm:px-12 md:px-14 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ir a WhatsApp
          </a>
        </div>
      </section>

      {/* CTA FLOTANTE */}
      <a
        href="https://wa.me/5493834903387"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 ${showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  );
}
