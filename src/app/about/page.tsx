// src/app/about/page.tsx

import PageHeading from "@/components/PageHeading";
import Image from "next/image";
import { FaChartLine, FaLaptopCode, FaPeopleCarry } from "react-icons/fa";

const About = () => {
  const headingData = {
    title: "Sobre Nós",
    description:
      "Somos especialistas em transformação digital, ajudando empresas a evoluírem e alcançarem novos patamares com tecnologia de ponta. Nosso foco está em oferecer soluções personalizadas que atendem às necessidades específicas de cada cliente.",
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <PageHeading {...headingData} />

      <section className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        <div className="relative w-full md:w-2/3 lg:w-1/2 aspect-video overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/about-image.jpg" // Adicione sua imagem na pasta public
            alt="Equipe trabalhando na transformação digital"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Cards de Experiência */}
      <section className="mt-12 bg-white py-12 shadow-md rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Nossa Experiência
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-primary text-5xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Estratégia Digital
            </h3>
            <p className="text-gray-600 text-center">
              Criamos estratégias inovadoras para empresas de diferentes setores
              maximizarem seu impacto digital.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-primary text-5xl mb-4">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Tecnologias Modernas
            </h3>
            <p className="text-gray-600 text-center">
              Utilizamos as melhores tecnologias para entregar soluções de alto
              desempenho e escalabilidade.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-primary text-5xl mb-4">
              <FaPeopleCarry />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Parcerias Estratégicas
            </h3>
            <p className="text-gray-600 text-center">
              Trabalhamos lado a lado com nossos clientes para garantir
              resultados alinhados aos seus objetivos de negócio.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
