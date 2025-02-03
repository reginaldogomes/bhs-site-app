"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Post } from "../types/post";

interface PostListProps {
  posts?: Post[]; // ✅ `posts` é opcional
}

/**
 * Componente para exibir uma lista de posts.
 * Se a lista estiver vazia, exibe uma mensagem personalizada.
 */
export const PostList: React.FC<PostListProps> = ({ posts = [] }) => {
  // Caso não haja posts, exibe uma mensagem amigável
  if (!posts.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Nenhum post disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

/**
 * Componente para exibir um card de post individual.
 */
interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 line-clamp-3">{post.content}</p>
        <div className="mt-4 text-sm text-gray-500">
          Publicado em: {new Date(post.createdAt).toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  );
};