import Link from 'next/link';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
      <p className="text-sm text-gray-400">Publicado em: {new Date(post.createdAt).toLocaleDateString()}</p>
      <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
        Ler mais
      </Link>
    </div>
  );
}
