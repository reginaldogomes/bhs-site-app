import Main from "@/components/Main";
import BlogContent from "@/modules/blog/components/BlogContent";
import BlogLayout from "./BlogLayout";

const BlogPage = () => {
  return (
    <Main>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <BlogLayout>
        <BlogContent />
      </BlogLayout>
    </Main>
  );
};

export default BlogPage;
