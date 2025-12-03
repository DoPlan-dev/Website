export function Gamification() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-12 text-balance">
          Your Brain is Wired to Celebrate Wins. We Just Made Work Worth
          Celebrating.
        </h2>

        <div className="space-y-8">
          <div className="bg-light-50 rounded-lg p-8 border border-dark-200">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              How Achievements Actually Help
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-dark-600 mb-2">
                  <strong>Without tracking:</strong>
                </p>
                <p className="text-dark-700">
                  You finish a project and feel... empty. Was it fast? Did you
                  learn? No data. No sense of progress.
                </p>
              </div>
              <div>
                <p className="text-dark-600 mb-2">
                  <strong>With DoPlan achievements:</strong>
                </p>
                <ul className="space-y-2 text-dark-700">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-600 mt-1" aria-hidden="true">•</span>
                    <span>
                      "Debugged 5 issues without AI help" → You're getting
                      independent
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-600 mt-1" aria-hidden="true">•</span>
                    <span>
                      "Shipped a feature in under 30 minutes" → You're in flow
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-600 mt-1" aria-hidden="true">•</span>
                    <span>
                      "Zero performance regressions on your last 10 PRs" →
                      You're leveling up
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-600 mt-1" aria-hidden="true">•</span>
                    <span>
                      "Mentored a junior through /hey" → You're contributing to
                      the team
                    </span>
                  </li>
                </ul>
                <p className="text-dark-700 mt-4 italic">
                  These aren't cosmetic badges. They're <strong>proof of mastery</strong>.
                  Shareable on GitHub. Worth celebrating.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h4 className="font-semibold text-primary-900 mb-3">The Numbers</h4>
              <ul className="space-y-2 text-primary-800">
                <li>
                  200+ achievements (one for almost every meaningful milestone)
                </li>
                <li>
                  XP system that tracks your momentum, not just your output
                </li>
                <li>
                  Leaderboards (optional team visibility) for friendly
                  competition
                </li>
                <li>Level progression (1-100) that keeps the game interesting</li>
              </ul>
            </div>
            <div className="bg-accent-50 rounded-lg p-6 border border-accent-200">
              <h4 className="font-semibold text-accent-900 mb-3">Why This Works</h4>
              <p className="text-accent-800">
                It's not manipulation. It's honest feedback. Your brain releases
                dopamine when you see progress. We're just making progress
                visible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

