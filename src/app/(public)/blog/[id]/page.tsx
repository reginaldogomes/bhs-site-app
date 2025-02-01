import { getPostById } from "@/modules/blog/services/blogService";
import { notFound } from "next/navigation";
import BlogContent from "@/modules/blog/components/BlogContent";
import { Metadata } from "next";

interface BlogPostProps {
  params: { id: string };
}

// 🔥 Otimizando SEO com metadata dinâmica
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  try {
    const post = await getPostById(params.id);

    if (!post) throw new Error("Post não encontrado");

    return {
      title: post.title,
      description: post.content.slice(0, 150) + "...",
      openGraph: {
        title: post.title,
        description: post.content.slice(0, 150) + "...",
        url: `/blog/${params.id}`,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.content.slice(0, 150) + "...",
      },
    };
  } catch {
    return {
      title: "Post não encontrado",
      description: "O post que você está procurando não foi encontrado.",
    };
  }
}

// 🔥 Página do post (server-side)
const BlogPost = async ({ params }: BlogPostProps) => {
  if (!params.id) return notFound();

  try {
    const post = await getPostById(params.id);
    if (!post) return notFound();

    return <BlogContent post={post} />;
  } catch (error) {
    return notFound();
  }
};

export default BlogPost;
