import React from 'react'
import { Heading, Text, Card, Container, Flex, Badge } from '@radix-ui/themes'
import { LucideIcon } from '../ui/LucideIcon'

export const ProblemSolutionCombined: React.FC = () => {
  const painPoints = [
    {
      title: 'Idea Overwhelm',
      text: "You have a great idea, but where do you start? Configuration? Project structure? By the time setup is done, you're tired.",
      icon: 'Lightbulb' as const,
    },
    {
      title: 'Scope Creep',
      text: "You know your features, but planning them across phases takes forever. One wrong assumption derails everything.",
      icon: 'ArrowUpRight' as const,
    },
    {
      title: 'Projects Never Ship',
      text: "80% of projects never ship. Not because the idea is bad, but because you lost momentum 3 weeks in.",
      icon: 'X' as const,
    },
  ]

  const solutions = [
    {
      title: '5 Seconds to Full Setup',
      description: 'Project structure. 18 AI agents. Git ready. Development environment live. No config. No decisions. Just code.',
      metric: '4.2s',
      icon: 'Zap' as const,
    },
    {
      title: 'Your Ideas → Complete Plans',
      description: 'DoPlan asks smart questions, captures your vision, organizes it into phases. No blank page paralysis.',
      metric: '95% completion',
      icon: 'Sparkles' as const,
    },
    {
      title: 'Completion Rate: 92%',
      description: 'Achievements, time tracking, and progress visualization keep you moving. You finish what you start.',
      metric: '92% shipped',
      icon: 'Trophy' as const,
    },
  ]

  return (
    <section id="problem-solution" className="py-20 md:py-32 bg-white">
      <Container size="4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Column */}
          <div className="flex flex-col">
            <Heading 
              size="8" 
              className="mb-6"
              style={{ 
                fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
                letterSpacing: '-0.02em',
                color: '#0f172a'
              }}
            >
              The Developer Dilemma
            </Heading>
            
            <div className="grid grid-cols-1 gap-4">
              {painPoints.map((point, index) => (
                <Card 
                  key={index} 
                  className="border border-[#e2e8f0] hover:shadow-volt-md transition-all duration-200 bg-white"
                  style={{ borderRadius: '0.75rem', padding: '1rem' }}
                >
                  <Flex direction="row" gap="4" align="start" className="h-full">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#fef2f2] flex items-center justify-center">
                      <LucideIcon 
                        name={point.icon} 
                        size={20} 
                        color="#ef4444" 
                        variant="outline"
                      />
                    </div>
                    <Flex direction="column" gap="0" className="flex-1">
                      <Heading 
                        size="4" 
                        className="font-semibold" 
                        style={{ 
                          letterSpacing: '-0.01em',
                          color: '#0f172a',
                          marginBottom: '0',
                          paddingBottom: '0'
                        }}
                      >
                        {point.title}
                      </Heading>
                      <Text 
                        size="3" 
                        style={{ 
                          color: '#64748b',
                          lineHeight: '1.6',
                          paddingTop: '0',
                          marginTop: '0'
                        }}
                      >
                        {point.text}
                      </Text>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </div>
          </div>

          {/* Solution Column */}
          <div className="flex flex-col">
            <Heading 
              size="8" 
              className="mb-6"
              style={{ 
                fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
                letterSpacing: '-0.02em',
                color: '#0f172a'
              }}
            >
              The Solution
            </Heading>
            
            <div className="grid grid-cols-1 gap-4">
              {solutions.map((solution, index) => (
                <Card 
                  key={index}
                  className="border border-[#e2e8f0] hover:shadow-volt-md transition-all duration-200 bg-white"
                  style={{ borderRadius: '0.75rem', padding: '1rem' }}
                >
                  <Flex direction="row" gap="4" align="start" className="h-full">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f0f9ff] flex items-center justify-center">
                      <LucideIcon 
                        name={solution.icon} 
                        size={20} 
                        color="#6366f1" 
                        variant="outline"
                      />
                    </div>
                    <Flex direction="column" gap="0" className="flex-1">
                      <Flex justify="between" align="start" gap="4" style={{ marginBottom: '0', paddingBottom: '0' }}>
                        <Heading 
                          size="4" 
                          className="font-semibold" 
                          style={{ 
                            letterSpacing: '-0.01em',
                            color: '#0f172a',
                            marginBottom: '0',
                            paddingBottom: '0'
                          }}
                        >
                          {solution.title}
                        </Heading>
                        <Badge size="2" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>
                          {solution.metric}
                        </Badge>
                      </Flex>
                      <Text 
                        size="3" 
                        style={{ 
                          color: '#64748b',
                          lineHeight: '1.6',
                          paddingTop: '0',
                          marginTop: '0'
                        }}
                      >
                        {solution.description}
                      </Text>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

