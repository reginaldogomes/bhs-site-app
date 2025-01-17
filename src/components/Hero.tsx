// src/components/Hero.tsx
import Link from "next/link";

const Hero: React.FC = () => {
  const heroData = {
    backgroundImage:
      "url(/transformacao-digital-bh-solutions.webp)",
    title: "Transforme Seu Negócio com Tecnologia de Ponta",
    description:
      "Soluções Inovadoras para Impulsionar a Transformação Digital e Levar Sua Empresa ao Próximo Nível.",
    button: {
      text: "Saiba Mais",
      link: "/services",
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          {heroData.title}
        </h1>
        {/* Descrição responsiva */}
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl leading-relaxed">
          {heroData.description}
        </p>
        {/* Botão */}
        <Link
          href={heroData.button.link}
          className="mt-8 inline-block px-8 py-4 bg-secondary text-white rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-110 hover:shadow-2xl"
        >
          {heroData.button.text}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
