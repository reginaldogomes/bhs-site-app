import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const LeadSchema = z.object({
  firstName: z.string().min(1, "Nome é obrigatório"),
  lastName: z.string().min(1, "Sobrenome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
});

type LeadData = z.infer<typeof LeadSchema>;

export default function LeadForm() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadData>({
    resolver: zodResolver(LeadSchema),
  });

  const onSubmit = async (data: LeadData) => {
    setStatus("Enviando...");
    try {
      const res = await fetch("/api/zoho/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setStatus("Lead enviado com sucesso!");
      reset();
    } catch {
      setStatus("Erro ao enviar o lead. Tente novamente.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4 border rounded"
    >
      <div>
        <input
          {...register("firstName")}
          placeholder="Nome"
          className="input"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("lastName")}
          placeholder="Sobrenome"
          className="input"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          className="input"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("phone")}
          placeholder="Telefone"
          className="input"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Enviar
      </button>

      {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
    </form>
  );
}
