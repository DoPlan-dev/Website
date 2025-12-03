"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function TeamSetups() {
  const { teamSetups } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!teamSetups) return null;

  return (
    <section
      className="py-20 px-4 bg-white"
      id="team-setups"
      aria-labelledby="teams-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="teams-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-12 text-balance"
          >
            {teamSetups.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {teamSetups.setups.map((setup, i) => (
              <motion.div
                key={i}
                className="bg-light-50 rounded-lg p-6 border border-dark-200"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {setup.type}
                </h3>
                <p className="text-dark-700 mb-4">{setup.description}</p>
                <div className="bg-accent-50 border-l-4 border-accent-600 p-3 rounded-r-lg">
                  <p className="text-accent-800 font-semibold">
                    {setup.benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

