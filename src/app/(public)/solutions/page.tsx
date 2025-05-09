import Main from "@/components/Main";
import PageHeading from "@/components/PageHeading";
import Services from "@/components/Services";

export default function Page() {
  const headingData = {
    title: "Soluções",
    description: "Soluções que geram valor real e aumentam seus resultados.",
  };
  return (
    <Main>
      <PageHeading {...headingData} />
      <Services />
    </Main>
  );
}
