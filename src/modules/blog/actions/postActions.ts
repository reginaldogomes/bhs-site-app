// modules/blog/actions/postActions.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função para gerar slugs
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Função para criar um novo post
export async function createPost(data: { title: string; content: string }) {
  const slug = slugify(data.title);
  const post = await prisma.post.create({
    data: {
      ...data,
      slug,
    },
  });
  return post;
}

// Listar todos os posts
export async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

// Buscar um post por slug
export async function getPostBySlug(slug: string) {
  const post = await prisma.post.findUnique({ where: { slug } });
  return post;
}

// Atualizar um post
export async function updatePost(slug: string, title: string, content: string) {
  const newSlug = slugify(title);
  const post = await prisma.post.update({
    where: { slug },
    data: { title, slug: newSlug, content },
  });
  return post;
}

// Deletar um post
export async function deletePost(slug: string) {
  const post = await prisma.post.delete({ where: { slug } });
  return post;
}
