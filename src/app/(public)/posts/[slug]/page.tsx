// app/(blog)/posts/[slug]/page.tsx
import { getPostBySlug } from "@blog/actions/postActions";

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
