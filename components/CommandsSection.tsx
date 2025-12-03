"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CommandExplorer } from "./CommandExplorer";

export function CommandsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-20 px-4 bg-light-50"
      id="commands"
      aria-labelledby="commands-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-dark-600 text-lg mb-4">
            Not magic. Just smart defaults + AI coaching.
          </p>
          <h2
            id="commands-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 text-balance"
          >
            These Five Commands Are Your Entire Workflow
          </h2>
          <p className="text-dark-600 text-lg">
            These five commands represent the entire development lifecycle. Master
            them in your first session.
          </p>
          <div className="mt-6 inline-block bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-semibold">
            Master in 5 minutes
          </div>
        </motion.div>

        <CommandExplorer />
      </div>
    </section>
  );
}

