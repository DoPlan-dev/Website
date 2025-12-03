"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function EighteenSpecialists() {
  const { eighteenSpecialists } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!eighteenSpecialists) return null;

  return (
    <section
      className="py-20 px-4 bg-light-50"
      id="eighteen-specialists"
      aria-labelledby="specialists-heading"
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
              id="specialists-heading"
              className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 text-balance"
            >
              {eighteenSpecialists.introduction}
            </h2>
            <p className="text-xl text-dark-700 max-w-3xl mx-auto mb-4">
              {eighteenSpecialists.description}
            </p>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              {eighteenSpecialists.availability}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eighteenSpecialists.specialists.map((specialist, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-dark-200 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="text-4xl mb-3">{specialist.emoji}</div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  {specialist.name}
                </h3>
                <p className="text-dark-700 text-sm leading-relaxed">
                  {specialist.description}
                </p>
              </motion.div>
            ))}
          </div>

          {eighteenSpecialists.note && (
            <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg max-w-3xl mx-auto">
              <p className="text-dark-800 font-semibold">
                {eighteenSpecialists.note}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

