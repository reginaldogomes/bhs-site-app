// app/admin/blog/edit/[id]/page.tsx
"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import dynamic from "next/dynamic";
import {
  getArticleById,
  getArticleTags,
  updateArticle,
  deleteArticle,
} from "@/lib/supabase/articles";
import { supabase } from "@/lib/supabase/client";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const articleId = params?.id as string;

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
    async function fetchInitialData() {
      const [{ data: cats }, { data: tg }, { data: article }] =
        await Promise.all([
          supabase.from("categories").select("*"),
          supabase.from("tags").select("*"),
          getArticleById(articleId),
        ]);
      if (cats) setCategories(cats);
      if (tg) setTags(tg);
      if (article) {
        setTitle(article.title);
        setSlug(article.slug);
        setCoverUrl(article.cover_url || "");
        setContent(article.content || "");
        setExcerpt(article.excerpt || "");
        setCategoryId(article.category_id || "");

        const { data: tagLinks } = await getArticleTags(article.id);
        setTagIds(tagLinks?.map((t) => t.tag_id) || []);
      }
    }
    if (articleId) fetchInitialData();
  }, [articleId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await updateArticle(
      articleId,
      {
        title,
        slug,
        cover_url: coverUrl,
        content,
        excerpt,
        category_id: categoryId,
      },
      tagIds
    );
    if (error) return alert("Erro ao atualizar artigo");
    router.push("/admin/blog");
  }

  async function handleDelete() {
    const confirmDelete = confirm(
      "Tem certeza que deseja excluir este artigo? Essa ação é irreversível."
    );
    if (!confirmDelete) return;
    await deleteArticle(articleId);
    router.push("/admin/blog");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Editar Artigo</h1>
        <button
          onClick={handleDelete}
          className="text-red-600 border border-red-600 px-4 py-1 rounded-xl text-sm hover:bg-red-50"
        >
          Excluir
        </button>
      </div>
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

        <div>
          <label className="text-sm font-medium mb-1 block">Conteúdo</label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="bg-white"
          />
        </div>

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
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}
