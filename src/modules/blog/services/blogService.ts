import axios from "@/services/api";
import { Post } from "../types/blogTypes";

export const getAllPosts = async (): Promise<Post[]> => {
  const response = await axios.get("/blog");
  return response.data;
};

export const getPostById = async (id: string): Promise<Post> => {
  const response = await axios.get(`/blog/${id}`);
  return response.data;
};
