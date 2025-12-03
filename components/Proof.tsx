import { marketingContent } from "@/content/marketing-content";

export function Proof() {
  const { proof } = marketingContent;

  return (
    <section className="py-20 px-4 bg-light-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark-900 text-center mb-4 text-balance">
          Success Leaves Clues. Here's What the Data Says.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {proof.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow-sm border border-dark-200 text-center"
            >
              <div className="text-4xl font-bold text-accent-600 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-dark-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-dark-500">{stat.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-3xl mx-auto text-center">
          <p className="text-dark-800">
            <strong>What These Numbers Mean:</strong> This isn't theoretical.
            Thousands of developers are already shipping faster. You'd be
            joining a community that works.
          </p>
        </div>
      </div>
    </section>
  );
}

