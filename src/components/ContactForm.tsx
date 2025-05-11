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

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/zoho-crm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Contato salvo com sucesso!");
        reset();
      } else {
        alert("Erro ao salvar contato.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o CRM.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <Input
        type="text"
        {...register("name")}
        placeholder="Seu nome"
        className="w-full"
      />
      {errors.name && (
        <p className="text-red-600 text-sm">
          {errors.name?.message?.toString()}
        </p>
      )}

      <Input
        type="email"
        {...register("email")}
        placeholder="Seu e-mail"
        className="w-full"
      />
      {errors.email && (
        <p className="text-red-600 text-sm">
          {errors.email.message?.toString()}
        </p>
      )}

      <Textarea
        {...register("message")}
        placeholder="Sua mensagem"
        className="w-full"
      />
      {errors.message && (
        <p className="text-red-600 text-sm">
          {errors.message?.message?.toString()}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
};

export default ContactForm;
