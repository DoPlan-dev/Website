"use client";

import { marketingContent } from "@/content/marketing-content";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ObjectionHandlers() {
  const { objectionHandlers } = marketingContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!objectionHandlers) return null;

  return (
    <section
      className="py-20 px-4 bg-white"
      id="objection-handlers"
      aria-labelledby="objections-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="objections-heading"
          className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-4 text-balance"
        >
          {objectionHandlers.title}
        </h2>

        <div className="space-y-4 mt-12">
          {objectionHandlers.questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-light-50 rounded-lg border border-dark-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-light-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-controls={`objection-answer-${i}`}
                >
                  <span className="font-semibold text-dark-900 text-lg pr-4">
                    Q: {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-dark-500 flex-shrink-0 transition-transform",
                      isOpen && "transform rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`objection-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-dark-700 leading-relaxed">
                        <strong className="text-dark-900">A:</strong> {item.answer}
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

