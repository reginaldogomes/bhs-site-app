"use client"; // ✅ Agora `useEffect` pode ser usado

import { useEffect } from "react";
import { PostList } from "@/modules/blog/components/PostList";
import { useBlogStore } from "@/modules/blog/store/blogStore";

const BlogContent = () => {
  const { fetchPosts } = useBlogStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  return <PostList />;
};

export default BlogContent;
