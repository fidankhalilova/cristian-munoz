// Composes the page in design order.
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import Testimonial from "@/components/sections/Testimonial";
import About from "@/components/sections/About";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Skills />
        <Testimonial />
        <About />
      </main>
      <Footer />
    </>
  );
}
