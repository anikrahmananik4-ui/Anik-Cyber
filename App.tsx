
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AIChatAssistant from './components/AIChatAssistant';

function App() {
  const [selectedService, setSelectedService] = React.useState<string | undefined>(undefined);

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    // Scroll to form smoothly
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Cinematic Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[100] border-[20px] md:border-[40px] border-slate-950/20"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        
        <Services onSelectService={handleSelectService} />
        
        <ContactForm initialService={selectedService} />
        
        <About />
        
        <Contact />
      </main>

      <Footer />
      
      <FloatingActions />
      
      <AIChatAssistant onSelectService={handleSelectService} />
    </div>
  );
}

export default App;
