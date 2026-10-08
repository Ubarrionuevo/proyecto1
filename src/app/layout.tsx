import type { Metadata, Viewport } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

/* Una sola tipografia en toda la web. Se cargan tambien los italicos porque
   varias citas y titulares los usan en cursiva. */
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Desayunos a Domicilio en Catamarca | LaPrincesaCta - Regalos que se sienten",
  description:
    "Desayunos a domicilio en San Fernando del Valle de Catamarca. Sorprendé a quien más querés con un desayuno especial, cuidado y llevado hasta su puerta. Coordiná por WhatsApp.",
  keywords: [
    "desayunos a domicilio Catamarca",
    "desayunos sorpresa Catamarca",
    "regalos a domicilio Catamarca",
    "LaPrincesaCta",
    "ramos de golosinas Catamarca",
    "regalería Catamarca",
  ],
  openGraph: {
    title: "Desayunos a Domicilio en Catamarca | LaPrincesaCta",
    description:
      "Vos imaginás el momento; nosotras lo hacemos llegar a su puerta. Desayunos a domicilio hechos con amor.",
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
  themeColor: "#F7F1EA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={`${karla.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
