import LeadForm from "@/components/LeadForm";
import ProductLanding from "@/components/ProductLanding";

export default function AgenteIaPage() {
  return (
    <>
      <ProductLanding
        title="Agente IA para Atendimento Digital"
        description="Automatize o atendimento ao cliente com inteligência artificial personalizada, integrada aos seus canais e CRM."
        keywords="consultoria em IA, automação inteligente, soluções com inteligência artificial, BH Solutions"
        heroCtaLabel="Ver demonstração"
        heroCtaHref="/contato"
        features={[
          {
            title: "Atendimento automatizado 24/7",
            desc: "Responda dúvidas, colete dados e direcione clientes com um agente treinado com IA generativa.",
          },
          {
            title: "Integração com WhatsApp e Web",
            desc: "Seu agente atuando nos principais canais de comunicação com histórico de conversas e contexto.",
          },
          {
            title: "Treinamento com base no seu conteúdo",
            desc: "Utilize documentos, site e base de conhecimento para treinar seu agente.",
          },
          {
            title: "Painel de gestão",
            desc: "Acompanhe métricas, interações, taxas de sucesso e melhorias contínuas do agente.",
          },
          {
            title: "Fluxos personalizados",
            desc: "Combine LLMs com automações, APIs e regras de negócios específicas.",
          },
          {
            title: "Escalabilidade em nuvem",
            desc: "Infraestrutura serverless e segura com baixo custo de operação.",
          },
        ]}
        technologies={[
          "Microsoft Azure",
          "OpenAI",
          "n8n",
          "WhatsApp Api",
          "Langchain",
          "Google",
        ]}
        ctaTitle="Pronto para revolucionar seu atendimento?"
        ctaDescription="Implante um agente inteligente que aprende com o seu negócio e melhora a experiência do cliente."
        ctaHref="/contato"
        ctaButton="Agendar conversa com especialista"
      />

      <LeadForm />
    </>
  );
}
