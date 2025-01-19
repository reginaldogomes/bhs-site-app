import { prisma } from '@/lib/prisma';
import BlogList from '@/components/BlogList';

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    //where: { published: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <BlogList posts={posts} />
    </main>
  );
}
