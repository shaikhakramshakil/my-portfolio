import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Blog />
        <Certifications />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
