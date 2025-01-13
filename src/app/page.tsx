// src/app/page.tsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Page;
