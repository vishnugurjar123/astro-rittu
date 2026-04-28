import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Certificates from './components/Certificates';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Certificates />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
