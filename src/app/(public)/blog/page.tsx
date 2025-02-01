import Main from "@/components/Main";
import PageHeading from "@/components/PageHeading";
import BlogList from "@/modules/blog/components/BlogList";

const BlogPage = () => {
  const headingData = {
    title: "Sobre Nós",
    description:
      "Somos especialistas em transformação digital, ajudando empresas a evoluírem e alcançarem novos patamares com tecnologia de ponta. Nosso foco está em oferecer soluções personalizadas que atendem às necessidades específicas de cada cliente.",
  };
  return (
    <Main>
      <PageHeading {...headingData} />
      <BlogList />
    </Main>
  );
};

export default BlogPage;
