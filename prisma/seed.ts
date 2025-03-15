import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Limpa os dados existentes (opcional)
  await prisma.post.deleteMany();

  // Insere dados iniciais
  await prisma.post.createMany({
    data: [
      {
        title: "Primeiro Post",
        slug: "primeiro-post",
        content: "Este é o conteúdo do primeiro post.",
        published: true,
      },
      {
        title: "Segundo Post",
        slug: "segundo-post",
        content: "Este é o conteúdo do segundo post.",
        published: false,
      },
      {
        title: "Terceiro Post",
        slug: "terceiro-post",
        content: "Este é o conteúdo do terceiro post.",
        published: true,
      },
    ],
  });

  console.log("Dados iniciais inseridos com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
