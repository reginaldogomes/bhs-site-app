type BlogCardProps = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function BlogCard({
  id,
  title,
  content,
  createdAt,
}: BlogCardProps) {
  return (
    <a
      href={`/blog/${id}`}
      className="block p-4 bg-white shadow-sm rounded-lg hover:shadow-md transition"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
      <time className="text-gray-400 text-sm">
        {new Date(createdAt).toLocaleDateString()}
      </time>
    </a>
  );
}
