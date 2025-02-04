"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TagsCloud from "@/modules/blog/components/TagsCloud";
import CategoriesList from "@/modules/blog/components/CategoriesList";

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Pesquisar:", searchQuery);
    // Lógica para pesquisar posts
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-7xl mx-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 space-y-8">
        {/* Barra de Pesquisa */}
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Pesquisar no blog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button onClick={handleSearch} className="w-full">
            Pesquisar
          </Button>
        </div>

        {/* Categorias */}
        <CategoriesList />

        {/* Nuvem de Tags */}
        <TagsCloud />
      </aside>

      {/* Conteúdo Principal */}
      <main className="w-full md:w-3/4">{children}</main>
    </div>
  );
};

export default BlogLayout;
