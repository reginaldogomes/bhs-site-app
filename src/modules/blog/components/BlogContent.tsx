import { Post } from "@/modules/blog/types/blogTypes";

const BlogContent = ({ post }: { post: Post }) => {
  return (
    <article className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.content || "Conteúdo indisponível."}</p>
    </article>
  );
};

export default BlogContent;
