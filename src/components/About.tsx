import { Code2, Heart, Sparkles } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import FluidGridBackground from './FluidGridBackground';
import MehakImg from '../assets/images/Mehak.webp';


const About = () => {
  const aboutRef = useScrollReveal();

  return (
 <section ref={aboutRef} id="about" className="py-24 bg-gray-950 scroll-reveal relative overflow-hidden z-40">
      
      <FluidGridBackground />
      {/* FULL SECTION FLOATING CIRCLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-40 h-40 bg-cyan-400/20 rounded-full animate-random top-20 left-10"></div>

        <div className="absolute w-24 h-24 bg-blue-400/20 rounded-full animate-random top-10 right-20"></div>

        <div className="absolute w-32 h-32 bg-pink-400/20 rounded-full animate-random bottom-32 left-1/4"></div>

        <div className="absolute w-20 h-20 bg-yellow-400/20 rounded-full animate-random bottom-10 right-10"></div>

        <div className="absolute w-28 h-28 bg-purple-400/20 rounded-full animate-random top-1/3 right-1/3"></div>

        <div className="absolute w-36 h-36 bg-green-400/20 rounded-full animate-random bottom-20 left-10"></div>

        <div className="absolute w-16 h-16 bg-red-400/20 rounded-full animate-random top-1/2 left-1/2"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXT */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate frontend developer...
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach combines clean code...
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-cyan-600">
                <Code2 size={20} className="text-cyan-400" />
                <span className="font-medium text-gray-200">Clean Code</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-cyan-600">
                <Sparkles size={20} className="text-cyan-400" />
                <span className="font-medium text-gray-200">Modern Design</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-cyan-600">
                <Heart size={20} className="text-cyan-400" />
                <span className="font-medium text-gray-200">User Focused</span>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative z-20">
            <div className="h-full w-full bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/50 flex items-center justify-center">
              <img className="about-img md:h-[45vh] max-w-[1000px] w-full h-full"  src="\mehak-about.png" alt="frontend-developer" />
            </div>
          </div>

        </div>
      </div>
</section>

  );
};

export default About;