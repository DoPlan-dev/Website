"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function CommandCenterEvolution() {
  const { commandCenterEvolution } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!commandCenterEvolution) return null;

  return (
    <section
      className="py-20 px-4 bg-light-50"
      id="command-center-evolution"
      aria-labelledby="evolution-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="evolution-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-12 text-balance"
          >
            {commandCenterEvolution.title}
          </h2>

          <div className="space-y-8">
            {commandCenterEvolution.projects.map((project, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-dark-200"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {project.number || "4+"}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900">
                    {project.title}
                  </h3>
                </div>
                {project.description && (
                  <p className="text-dark-700 font-semibold mb-3">
                    {project.description}
                  </p>
                )}
                <ul className="space-y-2 text-dark-700">
                  {project.results.map((result, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">→</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

