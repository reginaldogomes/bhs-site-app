import { PostForm } from '../components/PostForm';
import { useBlogStore } from '../hooks/useBlogStore';
import { createPost } from '../services/blogService';

export const NewPostPage = () => {
  const { addPost } = useBlogStore();

  const handleCreatePost = async (post: { title: string; content: string }) => {
    const newPost = await createPost(post);
    addPost(newPost);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Post</h1>
      <PostForm onSubmit={handleCreatePost} />
    </div>
  );
};