"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ProofInImpact() {
  const { proofInImpact } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!proofInImpact) return null;

  return (
    <section
      className="py-20 px-4 bg-light-50"
      id="proof-impact"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="proof-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-12 text-balance"
          >
            {proofInImpact.title}
          </h2>

          {proofInImpact.numbers && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-dark-900 mb-6 text-center">
                The Numbers
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {proofInImpact.numbers.usage?.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-6 shadow-sm border border-dark-200 text-center"
                  >
                    <div className="text-4xl font-bold text-accent-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-dark-900 mb-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {proofInImpact.numbers.productivity && (
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-dark-900 mb-4">
                    {proofInImpact.numbers.productivity.title}
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {proofInImpact.numbers.productivity.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-4 shadow-sm border border-dark-200"
                      >
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-dark-700">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {proofInImpact.numbers.quality && (
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-dark-900 mb-4">
                    {proofInImpact.numbers.quality.title}
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {proofInImpact.numbers.quality.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-4 shadow-sm border border-dark-200"
                      >
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-dark-700">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {proofInImpact.numbers.team && (
                <div>
                  <h4 className="text-xl font-bold text-dark-900 mb-4">
                    {proofInImpact.numbers.team.title}
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {proofInImpact.numbers.team.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-4 shadow-sm border border-dark-200"
                      >
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-dark-700">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {proofInImpact.realWorldOutcomes && (
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                {proofInImpact.realWorldOutcomes.title}
              </h3>
              <ul className="space-y-3 text-dark-700">
                {proofInImpact.realWorldOutcomes.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

