import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './_components/Hero';
import Services from './_components/Services';
import Projects from './_components/Projects';
import TechStack from './_components/TechStack';
import Testimonials from './_components/Testiomonials';
import ContactForm from './_components/ContactForm';
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