
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-amber-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ProductShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
      <GeminiAssistant />
      
      {/* Floating accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
