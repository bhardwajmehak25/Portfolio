import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const Marquee = () => {
    const marqueeRef = useScrollReveal();

    const marqueeItems = [
        { title: "WordPress Development", icon: "/icons/wordpress.svg" },
        { title: "Shopify Store Design", icon: "/icons/shopify.svg" },
        { title: "Custom Code Websites", icon: "/icons/code.svg" },
        { title: "JavaScript Development", icon: "/icons/js.svg" },
        { title: "Squarespace Websites", icon: "/icons/squarespace.svg" },
        { title: "WooCommerce E-Commerce", icon: "/icons/woocommerce.svg" },
        { title: "HTML Development", icon: "/icons/html.svg" },
        { title: "CSS Styling & UI", icon: "/icons/css.svg" },

    ];

    return (
        <section
            ref={marqueeRef}
            id="info"
            className="w-full relativ z-40 py-10 relative bg-black text-white overflow-hidden"
        >
            {/* MARQUEE WRAPPER */}
            <div className="w-full overflow-hidden relative">

                {/* ========== Marquee Track (Duplicated for Loop) ========== */}
                <div className="flex items-center gap-16 whitespace-nowrap animate-marquee">
                    {marqueeItems.concat(marqueeItems).map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <img src={item.icon} className="w-10 h-10" alt={item.title} />
                            <span className="text-xl text-gray-200">{item.title}</span>
                        </div>
                    ))}
                </div>

            </div>

            {/* Animation */}
            <style>
                {`
          .animate-marquee {
            display: inline-flex;
            animation: marquee 30s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
        </section>
    );
};

export default Marquee;
