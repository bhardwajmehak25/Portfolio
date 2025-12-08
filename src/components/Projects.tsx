import { useState } from "react";
import { ExternalLink, Code } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const Projects = () => {
  const projectsRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3); // ← Show 6 items initially

  const projects = [
    {
      title: "E-Commerce Fashion Store",
      description: "A fully responsive Shopify store with custom theme.",
      tags: ["Shopify", "CSS", "JavaScript"],
      category: "Shopify",
      image: "/customfastionlab.png",
    },
    {
      title: "Corporate WordPress Site",
      description: "Professional business WordPress theme with SEO optimizations.",
      tags: ["WordPress", "PHP", "CSS"],
      category: "WordPress",
      image: "/worpressstatic.png",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Restaurant Landing Page",
      description: "Modern landing page with animations and reservations.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "HTML",
      image: "/restra.png",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Portfolio Template",
      description: "Elegant portfolio template for creatives.",
      tags: ["HTML", "CSS", "Responsive"],
      category: "Custom",
      image: "/landing-page.png",
      gradient: "from-purple-500 to-pink-500",
    },

    // Add more projects if needed...
    {
      title: "Extra Project 1",
      description: "More project demo.",
      tags: ["HTML"],
      category: "HTML",
      image: "/restra.png",
    },
    {
      title: "Extra Project 2",
      description: "More project demo.",
      tags: ["Custom"],
      category: "Custom",
      image: "/landing-page.png",
    },
  ];

  const filters = ["All", "Shopify", "WordPress", "HTML", "Custom"];

  // Filter Logic
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Apply visible limit
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-950 to-black relative scroll-reveal z-40"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured<span className="text-cyan-400"> Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {filters.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(6); // reset when filter changes
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeFilter === filter
                    ? "bg-cyan-500 text-black border-cyan-400"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => {
            const hasImage = !!project.image;
            const gradientClass = project.gradient
              ? `bg-gradient-to-br ${project.gradient}`
              : "bg-gradient-to-br from-gray-700 to-gray-900";

            return (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-800 hover:border-cyan-600 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div
                  className={`h-48 relative overflow-hidden ${
                    hasImage ? "bg-cover bg-center" : gradientClass
                  }`}
                  style={
                    hasImage
                      ? {
                          backgroundImage: `url(${project.image})`,
                        }
                      : undefined
                  }
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-4">
                      <button className="p-3 bg-gray-900 rounded-full hover:scale-110 transition-transform">
                        <ExternalLink size={20} className="text-cyan-400" />
                      </button>
                      <button className="p-3 bg-gray-900 rounded-full hover:scale-110 transition-transform">
                        <Code size={20} className="text-cyan-400" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-gray-700"
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

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
