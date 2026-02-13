import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;