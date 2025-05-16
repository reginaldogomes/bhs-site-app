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
  // Serviços Power Platform, Microsoft Azure e Microsoft 365 já iniciados anteriormente
  // Agora será completado com os restantes: Power Virtual Agents, Power Pages, Copilot Studio, Dataverse, DevOps, Machine Learning, Microsoft 365

  {
    title: "Power Virtual Agents",
    slug: "power-virtual-agents",
    category: "Power Platform",
    description: "Chatbots inteligentes com integração a sistemas e canais.",
    intro:
      "Crie assistentes virtuais com IA que se integram a seus sistemas e oferecem suporte eficiente e automatizado aos usuários.",
    offerings: [
      "Criação de chatbots personalizados sem código",
      "Integração com Microsoft Teams, Dynamics, WhatsApp e outros canais",
      "Conexão com bases de conhecimento, APIs e fluxos do Power Automate",
      "Treinamento de respostas com IA generativa (Copilot Studio)",
      "Análise de conversas e métricas de desempenho",
    ],
    benefits: [
      "Redução de custos com atendimento humano",
      "Atendimento 24/7 com respostas consistentes",
      "Escalabilidade para milhares de interações",
    ],
  },
  {
    title: "Power Pages",
    slug: "power-pages",
    category: "Power Platform",
    description:
      "Criação de sites externos com integração segura a dados corporativos.",
    intro:
      "Desenvolva portais e sites públicos ou privados de forma ágil, conectados a dados internos com total segurança.",
    offerings: [
      "Sites com autenticação de usuários e permissões personalizadas",
      "Conexão com Dataverse, APIs REST e sistemas legados",
      "Editor visual low-code com controle total de layout",
      "Formulários para coleta de dados e interações externas",
      "Publicação rápida com hospedagem Azure integrada",
    ],
    benefits: [
      "Rapidez no lançamento de portais empresariais",
      "Integração total com o ecossistema Microsoft",
      "Segurança e escalabilidade com Azure e Dataverse",
    ],
  },
  {
    title: "Copilot Studio",
    slug: "copilot-studio",
    category: "Power Platform",
    description:
      "Criação de agentes com IA generativa personalizados para empresas.",
    intro:
      "Desenvolva experiências com IA para atendimento, produtividade e fluxos internos usando a plataforma Copilot Studio da Microsoft.",
    offerings: [
      "Criação de agentes conversacionais com IA generativa",
      "Conexão com bases de dados e documentos internos",
      "Orquestração de ações em APIs, Power Automate e Microsoft 365",
      "Treinamento com contexto da empresa e histórico de conversas",
      "Distribuição em múltiplos canais: Teams, site, WhatsApp",
    ],
    benefits: [
      "IA prática, aplicada à realidade do seu negócio",
      "Redução de trabalho operacional e mais escala",
      "Integração com o ecossistema Microsoft em minutos",
    ],
  },
  {
    title: "Dataverse",
    slug: "dataverse",
    category: "Power Platform",
    description: "Modelagem e gestão de dados empresariais com segurança.",
    intro:
      "Centralize dados de forma estruturada, segura e escalável para uso com Power Apps, Power Automate, BI e outras plataformas.",
    offerings: [
      "Modelagem de dados com tabelas, relacionamentos e regras de negócio",
      "Controle de permissões e acesso baseado em funções",
      "Criação de aplicativos e fluxos com base nos dados",
      "Integração com ferramentas externas via conectores e APIs",
      "Sincronização com Dynamics, Excel, SharePoint, SQL Server",
    ],
    benefits: [
      "Governo de dados unificado para sua empresa",
      "Escalabilidade e segurança Microsoft Cloud",
      "Conformidade com políticas de dados corporativos",
    ],
  },
  {
    title: "DevOps e Integrações",
    slug: "devops-integracoes",
    category: "Microsoft Azure",
    description: "Pipelines, GitHub e integrações com Power Platform.",
    intro:
      "Implemente práticas modernas de DevOps com integração contínua, deploy automatizado e gestão de repositórios com GitHub e Azure DevOps.",
    offerings: [
      "Criação de pipelines CI/CD com GitHub Actions ou Azure DevOps",
      "Deploy automatizado para Power Platform, Azure Apps e APIs",
      "Monitoramento com Azure Monitor e Application Insights",
      "Automação de testes e versões para ambientes distintos",
      "Segurança de código-fonte e credenciais com GitHub Secrets",
    ],
    benefits: [
      "Melhoria da qualidade de entrega de software",
      "Redução de erros manuais e retrabalho",
      "Deploys mais rápidos, seguros e consistentes",
    ],
  },
  {
    title: "Machine Learning e IA",
    slug: "machine-learning-ia",
    category: "Microsoft Azure",
    description:
      "Modelos de aprendizado de máquina e serviços cognitivos Azure.",
    intro:
      "Acelere a inovação na sua empresa com soluções baseadas em IA e aprendizado de máquina dentro do Azure.",
    offerings: [
      "Criação, treinamento e publicação de modelos de machine learning",
      "Uso de modelos prontos da Azure AI (visão, texto, voz, decisão)",
      "Análise preditiva integrada a dashboards e apps",
      "Automação de processos baseados em IA",
      "Governança e explicabilidade de modelos em produção",
    ],
    benefits: [
      "Decisões baseadas em dados avançados",
      "Melhoria contínua com feedbacks automáticos",
      "Criação de experiências inteligentes para clientes e equipes",
    ],
  },
  {
    title: "Microsoft Teams e Outlook",
    slug: "teams-outlook",
    category: "Microsoft 365",
    description: "Adoção e integração para comunicação e produtividade.",
    intro:
      "Implante e configure as ferramentas de colaboração do Microsoft 365 para comunicação, produtividade e agilidade empresarial.",
    offerings: [
      "Configuração de contas, grupos e permissões em Teams",
      "Integração com Outlook, calendários, contatos e tarefas",
      "Treinamento de equipes para uso das ferramentas",
      "Automação de tarefas com Power Automate no Teams",
      "Governança e boas práticas para ambientes corporativos",
    ],
    benefits: [
      "Melhoria na comunicação e gestão de tempo",
      "Ambiente digital integrado e seguro",
      "Colaboração em tempo real entre times e departamentos",
    ],
  },
  {
    title: "Migração e Configuração de E-mails",
    slug: "migracao-emails",
    category: "Microsoft 365",
    description: "Migração para Microsoft 365 com segurança e suporte técnico.",
    intro:
      "Realizamos a transição completa da sua infraestrutura de e-mails para o Microsoft 365, com segurança e sem perda de dados.",
    offerings: [
      "Levantamento de ambiente atual e planejamento da migração",
      "Criação de contas, grupos e domínios",
      "Migração de caixas de e-mail e históricos do Outlook ou GSuite",
      "Configuração de DNS, SPF, DKIM, DMARC",
      "Suporte técnico completo no pós-migração",
    ],
    benefits: [
      "Ambiente de e-mail moderno, seguro e escalável",
      "Integração nativa com ferramentas Microsoft 365",
      "Redução de riscos operacionais e perda de dados",
    ],
  },
  {
    title: "Governança com Intune",
    slug: "intune-governanca",
    category: "Microsoft 365",
    description:
      "Gerenciamento e proteção de dispositivos com Microsoft Intune.",
    intro:
      "Gerencie dispositivos e garanta conformidade e segurança com o Microsoft Intune, parte da suíte de segurança do Microsoft 365.",
    offerings: [
      "Gerenciamento de dispositivos móveis (MDM) e desktops (MDM+MAM)",
      "Implantação de políticas de segurança e restrições",
      "Controle de acesso a aplicativos e dados da empresa",
      "Monitoramento e alertas sobre violações de conformidade",
      "Integração com Azure AD, Defender e Autopilot",
    ],
    benefits: [
      "Maior controle sobre os ativos digitais da empresa",
      "Redução de riscos com perda ou vazamento de dados",
      "Facilidade de gestão para equipes de TI remotas",
    ],
  },
  {
    title: "Ambientes com SharePoint",
    slug: "sharepoint-ambientes",
    category: "Microsoft 365",
    description: "Ambientes colaborativos e bibliotecas documentais.",
    intro:
      "Crie intranets, bibliotecas e ambientes colaborativos com o SharePoint Online para organizar e distribuir conteúdo empresarial.",
    offerings: [
      "Criação de sites internos por departamento ou área",
      "Bibliotecas de documentos com controle de versões",
      "Automação de fluxos com Power Automate",
      "Integração com Teams, OneDrive e Power BI",
      "Personalização de layout, permissão e identidade visual",
    ],
    benefits: [
      "Organização centralizada de informações",
      "Melhor colaboração e produtividade de equipes",
      "Controle e rastreabilidade de documentos empresariais",
    ],
  },
  {
    title: "Microsoft Copilot",
    slug: "copilot",
    category: "Microsoft 365",
    description: "IA integrada às ferramentas para acelerar a produtividade.",
    intro:
      "Habilite o Copilot do Microsoft 365 para transformar a rotina da sua equipe com inteligência artificial integrada aos aplicativos que você já usa.",
    offerings: [
      "Ativação e configuração do Copilot em Word, Excel, Outlook e Teams",
      "Treinamento de usuários para uso eficiente da IA",
      "Configuração de permissões e políticas de uso responsável",
      "Análise de produtividade e sugestões contextuais",
      "Boas práticas e governança de dados para Copilot",
    ],
    benefits: [
      "Mais produtividade e menos tempo gasto com tarefas operacionais",
      "Geração de conteúdo inteligente e insights automáticos",
      "Adoção de IA com segurança e controle empresarial",
    ],
  },
];
