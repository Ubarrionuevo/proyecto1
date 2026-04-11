'use client';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.4); }
          50% { box-shadow: 0 0 50px rgba(236, 72, 153, 1), 0 0 80px rgba(236, 72, 153, 0.6); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        @keyframes heartBeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 4s ease-in-out infinite 1s;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        .animate-heart {
          animation: heartBeat 1.5s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
      `}</style>

      {/* HERO */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 25%, #fbcfe8 50%, #f9a8d4 100%)'
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-8 left-2 sm:left-10 w-12 sm:w-24 h-12 sm:h-24 bg-pink-300 rounded-full opacity-20 animate-float" />
        <div className="absolute top-16 right-2 sm:right-20 w-16 sm:w-40 h-16 sm:h-40 bg-pink-400 rounded-full opacity-15 animate-float-delay" />
        <div className="absolute bottom-32 left-1/4 w-8 sm:w-20 h-8 sm:h-20 bg-pink-200 rounded-full opacity-40 animate-float hidden sm:block" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-8 sm:w-16 h-8 sm:h-16 bg-rose-300 rounded-full opacity-30 animate-wiggle hidden sm:block" />
        <div className="absolute top-1/3 left-4 w-6 h-6 bg-yellow-300 rounded-full opacity-40 animate-sparkle hidden sm:block" />
        <div className="absolute top-1/4 right-8 w-5 h-5 bg-purple-300 rounded-full opacity-40 animate-sparkle hidden sm:block" />
        
        {/* Badge ubicación */}
        <div className="absolute top-3 sm:top-6 left-2 right-2 sm:left-1/2 sm:-translate-x-1/2 animate-bounce-subtle z-20">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl flex items-center justify-center gap-2 text-xs sm:text-base whitespace-nowrap">
            <svg className="w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="font-bold">Los #1 en San Fernando del Valle de Catamarca</span>
            <span className="flex-shrink-0">⭐</span>
          </div>
        </div>

        <div className="text-center z-10 max-w-lg sm:max-w-xl mx-auto mt-16 sm:mt-16 px-2">
          <div className="mb-4 sm:mb-6">
            <span className="text-5xl sm:text-7xl md:text-8xl animate-float inline-block">🎁</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight animate-gradient bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(45deg, #ec4899, #f43f5e, #ec4899, #db2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            Regalos que emocionan
          </h1>
          <p className="mb-3 sm:mb-6 text-base sm:text-lg md:text-2xl text-rose-700 font-semibold">
            Ramos de golosinas y desayunos personalizados
          </p>
          <div className="inline-block bg-white/80 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg mb-4 sm:mb-8">
            <p className="text-rose-600 font-bold text-xs sm:text-base flex items-center justify-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-heart text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              Entrega en el día en toda Catamarca
            </p>
          </div>
          <a
            href="https://wa.me/5493834903387"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg md:text-xl font-bold hover:scale-110 transition-transform duration-300 inline-block"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pedir ahora por WhatsApp
            </span>
          </a>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 animate-bounce-subtle">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* RAMOS */}
      <section 
        className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 relative"
        style={{
          background: 'linear-gradient(180deg, #fdf2f8 0%, #fff1f2 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-rose-100 text-rose-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">⭐ Los favoritos</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 text-rose-600">
            Ramos de Golosinas 🍭
          </h2>

          <div className="relative group mb-4 sm:mb-8">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl sm:rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
            <img
              src="/ramos.golosinas.jpg"
              alt="Ramo de golosinas"
              className="relative rounded-xl sm:rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto shadow-2xl group-hover:scale-[1.05] group-hover:rotate-1 transition-all duration-500"
            />
          </div>

          <p className="mb-4 sm:mb-8 text-sm sm:text-lg text-gray-600 px-2">
            El regalo perfecto para sorprender en cualquier ocasión
          </p>

          <a
            href="https://wa.me/5493834903387?text=Hola! Quiero un ramo de golosinas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-300 inline-block"
          >
            <span className="flex items-center gap-2 justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Pedir ramo
            </span>
          </a>
        </div>
      </section>

      {/* DESAYUNOS */}
      <section 
        className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 relative"
        style={{
          background: 'linear-gradient(180deg, #fff1f2 0%, #ffe4e6 50%, #fecdd3 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-amber-100 text-amber-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">☕ Super completos</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-rose-500">
            Desayunos sorpresa ☕
          </h2>

          <div className="relative group mb-4 sm:mb-8">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl sm:rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
            <img
              src="/download.jpg"
              alt="Desayuno sorpresa"
              className="relative rounded-xl sm:rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto shadow-2xl group-hover:scale-[1.05] group-hover:-rotate-1 transition-all duration-500"
            />
          </div>

          <p className="mb-4 sm:mb-8 text-sm sm:text-lg text-gray-600 px-2">
            Arrancá el día con una sorpresa especial
          </p>

          <a
            href="https://wa.me/5493834903387?text=Hola! Quiero un desayuno sorpresa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-300 inline-block"
          >
            <span className="flex items-center gap-2 justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Pedir desayuno
            </span>
          </a>
        </div>
      </section>

      {/* CARRUSEL */}
      <section 
        className="py-8 sm:py-16 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #fecdd3 0%, #fda4af 50%, #fb7185 100%)'
        }}
      >
        <h2 className="text-lg sm:text-2xl md:text-3xl text-center mb-4 sm:mb-8 text-white font-bold drop-shadow-lg px-4">
          +100 entregas realizadas 💖
        </h2>

        <div className="overflow-hidden">
          <div className="animate-scroll gap-3 sm:gap-6">
            <img src="/WhatsApp Image 2025-11-14 at 16.48.51.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-01-05 at 11.17.56.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:-rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-01-05 at 11.17.57 (1).jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.49 PM.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:-rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM (1).jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:-rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (1).jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:-rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (2).jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.52 PM.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:-rotate-2 transition-all duration-300" />
            {/* duplicado */}
            <img src="/WhatsApp Image 2025-11-14 at 16.48.51.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-01-05 at 11.17.56.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:-rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-01-05 at 11.17.57 (1).jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.49 PM.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:-rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM (1).jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:-rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (1).jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:-rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (2).jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:rotate-2 transition-all duration-300" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.52 PM.jpeg" alt="Cliente" className="h-28 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0 hover:scale-125 hover:-rotate-2 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section 
        className="py-10 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{
          background: 'linear-gradient(180deg, #fff 0%, #fdf2f8 100%)'
        }}
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-12 text-center text-rose-600">
          Como funciona?
        </h2>

        <div className="max-w-lg sm:max-w-2xl mx-auto space-y-3 sm:space-y-6">
          {/* Paso 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-3 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-pink-100">
            <div className="w-16 h-16 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-lg flex-shrink-0 animate-wiggle">
              <svg className="w-8 h-8 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-xl font-bold text-gray-800 mb-1">Elegi tu regalo</p>
              <p className="text-xs sm:text-base text-gray-500">Ramo de golosinas o desayuno sorpresa</p>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-3 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-pink-100">
            <div className="w-16 h-16 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg flex-shrink-0 animate-wiggle">
              <svg className="w-8 h-8 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-xl font-bold text-gray-800 mb-1">Escribinos por WhatsApp</p>
              <p className="text-xs sm:text-base text-gray-500">Te asesoramos y coordinamos los detalles</p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-3 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-pink-100">
            <div className="w-16 h-16 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0 animate-wiggle">
              <svg className="w-8 h-8 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-xl font-bold text-gray-800 mb-1">Lo enviamos en el dia</p>
              <p className="text-xs sm:text-base text-gray-500">Entrega rapida y segura a tu casa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section 
        className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-4xl sm:text-8xl animate-float opacity-20 hidden sm:block">🎈</div>
          <div className="absolute top-12 sm:top-20 right-4 sm:right-20 text-3xl sm:text-6xl animate-float-delay opacity-20 hidden sm:block">🎀</div>
          <div className="absolute bottom-8 sm:bottom-10 left-1/4 text-4xl sm:text-7xl animate-float opacity-20 hidden sm:block">🎀</div>
          <div className="absolute bottom-12 sm:bottom-20 right-4 sm:right-10 text-4xl sm:text-8xl animate-float-delay opacity-20 hidden sm:block">🎈</div>
        </div>

        <div className="relative z-10 max-w-lg mx-auto">
          <div className="mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-bounce-subtle inline-block">
              🏆 Los #1 en Catamarca
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight"
            style={{
              background: 'linear-gradient(45deg, #ec4899, #f43f5e, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 3s ease infinite'
            }}>
            Pedi tu regalo ahora
          </h2>

          <a
            href="https://wa.me/5493834903387"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-3xl text-base sm:text-xl md:text-2xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl inline-block"
            style={{ backgroundSize: '200% 200%', animation: 'pulse-glow 2s ease-in-out infinite, gradient 3s ease infinite' }}
          >
            Ir a WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
