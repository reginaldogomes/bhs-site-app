// src/app/produtos/site-modular-seo/page.tsx

import Main from "@/components/Main";
import PageHeading from "@/components/PageHeading";
import LeadForm from "@/components/LeadForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Globe,
  Rocket,
  Search,
  ShieldCheck,
  Zap,
  BarChart,
  MonitorSmartphone,
  ActivitySquare,
  Cloud,
  Building2,
  DatabaseZap,
  ServerCog,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BHS Modular Site | Landing Page Otimizada para SEO",
  description:
    "Criação de sites institucionais e landing pages modulares com foco em SEO, performance, segurança, acessibilidade e resultados reais. Hospedagem exclusiva na nuvem Azure com CDN Cloudflare e integrações Google.",
  keywords: [
    "BHS Modular Site",
    "Landing Page",
    "Site institucional",
    "Otimização SEO",
    "Performance na web",
    "Google Analytics",
    "Google Search Console",
    "Google Tag Manager",
    "Microsoft Azure",
    "Hospedagem na nuvem",
    "Cloudflare CDN",
    "Alta disponibilidade",
    "Site rápido",
    "Site seguro",
    "Site acessível",
    "Marketing digital",
    "Conversão online",
  ],
};

const benefits = [
  { icon: Search, text: "Pronto para primeira página no Google" },
  {
    icon: Rocket,
    text: "Performance máxima com infraestrutura cloud Microsoft Azure",
  },
  { icon: ShieldCheck, text: "Segurança robusta, SSL e conformidade com LGPD" },
  { icon: Zap, text: "Carregamento instantâneo sem dependência de CMS" },
  {
    icon: Globe,
    text: "CDN Cloudflare com cache avançado e distribuição global",
  },
  {
    icon: BarChart,
    text: "Integrações com Google Analytics, Search Console e Tag Manager",
  },
  {
    icon: MonitorSmartphone,
    text: "Site 100% responsivo e acessível em todos os dispositivos",
  },
  { icon: ActivitySquare, text: "Manutenção preventiva com suporte contínuo" },
  { icon: CheckCircle, text: "Código limpo e estrutura modular reutilizável" },
  {
    icon: Cloud,
    text: "Hospedagem em ambiente seguro e escalável no Microsoft Azure",
  },
  {
    icon: DatabaseZap,
    text: "Monitoramento e prevenção de falhas com observabilidade",
  },
  {
    icon: ServerCog,
    text: "Alta disponibilidade e performance com ajuste automático de carga",
  },
  {
    icon: Building2,
    text: "Soluções profissionais com foco em conversão e autoridade digital",
  },
];

export default function BHSModularSitePage() {
  const headingData = {
    title: "BHS Modular Site",
    description:
      "Criação de landing pages e sites institucionais com estrutura modular, SEO técnico avançado, performance extrema e integração com Google e Azure.",
  };

  return (
    <Main>
      <PageHeading {...headingData} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Sobre o Produto
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O <strong>BHS Modular Site</strong> é uma solução moderna e
            escalável para empresas que desejam presença digital sólida,
            profissional e otimizada para resultados. Construído com arquitetura
            modular, SEO técnico avançado e hospedagem em nuvem Microsoft Azure,
            garante performance, estabilidade, segurança e usabilidade. Ideal
            para campanhas de marketing, geração de leads e autoridade online.
            Integrado com Google Analytics, Search Console e Tag Manager,
            oferece rastreamento completo de performance e métricas em tempo
            real.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">
            Benefícios do Site Modular
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <Card
                key={idx}
                className="hover:shadow-xl group transition-all duration-300 ease-in-out rounded-2xl border border-gray-200"
              >
                <CardHeader className="flex flex-col items-center justify-center">
                  <div className="text-primary text-4xl mb-2 transition-transform group-hover:scale-110">
                    <item.icon />
                  </div>
                  <CardTitle className="text-lg text-center text-gray-800">
                    {item.text}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Ideal para empresas que buscam resultados orgânicos
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-10">
            Criação de sites institucionais e landing pages estáticas, modulares
            e com foco em resultados orgânicos no Google. Projetado para máxima
            performance, rastreamento eficiente e compatibilidade com
            estratégias de marketing digital.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            <li className="flex items-center gap-3 text-base text-primary font-medium">
              <CheckCircle className="text-green-500 w-5 h-5" /> Mais
              visibilidade nos mecanismos de busca
            </li>
            <li className="flex items-center gap-3 text-base text-primary font-medium">
              <CheckCircle className="text-green-500 w-5 h-5" /> Redução de
              custo com anúncios
            </li>
            <li className="flex items-center gap-3 text-base text-primary font-medium">
              <CheckCircle className="text-green-500 w-5 h-5" /> Estrutura
              confiável e de rápida entrega
            </li>
            <li className="flex items-center gap-3 text-base text-primary font-medium">
              <CheckCircle className="text-green-500 w-5 h-5" /> Alto desempenho
              em dispositivos móveis
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Infraestrutura de Alta Performance
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Hospedagem exclusiva em ambiente cloud Microsoft Azure com
            disponibilidade global, performance escalável e segurança de nível
            corporativo. Aliamos a rede CDN da Cloudflare para entregar
            conteúdos com rapidez, mesmo em altas demandas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Tecnologias Parceiras
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-10">
            Utilizamos as melhores ferramentas do mercado para garantir
            eficiência e inovação: Google (Analytics, Search Console, Tag
            Manager), Microsoft Azure e CDN Cloudflare.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold text-primary">
            <span className="hover:scale-105 transition-transform">Google</span>
            <span className="hover:scale-105 transition-transform">
              Microsoft Azure
            </span>
            <span className="hover:scale-105 transition-transform">
              Cloudflare
            </span>
          </div>
        </div>
      </section>

      <LeadForm />
    </Main>
  );
}
