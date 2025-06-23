// src/app/about/page.tsx

import Main from "@/components/Main";
import PageHeading from "@/components/PageHeading";
import { FaChartLine, FaLaptopCode, FaPeopleCarry } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
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
  <Card className="hover:shadow-xl transition-shadow h-full">
    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
      <div className="text-primary text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const About: React.FC = () => {
  const headingData = {
    title: "Sobre a BH Solutions",
    description: "Agilidade, segurança e performance para o seu negócio.",
  };

  return (
    <>
      <PageHeading {...headingData} />
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Nossa Experiência
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </>
  );
};

export default About;
