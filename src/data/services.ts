// src/data/services.ts
export interface ServiceDetail {
  title: string;
  slug: string;
  category: string;
  description: string;
  intro: string;
  offerings: string[];
  benefits: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    title: "Power BI",
    slug: "power-bi",
    category: "Power Platform",
    description: "Dashboards, relatórios gerenciais e integração com ERP/CRM.",
    intro:
      "O Power BI é a ferramenta da Microsoft para visualização de dados e Business Intelligence. Ele permite transformar dados brutos em insights visuais por meio de dashboards interativos e relatórios dinâmicos.",
    offerings: [
      "Criação de dashboards personalizados com identidade visual da sua empresa",
      "Integração com bancos de dados, ERP, CRM, Excel, SharePoint e APIs",
      "Modelagem de dados, KPIs e análise preditiva com DAX",
      "Publicação e governança em ambiente Power BI Service",
      "Treinamento e capacitação de equipes para uso e criação de relatórios",
    ],
    benefits: [
      "Decisões baseadas em dados em tempo real",
      "Automação de relatórios manuais e planilhas",
      "Visualização clara de metas, indicadores e desempenho",
    ],
  },
  {
    title: "Power Apps",
    slug: "power-apps",
    category: "Power Platform",
    description:
      "Aplicações personalizadas para processos internos empresariais.",
    intro:
      "O Power Apps permite criar aplicativos de negócios de forma rápida, sem a necessidade de codificação avançada. Ideal para digitalizar fluxos internos e conectar dados de forma inteligente.",
    offerings: [
      "Criação de aplicativos personalizados com interface intuitiva",
      "Conexão com Microsoft Dataverse, SharePoint, SQL Server, entre outros",
      "Automação de fluxos com integração ao Power Automate",
      "Publicação e acesso em dispositivos móveis e web",
      "Treinamento para usuários e gestores de negócio",
    ],
    benefits: [
      "Digitalização rápida de processos internos",
      "Redução de custos com desenvolvimento tradicional",
      "Maior produtividade das equipes operacionais",
    ],
  },
  {
    title: "Power Automate",
    slug: "power-automate",
    category: "Power Platform",
    description: "Automação de fluxos de trabalho e processos de negócios.",
    intro:
      "O Power Automate permite automatizar tarefas repetitivas, conectar serviços e criar fluxos de trabalho inteligentes, economizando tempo e reduzindo erros.",
    offerings: [
      "Criação de fluxos automatizados entre sistemas e ferramentas",
      "Integração com Outlook, SharePoint, Teams, Dynamics e serviços externos",
      "Gatilhos com base em eventos, formulários ou horários",
      "Criação de aprovações automatizadas e envio de alertas",
      "Dashboards de monitoramento de fluxos executados",
    ],
    benefits: [
      "Redução de tarefas manuais e retrabalho",
      "Aumento da eficiência operacional",
      "Rastreamento e controle em tempo real dos processos",
    ],
  },
  {
    title: "Arquitetura em Nuvem",
    slug: "arquitetura-nuvem",
    category: "Microsoft Azure",
    description: "Consultoria em IaaS, PaaS e SaaS com Microsoft Azure.",
    intro:
      "Planejamos e estruturamos a arquitetura ideal para sua empresa dentro da nuvem Microsoft Azure. Utilizamos modelos de serviço IaaS, PaaS e SaaS com escalabilidade, segurança e performance.",
    offerings: [
      "Análise de ambiente atual e plano de migração para nuvem",
      "Desenho de arquitetura com foco em segurança e escalabilidade",
      "Implantação de ambientes híbridos (on-premise + Azure)",
      "Gerenciamento de máquinas virtuais, containers e recursos em nuvem",
      "Acompanhamento pós-implantação e suporte contínuo",
    ],
    benefits: [
      "Redução de custos com infraestrutura local",
      "Escalabilidade sob demanda com alta disponibilidade",
      "Melhoria na segurança e recuperação de desastres",
    ],
  },
  {
    title: "Migração para Azure",
    slug: "migracao-azure",
    category: "Microsoft Azure",
    description:
      "Migração segura de servidores, sistemas e dados para a nuvem.",
    intro:
      "Oferecemos serviços completos de migração para o Azure, garantindo segurança, integridade e continuidade operacional durante todo o processo.",
    offerings: [
      "Mapeamento de servidores, sistemas e bases de dados existentes",
      "Planejamento de transição com mínima interrupção operacional",
      "Execução da migração com ferramentas Microsoft certificadas",
      "Validação pós-migração e testes de desempenho",
      "Treinamento da equipe e suporte técnico contínuo",
    ],
    benefits: [
      "Acesso aos recursos modernos e escaláveis da nuvem Azure",
      "Menor dependência de infraestrutura física",
      "Maior segurança, backups automáticos e recuperação mais ágil",
    ],
  },
  {
    title: "Segurança e Conformidade",
    slug: "seguranca-conformidade",
    category: "Microsoft Azure",
    description: "Configuração com Azure Security Center e Microsoft Defender.",
    intro:
      "Proteja seus dados, aplicações e infraestrutura com as soluções robustas de segurança do Microsoft Azure, garantindo conformidade com normas como LGPD e ISO.",
    offerings: [
      "Configuração do Azure Security Center para monitoramento e proteção",
      "Implantação do Microsoft Defender for Cloud",
      "Auditoria e avaliação de conformidade com benchmarks de segurança",
      "Configuração de políticas de acesso e identidade (IAM)",
      "Automação de respostas a ameaças e relatórios gerenciais",
    ],
    benefits: [
      "Redução de riscos de ataques cibernéticos",
      "Conformidade com exigências legais e regulatórias",
      "Monitoramento contínuo com inteligência em tempo real",
    ],
  },
];
