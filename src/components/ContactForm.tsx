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
      className="space-y-6 max-w-lg mx-auto p-6 rounded-lg shadow-md"
    >
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-medium" htmlFor="name">
          Nome
        </label>
        <Input
          {...register("name")}
          id="name"
          placeholder="Seu nome"
          className="p-4 text-lg bg-gray-100 text-gray-900 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-400"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-medium" htmlFor="email">
          E-mail
        </label>
        <Input
          type="email"
          {...register("email")}
          id="email"
          placeholder="Seu e-mail"
          className="p-4 text-lg bg-gray-100 text-gray-900 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-medium" htmlFor="message">
          Mensagem
        </label>
        <Textarea
          {...register("message")}
          id="message"
          placeholder="Sua mensagem"
          rows={5}
          className="p-4 text-lg bg-gray-100 text-gray-900 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-400"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-green-500 text-white font-medium text-lg rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
};

export default ContactForm;
