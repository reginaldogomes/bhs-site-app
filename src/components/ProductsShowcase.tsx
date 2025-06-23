// src/components/ProductsShowcase.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FaCloud, FaBrain, FaRobot } from "react-icons/fa";

const products = [
  {
    title: "Consultoria em Nuvem",
    description:
      "Implantação e gestão de ambientes escaláveis e seguros com foco em produtividade e inovação.",
    icon: <FaCloud className="text-primary text-4xl mb-2" />,
    link: "/servicos/consultoria-nuvem",
  },
  {
    title: "Soluções com Inteligência Artificial",
    description:
      "Aplicações com IA generativa, machine learning e análise preditiva para ganho competitivo.",
    icon: <FaBrain className="text-primary text-4xl mb-2" />,
    link: "/servicos/inteligencia-artificial",
  },
  {
    title: "Agentes de IA Personalizados",
    description:
      "Desenvolvimento de copilots e agentes inteligentes integrados com Azure e Power Platform.",
    icon: <FaRobot className="text-primary text-4xl mb-2" />,
    link: "/agents-ai",
  },
];

export const ProductsShowcase = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.link}
            className="group h-full hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <CardContent className="p-6 flex flex-col items-start text-left gap-4 h-full">
              {product.icon}
              <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm flex-grow">
                {product.description}
              </p>
              <Link
                href={product.link}
                className="mt-auto text-sm text-secondary font-medium hover:underline transition-colors"
              >
                Ver detalhes →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
