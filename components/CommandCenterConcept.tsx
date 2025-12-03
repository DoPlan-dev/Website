"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function CommandCenterConcept() {
  const { commandCenterConcept } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!commandCenterConcept) return null;

  return (
    <section
      className="py-20 px-4 bg-white"
      id="command-center-concept"
      aria-labelledby="concept-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="concept-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-8 text-balance"
          >
            {commandCenterConcept.title}
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-dark-700 leading-relaxed">
            <p>{commandCenterConcept.description}</p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg my-8">
              <p className="text-dark-800 italic">{commandCenterConcept.analogy}</p>
            </div>

            {commandCenterConcept.benefits && commandCenterConcept.benefits.length > 0 && (
              <ul className="space-y-3">
                {commandCenterConcept.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent-600 mt-1" aria-hidden="true">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

