import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Features />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
