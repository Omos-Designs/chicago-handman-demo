"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Modern Kitchen Remodel",
    description: "Complete kitchen transformation with custom cabinets and new fixtures.",
    location: "Lincoln Park, Chicago",
    gradient: "from-orange-400 via-red-500 to-pink-500"
  },
  {
    title: "Luxury Bathroom Upgrade",
    description: "Full bathroom renovation with tile work and modern fixtures.",
    location: "Wicker Park, Chicago",
    gradient: "from-cyan-400 via-blue-500 to-indigo-500"
  },
  {
    title: "Custom Deck Build",
    description: "Beautiful outdoor living space with composite decking and railings.",
    location: "Lakeview, Chicago",
    gradient: "from-green-400 via-emerald-500 to-teal-500"
  },
  {
    title: "Whole Home Painting",
    description: "Fresh paint throughout with accent walls and trim work.",
    location: "Logan Square, Chicago",
    gradient: "from-purple-400 via-violet-500 to-purple-600"
  },
  {
    title: "Basement Transformation",
    description: "Converted unfinished basement into functional living space.",
    location: "Bucktown, Chicago",
    gradient: "from-amber-400 via-yellow-500 to-orange-500"
  },
  {
    title: "Built-In Shelving",
    description: "Custom carpentry with floor-to-ceiling shelving units.",
    location: "Old Town, Chicago",
    gradient: "from-rose-400 via-pink-500 to-red-500"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the quality craftsmanship we bring to every job, big or small.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Gradient Image Placeholder */}
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-white text-6xl opacity-50 group-hover:opacity-70 transition-opacity"
                    >
                      📸
                    </motion.div>
                  </div>
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">📍</span>
                    {project.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
