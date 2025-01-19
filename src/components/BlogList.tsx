import BlogCard from './BlogCard';

type BlogListProps = {
  posts: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
  }[];
};

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          id={post.id}
          title={post.title}
          excerpt={`${post.content.slice(0, 100)}...`}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
}
