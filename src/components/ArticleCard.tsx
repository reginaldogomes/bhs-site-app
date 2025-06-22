// components/ArticleCard.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    slug: string;
    cover_url?: string;
    excerpt?: string;
    published_at?: string;
    category?: {
      name: string;
      slug: string;
    };
  };
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden border border-gray-200">
      {article.cover_url && (
        <Image
          src={article.cover_url}
          alt={article.title}
          width={800}
          height={400}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <Link
          href={`/blog/${article.slug}`}
          className="text-xl font-semibold hover:text-primary"
        >
          {article.title}
        </Link>
        {article.category && (
          <div className="text-sm text-gray-500 mt-1">
            {article.category.name}
          </div>
        )}
        {article.excerpt && (
          <p className="mt-2 text-gray-700 text-sm">{article.excerpt}</p>
        )}
      </div>
    </div>
  );
}
