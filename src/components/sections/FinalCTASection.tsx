import React from 'react'
import { Heading, Text, Container, Flex, Button, Card } from '@radix-ui/themes'
import { copyToClipboard } from '../../utils/clipboard'
import { trackCTAClick } from '../../lib/analytics'
import { LucideIcon } from '../ui/LucideIcon'

export const FinalCTASection: React.FC = () => {
  const installCommand = 'npx @doplan-dev/cli'

  const handleCopyCommand = async () => {
    await copyToClipboard(installCommand)
    trackCTAClick('copy-command', 'final-cta')
  }

  const paths = [
    {
      title: 'Use NPX (No Install)',
      description: 'Run one command in your terminal. Start in 4 seconds.',
      buttonText: 'Copy Command',
      onClick: handleCopyCommand,
      icon: 'Terminal' as const,
    },
    {
      title: 'Watch Quick Tour',
      description: 'See exactly how it works. 90-second guided tour.',
      buttonText: 'Start Tour',
      onClick: () => trackCTAClick('start-tour', 'final-cta'),
      icon: 'Video' as const,
    },
    {
      title: 'Read Docs',
      description: 'Complete guide to shipping your first project.',
      buttonText: 'Open Docs',
      onClick: () => {
        window.location.href = '/docs'
        trackCTAClick('open-docs', 'final-cta')
      },
      icon: 'Book' as const,
    },
  ]

  return (
    <section
      id="final-cta"
      className="py-20 md:py-32 bg-white"
    >
      <Container size="4">
        {/* Headline */}
        <div className="text-center mb-12">
          <Heading 
            size="8" 
            className="mb-4"
            style={{ 
              fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
              letterSpacing: '-0.02em',
              color: '#0f172a'
            }}
          >
            Ready to Ship Something?
          </Heading>
          <Text 
            size="5" 
            style={{ 
              color: '#64748b',
              lineHeight: '1.6'
            }}
          >
            Your first 5 minutes start now.
          </Text>
        </div>

        {/* Three Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {paths.map((path, index) => (
            <Card 
              key={index}
              className="border border-[#e2e8f0] hover:shadow-volt-md transition-all duration-200 bg-white"
              style={{ borderRadius: '0.75rem', padding: '1rem' }}
            >
              <Flex direction="column" gap="4">
                <div>
                  <Flex align="center" gap="3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#f1f5f9] flex items-center justify-center">
                      <LucideIcon 
                        name={path.icon} 
                        size={24} 
                        color="#6366f1" 
                        variant="outline"
                      />
                    </div>
                    <Heading 
                      size="4" 
                      className="font-semibold"
                      style={{ 
                        letterSpacing: '-0.01em',
                        color: '#0f172a',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {path.title}
                    </Heading>
                  </Flex>
                  <Text 
                    size="3" 
                    style={{ 
                      color: '#64748b',
                      lineHeight: '1.6'
                    }}
                  >
                    {path.description}
                  </Text>
                </div>
                <Button
                  size="3"
                  variant="outline"
                  onClick={path.onClick}
                  style={{ 
                    minHeight: '44px',
                    marginTop: 'auto'
                  }}
                >
                  {path.buttonText}
                </Button>
              </Flex>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
