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
      className="space-y-4 max-w-md mx-auto"
    >
      <Input {...register("name")} placeholder="Seu nome" />
      {errors.name && (
        <p className="text-red-600 text-sm">{errors.name.message}</p>
      )}

      <Input type="email" {...register("email")} placeholder="Seu e-mail" />
      {errors.email && (
        <p className="text-red-600 text-sm">{errors.email.message}</p>
      )}

      <Textarea {...register("message")} placeholder="Sua mensagem" />
      {errors.message && (
        <p className="text-red-600 text-sm">{errors.message.message}</p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
};

export default ContactForm;
