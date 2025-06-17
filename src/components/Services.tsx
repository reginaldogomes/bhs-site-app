// src/components/Services.tsx
import React from "react";
import Link from "next/link";
import {
  FaCloud,
  FaCogs,
  FaDatabase,
  FaLaptopCode,
  FaProjectDiagram,
  FaRegChartBar,
} from "react-icons/fa";
import { title } from "process";

const services = [
  {
    title: "Consultoria em TI e Transformação Digital",
    description:
      "Planejamento estratégico, governança de TI e automação com a Power Platform.",
    icon: <FaProjectDiagram />,
    link: "/solutions/consultoria",
  },
  {
    title: "Desenvolvimento de Soluções Digitais",
    description:
      "Web apps, sistemas sob demanda, integração de APIs e soluções personalizadas.",
    icon: <FaLaptopCode />,
    link: "/servicos/desenvolvimento-digital",
  },
  {
    title: "Cloud Computing com Microsoft Azure",
    description:
      "Migração, monitoramento, segurança e serviços gerenciados em nuvem Azure.",
    icon: <FaCloud />,
    link: "/servicos/cloud-computing",
  },
  {
    title: "Business Intelligence e Power Platform",
    description:
      "Dashboards com Power BI, Power Apps e automações com Power Automate.",
    icon: <FaRegChartBar />,
    link: "/servicos/business-intelligence",
  },
  {
    title: "Automação de Processos",
    description:
      "Fluxos de trabalho inteligentes com Microsoft 365 e Power Automate.",
    icon: <FaCogs />,
    link: "/servicos/automacao-processos",
  },
  {
    title: "Consultoria em Banco de Dados",
    description:
      "Gestão, performance e segurança de dados com tecnologias Microsoft.",
    icon: <FaDatabase />,
    link: "/servicos/consultoria-banco-dados",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 text-center py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {services.map((service, index) => (
          <div
            key={title}
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
