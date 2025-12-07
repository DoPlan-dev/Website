import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Heading, Text, Card, Container, Flex, Button, Badge } from '@radix-ui/themes'
import { Icon } from '../components/ui/Icon'
import type { IconName } from '../components/ui/Icon'

interface Feature {
  title: string
  description: string
  icon: IconName
  color: string
  bgColor: string
  borderColor: string
  stat?: {
    icon: IconName
    text: string
  }
  cta?: {
    text: string
    link?: string
  }
}

const allFeatures: Feature[] = [
  {
    title: 'One Command, Everything Ready',
    description: 'Project structure. Git initialized. 18 AI agents active. Development environment live. All in 4.2 seconds.',
    icon: 'zap',
    color: '#6366f1',
    bgColor: '#E8F0FE',
    borderColor: '#6366f1',
    stat: {
      icon: 'clock',
      text: '4.2s average setup time',
    },
    cta: {
      text: 'See How →',
    },
  },
  {
    title: 'Turn Ideas Into Plans',
    description: 'Tell DoPlan your idea. It asks smart questions. You get a complete project plan. No blank page paralysis.',
    icon: 'lightbulb',
    color: '#FBBC04',
    bgColor: '#FEF7E0',
    borderColor: '#FBBC04',
    stat: {
      icon: 'checkmark',
      text: '95% completion rate',
    },
    cta: {
      text: 'Try Ideation →',
    },
  },
  {
    title: 'Your Team Inside the Terminal',
    description: 'Each specialized. Each teaching. Every suggestion is a lesson. You code. They guide. You both improve.',
    icon: 'brain',
    color: '#EA4335',
    bgColor: '#FDECEB',
    borderColor: '#EA4335',
    stat: {
      icon: 'users',
      text: '18 specialized agents',
    },
    cta: {
      text: 'Meet the Team →',
    },
  },
  {
    title: 'Git, Automated',
    description: 'Branch creation. Conventional commits. Auto-push. PR suggestions. You code. DoPlan handles Git.',
    icon: 'git-branch',
    color: '#34A853',
    bgColor: '#E6F4EA',
    borderColor: '#34A853',
    stat: {
      icon: 'zap',
      text: 'Zero manual git commands',
    },
    cta: {
      text: 'See Git Flow →',
    },
  },
  {
    title: '200+ Achievements. Stay Motivated',
    description: 'First task? Achievement unlocked. 10 completed? New milestone. First deployment? Legendary reward. Progress feels good.',
    icon: 'trophy',
    color: '#6366f1',
    bgColor: '#E8F0FE',
    borderColor: '#6366f1',
    stat: {
      icon: 'star',
      text: '200+ achievements',
    },
    cta: {
      text: 'Explore Achievements →',
    },
  },
  {
    title: 'Know Where Your Time Goes',
    description: 'Automatic time tracking. Task duration visible. Productivity insights. Never guess again.',
    icon: 'clock',
    color: '#FBBC04',
    bgColor: '#FEF7E0',
    borderColor: '#FBBC04',
    stat: {
      icon: 'zap',
      text: 'Automatic tracking',
    },
    cta: {
      text: 'See Analytics →',
    },
  },
  {
    title: 'Learn While You Build',
    description: 'Beginner? Detailed explanations. Intermediate? Balanced guidance. Advanced? Concise help. DoPlan adapts to you.',
    icon: 'book',
    color: '#EA4335',
    bgColor: '#FDECEB',
    borderColor: '#EA4335',
    stat: {
      icon: 'target',
      text: 'Adaptive to skill level',
    },
    cta: {
      text: 'See Learning Path →',
    },
  },
  {
    title: 'DoPlan Remembers You',
    description: 'Your preferences. Your style. Your dream. DoPlan becomes more you over time. Better help. Warmer greetings.',
    icon: 'heart',
    color: '#34A853',
    bgColor: '#E6F4EA',
    borderColor: '#34A853',
    stat: {
      icon: 'heart',
      text: 'Relationship builds over time',
    },
    cta: {
      text: 'How Personalization Works →',
    },
  },
]

const beginnerFeatures: Feature[] = allFeatures.filter(
  (f) => ['zap', 'lightbulb', 'book', 'trophy'].includes(f.icon)
)

const teamFeatures: Feature[] = allFeatures.filter(
  (f) => ['users', 'git-branch', 'clock', 'brain'].includes(f.icon)
)

const advancedFeatures: Feature[] = allFeatures.filter(
  (f) => ['git-branch', 'brain', 'heart'].includes(f.icon)
)

export const FeaturesNew: React.FC = () => {
  const tabs = [
    { id: 'all', label: 'All Features', icon: 'cube' as const, features: allFeatures },
    { id: 'beginners', label: 'For Beginners', icon: 'target' as const, features: beginnerFeatures },
    { id: 'teams', label: 'For Teams', icon: 'users' as const, features: teamFeatures },
    { id: 'advanced', label: 'For Advanced', icon: 'rocket' as const, features: advancedFeatures },
  ]

  return (
    <section id="features" className="py-volt-16 md:py-volt-24 bg-white min-h-screen">
      <Container size="4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Heading size="9" className="mb-4">
            Everything to Ship Your Ideas
          </Heading>
          <Text size="5" color="gray" className="max-w-3xl mx-auto">
            All the tools beginners need to go from idea to shipped product
          </Text>
        </div>

        {/* Tabs */}
        <Tabs.Root defaultValue="all" className="w-full">
          <Tabs.List className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className="flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 min-h-[48px] data-[state=active]:bg-blue-9 data-[state=active]:text-white"
              >
                <Icon name={tab.icon} size={20} color="currentColor" />
                <span>{tab.label}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {tabs.map((tab) => (
            <Tabs.Content key={tab.id} value={tab.id} className="mt-6">
              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tab.features.map((feature, index) => (
                  <Card
                    key={index}
                    className="border border-volt-border hover:shadow-volt-md transition-all duration-200 bg-white"
                    style={{ 
                      borderTop: `4px solid ${feature.borderColor}`,
                      borderRadius: '0.75rem'
                    }}
                  >
                    <Flex direction="column" gap="4">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-105"
                        style={{ backgroundColor: feature.bgColor }}
                      >
                        <Icon name={feature.icon} size={48} color={feature.color} />
                      </div>

                      {/* Title */}
                      <Heading size="4" className="font-semibold" style={{ letterSpacing: '-0.01em' }}>
                        {feature.title}
                      </Heading>

                      {/* Description */}
                      <Text size="3" color="gray" className="leading-relaxed">
                        {feature.description}
                      </Text>

                      {/* Stat Badge */}
                      {feature.stat && (
                        <Flex align="center" gap="2">
                          <Icon name={feature.stat.icon} size={20} color={feature.color} />
                          <Badge color={feature.color === '#6366f1' ? 'blue' : feature.color === '#FBBC04' ? 'amber' : feature.color === '#EA4335' ? 'red' : 'green'} size="2">
                            {feature.stat.text}
                          </Badge>
                        </Flex>
                      )}

                      {/* CTA */}
                      {feature.cta && (
                        <a
                          href={feature.cta.link || '#'}
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:underline"
                          style={{ color: feature.color }}
                        >
                          {feature.cta.text}
                          <Icon name="arrow-right" size={16} color={feature.color} />
                        </a>
                      )}
                    </Flex>
                  </Card>
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Heading size="6" className="mb-4">
            Ready to Get Started?
          </Heading>
          <Text size="4" color="gray" className="mb-6">
            Try DoPlan free. No credit card needed.
          </Text>
          <Button
            size="4"
            onClick={() => {
              const command = 'npx @doplan-dev/cli'
              navigator.clipboard.writeText(command)
            }}
            style={{ minHeight: '56px' }}
          >
            <Icon name="terminal" size={18} color="#FFFFFF" />
            Copy Installation Command
          </Button>
        </div>
      </Container>
    </section>
  )
}

