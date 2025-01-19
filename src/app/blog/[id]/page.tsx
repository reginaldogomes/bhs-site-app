import { prisma } from "../../../lib/prisma";

export default async function BlogPost({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10); // Converte o ID para número
  if (isNaN(postId)) {
    return <div>Invalid ID!</div>;
  }

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    return <div>Post não encontrado!</div>;
  }

  return (
    <article className="prose mx-auto">
      <h1>{post.title}</h1>
      <time className="text-gray-500">
        {new Date(post.createdAt).toLocaleDateString()}
      </time>
      <div className="mt-4">{post.content}</div>
    </article>
  );
}
