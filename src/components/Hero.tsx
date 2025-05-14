"use client";
import Link from "next/link";
import React from "react";

const heroData = {
  backgroundImage: "url('/bg-hero.jpeg')", // Substitua pelo caminho real da imagem
  overlayColor: "bg-primary/95",
  title: "Transformação digital com o poder da Microsoft",
  description:
    "Consultoria especializada em Power Platform, Azure e Microsoft 365 para empresas que querem evoluir com tecnologia, automação e dados inteligentes.",
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
        <Link href={heroData.button.href} className={heroData.button.styles}>
          {heroData.button.text}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
