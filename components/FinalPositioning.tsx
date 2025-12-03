"use client";

import { marketingContent } from "@/content/marketing-content";
import { Terminal } from "./Terminal";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function FinalPositioning() {
  const { finalPositioning } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!finalPositioning) return null;

  return (
    <section
      className="py-20 px-4 bg-white"
      id="final-positioning"
      aria-labelledby="positioning-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            id="positioning-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 mb-6 text-balance"
          >
            {finalPositioning.title}
          </h2>

          <p className="text-xl text-dark-700 mb-6">{finalPositioning.description}</p>

          <ul className="space-y-3 text-dark-700 mb-8 max-w-2xl mx-auto text-left">
            {finalPositioning.components.map((component, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-600 mt-1">✓</span>
                <span>{component}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg text-dark-600 mb-8">
            {finalPositioning.targetAudience}
          </p>

          <p className="text-2xl md:text-3xl font-bold text-accent-600 mb-8">
            {finalPositioning.tagline}
          </p>

          <div className="mb-6">
            <Terminal command={finalPositioning.command} autoType={false} />
          </div>

          <p className="text-xl text-dark-700 mb-6">{finalPositioning.cta}</p>

          <Button
            size="lg"
            className="bg-accent-600 hover:bg-accent-700 text-white text-lg px-8 py-6"
          >
            {finalPositioning.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

