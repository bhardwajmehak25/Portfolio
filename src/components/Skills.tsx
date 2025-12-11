import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  const skillsRef = useScrollReveal();

  const skills = [
    {
      icon: "/icons/wordpress.svg",
      title: "WordPress",
      description:
        "Custom theme development, plugin integration, and optimization for performance and SEO",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "/icons/shopify.svg",
      title: "Shopify",
      description:
        "E-commerce store setup, theme customization, and conversion-focused design",
      color: "from-cyan-300 to-blue-600",
    },
    {
      icon: "/icons/html.svg",
      title: "HTML & CSS",
      description:
        "Semantic markup, responsive layouts, and modern CSS including Flexbox and Grid",
      color: "from-cyan-300 to-blue-600",
    },

    // ⭐ Squarespace Added Here
    {
      icon: "/icons/squarespace.svg",
      title: "Squarespace",
      description:
        "Professional website design, template customization, and SEO optimization on Squarespace",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="relative py-24 z-40 scroll-reveal"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expertise across multiple platforms and technologies to bring your
            vision to life
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
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="w-10 h-10 object-contain"
                />
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
