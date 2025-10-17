"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Professional Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-transparent"></div>
      </div>

      {/* Animated Beams Effect */}
      <BackgroundBeams className="absolute inset-0" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 text-transparent bg-clip-text">
                Chicago Handyman
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 font-light tracking-wide"
          >
            Professional home repairs and improvements with quality craftsmanship
            you can count on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="tel:+13125551234"
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-[1.02] transition-all inline-flex items-center justify-center overflow-hidden"
            >
              <span className="relative z-10">📞 Call (312) 555-1234</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#contact"
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 hover:border-white/30 transform hover:scale-[1.02] transition-all inline-flex items-center justify-center"
            >
              Get a Free Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all">
              <span className="mr-2 text-blue-400">✓</span>
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all">
              <span className="mr-2 text-blue-400">✓</span>
              <span className="font-medium">Same-Day Service</span>
            </div>
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all">
              <span className="mr-2 text-blue-400">✓</span>
              <span className="font-medium">Quality Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-slate-300">
          <span className="text-sm mb-2 font-light">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
