import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

import picneha from '../assets/picneha.jpg'; // Ensure you have this image in your assets folder



const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const words = ['MERN Stack Developer', 'React.js Specialist', 'Node.js Architect'];

  useEffect(() => {
    const currentWord = words[textIndex];
    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Decorative particles (you can customize/remove) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-32 h-32 bg-primary/20 rounded-full top-10 left-10 blur-3xl animate-pulse" />
        <div className="absolute w-24 h-24 bg-accent/20 rounded-full bottom-10 right-10 blur-2xl animate-ping" />
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <p className="text-primary font-medium animate-fadeIn">👋 Hello! I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text animate-fadeIn">
              Neha Verma
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 font-medium h-8 animate-fadeIn">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>

            <p className="text-foreground/70 max-w-xl animate-fadeIn">
              I engineer seamless, responsive and performance-driven web applications using the MERN stack. I blend user-centric design with efficient backend logic to build products users love.
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2 text-sm animate-fadeIn">
              {['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA & Socials */}
            <div className="flex flex-wrap items-center gap-4 mt-6 animate-fadeIn">
              <a
                href="#contact"
                className="button-primary flex items-center gap-2 shadow hover:shadow-primary/40 transition-shadow"
              >
                Let’s Collaborate <ArrowRight size={16} />
              </a>
              <a
                href="/NehaVermaCV (3).pdf"
                className="text-sm underline text-primary font-medium hover:text-accent transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4 animate-fadeIn">
              <a
                href="https://github.com/nehaverma875"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:text-primary hover:border-primary transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/nehavema18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:text-primary hover:border-primary transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                  href="mailto:nehav2634@gmail.com"
                    rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:text-primary hover:border-primary transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
           <div className="relative group hover:scale-105 transition-transform duration-500">
  <div className="w-64 h-64 md:w-80 md:h-80 absolute -top-4 -right-4 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-2xl opacity-30 animate-float" />
  <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl border-4 border-primary/60 bg-secondary/30 backdrop-blur-sm shadow-xl relative flex items-center justify-center overflow-hidden">
    <img
      src={picneha}
      alt="Neha Verma"
      className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
    />
    <span className="absolute top-2 right-2 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-lg animate-bounce">
      Open to Work
    </span>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
