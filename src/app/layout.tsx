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
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords:
    "BH Solutions, tecnologia da informação, soluções corporativas, cloud computing, transformação digital, desenvolvimento de software, infraestrutura empresarial, inovação tecnológica, escalabilidade, eficiência operacional",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={raleway.variable}>
      <body className="ntialiased">
        <Header />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
