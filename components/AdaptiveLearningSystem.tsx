"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AdaptiveLearningSystem() {
  const { adaptiveLearning } = marketingContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!adaptiveLearning) return null;

  return (
    <section
      className="py-20 px-4 bg-white"
      id="adaptive-learning"
      aria-labelledby="learning-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="learning-heading"
            className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-4 text-balance"
          >
            {adaptiveLearning.title}
          </h2>
          <p className="text-xl text-dark-700 text-center max-w-3xl mx-auto mb-12">
            {adaptiveLearning.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {adaptiveLearning.whatGetsRemembered && (
              <>
                <div className="bg-light-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-900 mb-4">
                    {adaptiveLearning.whatGetsRemembered.codeStyle.title}
                  </h3>
                  <ul className="space-y-2 text-dark-700">
                    {adaptiveLearning.whatGetsRemembered.codeStyle.items.map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-light-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-900 mb-4">
                    {adaptiveLearning.whatGetsRemembered.workflowPatterns.title}
                  </h3>
                  <ul className="space-y-2 text-dark-700">
                    {adaptiveLearning.whatGetsRemembered.workflowPatterns.items.map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-light-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-900 mb-4">
                    {adaptiveLearning.whatGetsRemembered.skillProfile.title}
                  </h3>
                  <ul className="space-y-2 text-dark-700">
                    {adaptiveLearning.whatGetsRemembered.skillProfile.items.map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-light-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-900 mb-4">
                    {adaptiveLearning.whatGetsRemembered.teamContext.title}
                  </h3>
                  <ul className="space-y-2 text-dark-700">
                    {adaptiveLearning.whatGetsRemembered.teamContext.items.map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent-600 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {adaptiveLearning.personalizationEffect?.after3Projects && (
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  {adaptiveLearning.personalizationEffect.after3Projects.title}
                </h3>
                <ul className="space-y-2 text-dark-700">
                  {adaptiveLearning.personalizationEffect.after3Projects.results.map(
                    (result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-600 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {adaptiveLearning.personalizationEffect?.after6Projects && (
              <div className="bg-accent-50 border-l-4 border-accent-600 p-6 rounded-r-lg">
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  {adaptiveLearning.personalizationEffect.after6Projects.title}
                </h3>
                <ul className="space-y-2 text-dark-700">
                  {adaptiveLearning.personalizationEffect.after6Projects.results.map(
                    (result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-600 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

