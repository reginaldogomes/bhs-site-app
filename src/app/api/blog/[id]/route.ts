import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ✅ Correção: Agora `params` é tratado corretamente
export async function GET(
  req: Request,
  { params }: { params: { id?: string } },
) {
  if (!params?.id) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(params.id) },
    });

    if (!post) {
      return NextResponse.json(
        { error: "Post não encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Erro ao buscar o post:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 },
    );
  }
}
