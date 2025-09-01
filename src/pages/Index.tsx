import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
