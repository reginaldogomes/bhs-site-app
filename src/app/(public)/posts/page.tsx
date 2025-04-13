// app/(public)/posts/page.tsx
import { getPosts } from "@blog/actions/postActions";
import PostList from "@blog/components/PostList";

export default async function PostsPage() {
  const posts = await getPosts();
  return <PostList posts={posts} />;
  console.log(posts);
}
