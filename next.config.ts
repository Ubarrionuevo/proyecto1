import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Canónico con www: redirección 301 del dominio pelado al con www.
     Funciona en Vercel y en Node propio; si el hosting no respeta
     next.config, configurar el 301 ahí (ver TODO-contenido.md). */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "laprincesacta.com.ar" }],
        destination: "https://www.laprincesacta.com.ar/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
