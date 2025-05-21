'use client';

import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Hero />
      <About />
      <Technologies />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
