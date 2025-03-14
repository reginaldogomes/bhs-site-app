// app/(blog)/posts/[slug]/edit/page.tsx
import PostForm from "@blog/components/PostForm";
import { getPostBySlug, updatePost } from "@blog/actions/postActions";

export default async function EditPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>Edit Post</h1>
      <PostForm
        initialData={{ title: post.title, content: post.content }}
        onSubmit={(title, content) => updatePost(post.slug, title, content)}
      />
    </div>
  );
}
