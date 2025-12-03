"use client";

import { marketingContent } from "@/content/marketing-content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Terminal } from "./Terminal";
import { ChevronDown, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function FiveCommandDoctrine() {
  const { commands, fiveCommandDoctrine } = marketingContent;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-20 px-4 relative bg-dark-900"
      id="five-command-doctrine"
      aria-labelledby="doctrine-heading"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="doctrine-heading"
            className="text-4xl md:text-5xl font-black text-white mb-4 text-balance tracking-tight"
          >
            {fiveCommandDoctrine?.headline || "THE FIVE COMMAND DOCTRINE"}
          </h2>
          <p className="text-xl text-light-400 max-w-3xl mx-auto">
            {fiveCommandDoctrine?.subheadline ||
              "Five commands orchestrate your entire development experience. Master them, and total development freedom is yours."}
          </p>
        </motion.div>

        <div className="space-y-4">
          {commands.map((cmd, i) => {
            const isExpanded = expandedIndex === i;
            const extended = cmd.extended;

            return (
              <div
                key={i}
                className="bg-dark-500/80 backdrop-blur-sm rounded-lg border border-dark-600/30 overflow-hidden hover:border-accent-500/50 transition-all"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-dark-600/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-dark-500"
                  aria-expanded={isExpanded}
                  aria-controls={`command-${i}`}
                >
                  <div className="flex items-center gap-4">
                    <code className="bg-accent-500 text-white px-3 py-1.5 rounded text-sm font-mono font-bold">
                      {cmd.command}
                    </code>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {extended?.title || cmd.title}
                      </h3>
                      {extended?.subtitle && (
                        <p className="text-sm text-light-400 mt-1">
                          {extended.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="h-5 w-5 text-light-400" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-light-400" />
                  )}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`command-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 space-y-6">
                        {extended?.description && (
                          <p className="text-light-300 text-lg">
                            {extended.description}
                          </p>
                        )}

                        {extended?.command && (
                          <div>
                            <p className="text-sm text-light-400 mb-2">Command:</p>
                            <Terminal
                              command={extended.command}
                              className="w-full"
                              autoType={false}
                            />
                          </div>
                        )}

                        {extended?.whatHappens && (
                          <div>
                            <p className="text-sm font-semibold text-dark-700 mb-2">
                              What happens:
                            </p>
                            <ul className="space-y-2 text-dark-600">
                              {extended.whatHappens.map((item, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-accent-600 mt-1">→</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {extended?.features && (
                          <div>
                            <p className="text-sm font-semibold text-white mb-2">
                              Features:
                            </p>
                            <ul className="space-y-2 text-light-400">
                              {extended.features.map((feature, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-accent-600 mt-1">→</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {extended?.howItWorks && (
                          <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg">
                            <p className="font-semibold text-dark-900 mb-2">
                              How it works:
                            </p>
                            {extended.howItWorks.example && (
                              <p className="text-dark-700 mb-2">
                                {extended.howItWorks.example}
                              </p>
                            )}
                            {extended.howItWorks.process && (
                              <ul className="space-y-1 text-dark-600 mb-2">
                                {extended.howItWorks.process.map((step, j) => (
                                  <li key={j} className="flex items-start gap-2">
                                    <span className="text-primary-600 mt-1">•</span>
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {extended.howItWorks.output && (
                              <div className="mt-2">
                                {extended.howItWorks.output.map((item, j) => (
                                  <p key={j} className="text-dark-700">
                                    {item}
                                  </p>
                                ))}
                              </div>
                            )}
                            {extended.howItWorks.result && (
                              <p className="text-primary-800 font-semibold mt-2">
                                {extended.howItWorks.result}
                              </p>
                            )}
                          </div>
                        )}

                        {extended?.barrier && (
                          <p className="text-dark-800 font-semibold">
                            {extended.barrier}
                          </p>
                        )}

                        {extended?.teamBenefit && (
                          <div className="bg-accent-50 border-l-4 border-accent-600 p-4 rounded-r-lg">
                            <p className="text-dark-800">{extended.teamBenefit}</p>
                          </div>
                        )}

                        {extended?.monitoring && (
                          <div>
                            <h4 className="font-semibold text-dark-900 mb-2">
                              {extended.monitoring.title}
                            </h4>
                            <ul className="space-y-1 text-dark-600">
                              {extended.monitoring.features.map((feature, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-accent-600 mt-1">→</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {extended?.forWhom && (
                          <div className="space-y-2">
                            <p className="text-dark-700">
                              <strong>{extended.forWhom.individual}</strong>
                            </p>
                            <p className="text-dark-700">
                              <strong>{extended.forWhom.teamLeads}</strong>
                            </p>
                            <p className="text-dark-700">
                              <strong>{extended.forWhom.architects}</strong>
                            </p>
                          </div>
                        )}

                        {extended?.result && (
                          <p className="text-primary-800 font-semibold">
                            {extended.result}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

