import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.post.create({
    data: {
      title: 'Primeiro Post',
      content: 'Este é o conteúdo do primeiro post!',
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'Segundo Post',
      content: 'Este é o conteúdo do segundo post!',
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
