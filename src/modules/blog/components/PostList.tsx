"use client";

import { useState, useEffect } from "react";
import { Post } from "../types/post";
import { fetchPosts } from "../services/blogService"; // Importando a função fetchPosts
import PostCard from "./PostCard"; // Importando o componente PostCard existente

interface PostListProps {
  posts?: Post[]; // ✅ `posts` é opcional
}

/**
 * Componente para exibir uma lista de posts.
 * Se a lista estiver vazia, exibe uma mensagem personalizada.
 */
export const PostList: React.FC<PostListProps> = ({
  posts: initialPosts = [],
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState(!initialPosts.length);
  const [error, setError] = useState<string | null>(null);

  // Função para carregar os posts
  const loadPosts = async () => {
    try {
      const data = await fetchPosts(); // Usando a função fetchPosts
      setPosts(data);
    } catch (error) {
      setError("Erro ao carregar posts. Tente novamente mais tarde.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Carrega os posts apenas uma vez, quando o componente é montado
  useEffect(() => {
    if (!initialPosts.length) {
      loadPosts();
    }
  }, [initialPosts.length]); // ✅ Dependências vazias: executa apenas uma vez

  // Exibe um loader enquanto os posts estão sendo carregados
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Carregando posts...</p>
      </div>
    );
  }

  // Exibe uma mensagem de erro se ocorrer um problema ao carregar os posts
  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  // Exibe uma mensagem se não houver posts disponíveis
  if (!posts.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">
          Nenhum post disponível no momento.
        </p>
      </div>
    );
  }

  // Renderiza a lista de posts
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
