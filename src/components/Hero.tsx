"use client";
// src/components/Hero.tsx
import Link from "next/link";
import React, { useEffect, useState } from "react";

const phrases = [
  "Transformação Digital com Inovação e Tecnologia",
  "Conectando seu negócio ao futuro com soluções inteligentes",
  "Infraestrutura moderna para escalar suas ideias",
  "Potencialize resultados com cloud, IA e automação",
];

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000); // troca a cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center relative text-white text-center bg-gradient-to-br from-[#0683e2] to-[#4c6fe7] overflow-hidden">
      {/* Overlay animado sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent opacity-30 animate-pulse-slow"></div>

      <div className="relative z-10 w-11/12 md:w-8/12 px-4 transition-all duration-700 ease-in-out">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slide-in-fade">
          {phrases[currentPhraseIndex]}
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90 animate-fade-in-delay">
          Soluções em Nuvem, Infraestrutura, Redes e Desenvolvimento de Software
          com tecnologias Microsoft, AWS e Google Cloud
        </p>
        <Link
          href="/services"
          className="mt-10 inline-block px-8 py-4 bg-accent text-white font-medium rounded-full shadow-lg transition-transform duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-2xl animate-fade-in-delay"
        >
          Saiba Mais
        </Link>
      </div>
    </section>
  );
};

export default Hero;
