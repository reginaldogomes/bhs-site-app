// app/blog/[slug]/page.tsx
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `${params.slug} | Blog | BH Solutions`,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createClient();
  const { data: article, error } = await supabase
    .from("articles")
    .select(
      "id, title, slug, content, cover_url, published_at, author:author_id(name), category:category_id(name), tags:article_tags(tag:tag_id(name))"
    )
    .eq("slug", params.slug)
    .eq("is_published", true)
    .single();

  if (!article || error) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      {article.category && (
        <span className="text-sm text-primary font-medium">
          {article.category?.[0]?.name}
        </span>
      )}
      <div className="text-sm text-gray-500 mb-6">
        Publicado em{" "}
        {new Date(article.published_at).toLocaleDateString("pt-BR")} por{" "}
        {article.author?.[0]?.name}
      </div>
      {article.cover_url && (
        <img
          src={article.cover_url}
          alt={article.title}
          className="rounded-xl mb-6"
        />
      )}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      {article.tags?.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map(({ tag }) => (
            <span
              key={tag.name}
              className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-700"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
