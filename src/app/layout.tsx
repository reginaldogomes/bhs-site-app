import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

// export const metadata = {
//   title: "BHS Site App",
//   description:
//     "Aplicação fullstack para gerenciar e otimizar o site da BH Solutions",
// };

import { SITE_NAME, SITE_DESCRIPTION } from "../constants";
import { GoogleTagManager } from "@/components/GoogleTagManager";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // escolha os pesos desejados
  variable: "--font-raleway", // define uma variável CSS
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "BH Solutions | Consultoria em Nuvem, Inteligência Artificial e Agentes de IA",
  description:
    "Consultoria especializada em transformação digital, computação em nuvem, inteligência artificial e agentes de IA. Transforme seu negócio com soluções inteligentes.consultoria em nuvem, transformação digital, inteligência artificial, agentes de IA, cloud, AI, Azure, automação, bh solutions",
  keywords:
    "BH Solutions, consultoria em nuvem, inteligência artificial, agentes de IA, Microsoft Azure, soluções em nuvem, transformação digital, segurança em nuvem, escalabilidade, inovação tecnológica",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico", // Caminho relativo à pasta public
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "https://bhsolutions.com.br",
    siteName: SITE_NAME,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/bhs-logo.png", // Caminho relativo à pasta public
        width: 384,
        height: 384,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/bhs-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={raleway.variable}>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N78BQVKX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GoogleTagManager gtmId="GTM-TL9FBKFK" />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
