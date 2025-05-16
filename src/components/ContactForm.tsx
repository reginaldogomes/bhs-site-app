"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(5, "Mensagem deve ter pelo menos 5 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Mensagem enviada com sucesso!");
        reset();
      } else {
        alert(`Erro ao enviar mensagem: ${result.error}`);
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Erro interno ao enviar a mensagem.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 max-w-x3 mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-200"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700" htmlFor="name">
          Nome completo
        </label>
        <Input
          {...register("name")}
          id="name"
          placeholder="Digite seu nome"
          className="p-4 text-base bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700" htmlFor="email">
          Endereço de e-mail
        </label>
        <Input
          type="email"
          {...register("email")}
          id="email"
          placeholder="exemplo@email.com"
          className="p-4 text-base bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-semibold text-gray-700"
          htmlFor="message"
        >
          Sua mensagem
        </label>
        <Textarea
          {...register("message")}
          id="message"
          placeholder="Descreva sua necessidade ou solicitação."
          rows={6}
          className="p-4 text-base bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-primary text-white font-semibold text-base rounded-lg shadow-md transition hover:shadow-lg hover:scale-[1.02]"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
};

export default ContactForm;
