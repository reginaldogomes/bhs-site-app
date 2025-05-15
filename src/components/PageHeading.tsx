// src/components/PageHeading.tsx

import React from "react";

type PageHeadingProps = {
  title: string;
  description: string;
};

const heroData = {
  overlayColor: "bg-primary/95",
};

const PageHeading: React.FC<PageHeadingProps> = ({ title, description }) => {
  return (
    <section
      className="py-12 bg-gradient-to-br from-[#0683e2] to-[#4c6fe7] text-white relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-hero.jpeg')", // Substitua pelo caminho real da imagem
      }}
    >
      {/* Overlay escuro para melhor leitura */}
      <div className={`absolute inset-0 ${heroData.overlayColor}`}></div>
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {title}
          </h1>
          <div className="h-1 w-20 bg- rounded-full mx-auto mb-6"></div>
          <p className="text-l md:text-xl text-primary dark:text-gray-100 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeading;
