// filepath: /home/reginaldogomes/Projects/bhs-site-app/src/app/(protected)/admin/blog/posts/page.tsx
"use client"; // Adicione isso para usar hooks no App Router
import prisma from "@/lib/prisma";

import React, { useEffect, useState } from "react";

const fetchPosts = async () => {
  try {
    const response = await fetch("/api/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
          <p className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
