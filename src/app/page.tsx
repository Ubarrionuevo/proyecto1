'use client';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.5); }
          50% { box-shadow: 0 0 35px rgba(236, 72, 153, 1); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
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
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .animate-heart {
          animation: heartBeat 1.5s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
      `}</style>

      {/* HERO - COMPACTO MOBILE FIRST */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center px-3 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)'
        }}
      >
        {/* Badge ubicacion */}
        <div className="absolute top-2 left-1 right-1 sm:static sm:mt-8 animate-bounce-subtle z-20">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-2 py-1 rounded-full shadow-lg flex items-center justify-center gap-1 text-[9px] sm:text-xs">
            <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="font-bold">Los #1 en San Fernando del Valle de Catamarca</span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="text-center z-10 w-full max-w-md mx-auto -mt-2">
          {/* Icono */}
          <div className="mb-1">
            <span className="text-4xl sm:text-5xl inline-block">🎁</span>
          </div>
          
          {/* Titulo */}
          <h1 className="text-xl sm:text-4xl font-black leading-tight mb-1 animate-gradient bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(45deg, #ec4899, #f43f5e, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            Regalos que emocionan
          </h1>
          
          {/* Subtítulo */}
          <p className="text-[10px] sm:text-sm text-rose-700 font-medium mb-2 px-2">
            Ramos de golosinas y desayunos personalizados
          </p>
          
          {/* Badge entrega */}
          <div className="inline-block bg-white/90 backdrop-blur px-2 py-1 rounded-lg shadow mb-3">
            <p className="text-[10px] sm:text-xs text-rose-600 font-bold flex items-center justify-center gap-1">
              <svg className="w-2 h-2 sm:w-3 sm:h-3 animate-heart text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              Entrega en el dia en toda Catamarca
            </p>
          </div>
          
          {/* CTA Button */}
          <a
            href="https://wa.me/5493834903387"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-bold hover:scale-105 transition-transform duration-200 inline-flex items-center gap-1"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir ahora por WhatsApp
          </a>
        </div>

        {/* Flecha sutil */}
        <div className="absolute bottom-2 sm:bottom-4 animate-bounce-subtle">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* RAMOS */}
      <section 
        className="py-5 sm:py-12 px-3 relative"
        style={{
          background: 'linear-gradient(180deg, #fdf2f8 0%, #fff1f2 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold mb-2">⭐ Los favoritos</span>
          
          <h2 className="text-base sm:text-3xl font-bold mb-2 text-rose-600">Ramos de Golosinas</h2>

          <div className="relative group mb-2">
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg sm:rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
            <img
              src="/ramos.golosinas.jpg"
              alt="Ramo de golosinas"
              className="relative rounded-lg w-full max-w-[80%] sm:max-w-md mx-auto shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          <p className="mb-3 text-[11px] sm:text-base text-gray-600">El regalo perfecto para sorprender</p>

          <a
            href="https://wa.me/5493834903387?text=Hola! Quiero un ramo de golosinas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-bold hover:scale-105 transition-transform duration-200 inline-flex items-center gap-1 shadow-md"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Pedir ramo
          </a>
        </div>
      </section>

      {/* DESAYUNOS */}
      <section 
        className="py-5 sm:py-12 px-3 relative"
        style={{
          background: 'linear-gradient(180deg, #fff1f2 0%, #fecdd3 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold mb-2">☕ Super completos</span>
          
          <h2 className="text-base sm:text-3xl font-bold mb-2 text-rose-500">Desayunos sorpresa</h2>

          <div className="relative group mb-2">
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg sm:rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
            <img
              src="/download.jpg"
              alt="Desayuno sorpresa"
              className="relative rounded-lg w-full max-w-[80%] sm:max-w-md mx-auto shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          <p className="mb-3 text-[11px] sm:text-base text-gray-600">Arrancá el día con una sorpresa especial</p>

          <a
            href="https://wa.me/5493834903387?text=Hola! Quiero un desayuno sorpresa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-bold hover:scale-105 transition-transform duration-200 inline-flex items-center gap-1 shadow-md"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Pedir desayuno
          </a>
        </div>
      </section>

      {/* CARRUSEL */}
      <section 
        className="py-5 sm:py-12 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #fecdd3 0%, #fb7185 100%)'
        }}
      >
        <h2 className="text-sm sm:text-2xl text-center mb-3 sm:mb-6 text-white font-bold drop-shadow px-3">
          +100 entregas realizadas 💖
        </h2>

        <div className="overflow-hidden">
          <div className="animate-scroll gap-2 sm:gap-4">
            <img src="/WhatsApp Image 2025-11-14 at 16.48.51.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-01-05 at 11.17.56.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-01-05 at 11.17.57 (1).jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.49 PM.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM (1).jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (1).jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (2).jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.52 PM.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            {/* duplicado */}
            <img src="/WhatsApp Image 2025-11-14 at 16.48.51.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-01-05 at 11.17.56.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-01-05 at 11.17.57 (1).jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.49 PM.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.50 PM (1).jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (1).jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.51 PM (2).jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
            <img src="/WhatsApp Image 2026-04-10 at 9.18.52 PM.jpeg" alt="Cliente" className="h-[140px] sm:h-44 md:h-48 rounded-lg shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section 
        className="py-5 sm:py-12 px-3"
        style={{
          background: 'linear-gradient(180deg, #fff 0%, #fdf2f8 100%)'
        }}
      >
        <h2 className="text-sm sm:text-3xl font-bold mb-4 sm:mb-8 text-center text-rose-600">Como funciona?</h2>

        <div className="max-w-lg sm:max-w-2xl mx-auto space-y-2 sm:space-y-4">
          {/* Paso 1 */}
          <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow border border-pink-50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <div>
              <p className="text-xs sm:text-base font-bold text-gray-800">Elegi tu regalo</p>
              <p className="text-[9px] sm:text-xs text-gray-500">Ramo de golosinas o desayuno</p>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow border border-pink-50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs sm:text-base font-bold text-gray-800">Escribinos por WhatsApp</p>
              <p className="text-[9px] sm:text-xs text-gray-500">Te asesoramos y coordinamos</p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow border border-pink-50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <div>
              <p className="text-xs sm:text-base font-bold text-gray-800">Lo enviamos en el dia</p>
              <p className="text-[9px] sm:text-xs text-gray-500">Entrega rapida a tu casa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section 
        className="py-6 sm:py-16 px-3 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)'
        }}
      >
        <div className="relative z-10 max-w-lg mx-auto">
          <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-[10px] sm:text-sm font-bold shadow mb-3">
            🏆 Los #1 en Catamarca
          </span>
          
          <h2 className="text-lg sm:text-3xl font-black mb-3 leading-tight"
            style={{
              background: 'linear-gradient(45deg, #ec4899, #f43f5e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            Pedi tu regalo ahora
          </h2>

          <a
            href="https://wa.me/5493834903387"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-lg font-bold hover:scale-105 transition-transform duration-200 shadow-xl inline-block"
          >
            Ir a WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
