'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showFloating, setShowFloating] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Imágenes de ramos
  const ramosImages = [
    '/ramos.golosinas.jpg',
    '/ramos.golosinas2.jpg',
    '/ramos.golosinas22.jpg',
    '/ramos.golosinas3.jpg',
    '/ramos.golosinas4.jpg',
    '/ramos.golosinas5.jpg',
    '/ramos.golosinas6.jpg',
  ];

  useEffect(() => {
    const handleScroll = () => setShowFloating(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotación automática de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ramosImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ramosImages.length]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100">
      
      {/* HERO - RAMOS PROTAGONISTA */}
      <section className="min-h-[90vh] flex flex-col justify-center px-4 text-center relative">
        {/* Badge urgencia */}
        <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full animate-pulse">
          🔥 Entrega hoy en Catamarca
        </span>
        
        <div className="max-w-lg mx-auto pt-12">
          {/* Producto estrella badge */}
          <span className="inline-block bg-pink-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full mb-3">
            ⭐ PRODUCTO ESTRELLA
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Ramos de Golosinas
          </h1>
          
          <p className="text-lg sm:text-xl text-pink-500 font-semibold mb-2">
            El regalo que enamora
          </p>
          
          <p className="text-sm sm:text-base text-gray-600 mb-1">
            Sorprendé con el regalo más dulce
          </p>
          
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            +100 entregas en Catamarca
          </p>
          
          {/* Imagen hero */}
          <img
            src="/ramos.golosinas.jpg"
            alt="Ramo de golosinas"
            className="rounded-2xl w-full max-w-sm mx-auto mb-6 shadow-2xl"
          />
          
          {/* CTA PRINCIPAL */}
          <a
            href="https://wa.me/5493834903387?text=Hola! Quiero un ramo de golosinas. ¿Qué opciones tienen?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-base sm:text-lg font-bold flex items-center justify-center gap-3 mx-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir mi ramo ahora
          </a>
          
          <p className="text-xs text-gray-500 mt-2">Respuesta inmediata por WhatsApp</p>
        </div>
      </section>

      {/* VARIACIONES DE RAMOS */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Elegí el tuyo</h2>
          
          <div className="relative">
            <img
              key={currentImageIndex}
              src={ramosImages[currentImageIndex]}
              alt={`Ramo modelo ${currentImageIndex + 1}`}
              className="rounded-xl w-full max-w-md mx-auto mb-4 shadow-lg transition-opacity duration-500"
              style={{ opacity: 1 }}
            />
            
            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-2 mb-4">
              {ramosImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-pink-500 w-4' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
          
          <a
            href="https://wa.me/5493834903387?text=Hola! Quiero ver opciones de ramos de golosinas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ver opciones y precios
          </a>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="py-8 px-4 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-base sm:text-lg text-white text-center mb-4 font-bold">💖 +100 familias ya confian en nosotros</h2>
          
          <div className="overflow-hidden">
            <style jsx>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .carousel { animation: scroll 20s linear infinite; }
              .carousel:hover { animation-play-state: paused; }
            `}</style>
            <div className="carousel flex gap-4">
              <img src="/WhatsApp Image 2025-11-14 at 16.48.51.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-01-05 at 11.17.56.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-01-05 at 11.17.57 (1).jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.49 PM.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM (1).jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (1).jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (2).jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.52 PM.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              {/* Duplicado */}
              <img src="/WhatsApp Image 2025-11-14 at 16.48.51.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-01-05 at 11.17.56.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-01-05 at 11.17.57 (1).jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.49 PM.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM (1).jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (1).jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (2).jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
              <img src="/WhatsApp Image 2026-04-10 at 9.18.52 PM.jpeg" alt="Cliente feliz" className="h-32 sm:h-40 rounded-xl flex-shrink-0 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* DESAYUNOS - SECUNDARIO */}
      <section className="py-8 px-4 bg-rose-50">
        <div className="max-w-md mx-auto text-center">
          <span className="text-xs text-gray-500 font-medium">También tenemos</span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Desayunos Sorpresa ☕</h2>
          
          <img
            src="/download.jpg"
            alt="Desayuno sorpresa"
            className="rounded-xl w-full mx-auto mb-3 shadow-lg"
          />
          
          <p className="text-sm text-gray-600 mb-4">Para empezar el día con una sonrisa</p>
          
          <a
            href="https://wa.me/5493834903387?text=Hola! Quiero info sobre desayunos sorpresa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-md transition-all hover:scale-105"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ver desayunos
          </a>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-4">¿Cómo hacer tu pedido?</h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <span className="text-sm font-medium">Elegí el regalo que más te guste</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <span className="text-sm font-medium">Escribinos por WhatsApp</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <span className="text-sm font-medium">Lo entregamos el mismo día 🚚</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 px-4 text-center bg-gradient-to-b from-pink-50 to-rose-100">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            ¿Listo para sorprender?
          </h2>
          <p className="text-sm text-gray-500 mb-6">Los #1 en San Fernando del Valle de Catamarca</p>
          
          <a
            href="https://wa.me/5493834903387"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quiero mi regalo
          </a>
        </div>
      </section>

      {/* CTA FLOTANTE */}
      <a
        href="https://wa.me/5493834903387"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 ${showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  );
}
