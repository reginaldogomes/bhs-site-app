import Link from "next/link";
import { Post } from "../types/blogTypes";

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
      <Link href={`/blog/${post.id}`} className="text-blue-500 mt-2 block">
        Ler mais
      </Link>
    </div>
  );
};

export default BlogCard;
