"use client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full min-h-[70vh] flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-hero.jpeg')", // Substitua pelo caminho real da imagem
      }}
    >
      {/* Overlay escuro para melhor leitura */}
      <div className="absolute inset-0 bg-primary/95"></div>

      <div className="relative z-10 text-white text-center w-10/12 md:w-8/12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Transformação Digital com Inovação e Tecnologia
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Soluções em Nuvem, Infraestrutura, Redes e Desenvolvimento de Software
          com tecnologias Microsoft, AWS e Google Cloud.
        </p>
        <Link
          href="/services"
          className="mt-8 inline-block px-8 py-4 bg-green-500 text-white font-medium rounded-md shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
        >
          Saiba Mais
        </Link>
      </div>
    </section>
  );
};

export default Hero;
