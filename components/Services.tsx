"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🔧",
    title: "General Repairs",
    description: "Door repairs, drywall patching, furniture assembly, and all your everyday fix-it needs.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: "🎨",
    title: "Painting & Finishing",
    description: "Interior and exterior painting, trim work, and finishing touches to refresh your space.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: "🔌",
    title: "Electrical Work",
    description: "Light fixture installation, outlet repairs, ceiling fan mounting, and minor electrical fixes.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: "🚿",
    title: "Plumbing Services",
    description: "Faucet installation, leak repairs, toilet fixes, and general plumbing maintenance.",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: "🪟",
    title: "Carpentry",
    description: "Custom shelving, deck repairs, trim installation, and all woodworking projects.",
    gradient: "from-red-500 to-rose-500"
  },
  {
    icon: "🏠",
    title: "Home Improvements",
    description: "Kitchen updates, bathroom renovations, flooring, and complete room makeovers.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From minor repairs to major renovations, we handle it all with expertise and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
