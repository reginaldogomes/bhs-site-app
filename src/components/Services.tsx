// src/components/Services.tsx
import React from "react";
import {
  FaCloud,
  FaRobot,
  FaCogs,
  FaProjectDiagram,
  FaLaptopCode,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

const services = [
  {
    title: "Consultoria em Nuvem Azure",
    description:
      "Planejamento, migração e gerenciamento de ambientes em nuvem com foco em performance, escalabilidade e segurança.",
    icon: <FaCloud />,
    link: "/servicos/consultoria-nuvem",
  },
  {
    title: "Inteligência Artificial Aplicada",
    description:
      "IA generativa, machine learning e análise preditiva para automação e inovação nos negócios.",
    icon: <FaBrain />,
    link: "/servicos/inteligencia-artificial",
  },
  {
    title: "Agentes de IA e Copilots",
    description:
      "Desenvolvimento de agentes autônomos, copilots personalizados e integração com Azure AI Studio.",
    icon: <FaRobot />,
    link: "/servicos/agentes-ia",
  },
  {
    title: "Power Platform e Automação",
    description:
      "Automatização de processos com Power Automate, Power Apps e integração com Microsoft 365.",
    icon: <FaCogs />,
    link: "/servicos/power-platform",
  },
  {
    title: "Desenvolvimento de Soluções Digitais",
    description:
      "Web apps, APIs e integrações personalizadas com foco em produtividade e escalabilidade.",
    icon: <FaLaptopCode />,
    link: "/servicos/desenvolvimento-digital",
  },
  {
    title: "Governança de Dados e BI",
    description:
      "Modelagem de dados, dashboards com Power BI e otimização de bancos de dados em ambientes híbridos.",
    icon: <FaDatabase />,
    link: "/servicos/dados-corporativos",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 text-center py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {services.map((service, index) => (
          <div
            key={service.title} // ou key={index} como alternativa
            className="cursor-pointer p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ease-in-out"
          >
            <div className="flex justify-center text-4xl text-blue-600 mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
