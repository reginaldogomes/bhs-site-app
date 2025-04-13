// src/app/(protected)/admin/posts/[slug]/edit/page.tsx

import PostForm from "@/modules/blog/components/PostForm";

interface EditPostPageProps {
  params: {
    slug: string;
  };
  // searchParams opcional, se você estiver usando query params
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const { slug } = params;
  const handleSubmit = async (title: string, content: string) => {
    console.log("Submetendo:", { title, content, slug: params.slug });
    // lógica de envio...
  };

  return (
    <div>
      <h1>Editando post: {params.slug}</h1>
      <PostForm
        initialData={{ title: "", content: "" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
