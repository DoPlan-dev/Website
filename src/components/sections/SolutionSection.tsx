import React from 'react'
import { Heading, Text, Card, Container, Flex, Button, Badge } from '@radix-ui/themes'

export const SolutionSection: React.FC = () => {
  const pillars = [
    {
      title: '5 Seconds to Full Setup',
      description: 'Project structure. 18 AI agents. Git ready. Development environment live. No config. No decisions. Just code.',
      metric: '4.2s',
    },
    {
      title: 'Your Ideas → Complete Plans',
      description: 'DoPlan asks smart questions, captures your vision, organizes it into phases. No blank page paralysis.',
      metric: '95% completion',
    },
    {
      title: '18 Agents Learning Your Style',
      description: 'Not just coding. Teaching. Every suggestion is a lesson. Every task builds your skills. You get better while you ship.',
      metric: '40% faster by week 3',
    },
    {
      title: 'Completion Rate: 92%',
      description: 'Achievements, time tracking, and progress visualization keep you moving. You finish what you start.',
      metric: '92% shipped',
    },
  ]

  return (
    <section id="solution" className="py-volt-16 md:py-volt-24 bg-white">
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
            The 5-Second Transformation
          </Heading>
        </div>

        {/* Four Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="border border-[#e2e8f0] hover:shadow-volt-md transition-all duration-200 bg-white"
              style={{ 
                borderRadius: '0.75rem'
              }}
            >
              <Flex direction="column" gap="3" className="flex-1">
                <Flex justify="between" align="start" gap="4">
                  <Heading 
                    size="4" 
                    className="font-semibold" 
                    style={{ 
                      letterSpacing: '-0.01em',
                      color: '#0f172a'
                    }}
                  >
                    {pillar.title}
                  </Heading>
                  <Badge size="2" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>
                    {pillar.metric}
                  </Badge>
                </Flex>
                <Text 
                  size="3" 
                  style={{ 
                    color: '#64748b',
                    lineHeight: '1.6'
                  }}
                >
                  {pillar.description}
                </Text>
              </Flex>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="4"
            onClick={() => {
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{ 
              minHeight: '48px',
              paddingLeft: '24px',
              paddingRight: '24px'
            }}
          >
            Start Your First Project
          </Button>
        </div>
      </Container>
    </section>
  )
}

