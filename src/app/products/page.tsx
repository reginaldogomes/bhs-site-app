import { ProductsShowcase } from "@/components/ProductsShowcase";
import PageHeading from "@/components/PageHeading";

export default function page() {
  const headingData = {
    title: "Contato",
    description: "Preencha o formulário ou utilize os canais abaixo.",
  };
  return (
    <div>
      <PageHeading {...headingData} />
      <ProductsShowcase />
    </div>
  );
}
