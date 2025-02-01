import api from '@/lib/axios';

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = params;
  const { data: post } = await api.get(`/posts/${id}`);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.content}</p>
      <p className="text-sm text-gray-400">Publicado em: {new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
