// src/app/page.tsx
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";

const Page: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
    </div>
  );
};

export default Page;
