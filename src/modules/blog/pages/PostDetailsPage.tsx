import { PostDetails } from '../components/PostDetails';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPostById } from '../services/blogService';

export const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await getPostById(Number(id));
        setPost(data);
      } catch (error) {
        console.error('Failed to load post:', error);
      }
    };

    loadPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Post Details</h1>
      <PostDetails post={post} />
    </div>
  );
};