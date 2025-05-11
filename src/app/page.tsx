// src/app/page.tsx
import LeadCaptureCTA from "@/components/LeadCaptureCTA";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Main from "@/components/Main";
import Testando from "@/components/Testando";

const Page: React.FC = () => {
  return (
    <Main>
      <Hero />
      <div className="container mx-auto py-6">
        <Services />
      </div>
      <Testando />
    </Main>
  );
};

export default Page;
