import React from 'react'
import { Heading, Text, Card, Container, Flex } from '@radix-ui/themes'

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      title: 'Idea Overwhelm',
      text: "You have a great idea, but where do you start? Configuration? Project structure? By the time setup is done, you're tired.",
    },
    {
      title: 'Scope Creep',
      text: "You know your features, but planning them across phases takes forever. One wrong assumption derails everything.",
    },
    {
      title: 'Projects Never Ship',
      text: "80% of projects never ship. Not because the idea is bad, but because you lost momentum 3 weeks in.",
    },
  ]

  return (
    <section id="problem" className="py-volt-16 md:py-volt-24 bg-white">
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
            The Developer Dilemma
          </Heading>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className="border border-[#e2e8f0] hover:shadow-volt-md transition-all duration-200 bg-white"
              style={{ borderRadius: '0.75rem' }}
            >
              <Flex direction="column" gap="4">
                <Heading 
                  size="5" 
                  className="font-semibold" 
                  style={{ 
                    letterSpacing: '-0.01em',
                    color: '#0f172a'
                  }}
                >
                  {point.title}
                </Heading>
                <Text 
                  size="3" 
                  style={{ 
                    color: '#64748b',
                    lineHeight: '1.6'
                  }}
                >
                  {point.text}
                </Text>
              </Flex>
            </Card>
          ))}
        </div>

        {/* Narrative Text */}
        <div className="max-w-3xl mx-auto text-center">
          <Text 
            size="5" 
            style={{ 
              color: '#64748b',
              lineHeight: '1.6'
            }}
          >
            "You're not lazy. You're stuck between inspiration and execution.
            <br />
            DoPlan is the bridge. The ritual. The reason you finally ship."
          </Text>
        </div>
      </Container>
    </section>
  )
}

