import { Code, Palette, ShoppingCart, Blocks } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  const skillsRef = useScrollReveal();

  const skills = [
    {
      icon: <Blocks size={32} />,
      title: 'WordPress',
      description: 'Custom theme development, plugin integration, and optimization for performance and SEO',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'Shopify',
      description: 'E-commerce store setup, theme customization, and conversion-focused design',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Code size={32} />,
      title: 'HTML & CSS',
      description: 'Semantic markup, responsive layouts, and modern CSS including Flexbox and Grid',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive interfaces with focus on user experience and accessibility',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section ref={skillsRef} id="skills" className="relative py-24 z-40 scroll-reveal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expertise across multiple platforms and technologies to bring your vision to life
          </p>
        </div>

   <div className="grid md:grid-cols-2 gap-8">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="gradient-border group bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
    >
      <div
        className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 animate-float`}
      >
        {skill.icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">
        {skill.title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {skill.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Skills;