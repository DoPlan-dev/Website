import { marketingContent } from "@/content/marketing-content";
import { Button } from "./ui/button";
import { ExternalLink, Users, MessageSquare } from "lucide-react";

export function DiscordPage() {
  const { socialProof } = marketingContent;

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 bg-light-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 text-balance">
            Join 1,200+ Developers Building Together
          </h1>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Get help, share projects, and connect with developers who are
            actually shipping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-accent-600 hover:bg-accent-700 text-white">
              <a
                href="https://discord.gg/doplan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                Join Discord
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 border border-dark-200">
              <Users className="h-8 w-8 text-accent-600 mb-4" />
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Live Member Count
              </h3>
              <p className="text-3xl font-bold text-accent-600 mb-2">1,200+</p>
              <p className="text-dark-600 text-sm">Active developers</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-dark-200">
              <MessageSquare className="h-8 w-8 text-accent-600 mb-4" />
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Recent Activity
              </h3>
              <p className="text-dark-600">
                Join the conversation. Get answers in minutes, not hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">
            Community Guidelines
          </h2>
          <div className="space-y-4 text-dark-700">
            <p>
              <strong>Be helpful.</strong> Answer questions, share knowledge,
              celebrate wins.
            </p>
            <p>
              <strong>Be honest.</strong> Share real experiences, not marketing
              speak.
            </p>
            <p>
              <strong>Be respectful.</strong> We're all here to build better
              things.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">
            Real Impact Stories
          </h2>
          <div className="space-y-12">
            {socialProof.map((story, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 shadow-sm border border-dark-200"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-dark-900">
                    {story.name}
                  </h3>
                  <p className="text-dark-600">{story.role}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-red-900 mb-2">Before:</p>
                    <p className="text-red-800 italic">"{story.before}"</p>
                  </div>
                  <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-primary-900 mb-2">After:</p>
                    <p className="text-primary-800 italic">"{story.after}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

