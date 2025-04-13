import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Verifica se o ID foi fornecido
  if (!params?.id) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    // Busca o post pelo ID
    const post = await prisma.post.findUnique({
      where: { id: Number(params.id) },
    });

    // Se o post não for encontrado, retorna um erro 404
    if (!post) {
      return NextResponse.json(
        { error: "Post não encontrado" },
        { status: 404 }
      );
    }

    // Retorna o post encontrado
    return NextResponse.json(post);
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
