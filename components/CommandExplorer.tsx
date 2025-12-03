"use client";

import { useState } from "react";
import { marketingContent } from "@/content/marketing-content";
import { Terminal } from "./Terminal";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function CommandExplorer() {
  const { commands } = marketingContent;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4" role="tablist" aria-label="Command explorer">
      {commands.map((cmd, i) => {
        const isExpanded = expandedIndex === i;
        return (
          <div
            key={i}
            className="bg-white rounded-lg border border-dark-200 overflow-hidden"
          >
            <button
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-light-50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
              aria-expanded={isExpanded}
              aria-controls={`command-${i}`}
              role="tab"
            >
              <div className="flex items-center gap-4">
                <code className="bg-dark-900 text-white px-3 py-1.5 rounded text-sm font-mono">
                  {cmd.command}
                </code>
                <h3 className="text-xl font-bold text-dark-900">{cmd.title}</h3>
              </div>
              {isExpanded ? (
                <ChevronDown className="h-5 w-5 text-dark-500" />
              ) : (
                <ChevronRight className="h-5 w-5 text-dark-500" />
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
                  role="tabpanel"
                >
                  <div className="p-6 pt-0 space-y-4">
                    <p className="text-dark-700 text-lg">{cmd.description}</p>

                    {cmd.example && (
                      <div>
                        <p className="text-sm text-dark-600 mb-2">You type:</p>
                        <Terminal
                          command={cmd.example}
                          className="w-full"
                          autoType={false}
                        />
                      </div>
                    )}

                    {cmd.details && (
                      <div>
                        <p className="text-sm font-semibold text-dark-700 mb-2">
                          The AI asks:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-dark-600">
                          {cmd.details.map((detail, j) => (
                            <li key={j}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cmd.features && (
                      <div>
                        <p className="text-sm font-semibold text-dark-700 mb-2">
                          It does:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-dark-600">
                          {cmd.features.map((feature, j) => (
                            <li key={j}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cmd.automatically && (
                      <div>
                        <p className="text-sm font-semibold text-dark-700 mb-2">
                          It automatically:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-dark-600">
                          {cmd.automatically.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cmd.whileBuilding && (
                      <div>
                        <p className="text-sm font-semibold text-dark-700 mb-2">
                          While you build:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-dark-600">
                          {cmd.whileBuilding.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cmd.generates && (
                      <div>
                        <p className="text-sm font-semibold text-dark-700 mb-2">
                          It generates:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-dark-600">
                          {cmd.generates.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cmd.shows && (
                      <div>
                        <p className="text-sm font-semibold text-dark-700 mb-2">
                          Shows you:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-dark-600">
                          {cmd.shows.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cmd.result && (
                      <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg">
                        <p className="text-primary-900 font-semibold">Result:</p>
                        <p className="text-primary-800">{cmd.result}</p>
                      </div>
                    )}

                    <div className="bg-light-50 border-l-4 border-dark-400 p-4 rounded-r-lg">
                      <p className="text-dark-700 italic">"{cmd.feeling}"</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

