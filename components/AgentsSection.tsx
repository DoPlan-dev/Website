import { agents } from "@/content/agents";

export function AgentsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-4 text-balance">
          18 Specialists. One Team. All Fighting for Your Success.
        </h2>
        <p className="text-center text-dark-600 text-lg mb-12">
          Each agent has a real purpose. No fluff.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="bg-light-50 rounded-lg p-6 border border-dark-200 hover:border-accent-300 transition-colors"
            >
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                {agent.name}
              </h3>
              <p className="text-dark-700">{agent.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-3xl mx-auto">
          <p className="text-dark-800 text-center">
            <strong>Key Insight:</strong> These aren&apos;t random suggestions.
            They&apos;re trained on clean code practices from 380,000+ projects built
            with DoPlan. They catch mistakes before they become tech debt.
          </p>
        </div>
      </div>
    </section>
  );
}

