"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ProblemsSection() {
  const { problems } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-20 px-4 bg-white"
      id="problems"
      aria-labelledby="problems-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="problems-heading"
          className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-16 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          The Real Problems Developers Face (And How DoPlan Fixes Them)
        </motion.h2>

        <div className="space-y-16" ref={ref}>
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              className="border-t border-dark-200 pt-12 first:border-t-0 first:pt-0"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-dark-900">
                    Problem {i + 1}: {problem.title}
                  </h3>
                  <p className="text-dark-700 text-lg">{problem.description}</p>
                  {problem.details && (
                    <p className="text-dark-600">{problem.details}</p>
                  )}
                  {problem.quote && (
                    <p className="text-dark-500 italic">"{problem.quote}"</p>
                  )}
                </div>

                <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-primary-900 mb-3">
                    DoPlan Solution:
                  </h4>
                  <p className="text-dark-800">{problem.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

