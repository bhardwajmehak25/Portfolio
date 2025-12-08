import { useEffect, useState } from "react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const roles = [
    "Frontend Developer",
    "WordPress Developer",
    "Shopify Expert",
    "Custom Liquid Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12 z-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* LOGO + Rotating Developer Line */}
          <div>
            <h3 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Mehak
            </h3>

            {/* Rotating Titles */}
            <p
              key={currentIndex}
              className="text-cyan-300 text-md mb-3 transition-opacity duration-700 animate-flip"
            >
              {roles[currentIndex]}
            </p>

            <p className="text-gray-400">
              Crafting modern, high-performance experiences with WordPress,
              Shopify, React, and custom Liquid development.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:mehak@example.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with{" "}
            <Heart size={16} className="text-red-500 fill-red-500" /> by Mehak
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
