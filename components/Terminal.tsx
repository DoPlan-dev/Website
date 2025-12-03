"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { copyToClipboard } from "@/lib/clipboard";
import { analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Toast } from "./ui/toast";

interface TerminalProps {
  command: string;
  className?: string;
  autoType?: boolean;
  showCopyButton?: boolean;
}

export function Terminal({
  command,
  className,
  autoType = true,
  showCopyButton = true,
}: TerminalProps) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [isCopied, setIsCopied] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [cursorVisible, setCursorVisible] = React.useState(true);
  const shouldReduceMotion = useReducedMotion();

  // Auto-typing animation
  React.useEffect(() => {
    if (!autoType || shouldReduceMotion) {
      setDisplayedText(command);
      return;
    }

    setDisplayedText("");
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < command.length) {
        setDisplayedText(command.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [command, autoType, shouldReduceMotion]);

  // Blinking cursor animation
  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCursorVisible(true);
      return;
    }

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [shouldReduceMotion]);

  const handleCopy = async () => {
    const success = await copyToClipboard(command);
    if (success) {
      setIsCopied(true);
      setShowToast(true);
      analytics.commandCopied();
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <>
      <div
        className={cn(
          "relative bg-dark-900 rounded-lg p-4 font-mono text-sm",
          "border border-dark-800",
          className
        )}
        role="region"
        aria-label="Terminal command"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {showCopyButton && (
            <button
              onClick={handleCopy}
              className="text-light-400 hover:text-white transition-colors p-1 rounded"
              aria-label="Copy command to clipboard"
              title="Copy command"
            >
              {isCopied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
        <div className="text-light-100">
          <span className="text-green-400">$</span>{" "}
          <span className="text-white">{displayedText}</span>
          {cursorVisible && (
            <motion.span
              className="inline-block w-2 h-5 bg-white ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      <noscript>
        <div className="mt-2 text-sm text-dark-600">
          <code className="bg-light-100 px-2 py-1 rounded">{command}</code>
        </div>
      </noscript>
      <Toast
        message="Command copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}

