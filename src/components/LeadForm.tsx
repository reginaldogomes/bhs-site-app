import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
}

const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post("/api/submit", data);

      if (response.status === 200) {
        alert("Dados enviados com sucesso!");
      } else {
        console.warn("Resposta inesperada da API:", response.data);
        alert("Recebemos sua solicitação, mas algo pode ter dado errado.");
      }

      console.log("Resposta da API:", response.data);
    } catch (error: any) {
      console.error(
        "Erro ao enviar dados:",
        error.response?.data || error.message,
      );
      alert("Ocorreu um erro ao enviar os dados. Tente novamente.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <input
        {...register("name", { required: "Nome é obrigatório" })}
        placeholder="Nome"
        className="w-full border p-2 rounded"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      <input
        {...register("email", {
          required: "E-mail é obrigatório",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Formato de e-mail inválido",
          },
        })}
        placeholder="Email"
        className="w-full border p-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

export default LeadForm;
