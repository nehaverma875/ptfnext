import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border relative">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold gradient-text mb-2">Neha Verma</h3>
            <p className="text-foreground/70 text-sm">MERN Stack Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/nehaverma875"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:text-primary hover:border-primary transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/nehavema18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:nehav2634@gmail.com"
                className="p-2 rounded-full border border-border hover:text-primary hover:border-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-foreground/50 text-sm">© {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute right-8 -top-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
