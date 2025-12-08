import React from "react";

import { ExternalLink, Code} from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal"; 

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
}

const ServicesSection: React.FC = () => {
  const sectionRef = useScrollReveal();

  const services: ServiceItem[] = [
    {
      id: "01",
      title: "WordPress Development",
      desc: "Custom, fast & SEO-optimized WordPress websites.",
    },
    {
      id: "02",
      title: "Shopify Store Development",
      desc: "High-converting Shopify stores with modern UI/UX.",
    },
    {
      id: "03",
      title: "Squarespace Website Design",
      desc: "Clean, creative websites built on Squarespace.",
    },
    {
      id: "04",
      title: "WooCommerce & E-Commerce",
      desc: "Full e-commerce solutions for your business growth.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24  text-white relative scroll-reveal z-40">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Label */}

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold leading-snug max-w-[830px] m-auto">
          My Special<span className="text-cyan-400"> Service For your </span>
          Business Development
        </h2>
                  <div className="w-20 h-1  mt-4 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>


        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 border border-gray-700 p-8 rounded-2xl 
              flex gap-6 items-start hover:border-cyan-400 
              hover:shadow-cyan-500/20 hover:shadow-xl 
              transition-all duration-300"
            >
              <span className="text-3xl font-bold text-cyan-400">
                {item.id}.
              </span>

              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
