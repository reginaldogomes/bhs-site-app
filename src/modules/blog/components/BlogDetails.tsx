import { getPostById } from "../services/blogService";
import { Post } from "../types/blogTypes";

const BlogDetails = async ({ id }: { id: string }) => {
  const post: Post = await getPostById(id);

  if (!post) return <p>Post não encontrado.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-700 mt-4">{post.content}</p>
    </div>
  );
};

export default BlogDetails;
