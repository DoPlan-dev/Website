"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function KeyMessagingPillars() {
  const { keyMessagingPillars } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!keyMessagingPillars) return null;

  return (
    <section
      className="py-20 px-4 bg-light-50"
      id="messaging-pillars"
      aria-labelledby="pillars-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="pillars-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-12 text-balance"
          >
            {keyMessagingPillars.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyMessagingPillars.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-dark-200"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-accent-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {pillar.number}
                  </div>
                  <h3 className="text-lg font-bold text-dark-900">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-dark-700">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

