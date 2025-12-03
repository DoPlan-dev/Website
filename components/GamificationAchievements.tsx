"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function GamificationAchievements() {
  const { gamification } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!gamification) return null;

  return (
    <section
      className="py-20 px-4 bg-light-50"
      id="gamification"
      aria-labelledby="gamification-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2
              id="gamification-heading"
              className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 text-balance"
            >
              {gamification.title}
            </h2>
            <p className="text-xl text-dark-700 max-w-3xl mx-auto mb-2">
              {gamification.description}
            </p>
            <p className="text-lg text-accent-600 font-semibold">
              {gamification.totalAchievements}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gamification.dimensions.map((dimension, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-dark-200"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-dark-900">
                    {dimension.name}
                  </h3>
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {dimension.count}
                  </span>
                </div>
                {dimension.examples && (
                  <ul className="space-y-1 text-sm text-dark-600">
                    {dimension.examples.slice(0, 4).map((example, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-accent-600 mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                    {dimension.examples.length > 4 && (
                      <li className="text-dark-500 italic">
                        and {dimension.examples.length - 4} more...
                      </li>
                    )}
                  </ul>
                )}
                {dimension.description && (
                  <p className="text-sm text-dark-600 mt-2 italic">
                    {dimension.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {gamification.shareable && (
            <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg max-w-3xl mx-auto">
              <p className="text-dark-800">{gamification.shareable}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

