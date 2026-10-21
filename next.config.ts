import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Canónico con www: redirección 301 del dominio pelado al con www.
     Se usa `statusCode: 301` (no `permanent: true`, que da 308) para el 301
     literal que pide SEO. Funciona en Vercel y en Node propio; si el hosting
     no respeta next.config, configurar el 301 ahí (ver TODO-contenido.md). */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "laprincesacta.com.ar" }],
        destination: "https://www.laprincesacta.com.ar/:path*",
        statusCode: 301,
      },
    ];
  },

  /* Formatos de salida del optimizador de imagenes.
     Se medieron las 9 fotos pesadas en los anchos que realmente se piden
     (640/828/1080/1200): AVIF gana solo un 5% en el total y Pierde entre 7% y
     10% en las fotos de ramo con mas detalle, que son las que pesan en
     mobile. Como la diferencia no es univoca, se deja el default (WebP). */
  images: {
    formats: ["image/webp"],
  },
};
export default nextConfig;
