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
  // Consultoria em Nuvem
  {
    title: "Arquitetura em Nuvem",
    description:
      "Planejamento e estruturação de ambientes escaláveis com Microsoft Azure.",
    category: "Consultoria em Nuvem",
    slug: "arquitetura-nuvem",
  },
  {
    title: "Migração para Azure",
    description:
      "Transição segura de servidores, sistemas e bancos de dados para a nuvem.",
    category: "Consultoria em Nuvem",
    slug: "migracao-azure",
  },
  {
    title: "Segurança e Conformidade",
    description:
      "Implementação de políticas de segurança com Azure Defender e Microsoft Purview.",
    category: "Consultoria em Nuvem",
    slug: "seguranca-e-conformidade",
  },
  {
    title: "Governança e Intune",
    description:
      "Gerenciamento de dispositivos e identidade com Microsoft Intune e Entra ID.",
    category: "Consultoria em Nuvem",
    slug: "governanca-intune",
  },

  // Inteligência Artificial e Machine Learning
  {
    title: "Modelos de Machine Learning",
    description:
      "Desenvolvimento e deploy de modelos personalizados com Azure Machine Learning.",
    category: "Inteligência Artificial",
    slug: "machine-learning",
  },
  {
    title: "Serviços Cognitivos Azure",
    description:
      "Análise de imagens, textos e voz com APIs inteligentes da Microsoft.",
    category: "Inteligência Artificial",
    slug: "servicos-cognitivos",
  },
  {
    title: "Copilot Studio e IA Generativa",
    description:
      "Criação de agentes com IA generativa para atendimento, automação e produtividade.",
    category: "Inteligência Artificial",
    slug: "copilot-studio",
  },

  // Agentes de IA e Automação
  {
    title: "Power Virtual Agents",
    description:
      "Chatbots inteligentes com integração a canais como Teams, WhatsApp e sites.",
    category: "Agentes de IA",
    slug: "power-virtual-agents",
  },
  {
    title: "Automação com Power Automate",
    description:
      "Criação de fluxos de trabalho automatizados e conectores personalizados.",
    category: "Agentes de IA",
    slug: "power-automate",
  },
  {
    title: "Copilot no Microsoft 365",
    description:
      "Acelerando tarefas com IA integrada ao Word, Excel, Outlook e Teams.",
    category: "Agentes de IA",
    slug: "copilot-m365",
  },

  // Power Platform Integrada
  {
    title: "Dashboards com Power BI",
    description:
      "Visualizações interativas e relatórios com integração a sistemas legados.",
    category: "Power Platform",
    slug: "power-bi",
  },
  {
    title: "Aplicações com Power Apps",
    description:
      "Apps personalizados de negócio conectados ao Dataverse ou SharePoint.",
    category: "Power Platform",
    slug: "power-apps",
  },
  {
    title: "Power Pages",
    description:
      "Portais externos seguros com autenticação e acesso a dados internos.",
    category: "Power Platform",
    slug: "power-pages",
  },
  {
    title: "Dataverse",
    description:
      "Modelo de dados corporativo centralizado, seguro e escalável.",
    category: "Power Platform",
    slug: "dataverse",
  },

  // Suporte ao Modern Workplace
  {
    title: "SharePoint Online",
    description:
      "Ambientes colaborativos com bibliotecas e fluxo de documentos.",
    category: "Modern Workplace",
    slug: "sharepoint",
  },
  {
    title: "Microsoft Teams e Outlook",
    description:
      "Produtividade e colaboração com comunicação unificada e reuniões inteligentes.",
    category: "Modern Workplace",
    slug: "teams-outlook",
  },
  {
    title: "Migração de E-mails",
    description:
      "Transição segura de caixas de e-mail para Microsoft 365 com suporte completo.",
    category: "Modern Workplace",
    slug: "migracao-email",
  },
];

const categories = ["Power Platform", "Microsoft Azure", "Microsoft 365"];

const groupedServices = services.reduce(
  (acc, service) => {
    (acc[service.category] ||= []).push(service);
    return acc;
  },
  {} as Record<string, Service[]>
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
          Áreas com especialização
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
