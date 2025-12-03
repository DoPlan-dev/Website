"use client";

import { marketingContent } from "@/content/marketing-content";
import { Terminal } from "./Terminal";
import { Button } from "./ui/button";
import { copyToClipboard } from "@/lib/clipboard";
import { analytics } from "@/lib/analytics";
import { Check } from "lucide-react";
import { useState } from "react";
import { Toast } from "./ui/toast";

export function CommandCenterHero() {
  const { hero } = marketingContent;
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(hero.cta.command);
    if (success) {
      setIsCopied(true);
      setShowToast(true);
      analytics.commandCopied();
      analytics.ctaClicked("hero-primary");
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-light-50"
      id="hero"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-dark-900 text-balance leading-tight">
          {hero.headline}
        </h1>

        <p className="text-xl md:text-2xl text-dark-700 max-w-3xl mx-auto text-balance leading-relaxed">
          {hero.subheadline}
        </p>

        {hero.subheading && (
          <p className="text-lg text-dark-600 max-w-3xl mx-auto text-balance">
            {hero.subheading}
          </p>
        )}

        {hero.tagline && (
          <p className="text-xl font-semibold text-primary-600 max-w-3xl mx-auto">
            {hero.tagline}
          </p>
        )}

        {hero.sacredWords && (
          <p className="text-2xl md:text-3xl font-bold text-accent-600 max-w-3xl mx-auto">
            {hero.sacredWords}
          </p>
        )}

        {hero.supportingText && hero.supportingText.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
            {hero.supportingText.map((text, i) => (
              <div key={i} className="text-left text-dark-700">
                {text}
              </div>
            ))}
          </div>
        )}

        <div className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            <Terminal
              command={hero.cta.command}
              className="w-full max-w-2xl"
              autoType={true}
            />
            <p className="text-sm text-dark-500 italic">{hero.cta.subtext}</p>
          </div>

          <Button
            onClick={handleCopy}
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-accent-600 hover:bg-accent-700 text-white"
            aria-label="Copy command to clipboard"
          >
            {isCopied ? (
              <>
                <Check className="mr-2 h-5 w-5" />
                Copied!
              </>
            ) : (
              hero.cta.buttonText || "ACTIVATE YOUR COMMAND CENTER"
            )}
          </Button>
        </div>

        {hero.statistics && hero.statistics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            {hero.statistics.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-600 mb-1">
                  {stat.icon} {stat.value}
                </div>
                <div className="text-sm text-dark-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 space-y-4 text-left max-w-2xl mx-auto">
          <h3 className="font-semibold text-dark-900 text-lg text-center">
            What happens next:
          </h3>
          <ul className="space-y-2 text-dark-700">
            {hero.nextSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent-600 mt-1" aria-hidden="true">
                  ✓
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Toast
        message="Command copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}

