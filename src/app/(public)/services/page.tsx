import Main from "@/components/Main";
import PageHeading from "@/components/PageHeading";
import Services from "@/components/Services";

export default function Page() {
  const headingData = {
    title: "Serviços",
    description: "Soluções inovadoras para transformar o seu negócio.",
  };
  return (
    <Main>
      <PageHeading {...headingData} />
      <Services />
    </Main>
  );
}
