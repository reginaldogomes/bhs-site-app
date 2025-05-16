// src/components/ConsultingServices.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
  category: string;
  slug: string;
}

const services: Service[] = [
  {
    title: "Power BI",
    description: "Dashboards, relatórios gerenciais e integração com ERP/CRM.",
    category: "Power Platform",
    slug: "power-bi",
  },
  {
    title: "Power Apps",
    description:
      "Aplicações personalizadas para processos internos empresariais.",
    category: "Power Platform",
    slug: "power-apps",
  },
  {
    title: "Power Automate",
    description: "Automação de fluxos de trabalho e processos de negócios.",
    category: "Power Platform",
    slug: "power-automate",
  },
  {
    title: "Power Virtual Agents",
    description: "Chatbots inteligentes com integração a sistemas e canais.",
    category: "Power Platform",
    slug: "power-virtual-agents",
  },
  {
    title: "Power Pages",
    description:
      "Criação de sites externos com integração segura a dados corporativos.",
    category: "Power Platform",
    slug: "power-pages",
  },
  {
    title: "Copilot Studio",
    description:
      "Criação de agentes com IA generativa personalizados para empresas.",
    category: "Power Platform",
    slug: "copilot-studio",
  },
  {
    title: "Dataverse",
    description: "Modelagem e gestão de dados empresariais com segurança.",
    category: "Power Platform",
    slug: "dataverse",
  },
  {
    title: "Arquitetura em Nuvem",
    description: "Consultoria em IaaS, PaaS e SaaS com Microsoft Azure.",
    category: "Microsoft Azure",
    slug: "arquitetura-nuvem",
  },
  {
    title: "Migração para Azure",
    description:
      "Migração segura de servidores, sistemas e dados para a nuvem.",
    category: "Microsoft Azure",
    slug: "migracao-azure",
  },
  {
    title: "Segurança e Conformidade",
    description: "Configuração com Azure Security Center e Microsoft Defender.",
    category: "Microsoft Azure",
    slug: "seguranca-conformidade",
  },
  {
    title: "DevOps e Integrações",
    description: "Pipelines, GitHub e integrações com Power Platform.",
    category: "Microsoft Azure",
    slug: "devops-integracoes",
  },
  {
    title: "Machine Learning e IA",
    description:
      "Modelos de aprendizado de máquina e serviços cognitivos Azure.",
    category: "Microsoft Azure",
    slug: "machine-learning-ia",
  },
  {
    title: "Microsoft Teams e Outlook",
    description: "Adoção e integração para comunicação e produtividade.",
    category: "Microsoft 365",
    slug: "teams-outlook",
  },
  {
    title: "Migração e Configuração de E-mails",
    description: "Migração para Microsoft 365 com segurança e suporte técnico.",
    category: "Microsoft 365",
    slug: "migracao-emails",
  },
  {
    title: "Governança com Intune",
    description:
      "Gerenciamento e proteção de dispositivos com Microsoft Intune.",
    category: "Microsoft 365",
    slug: "intune-governanca",
  },
  {
    title: "Ambientes com SharePoint",
    description: "Ambientes colaborativos e bibliotecas documentais.",
    category: "Microsoft 365",
    slug: "sharepoint-ambientes",
  },
  {
    title: "Microsoft Copilot",
    description: "IA integrada às ferramentas para acelerar a produtividade.",
    category: "Microsoft 365",
    slug: "copilot",
  },
];

const categories = ["Power Platform", "Microsoft Azure", "Microsoft 365"];

const groupedServices = services.reduce(
  (acc, service) => {
    (acc[service.category] ||= []).push(service);
    return acc;
  },
  {} as Record<string, Service[]>,
);

const ConsultingServices = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Serviços de Consultoria
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 border ${
                activeCategory === category
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-muted-foreground border-gray-300 hover:bg-primary hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedServices[activeCategory]?.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/servicos/${service.slug}`}>
                <Card className="hover:shadow-xl transition border border-gray-100">
                  <CardHeader className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {service.description}
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingServices;
