// src/app/page.tsx
import LeadCaptureCTA from "@/components/LeadCaptureCTA";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Main from "@/components/Main";
import HighlightSection from "@/components/HighlightSection";
import ConsultingServices from "@/components/ConsultingServices";

const Page: React.FC = () => {
  return (
    <Main>
      <Hero />
      <div className="container mx-auto py-6">
        <HighlightSection />
        <ConsultingServices />
      </div>
    </Main>
  );
};

export default Page;
