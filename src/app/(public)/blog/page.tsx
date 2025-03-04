import Main from "@/components/Main";
import PageHeading from "@/components/PageHeading";
import BlogContent from "@/modules/blog/components/BlogContent";
import BlogLayout from "./BlogLayout";

const BlogPage = () => {
  const headingData = {
    title: "Artigos e Novidades",
    description:
      "Acompanhe nosso blog e fique por dentro das novidades sobre tecnologia, inovação e transformação digital.",
  };
  return (
    <Main>
      <PageHeading {...headingData} />
      <BlogLayout>
        <BlogContent />
      </BlogLayout>
    </Main>
  );
};

export default BlogPage;
