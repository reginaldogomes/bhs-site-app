// pages/servicos/consultoria-ti.tsx
import React from "react";
import Head from "next/head";

const ConsultoriaTI: React.FC = () => {
  return (
    <>
      <Head>
        <title>Consultoria em TI e Transformação Digital | BH Solutions</title>
        <meta
          name="description"
          content="Consultoria estratégica em tecnologia da informação, governança de TI e automação de processos com Microsoft Power Platform."
        />
      </Head>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Consultoria em TI e Transformação Digital
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            A BH Solutions oferece serviços de consultoria estratégica em
            tecnologia da informação, apoiando sua empresa no planejamento e
            execução de uma verdadeira transformação digital.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Atuamos com diagnóstico de infraestrutura, avaliação de maturidade
            digital, implementação de boas práticas de governança de TI e uso
            intensivo da Microsoft Power Platform para automatização e melhoria
            de processos empresariais.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Planejamento e Governança de TI</li>
            <li>Diagnóstico e arquitetura de sistemas</li>
            <li>Mapeamento e automação de processos com Power Automate</li>
            <li>Criação de aplicativos com Power Apps</li>
            <li>Integrações com Microsoft 365, Teams e SharePoint</li>
          </ul>
          <a
            href="/contato"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Fale com um especialista
          </a>
        </div>
      </section>
    </>
  );
};

export default ConsultoriaTI;
