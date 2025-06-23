"use client";
import React from "react";
import LinkButton from "./Link";

const heroData = {
  backgroundImage: "url('/bg-hero.jpeg')", // Substitua pelo caminho real da imagem
  overlayColor: "bg-primary/95",
  title: "Computação em Nuvem, Inteligência Artificial e Agentes de IA",
  description:
    "Planejamos, desenvolvemos e entregamos soluções digitais sob medida para acelerar a transformação do seu negócio.",
  button: {
    href: "/services",
    text: "Saiba Mais",
    styles:
      "mt-8 inline-block px-8 py-4 bg-green-500 text-white font-medium rounded-md shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl",
  },
};

const Hero = () => {
  return (
    <section
      className="w-full min-h-[70vh] flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: heroData.backgroundImage }}
    >
      {/* Overlay escuro para melhor leitura */}
      <div className={`absolute inset-0 ${heroData.overlayColor}`}></div>

      <div className="relative z-10 text-white text-center w-10/12 md:w-8/12 px-6">
        <h1 className="text-4xl md:text-5xl capitalize font-bold leading-tight">
          {heroData.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl capitalize text-white/90 w-8/12 mx-auto">
          {heroData.description}
        </p>
        <LinkButton href="/about">Agende uma consultoria </LinkButton>
      </div>
    </section>
  );
};

export default Hero;
