import Main from "@/components/Main";
import BlogContent from "@/modules/blog/components/BlogContent";

const BlogPage = () => {
  return (
    <Main>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <BlogContent />
    </Main>
  );
};

export default BlogPage;
