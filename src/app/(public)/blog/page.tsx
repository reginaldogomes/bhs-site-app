import BlogContent from "@/modules/blog/components/BlogContent";

const BlogPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <BlogContent />
    </div>
  );
};

export default BlogPage;
