import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(8),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await axios.post("../app/api/zoho/zoho-lead", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("name")} placeholder="Nome" />
      <input {...register("email")} placeholder="E-mail" />
      <input {...register("phone")} placeholder="Telefone" />
      <textarea {...register("message")} placeholder="Mensagem" />
      <button type="submit">Enviar</button>
    </form>
  );
}
