// modules/blog/types/post.ts
export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
