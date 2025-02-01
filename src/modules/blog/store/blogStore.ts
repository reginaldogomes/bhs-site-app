import { create } from "zustand";
import { getAllPosts } from "../services/blogService";
import { Post } from "../types/blogTypes";

interface BlogState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
}

// Criando o Zustand store para o blog
export const useBlogStore = create<BlogState>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });

    try {
      const data = await getAllPosts();
      set({ posts: data, loading: false });
    } catch (err) {
      set({ error: "Erro ao carregar os posts", loading: false });
    }
  },
}));
