// app/(public)/posts/page.tsx
import { getPosts } from "@/modules/blog/actions/postActions";
import PostList from "@/modules/blog/components/PostList";

export default async function PostsPage() {
  const posts = await getPosts();
  return <PostList posts={posts} />;
  console.log(posts);
}
