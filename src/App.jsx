import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Testimonials from './components/Testiomonials';
import ContactForm from './components/ContactForm';
function App() {
  return (
   <>
   <Navbar />
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <Testimonials />
      <ContactForm />
   </>
      
    
  );
}

export default App;