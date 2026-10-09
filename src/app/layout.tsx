import type { Metadata, Viewport } from "next";
import { Karla } from "next/font/google";
import { siteConfig } from "@/lib/site";
import Analytics from "@/components/Analytics";
import "./globals.css";

/* Una sola tipografia en toda la web. Se cargan tambien los italicos porque
   varias citas y titulares los usan en cursiva. */
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Desayunos a Domicilio en Catamarca | LaPrincesaCta",
  description:
    "Desayunos sorpresa y ramos de golosinas a domicilio en San Fernando del Valle de Catamarca. Pedí por WhatsApp: atendemos todos los días de 8 a 23 h.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Desayunos a Domicilio en Catamarca | LaPrincesaCta",
    description:
      "Desayunos sorpresa y ramos de golosinas a domicilio en San Fernando del Valle de Catamarca. Pedí por WhatsApp.",
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
    title: "Desayunos a Domicilio en Catamarca | LaPrincesaCta",
    description:
      "Desayunos sorpresa y ramos de golosinas a domicilio en San Fernando del Valle de Catamarca. Pedí por WhatsApp.",
    images: ["/og-laprincesacta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(gscVerification ? { verification: { google: gscVerification } } : {}),
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
