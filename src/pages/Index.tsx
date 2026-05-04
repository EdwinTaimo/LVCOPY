import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Featured } from "@/components/Featured";
import { Catalog } from "@/components/Catalog";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Featured />
        <Catalog />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
