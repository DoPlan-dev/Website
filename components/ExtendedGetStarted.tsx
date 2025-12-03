"use client";

import { marketingContent } from "@/content/marketing-content";
import { Terminal } from "./Terminal";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ExtendedGetStarted() {
  const { extendedGetStarted } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!extendedGetStarted) return null;

  return (
    <section
      className="py-20 px-4 bg-light-50"
      id="extended-get-started"
      aria-labelledby="get-started-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="get-started-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-12 text-balance"
          >
            {extendedGetStarted.title}
          </h2>

          {extendedGetStarted.activation && (
            <div className="bg-white rounded-lg p-8 shadow-sm border border-dark-200 mb-8">
              <div className="mb-6">
                <Terminal
                  command={extendedGetStarted.activation.command}
                  autoType={false}
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-accent-600 hover:bg-accent-700 text-white text-lg py-6"
              >
                {extendedGetStarted.activation.cta}
              </Button>
              <ul className="mt-6 space-y-2 text-dark-700">
                {extendedGetStarted.activation.whatHappens.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-600 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {extendedGetStarted.activation.note && (
                <p className="mt-4 text-dark-600 italic text-center">
                  {extendedGetStarted.activation.note}
                </p>
              )}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {extendedGetStarted.forTeams && (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-dark-200">
                <h3 className="text-xl font-bold text-dark-900 mb-4">
                  {extendedGetStarted.forTeams.title}
                </h3>
                <ol className="space-y-2 text-dark-700">
                  {extendedGetStarted.forTeams.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-600 font-semibold">
                        {i + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {extendedGetStarted.forEnterprises && (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-dark-200">
                <h3 className="text-xl font-bold text-dark-900 mb-4">
                  {extendedGetStarted.forEnterprises.title}
                </h3>
                <p className="text-dark-700 mb-4">
                  {extendedGetStarted.forEnterprises.description}
                </p>
                <ul className="space-y-2 text-dark-700">
                  {extendedGetStarted.forEnterprises.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">→</span>
                      <span>{step}</span>
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

