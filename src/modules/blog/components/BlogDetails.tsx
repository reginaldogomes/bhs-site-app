import Main from "@/components/Main";
import { getPostById } from "../services/blogService";
import { Post } from "../types/blogTypes";

const BlogDetails = async ({ id }: { id: string }) => {
  const post: Post = await getPostById(id);

  if (!post) return <p>Post não encontrado.</p>;

  return (
    <Main>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-700 mt-4">{post.content}</p>
    </Main>
  );
};

export default BlogDetails;
