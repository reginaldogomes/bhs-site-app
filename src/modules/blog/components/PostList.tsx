// modules/blog/components/PostList.tsx
import Link from "next/link";
import { Post } from "../types/post";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
