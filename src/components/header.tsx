"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const projects = [
        "/briiliantroots.png",
        "/customfastiontab.png",
        "/ethniqly.png",
        "/manaliexplore.png",
        "/restra.png",
    ];

    return (
        <>
            {/* TOP NAVBAR */}
            <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-black z-50">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mehak Bhardwaj</h1>

                {/* Hamburger Button */}
                <button onClick={() => setOpen(true)}>
                    <Menu size={32} className="text-white" />
                </button>
            </nav>

            {/* SIDE DRAWER */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-black text-white p-6 transition-transform duration-300 z-[999] ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-5 right-5"
                    onClick={() => setOpen(false)}
                >
                    <X size={32} className="text-lime-300 font-bold" />
                </button>
                <div className="grid md:grid-cols-[75%_25%] gap-4 items-start">

                    {/* PROJECT GRID BELOW MENU */}
                    <div className="grid md:grid-cols-2 w-full gap-4 overflow-y-auto pr-2">
                        {projects.map((src, index) => (
                            <div
                                key={index}
                                className="w-full rounded-xl overflow-hidden border border-white/20"
                            >
                                <img
                                    src={src}
                                    alt="project"
                                    className="w-full h-[40vh] object-cover hover:scale-105 transition"
                                />
                            </div>
                        ))}
                    </div>
                    {/* MENU ITEMS */}
                    <ul className="space-y-6 text-xl font-semibold ">
                        <li className="hover:text-lime-300 cursor-pointer">Portfolio</li>
                        <li className="hover:text-lime-300 cursor-pointer">About Us</li>
                        <li className="hover:text-lime-300 cursor-pointer">My Projects</li>
                        <li className="hover:text-lime-300 cursor-pointer">Download CV</li>
                    </ul>

                </div>
            </div>
                </>
    );
};

export default Navbar;
