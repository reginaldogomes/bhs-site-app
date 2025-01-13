// src/components/Services.tsx
import React from "react";
import {
  FaCode,
  FaCloud,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaShoppingCart,
  FaCogs,
  FaFileCode,
  FaGithub,
} from "react-icons/fa";

const services = [
  {
    title: "Desenvolvimento de Software",
    description: "Criamos soluções personalizadas para seu negócio.",
    icon: <FaCode />,
  },
  {
    title: "Consultoria em Nuvem",
    description:
      "Ajudamos a migrar seus sistemas para a nuvem de forma eficiente.",
    icon: <FaCloud />,
  },
  {
    title: "Gerenciamento de Infraestrutura",
    description:
      "Gerenciamos sua infraestrutura em nuvem para máxima performance.",
    icon: <FaServer />,
  },
  {
    title: "Desenvolvimento Web",
    description: "Desenvolvemos websites responsivos e otimizados.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Consultoria em Banco de Dados",
    description:
      "Otimização e gestão de bancos de dados para desempenho superior.",
    icon: <FaDatabase />,
  },
  {
    title: "E-commerce",
    description:
      "Construção e manutenção de plataformas de e-commerce robustas.",
    icon: <FaShoppingCart />,
  },
  {
    title: "Automação de Processos",
    description: "Automatizamos fluxos de trabalho para otimizar sua operação.",
    icon: <FaCogs />,
  },
  {
    title: "Desenvolvimento de APIs",
    description: "Criamos APIs escaláveis e seguras para seu sistema.",
    icon: <FaFileCode />,
  },
  {
    title: "Integrações com GitHub",
    description:
      "Integramos sua aplicação ao GitHub para automação de deploys.",
    icon: <FaGithub />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Nossos Serviços</h2>
      <p className="mt-4 text-xl text-gray-600">
        Soluções inovadoras para transformar o seu negócio.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 ease-in-out"
          >
            <div className="flex justify-center text-4xl text-blue-500 mb-4">
              {service.icon}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="mt-4 text-lg text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
