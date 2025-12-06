import { ExternalLink, Code } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

  const Projects = () => {
  const projectsRef = useScrollReveal();

  // Example projects: use /images/... for files placed in the public folder (CRA / Vite / Next.js public)
  const projects = [
    {
      title: 'E-Commerce Fashion Store',
      description: 'A fully responsive Shopify store with custom theme, advanced filtering, and seamless checkout experience.',
      tags: ['Shopify', 'CSS', 'JavaScript'],
      image: '/customfastionlab.png',
    },
    {
      title: 'Corporate WordPress Site',
      description: 'Professional business website with custom theme, blog integration, and optimized for SEO performance.',
      tags: ['WordPress', 'PHP', 'CSS'],
      image: '/worpressstatic.png',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Restaurant Landing Page',
      description: 'Modern, mobile-first landing page with smooth animations and integrated online reservation system.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '/restra.png',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Portfolio Template',
      description: 'Clean and elegant portfolio template for creatives, featuring grid layouts and image galleries.',
      tags: ['HTML', 'CSS', 'Responsive'],
      image: '/ landing-page.png',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section ref={projectsRef} id="projects" className="py-24 bg-gradient-to-b from-gray-950 to-black relative scroll-reveal z-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A selection of my recent work showcasing diverse web solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const hasImage = !!project.image;
         
            const gradientClass = project.gradient ? `bg-gradient-to-br ${project.gradient}` : 'bg-gradient-to-br from-gray-700 to-gray-900';

            return (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-800 hover:border-cyan-600 hover:-translate-y-2"
              >
                {/* background container: image if present, otherwise gradient */}
                <div
                  className={`h-48 relative overflow-hidden ${hasImage ? 'bg-cover bg-center' : gradientClass}`}
                  style={
                    hasImage
                      ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                      : undefined
                  }
                  aria-hidden="true"
                >
                  {/* overlay & hover controls */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <button className="p-3 bg-gray-900 rounded-full hover:scale-110 transition-transform" aria-label="Open project link">
                        <ExternalLink size={20} className="text-cyan-400" />
                      </button>
                      <button className="p-3 bg-gray-900 rounded-full hover:scale-110 transition-transform" aria-label="View source code">
                        <Code size={20} className="text-cyan-400" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
