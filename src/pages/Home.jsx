import { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
// import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add('dark');
    
    // Scroll to hash on load if exists
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Certifications /> */}
      <Contact />
    </Layout>
  );
};

export default Home;