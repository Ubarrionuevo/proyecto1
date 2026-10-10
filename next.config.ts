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
};

export default nextConfig;
