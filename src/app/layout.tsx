import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ramos de Golosinas | Regalos que enamoran - Catamarca",
  description: "Ramos de golosinas personalizados y desayunos sorpresa con entrega en el día en San Fernando del Valle de Catamarca. Hechos con amor, el regalo perfecto.",
  keywords: ["ramos de golosinas", "regalos Catamarca", "desayunos sorpresa", "regalería", "San Fernando del Valle de Catamarca"],
  openGraph: {
    title: "Ramos de Golosinas | Regalos que enamoran",
    description: "Ramos de golosinas personalizados y desayunos sorpresa con entrega en el día. ¡Encargate el tuyo!",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramos de Golosinas | Regalos que enamoran",
    description: "Ramos de golosinas personalizados y desayunos sorpresa con entrega en el día.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${nunito.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
