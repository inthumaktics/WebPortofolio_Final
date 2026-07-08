import React from 'react';
import { motion } from 'framer-motion';
import { technologiesData } from '../data/technologies';

export default function CoreTechnologies() {
  return (
    <section id="core-technologies" className="py-24 bg-slate-50 dark:bg-slate-950/20 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-primary rounded-full" />
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Core Technologies</h2>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-12 max-w-3xl text-left leading-relaxed">
          Technologies I frequently use to build modern web, mobile, and AI-powered applications.
        </p>

        {/* Flat Flex-Wrap Badge Layout */}
        <div className="flex flex-wrap justify-center gap-4">
          {technologiesData.map((tech, idx) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-350 dark:hover:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-900/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-98 transition-all duration-300 select-none cursor-default"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
            >
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                className={`w-5.5 h-5.5 object-contain select-none pointer-events-none ${
                  tech.name === 'GitHub' || tech.name === 'Express' ? 'dark:invert' : ''
                }`}
                loading="lazy"
              />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
