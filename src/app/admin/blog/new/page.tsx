// app/admin/blog/new/page.tsx
"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function NewArticlePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tagIds, setTagIds] = useState<string[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMeta() {
      const { data: cats } = await supabase.from("categories").select("*");
      const { data: tg } = await supabase.from("tags").select("*");
      if (cats) setCategories(cats);
      if (tg) setTags(tg);
    }
    fetchMeta();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("articles")
      .insert({
        title,
        slug,
        cover_url: coverUrl,
        content,
        excerpt,
        category_id: categoryId,
        is_published: true, // ou false se for rascunho
      })
      .select()
      .single();

    if (error || !data) return alert("Erro ao salvar artigo");

    if (tagIds.length) {
      const relations = tagIds.map((tagId) => ({
        article_id: data.id,
        tag_id: tagId,
      }));
      await supabase.from("article_tags").insert(relations);
    }

    router.push("/admin/blog");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Novo Artigo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-xl p-2"
          required
        />
        <input
          type="text"
          placeholder="Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border rounded-xl p-2"
          required
        />
        <input
          type="text"
          placeholder="URL da Capa"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
          className="w-full border rounded-xl p-2"
        />
        <textarea
          placeholder="Resumo (excerpt)"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full border rounded-xl p-2"
        />
        <textarea
          placeholder="Conteúdo (HTML)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded-xl p-2 h-40"
          required
        />

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full border rounded-xl p-2"
        >
          <option value="">Selecione a categoria</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <label key={tag.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={tag.id}
                checked={tagIds.includes(tag.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setTagIds([...tagIds, tag.id]);
                  } else {
                    setTagIds(tagIds.filter((id) => id !== tag.id));
                  }
                }}
              />
              <span className="text-sm">{tag.name}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-xl text-sm"
        >
          Publicar
        </button>
      </form>
    </div>
  );
}
