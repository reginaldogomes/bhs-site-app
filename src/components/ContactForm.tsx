import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
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
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "emaildestino@exemplo.com", // Substitua pelo e-mail de destino
          subject: `Contato de ${data.name}`, // Assunto do e-mail
          message: `Nome: ${data.name}\nE-mail: ${data.email}\nMensagem: ${data.message}`, // Corpo do e-mail
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar a mensagem.");
      }

      alert("Mensagem enviada com sucesso!");
      reset(); // Reseta os campos após o envio
    } catch (error) {
      alert("Erro ao enviar a mensagem.");
      console.error(error);
    }
  };

  return (
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
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
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
  );
};

export default ContactForm;
