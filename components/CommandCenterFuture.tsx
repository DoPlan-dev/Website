"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function CommandCenterFuture() {
  const { commandCenterFuture } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!commandCenterFuture) return null;

  return (
    <section
      className="py-20 px-4 bg-light-50"
      id="command-center-future"
      aria-labelledby="future-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="future-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-12 text-balance"
          >
            {commandCenterFuture.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {commandCenterFuture.roadmap.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-4 shadow-sm border border-dark-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <p className="text-dark-700 flex items-start gap-2">
                  <span className="text-primary-600 mt-1">→</span>
                  <span>{item}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

