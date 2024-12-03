import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './_components/Hero';
import Services from './_components/Services';
import Projects from './_components/Projects';
import TechStack from './_components/TechStack';
import WhyEloquentSolutions from './_components/WhyEloquentSolutions';
import Testimonials from './_components/Testiomonials';
import ContactForm from './_components/ContactForm';
import './styles/animations.css';
import Footer from './layout/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="tech-stack"><TechStack /></section>
      <section id="why-us"><WhyEloquentSolutions /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><ContactForm /></section>
      <Footer />
    </div>
  );
}

export default App;