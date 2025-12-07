import React, { useState } from 'react'
import { Terminal } from '../terminal/Terminal'
import { Button } from '../ui/Button'
import { copyToClipboard } from '../../utils/clipboard'
import { trackCommandCopy, trackCTAClick } from '../../lib/analytics'

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

  const handleGetStarted = () => {
    trackCTAClick('get-started', 'hero')
    // Scroll to install section or trigger install
  }

  const commands = ['/hey', '/do', '/plan', '/dev', '/sys']

  const terminalOutput = [
    '✓ DoPlan CLI initialized',
    '✓ 18 AI agents ready',
    '✓ Project structure created',
    '',
    'Ready to build! Type /hey to get started.',
  ]

  return (
    <section
      id="home"
      className="relative min-h-[600px] md:min-h-[720px] flex items-center overflow-hidden py-xl md:py-xxl"
    >
      {/* Background Gradient Effects */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(0, 217, 255, 0.3) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-m md:px-xl py-xl md:py-xxl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl items-center">
          {/* Left Column - Content */}
          <div className="space-y-xl">
            {/* Headline */}
            <div>
              <h1 className="text-h1 md:text-hero mb-m">
                Build Production Apps
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Without the Burnout
                </span>
              </h1>
              <p className="text-body md:text-h3 text-mid mb-l">
                Personalized AI assistance with 18 specialized agents. 98% success rate. Start building in seconds.
              </p>
              <p className="text-body text-mid">
                Turn your ideas into production-ready apps. Learn as you build. Never get lost or stuck.
              </p>
            </div>

            {/* 5 Commands Display */}
            <div>
              <p className="text-small text-mid mb-m">5 Sacred Commands:</p>
              <div className="flex flex-wrap gap-s mb-xl" role="list" aria-label="5 Sacred Commands">
                {commands.map((cmd) => (
                  <code
                    key={cmd}
                    className="text-code px-m py-s bg-void border border-cyan/30 rounded-moderate text-cyan"
                    role="listitem"
                    aria-label={`Command: ${cmd}`}
                  >
                    {cmd}
                  </code>
                ))}
              </div>
            </div>

            {/* Install Command with Copy Button */}
            <div>
              <p className="text-small text-mid mb-s">Install and start building in seconds:</p>
              <div className="flex flex-col sm:flex-row gap-m items-stretch sm:items-center">
                <div className="flex-1 terminal-container p-m" role="textbox" aria-label="Install command">
                  <code className="text-terminal text-cyan">{installCommand}</code>
                </div>
                <Button
                  variant="primary"
                  onClick={handleCopyCommand}
                  className="whitespace-nowrap"
                  aria-label={copied ? 'Copied!' : 'Copy install command'}
                >
                  {copied ? '✓ Copied!' : 'Copy'}
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-m">
              <Button variant="primary" onClick={handleGetStarted} className="w-full sm:w-auto sm:min-w-[200px]">
                Get Started Now
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  window.open('https://github.com/DoPlan-dev/CLI', '_blank')
                  trackCTAClick('github', 'hero')
                }}
                className="w-full sm:w-auto"
              >
                Star on GitHub
              </Button>
            </div>
          </div>

          {/* Right Column - Terminal Visual (Desktop Only) */}
          <div className="hidden md:block relative">
            <div
              className="animate-float"
              style={{
                perspective: '1200px',
                transform: 'rotateX(5deg) rotateY(-10deg)',
              }}
            >
              <Terminal command={installCommand} output={terminalOutput} />
            </div>
          </div>
        </div>

        {/* Mobile Terminal (Below Content) */}
        <div className="md:hidden mt-xxl">
          <Terminal command={installCommand} output={terminalOutput} />
        </div>
      </div>
    </section>
  )
}
