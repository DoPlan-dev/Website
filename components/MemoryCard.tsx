export function MemoryCard() {
  return (
    <section className="py-20 px-4 bg-light-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-12 text-balance">
          DoPlan Gets Smarter. Because You Shouldn't Have to Repeat Yourself.
        </h2>

        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-dark-200">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">How It Works</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-dark-900 mb-2">Project 1:</h4>
                <p className="text-dark-700">
                  Agent gives generic suggestions ("Here are some approach
                  options...")
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-900 mb-2">Project 2:</h4>
                <p className="text-dark-700">
                  Agent learns your style ("I remember you prefer this pattern.
                  Here's my recommendation...")
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-900 mb-2">Project 3:</h4>
                <p className="text-dark-700">
                  Agent coaches like a colleague who knows you ("You usually go
                  with functional components. I'm suggesting a custom hook
                  here—want the trade-offs?")
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-900 mb-2">Project 6+:</h4>
                <p className="text-dark-700">
                  Your agents operate at your skill level. They debate
                  architecture with you, not at you.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-dark-200">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              What Gets Remembered
            </h3>
            <ul className="space-y-3 text-dark-700">
              <li className="flex items-start gap-3">
                <span className="text-accent-600 mt-1" aria-hidden="true">•</span>
                <span>
                  Your coding style (how you name variables, structure
                  components)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 mt-1" aria-hidden="true">•</span>
                <span>
                  Your tech preferences (React Router over TanStack Router,
                  etc.)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 mt-1" aria-hidden="true">•</span>
                <span>
                  Your pain points (you slow down on authentication—extra
                  coaching there)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 mt-1" aria-hidden="true">•</span>
                <span>Your speed (how long features typically take you)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 mt-1" aria-hidden="true">•</span>
                <span>
                  Your values (you care about accessibility, so agents flag it
                  first)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
            <h3 className="font-semibold text-primary-900 mb-2">The Real Benefit</h3>
            <p className="text-primary-800">
              You're not starting from zero on project two. Your team of agents
              knows you. That's worth months of productivity gains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

