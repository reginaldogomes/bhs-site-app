// src/components/Hero.tsx
import React from 'react';
import Link from "next/link";

const Hero: React.FC = () => {
  // Objeto de dados
  const heroData = {
    backgroundImage: 'url(https://www.bhsolutions.com.br/wp-content/uploads/2024/11/2150169840-min.jpg)',
    title: 'Impulsione Seu Negócio com Tecnologia de Alto Impacto',
    description: 'Soluções que Transformam Desafios em Resultados, Elevando Sua Empresa ao Próximo Nível.',
    button: {
      text: 'Saiba Mais',
      link: '#about',
    },
  };

  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center relative text-white text-center"
      style={{ backgroundImage: heroData.backgroundImage }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-pattern bg-primary opacity-75"></div>

      {/* Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-25 bg-pattern"></div>

      <div className="relative z-10 w-11/12 md:w-9/12">
        {/* Título responsivo */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{heroData.title}</h1>
        {/* Descrição responsiva */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          {heroData.description}
        </p>
        {/* Botão */}
        <Link
          href={heroData.button.link}
          className="mt-6 inline-block px-6 py-3 bg-secondary text-white rounded-lg shadow-md transition-colors duration-300 ease-in-out hover:bg-green-600"
        >
          {heroData.button.text}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
