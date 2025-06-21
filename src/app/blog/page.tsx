// app/blog/page.tsx
import { createClient } from "@/lib/supabase/server";
import ArticleCard from "@/components/ArticleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | BH Solutions",
  description: "Artigos sobre tecnologia e transformação digital",
};

export default async function BlogPage() {
  const supabase = createClient();
  const { data: articles, error } = await supabase
    .from("articles")
    .select(
      "id, title, slug, cover_url, excerpt, published_at, category:category_id(name, slug)"
    )
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) return <p className="text-red-500">Erro ao carregar artigos.</p>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {articles?.map((article) => (
          <ArticleCard
            key={article.id}
            article={{
              ...article,
              category: Array.isArray(article.category)
                ? article.category[0]
                : article.category,
            }}
          />
        ))}
      </div>
    </section>
  );
}
