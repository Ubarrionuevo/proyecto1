import type { Metadata, Viewport } from "next";
import { Karla } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { ratingHook } from "@/lib/seo";
import Analytics from "@/components/Analytics";
import "./globals.css";

const homeTitle = "Desayunos Sorpresa y Ramos en Catamarca | LaPrincesaCta";
const homeDescription = `Desayunos sorpresa y ramos de golosinas a domicilio en Catamarca. ${ratingHook}. Foto de la entrega. Pedí por WhatsApp, también desde el exterior.`;

/* Una sola tipografia en toda la web. Se cargan tambien los italicos porque
   varias citas y titulares los usan en cursiva. */
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

/* Token publico de verificacion de Google Search Console (metodo etiqueta meta).
   Es publico a proposito: va en el <head> de todas las paginas y no es un
   secreto. Se puede sobrescribir con NEXT_PUBLIC_GSC_VERIFICATION. */
const gscVerification =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION ??
  "pfQzGupXvMO-Hc-SmXQe80tRkmLFNdESpV0aJD2UrWA";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    siteName: siteConfig.name,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-laprincesacta.jpg",
        width: 1200,
        height: 630,
        alt: "Desayuno sorpresa a domicilio de LaPrincesaCta en Catamarca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/og-laprincesacta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: { google: gscVerification },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F7F1EA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={`${karla.variable} font-body antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
