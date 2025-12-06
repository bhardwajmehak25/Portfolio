import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroRef = useScrollReveal();

  return (
    <section ref={heroRef} className="z-40 relative min-h-screen flex items-center justify-center overflow-hidden scroll-reveal">
      <div className="absolute inset-0 bg-grid-gray-800 [mask-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_85%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-cyan-900 text-cyan-300 rounded-full text-sm font-medium mb-6">
            Frontend Developer
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Mehak</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up-delay">
          Crafting beautiful and functional web experiences with WordPress, Shopify, and modern web technologies
        </p>

        <div className="flex justify-center gap-4 mb-12 animate-fade-in-delay">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-9 py-4 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            Get In Touch
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 border-2 border-cyan-600 hover:border-cyan-400"
          >
            View My Work
          </button>
        </div>

        <div className="flex justify-center gap-6 animate-fade-in-delay-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-cyan-600 text-cyan-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/50"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-cyan-600 text-cyan-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/50"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:mehak@example.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-cyan-600 text-cyan-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/50"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-gray-700"
      >
        <ArrowDown size={24} className="text-cyan-400" />
      </button>
    </section>
  );
};

export default Hero;
