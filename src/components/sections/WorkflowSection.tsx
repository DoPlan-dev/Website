import React from 'react'
import { Heading, Text, Container, Flex, Card } from '@radix-ui/themes'

export const WorkflowSection: React.FC = () => {
  const commands = [
    {
      command: '/do',
      title: 'Capture Your Idea',
      description: 'Start with /do to capture your project idea. DoPlan asks smart questions and helps you refine your vision into an actionable plan.',
    },
    {
      command: '/plan',
      title: 'Generate Your Plan',
      description: 'Use /plan to transform your idea into a complete project plan. Get phases, tasks, documentation, and an execution roadmap.',
    },
    {
      command: '/dev',
      title: 'Start Coding',
      description: 'Run /dev to begin development. DoPlan sets up your project structure, initializes Git, and activates 18 AI agents ready to help.',
    },
  ]

  return (
    <section id="workflow" className="py-20 md:py-32 bg-white">
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
            Simple Workflow. Powerful Results.
          </Heading>
          <Text 
            size="4" 
            style={{ 
              color: '#64748b',
              lineHeight: '1.6'
            }}
          >
            Three commands to go from idea to shipped product
          </Text>
        </div>

        {/* Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {commands.map((cmd, index) => (
            <Card
              key={index}
              className="border border-[#e2e8f0] hover:shadow-volt-md transition-all duration-200 bg-white relative overflow-hidden"
              style={{ borderRadius: '0.75rem', padding: '1rem' }}
            >
              {/* Background Number */}
              <div
                className="absolute right-0 top-0 pointer-events-none"
                style={{
                  fontSize: '120px',
                  fontWeight: 700,
                  color: '#f1f5f9',
                  lineHeight: 1,
                  transform: 'translateY(-10px)',
                  zIndex: 0,
                }}
                aria-hidden="true"
              >
                {index + 1}
              </div>
              
              <Flex direction="column" gap="4" className="h-full relative z-10">
                <div>
                  <Flex align="center" gap="3" wrap="wrap">
                    <code
                      className="text-lg font-mono font-semibold px-3 py-1.5 rounded inline-block"
                      style={{
                        backgroundColor: '#f8fafc',
                        color: '#6366f1',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      {cmd.command}
                    </code>
                    <Heading
                      size="4"
                      className="font-semibold flex-1"
                      style={{
                        letterSpacing: '-0.01em',
                        color: '#0f172a',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {cmd.title}
                    </Heading>
                  </Flex>
                  <Text
                    size="3"
                    style={{
                      color: '#64748b',
                      lineHeight: '1.6'
                    }}
                  >
                    {cmd.description}
                  </Text>
                </div>
              </Flex>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

