// filepath: /src/app/(protected)/admin/posts/[slug]/edit/page.tsx
import React from "react";
import PostForm from "@/modules/blog/components/PostForm";

interface PageProps {
  params: {
    slug: string;
  };
}

const EditPostPage: React.FC<PageProps> = ({ params }) => {
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
};

export default EditPostPage;
