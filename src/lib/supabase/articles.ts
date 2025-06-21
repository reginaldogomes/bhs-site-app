// lib/supabase/articles.ts
import { createClient } from "./server";

const supabase = createClient();

export async function listArticles() {
  return await supabase
    .from("articles")
    .select("id, title, slug, is_published, published_at")
    .order("created_at", { ascending: false });
}

export async function getArticleById(id: string) {
  return await supabase.from("articles").select("*").eq("id", id).single();
}

export async function getArticleTags(articleId: string) {
  return await supabase
    .from("article_tags")
    .select("tag_id")
    .eq("article_id", articleId);
}

export async function createArticle(data: any, tagIds: string[] = []) {
  const { data: article, error } = await supabase
    .from("articles")
    .insert(data)
    .select()
    .single();

  if (error || !article) return { error };

  if (tagIds.length) {
    const relations = tagIds.map((tagId) => ({
      article_id: article.id,
      tag_id: tagId,
    }));
    await supabase.from("article_tags").insert(relations);
  }

  return { data: article };
}

export async function updateArticle(
  id: string,
  data: any,
  tagIds: string[] = []
) {
  const { error } = await supabase.from("articles").update(data).eq("id", id);

  if (error) return { error };

  await supabase.from("article_tags").delete().eq("article_id", id);

  if (tagIds.length) {
    const relations = tagIds.map((tagId) => ({
      article_id: id,
      tag_id: tagId,
    }));
    await supabase.from("article_tags").insert(relations);
  }

  return { success: true };
}

export async function deleteArticle(id: string) {
  await supabase.from("article_tags").delete().eq("article_id", id);
  return await supabase.from("articles").delete().eq("id", id);
}
