// filepath: /src/app/(protected)/admin/posts/[slug]/edit/page.tsx

import PostForm from "@/modules/blog/components/PostForm";

export default function EditPostPage({ params }: { params: { slug: string } }) {
  const handleSubmit = async (title: string, content: string) => {
    // TODO: implementar lógica de envio dos dados do formulário
    console.log("Enviando dados:", { title, content, slug: params.slug });
  };

  return (
    <div>
      <h1>Edit Post: {params.slug}</h1>
      <PostForm
        initialData={{ title: "", content: "" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
