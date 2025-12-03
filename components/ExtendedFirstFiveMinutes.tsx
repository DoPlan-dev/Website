"use client";

import { marketingContent } from "@/content/marketing-content";
import { Terminal } from "./Terminal";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ExtendedFirstFiveMinutes() {
  const { extendedFirstFiveMinutes } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!extendedFirstFiveMinutes) return null;

  return (
    <section
      className="py-20 px-4 bg-white"
      id="extended-first-five"
      aria-labelledby="first-five-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="first-five-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-12 text-balance"
          >
            {extendedFirstFiveMinutes.title}
          </h2>

          <div className="space-y-12">
            {extendedFirstFiveMinutes.minutes.map((minute, i) => (
              <motion.div
                key={i}
                className="border-l-4 border-accent-600 pl-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {minute.minute}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900">
                    {minute.title}
                  </h3>
                </div>

                <div className="mb-4">
                  <Terminal command={minute.command} autoType={false} />
                </div>

                {minute.description && (
                  <p className="text-dark-700 mb-4">{minute.description}</p>
                )}

                {minute.answers && (
                  <div className="mb-4">
                    <ul className="space-y-2 text-dark-700">
                      {minute.answers.map((answer, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-primary-600 mt-1">→</span>
                          <span>{answer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {minute.steps && (
                  <div className="mb-4">
                    <ul className="space-y-2 text-dark-700">
                      {minute.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">→</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {minute.note && (
                  <div className="bg-light-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-4">
                    <p className="text-dark-700 italic">{minute.note}</p>
                  </div>
                )}

                {minute.result && (
                  <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-4">
                    <p className="text-primary-800 font-semibold">
                      {minute.result}
                    </p>
                  </div>
                )}

                {minute.achievement && (
                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-4 mb-4">
                    <p className="text-accent-800">
                      <strong>Achievement unlocked:</strong> {minute.achievement}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

