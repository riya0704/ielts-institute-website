import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import CTA from './CTA';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate a loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <Hero />
      <Features />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Testimonials />
    </div>
  );
};

export default Home;
