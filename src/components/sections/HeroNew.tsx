import React from 'react'
import { Button, Heading, Text, Box, Flex } from '@radix-ui/themes'
import { TerminalNew } from '../terminal/TerminalNew'
import { LucideIcon } from '../ui/LucideIcon'
import { copyToClipboard } from '../../utils/clipboard'
import { trackCommandCopy, trackCTAClick } from '../../lib/analytics'

export const HeroNew: React.FC = () => {
  const installCommand = 'npx @doplan-dev/cli'

  const handleCopyCommand = async () => {
    const success = await copyToClipboard(installCommand)
    if (success) {
      trackCommandCopy(installCommand)
    }
  }

  const handleTryNow = () => {
    handleCopyCommand()
    trackCTAClick('try-now', 'hero')
  }

  const terminalOutput = [
    '$ npx @doplan-dev/cli',
    '✓ Project created in 4.2 seconds',
    '✓ 18 AI agents ready to code with you',
    '✓ First achievement unlocked: "You\'re a builder"',
  ]

  const handleScrollDown = () => {
    const workflowSection = document.getElementById('workflow')
    if (workflowSection) {
      workflowSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-white"
    >
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Headline */}
            <Box className="space-y-6">
              <Heading 
                size="9" 
                style={{ 
                  fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: '1.1',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#0f172a'
                }}
              >
                Ship Projects in
                <br />
                5 Seconds.
                <br />
                <span style={{ color: '#6366f1' }}>Not 5 Weeks.</span>
              </Heading>
              <Text 
                size="5" 
                color="gray" 
                className="max-w-xl mx-auto lg:mx-0"
                style={{ lineHeight: '1.6', color: '#64748b' }}
              >
                Join thousands of developers who are building better projects with DoPlan's personalized AI assistance, achievement system, and 18 specialized agents.
              </Text>
            </Box>

            {/* CTA Buttons */}
            <Box className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="4"
                onClick={handleTryNow}
                style={{ 
                  cursor: 'pointer',
                  minHeight: '48px',
                  paddingLeft: '24px',
                  paddingRight: '24px'
                }}
                aria-label="Try Now - Copy installation command"
              >
                <Flex align="center" gap="2">
                  <LucideIcon name="Zap" size={18} color="currentColor" variant="outline" />
                  <span>Get Started Now</span>
                </Flex>
              </Button>
              <Button
                size="4"
                variant="outline"
                onClick={() => {
                  window.open('https://github.com/DoPlan-dev/CLI', '_blank')
                  trackCTAClick('view-on-github', 'hero')
                }}
                style={{ 
                  cursor: 'pointer',
                  minHeight: '48px',
                  paddingLeft: '24px',
                  paddingRight: '24px'
                }}
                aria-label="View on GitHub"
              >
                <Flex align="center" gap="2">
                  <LucideIcon name="Github" size={18} color="currentColor" variant="outline" />
                  <span>View on GitHub</span>
                </Flex>
              </Button>
            </Box>

            {/* Quick Links */}
            <Box className="flex flex-wrap gap-6 justify-center lg:justify-start pt-2">
              <a
                href="/docs"
                className="flex items-center gap-2 text-[#64748b] hover:text-[#6366f1] transition-colors duration-200"
                onClick={() => trackCTAClick('explore-docs', 'hero')}
              >
                <LucideIcon name="Book" size={18} color="currentColor" variant="outline" />
                <Text size="3">Explore Documentation</Text>
              </a>
              <a
                href="https://discord.gg/doplan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#64748b] hover:text-[#6366f1] transition-colors duration-200"
                onClick={() => trackCTAClick('join-community', 'hero')}
              >
                <LucideIcon name="Users" size={18} color="currentColor" variant="outline" />
                <Text size="3">Join Community</Text>
              </a>
              <a
                href="https://github.com/DoPlan-dev/CLI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#64748b] hover:text-[#6366f1] transition-colors duration-200"
                onClick={() => trackCTAClick('star-on-github', 'hero')}
              >
                <LucideIcon name="Star" size={18} color="currentColor" variant="outline" />
                <Text size="3">Star on GitHub</Text>
              </a>
            </Box>
          </div>

          {/* Right Column - Terminal Visual (Desktop Only) */}
          <div className="hidden lg:block">
            <TerminalNew command={installCommand} output={terminalOutput} />
          </div>
        </div>
      </div>

      {/* Animated Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center gap-2 text-[#64748b] hover:text-[#6366f1] transition-colors duration-200 animate-bounce"
          aria-label="Scroll to workflow section"
        >
          <span className="text-sm font-medium">Scroll</span>
          <LucideIcon name="ArrowDown" size={24} color="currentColor" variant="outline" />
        </button>
      </div>
    </section>
  )
}
