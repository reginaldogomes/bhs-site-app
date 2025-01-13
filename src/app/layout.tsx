import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BH Solutions - Soluções Tecnológicas Inovadoras",
  description:
    "A BH Solutions é especializada em soluções corporativas de infraestrutura, cloud computing, desenvolvimento de software e transformação digital. Impulsionamos a eficiência, segurança e escalabilidade das empresas com tecnologias personalizadas.",
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
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
