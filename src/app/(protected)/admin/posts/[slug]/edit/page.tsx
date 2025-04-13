// filepath: /src/app/(protected)/admin/posts/[slug]/edit/page.tsx
import PostForm from "@/modules/blog/components/PostForm";

export default function EditPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const handleSubmit = async (title: string, content: string) => {
    // Lógica para enviar os dados do formulário
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <PostForm
        initialData={{ title: "", content: "" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
