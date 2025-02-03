"use client";

import { useEffect, useState } from "react";

const PostDetail = ({ id }: { id: number }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('ID do post:', id); // Verifique o valor do ID

    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/posts/${id}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar post");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    } else {
      setError("ID inválido");
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
