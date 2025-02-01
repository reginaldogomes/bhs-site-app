import axios from "axios";

// Criando uma instância do Axios para centralizar as requisições
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
