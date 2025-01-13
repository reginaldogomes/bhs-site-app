// src/components/About.tsx
import React from "react";

const aboutData = {
  title: "Sobre a Empresa",
  description:
    "A BH Solutions é uma empresa de tecnologia da informação que se destaca por oferecer soluções corporativas inovadoras em infraestrutura, cloud computing e desenvolvimento e implantação de software. Nosso foco é transformar desafios empresariais em oportunidades, entregando tecnologias personalizadas que impulsionam a eficiência operacional, a segurança e a escalabilidade das organizações.",
  highlights: [
    {
      title: "Inovação",
      description:
        "Soluções tecnológicas modernas que transformam desafios em oportunidades.",
    },
    {
      title: "Tecnologia",
      description:
        "Utilizamos as melhores práticas e ferramentas para impulsionar resultados.",
    },
  ],
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold">{aboutData.title}</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto">{aboutData.description}</p>
      <div className="w-6/12 mt-10 grid gap-6 m-auto sm:grid-cols-1 md:grid-cols-2 px-6">
        {aboutData.highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold">{highlight.title}</h3>
            <p className="mt-2 text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
