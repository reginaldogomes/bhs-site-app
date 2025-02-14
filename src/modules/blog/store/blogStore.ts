import { create } from "zustand";
import { fetchPosts, createPost } from "../services/blogService";
import { Post } from "../types/blogTypes";

interface BlogState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  addPost: (title: string, content: string) => Promise<void>;
}

export const useBlogStore = create<BlogState>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });

    try {
      const data = await fetchPosts();
      set({ posts: data, loading: false });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro desconhecido ao carregar os posts";
      set({ error: errorMessage, loading: false });
      console.error("Erro ao carregar os posts:", err);
    }
  },

  addPost: async (title, content) => {
    try {
      const newPost = await createPost(title, content);
      set((state) => ({ posts: [newPost, ...state.posts] }));
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido ao criar post";
      console.error("Erro ao criar post:", errorMessage);
    }
  },
}));
