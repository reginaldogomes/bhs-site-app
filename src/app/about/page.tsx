// src/app/about/page.tsx

import Main from "@/components/Main";
import PageHeading from "@/components/PageHeading";
import { FaChartLine, FaLaptopCode, FaPeopleCarry } from "react-icons/fa";
import { ReactNode } from "react";

interface ExperienceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
    <div className="text-primary text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const About: React.FC = () => {
  const headingData = {
    title: "Sobre",
    description: "Agilidade, segurança e performance para o seu negócio.",
  };

  return (
    <Main>
      <PageHeading {...headingData} />
      <section className="mt-12 bg-white py-12 shadow-md rounded-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Nossa Experiência
        </h2>
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ExperienceCard
            icon={<FaChartLine />}
            title="Estratégia Digital"
            description="Potencializamos negócios com estratégias inovadoras, garantindo presença digital impactante e resultados escaláveis."
          />
          <ExperienceCard
            icon={<FaLaptopCode />}
            title="Tecnologias Modernas"
            description="Aprimoramos o desempenho com soluções inteligentes, utilizando tecnologia de ponta para máxima eficiência."
          />
          <ExperienceCard
            icon={<FaPeopleCarry />}
            title="Parcerias Estratégicas"
            description="Criamos relações duradouras, transformando desafios em oportunidades e promovendo crescimento sustentável."
          />
        </div>
      </section>
    </Main>
  );
};

export default About;
