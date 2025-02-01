'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/axios';
import PostCard from '@/components/PostCard';

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get('/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
