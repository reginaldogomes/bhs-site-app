import api from '@/lib/api/axios';
import { Post } from '../types/post';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get('/blog/posts');
  return response.data;
};

export const getPostById = async (id: number): Promise<Post> => {
  const response = await api.get(`/blog/posts/${id}`);
  return response.data;
};

export const createPost = async (post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Promise<Post> => {
  const response = await api.post('/blog/posts', post);
  return response.data;
};