import { marketingContent } from "@/content/marketing-content";
import { Terminal } from "./Terminal";

export function FirstFiveMinutes() {
  const { firstFiveMinutes } = marketingContent;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-4 text-balance">
          From "npx" to Shipping in One Coffee Break
        </h2>

        <div className="space-y-12 mt-12">
          {firstFiveMinutes.map((step, i) => (
            <div key={i} className="border-l-4 border-accent-600 pl-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {step.minute}
                </div>
                <h3 className="text-2xl font-bold text-dark-900">{step.title}</h3>
              </div>

              <div className="mb-4">
                <Terminal command={step.command} autoType={false} />
              </div>

              <ul className="space-y-2 text-dark-700 mb-4">
                {step.steps.map((s, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-accent-600 mt-1" aria-hidden="true">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              {step.achievement && (
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-4">
                  <p className="text-primary-800">
                    <strong>Achievement unlocked:</strong> {step.achievement}
                  </p>
                </div>
              )}

              <div className="bg-light-50 border-l-4 border-dark-400 p-4 rounded-r-lg">
                <p className="text-dark-700 italic">"{step.feeling}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
          <p className="text-xl font-semibold text-dark-900">Minute 6+</p>
          <p className="text-dark-700 mt-2">
            You're unstoppable. No stopping points. Pure momentum.
          </p>
        </div>
      </div>
    </section>
  );
}

