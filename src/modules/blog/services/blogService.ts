import api from "@/lib/api/axios";
import { Post } from "../types/post";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get("/posts");
  return response.data;
};

export const createPost = async (
  post: Omit<Post, "id" | "createdAt" | "updatedAt">,
): Promise<Post> => {
  const response = await api.post("/blog/posts", post);
  return response.data;
};
