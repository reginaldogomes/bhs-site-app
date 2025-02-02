import { PostList } from '../components/PostList';
import { useBlogStore } from '../hooks/useBlogStore';
import { useEffect } from 'react';
import { getAllPosts } from '../services/blogService';

export const BlogPage = () => {
  const { posts, setPosts } = useBlogStore();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to load posts:', error);
      }
    };

    loadPosts();
  }, [setPosts]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <PostList posts={posts} />
    </div>
  );
};