// src/app/page.tsx
import LeadCaptureCTA from "@/components/LeadCaptureCTA";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <LeadCaptureCTA />
    </>
  );
};

export default Page;
