import { getPostById } from "@/modules/blog/services/blogService";
import { notFound } from "next/navigation";
import BlogContent from "@/modules/blog/components/BlogContent";

interface BlogPostProps {
  params?: { id?: string };
}

// ✅ Correção: Agora `params` é tratado corretamente
const BlogPost = async ({ params }: BlogPostProps) => {
  if (!params?.id) return notFound();

  try {
    const post = await getPostById(params.id);
    if (!post) return notFound();

    return <BlogContent post={post} />;
  } catch (error) {
    console.error("Erro ao carregar o post:", error);
    return notFound();
  }
};

export default BlogPost;

