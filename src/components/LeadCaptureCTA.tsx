// src/components/LeadCaptureCTA.tsx
"use client";
import { useState } from "react";

const LeadCaptureCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    city: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Enviar os dados para o backend ou serviço de e-mail aqui
    setIsSubmitted(true);
    // Resetar os dados do formulário após envio
    setFormData({ name: "", company: "", city: "" });
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-teal-500 py-16 px-6 text-white rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-white leading-tight">
          Consultoria Gratuita para Transformação Digital
        </h2>
        <p className="text-lg mb-8 text-white opacity-90">
          Preencha o formulário abaixo para agendar sua consultoria gratuita e
          entender como podemos ajudar sua empresa a crescer com transformação
          digital. Vamos juntos alcançar o próximo nível!
        </p>

        {/* Formulário de captura de leads */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-300 bg-white shadow-md"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Nome da Empresa"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-transparent focus:outline-none focus:ring-4 focus:ring-teal-300 bg-white shadow-md"
                required
              />
            </div>
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-transparent focus:outline-none focus:ring-4 focus:ring-teal-300 bg-white shadow-md"
              required
            />
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-teal-600 text-white font-semibold text-xl hover:bg-teal-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            >
              Agendar Consultoria
            </button>
            <p className="text-lg font-semibold">
              Faça sua inscrição e aguarde nosso contato.
            </p>
          </form>
        ) : (
          <div className="text-xl font-semibold text-teal-200">
            <p>Obrigado por se inscrever! Em breve entraremos em contato.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadCaptureCTA;
