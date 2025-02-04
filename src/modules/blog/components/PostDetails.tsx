"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api/axios"; // Importando a instância do axios
import { Post } from "../types/post";

const PostDetail = ({ id }: { id: number }) => {
  const [post, setPost] = useState<Post | null>(null); // Tipagem explícita
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("ID do post:", id); // Verifique o valor do ID

    const fetchPost = async () => {
      try {
        // Faz a requisição usando axios
        const response = await api.get(`/blog/posts/${id}`);
        setPost(response.data); // Define os dados do post
      } catch (error) {
        // Tratamento de erros
        setError(error.response?.data?.error || "Erro ao buscar post");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    } else {
      setError("ID invalid");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <p>Carregando post...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </section>
  );
};

export default PostDetail;
