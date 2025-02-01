"use client";

import { useEffect } from "react";
import BlogCard from "./BlogCard";
import { useBlogStore } from "../store/blogStore";

const BlogList = () => {
  const { posts, loading, error, fetchPosts } = useBlogStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
