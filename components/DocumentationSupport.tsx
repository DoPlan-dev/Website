"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function DocumentationSupport() {
  const { documentationSupport } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!documentationSupport) return null;

  return (
    <section
      className="py-20 px-4 bg-white"
      id="documentation-support"
      aria-labelledby="docs-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {documentationSupport.resources && (
              <div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  {documentationSupport.resources.title}
                </h3>
                <ul className="space-y-2 text-dark-700">
                  {documentationSupport.resources.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {documentationSupport.gettingHelp && (
              <div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  {documentationSupport.gettingHelp.title}
                </h3>
                <ul className="space-y-2 text-dark-700">
                  {documentationSupport.gettingHelp.options.map((option, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">→</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

