import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CloudIaLanding() {
  return (
    <section className="w-full bg-white text-gray-900">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Consultoria em Nuvem, Inteligência Artificial e Agentes de IA
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Transforme seu negócio com soluções estratégicas em cloud, IA
          generativa e automações com agentes inteligentes.
        </p>
        <Button asChild className="px-6 py-3 text-base">
          <a href="#contato">Agende uma consultoria gratuita</a>
        </Button>
      </div>

      {/* O que fazemos */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          O que entregamos para sua empresa
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Diagnóstico e Roadmap Digital",
              desc: "Mapeamento completo do cenário atual, plano estratégico e oportunidades com IA e cloud.",
            },
            {
              title: "Arquitetura em Nuvem",
              desc: "Criação e modernização de infraestrutura segura, escalável e otimizada para seu negócio.",
            },
            {
              title: "Agentes e IA Personalizada",
              desc: "Desenvolvimento de agentes inteligentes integrados com sistemas, fluxos e LLMs.",
            },
            {
              title: "Automação de Processos",
              desc: "Conecte sistemas, crie copilotos e automatize tarefas com Power Platform, n8n e IA.",
            },
            {
              title: "Entrega e Treinamento",
              desc: "Onboarding da sua equipe, documentação técnica e suporte na adoção dos agentes.",
            },
            {
              title: "Evolução Contínua",
              desc: "Plano de melhorias, otimização de custos em cloud e evolução dos fluxos inteligentes.",
            },
          ].map(({ title, desc }, i) => (
            <Card key={i} className="transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tecnologias */}
      <div className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Tecnologias e ferramentas que utilizamos
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center text-center text-sm text-gray-700">
            {[
              "Azure",
              "OpenAI",
              "Power Platform",
              "n8n",
              "Supabase",
              "Next.js",
            ].map((tech, i) => (
              <Card key={i} className="text-center">
                <CardContent className="py-3">{tech}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center" id="contato">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para inovar com IA e nuvem?
        </h2>
        <p className="text-gray-600 mb-6">
          Converse com nosso time e veja como a BH Solutions pode acelerar a
          transformação digital do seu negócio com tecnologia de verdade.
        </p>
        <Button asChild className="px-6 py-3 text-base">
          <a href="/contato">Falar com um especialista</a>
        </Button>
      </div>
    </section>
  );
}
