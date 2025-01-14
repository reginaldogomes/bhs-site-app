"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PageHeading from "@/components/PageHeading";

const schema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório."),
  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("O e-mail é obrigatório."),
  message: yup
    .string()
    .min(10, "A mensagem deve ter no mínimo 10 caracteres.")
    .required("A mensagem é obrigatória."),
});

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const headingData = {
    title: "Entre em Contato",
    description:
      "Preencha o formulário abaixo ou use as informações de contato para falar diretamente conosco. Estamos prontos para ajudar sua empresa a crescer com transformação digital.",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        reset(); // Reseta os campos do formulário
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Erro ao enviar a mensagem.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao enviar a mensagem.");
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <PageHeading {...headingData} />

      {/* Container principal responsivo */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulário */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={`w-full p-3 border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Digite seu nome"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={`w-full p-3 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Digite seu e-mail"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className={`w-full p-3 border rounded-md ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Digite sua mensagem"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>

        {/* Informações de Contato */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Informações de Contato
            </h2>
            <p className="text-gray-600 mt-2">
              Entre em contato pelos canais abaixo. Ficaremos felizes em atender
              você!
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Telefone</h3>
              <p className="text-gray-600">+55 (31) 99999-9999</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">E-mail</h3>
              <p className="text-gray-600"><a href="mailto:contato@bhsolutions.com.br">contato@bhsolutions.com.br</a></p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">
                Redes Sociais
              </h3>
              <div className="flex space-x-4 mt-2">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-800 transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Responsivo */}
      <div className="w-full max-w-5xl mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.698335187181!2d-46.67343562509472!3d-23.56309908467974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ3LjEiUyA0NsKwNDAnMTIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1619536526008!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
