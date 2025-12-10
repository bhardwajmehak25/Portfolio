import { Code2, Heart, Sparkles } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import FluidGridBackground from './FluidGridBackground';


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
              I’m Mehak, a developer focused on creating meaningful digital experiences.
              I work with modern web technologies to build interfaces that are clean, intuitive, and visually engaging.</p>

            <p className="text-lg text-gray-300 leading-relaxed"> My goal is simple — build websites that leave a strong impression and offer a smooth user experience.
              Always learning. Always improving. Always creating.</p>
            <p className="mt-3 font-bold text-lg text-gray-300 leading-relaxed">
              Let’s collaborate and make something awesome.

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
          <div className="relative z-20 group">
            <div className="h-full w-full bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/50 flex items-center justify-center">

              {/* First Image (Default) */}
              <img
                className="about-img md:h-[500px] object-cover max-w-[1200px] w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                src="/about-image.png"
                alt="frontend-developer"
              />

              {/* Second Image (Hover Image) */}
              <img
                className="about-img md:h-[500px] object-cover max-w-[1200px] w-full h-full absolute top-0 left-0 transition-opacity rounded-lg duration-500 opacity-0 group-hover:opacity-100"
                src="/mehak-about.png"
                alt="frontend-developer-hover"
              />

            </div>
          </div>


        </div>
      </div>
    </section>

  );
};

export default About;