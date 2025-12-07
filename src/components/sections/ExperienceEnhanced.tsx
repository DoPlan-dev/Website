import React, { useState } from 'react'
import { Heading, Text, Container, Flex, Button } from '@radix-ui/themes'
import { copyToClipboard } from '../../utils/clipboard'
import { trackCommandCopy } from '../../lib/analytics'

export const ExperienceEnhanced: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const installCommand = 'npx @doplan-dev/cli'

  const handleCopy = async () => {
    const success = await copyToClipboard(installCommand)
    if (success) {
      setCopied(true)
      trackCommandCopy(installCommand)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  const steps = [
    {
      title: 'Command',
      time: '30s',
      description: "One command. That's all. DoPlan scaffolds everything.",
      copy: 'npx @doplan-dev/cli',
    },
    {
      title: 'Idea',
      time: '60s',
      description: 'Tell DoPlan your idea. It asks smart follow-ups. Your vision becomes a plan.',
    },
    {
      title: 'Code',
      time: '60s',
      description: 'Development environment set. Git branch created. 18 agents ready to help. Start coding.',
    },
    {
      title: 'Ship',
      time: '150s',
      description: 'Mark task done with /done. Auto-commit. Auto-push. First achievement unlocked. You\'re a builder.',
    },
  ]

  return (
    <section id="experience" className="py-volt-16 md:py-volt-24 bg-white">
      <Container size="4">
        {/* Headline */}
        <div className="text-center mb-16">
          <Heading 
            size="8" 
            className="mb-4"
            style={{ 
              letterSpacing: '-0.02em',
              color: '#0f172a'
            }}
          >
            Your First 5 Minutes
          </Heading>
          <Text 
            size="5" 
            style={{ 
              color: '#64748b',
              lineHeight: '1.6'
            }}
          >
            The Magic Happens Here
          </Text>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="border border-[#e2e8f0] rounded-lg p-6 hover:shadow-volt-md transition-all duration-200 bg-white"
            >
              <Flex justify="between" align="start" gap="4" wrap="wrap">
                <Flex direction="column" gap="2" className="flex-1">
                  <Flex align="center" gap="3">
                    <span 
                      className="flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm"
                      style={{ 
                        backgroundColor: '#f1f5f9',
                        color: '#64748b'
                      }}
                    >
                      {index + 1}
                    </span>
                    <Heading 
                      size="5" 
                      className="font-semibold"
                      style={{ 
                        letterSpacing: '-0.01em',
                        color: '#0f172a'
                      }}
                    >
                      {step.title}
                    </Heading>
                  </Flex>
                  {step.copy && (
                    <code 
                      className="text-sm font-mono px-3 py-2 rounded"
                      style={{ 
                        backgroundColor: '#f8fafc',
                        color: '#0f172a',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      {step.copy}
                    </code>
                  )}
                  <Text 
                    size="3" 
                    style={{ 
                      color: '#64748b',
                      lineHeight: '1.6'
                    }}
                  >
                    {step.description}
                  </Text>
                </Flex>
                <Text 
                  size="2" 
                  className="font-medium"
                  style={{ color: '#94a3b8' }}
                >
                  {step.time}
                </Text>
              </Flex>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Text 
            size="4" 
            className="mb-6 font-medium"
            style={{ color: '#64748b' }}
          >
            Run the command below to start right now.
          </Text>
          <Flex justify="center" gap="3" wrap="wrap">
            <code 
              className="text-sm font-mono px-4 py-3 rounded"
              style={{ 
                backgroundColor: '#0f172a',
                color: '#ffffff',
                border: '1px solid #e2e8f0'
              }}
            >
              {installCommand}
            </code>
            <Button
              size="3"
              onClick={handleCopy}
              style={{ minHeight: '44px' }}
            >
              {copied ? 'Copied!' : 'Copy Command'}
            </Button>
          </Flex>
        </div>
      </Container>
    </section>
  )
}
