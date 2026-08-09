import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Desayunos a Domicilio en Catamarca | LaPrincesaCta - Regalos que se sienten",
  description: "Desayunos a domicilio en San Fernando del Valle de Catamarca. Sorprendé a quien más querés con un desayuno especial, cuidado y llevado hasta su puerta. Coordiná por WhatsApp.",
  keywords: [
    "desayunos a domicilio Catamarca",
    "desayunos sorpresa Catamarca",
    "regalos a domicilio Catamarca",
    "LaPrincesaCta",
    "ramos de golosinas Catamarca",
    "regalería Catamarca"
  ],
  openGraph: {
    title: "Desayunos a Domicilio en Catamarca | LaPrincesaCta",
    description: "Vos imaginás el momento; nosotras lo hacemos llegar a su puerta. Desayunos a domicilio hechos con amor.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desayunos a Domicilio en Catamarca | LaPrincesaCta",
    description: "Regalos que se sienten. Sorprendé con un desayuno a domicilio especial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAF6F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${fredoka.variable} ${nunito.variable} font-sans antialiased bg-[#FAF6F0] text-[#2D1520]`}>
        {children}
      </body>
    </html>
  );
}

