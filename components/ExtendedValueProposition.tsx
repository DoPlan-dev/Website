"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ExtendedValueProposition() {
  const { valueProposition } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!valueProposition.extended) return null;

  return (
    <section
      className="py-20 px-4 bg-light-50"
      id="value-proposition"
      aria-labelledby="value-prop-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="value-prop-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-12 text-balance"
          >
            {valueProposition.extended.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProposition.extended.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-dark-200"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-dark-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

