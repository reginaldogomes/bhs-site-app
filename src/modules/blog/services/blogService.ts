import api from "@/lib/api/axios";
import { Post } from "../types/post";

/**
 * Função utilitária para tratar erros de requisição.
 * @param error O erro capturado.
 * @param defaultMessage A mensagem de erro padrão.
 * @throws Um erro com a mensagem fornecida.
 */
const handleRequestError = (error: unknown, defaultMessage: string) => {
  console.error(defaultMessage, error);
  throw new Error(defaultMessage);
};

/**
 * Busca uma lista de posts.
 * @returns Uma lista de posts.
 * @throws Um erro se a requisição falhar.
 */
export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get("/blog/posts");
    return response.data;
  } catch (error) {
    handleRequestError(
      error,
      "Erro ao buscar posts. Tente novamente mais tarde.",
    );
  }
};

/**
 * Busca um post pelo ID.
 * @param id O ID do post.
 * @returns O post correspondente ao ID.
 * @throws Um erro se a requisição falhar ou se o post não for encontrado.
 */
export const getPostById = async (id: number): Promise<Post> => {
  try {
    const response = await api.get(`/blog/posts/${id}`);
    return response.data;
  } catch (error) {
    handleRequestError(
      error,
      "Erro ao buscar post. Tente novamente mais tarde.",
    );
  }
};

/**
 * Cria um novo post.
 * @param post Os dados do post a ser criado (sem ID, createdAt e updatedAt).
 * @returns O post criado.
 * @throws Um erro se a requisição falhar.
 */
export const createPost = async (
  post: Omit<Post, "id" | "createdAt" | "updatedAt">,
): Promise<Post> => {
  try {
    const response = await api.post("/blog/posts", post);
    return response.data;
  } catch (error) {
    handleRequestError(
      error,
      "Erro ao criar post. Tente novamente mais tarde.",
    );
  }
};
