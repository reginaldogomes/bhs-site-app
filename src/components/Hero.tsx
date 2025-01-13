// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-cover bg-center relative text-white text-center" style={{ backgroundImage: 'url(https://www.bhsolutions.com.br/wp-content/uploads/2024/11/2150169840-min.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-pattern bg-primary opacity-75"></div>

      {/* Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-25 bg-pattern"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold">Impulsione Seu Negócio com Tecnologia de Alto Impacto</h1>
        <p className="mt-4 text-xl">Soluções que Transformam Desafios em Resultados, Elevando Sua Empresa ao Próximo Nível.</p>
        <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-lg shadow-md hover:bg-green-600">
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default Hero;
