import React, { useState } from 'react'
import { Terminal } from '../terminal/Terminal'
import { Button } from '../ui/Button'
import { copyToClipboard } from '../../utils/clipboard'
import { trackCommandCopy } from '../../lib/analytics'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const installCommand = 'npx @doplan-dev/cli'

  const handleCopyCommand = async () => {
    const success = await copyToClipboard(installCommand)
    if (success) {
      setCopied(true)
      trackCommandCopy(installCommand)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const commands = ['/hey', '/do', '/plan', '/dev', '/sys']

  return (
    <section
      id="home"
      className="relative min-h-[720px] md:min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background Gradient Effects */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(0, 217, 255, 0.3) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-xl py-xxl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl items-center">
          {/* Left Content */}
          <div className="space-y-xl">
            {/* Headline */}
            <div className="space-y-m">
              <h1 className="text-hero md:text-h1 font-bold text-light leading-tight">
                Build Production Apps
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Without the Burnout
                </span>
              </h1>
              <p className="text-h3 text-mid leading-relaxed">
                Personalized AI assistance with 18 specialized agents. 98% success rate.
              </p>
              <p className="text-body text-mid leading-relaxed">
                Turn your ideas into real products. Learn as you build. Never get lost.
              </p>
            </div>

            {/* 5 Commands Display */}
            <div className="space-y-s">
              <p className="text-small text-mid font-medium">5 Sacred Commands:</p>
              <div className="flex flex-wrap gap-s">
                {commands.map((cmd) => (
                  <code
                    key={cmd}
                    className="text-code bg-void/50 border border-cyan/20 rounded-moderate px-m py-xs text-cyan"
                  >
                    {cmd}
                  </code>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-m">
              <div className="flex flex-col sm:flex-row gap-m">
                <Button
                  variant="primary"
                  onClick={handleCopyCommand}
                  className="w-full sm:w-auto"
                >
                  {copied ? (
                    <>
                      <svg
                        className="w-5 h-5 mr-s inline"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 mr-s inline"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Install Command
                    </>
                  )}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    window.open('https://github.com/DoPlan-dev/Website', '_blank')
                  }}
                  className="w-full sm:w-auto"
                >
                  View on GitHub
                </Button>
              </div>

              {/* Install Command Display */}
              <div className="bg-void/50 border border-cyan/20 rounded-moderate p-m">
                <code className="text-code text-cyan font-mono">
                  {installCommand}
                </code>
              </div>
            </div>
          </div>

          {/* Right Content - Terminal Visual (Desktop) */}
          <div className="hidden md:block relative">
            <div className="animate-float">
              <div
                className="w-full max-w-[480px] mx-auto"
                style={{
                  transform: 'perspective(1200px) rotateX(5deg) rotateY(-10deg)',
                }}
              >
                <Terminal
                  command={installCommand}
                  output={[
                    '✓ DoPlan CLI installed successfully',
                    '✓ 18 AI agents ready',
                    '✓ Type /hey to get started',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

