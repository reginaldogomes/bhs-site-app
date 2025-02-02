import { create } from 'zustand';
import { Post } from '../types/post';

interface BlogStore {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [], // Estado inicial: array vazio
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
}));