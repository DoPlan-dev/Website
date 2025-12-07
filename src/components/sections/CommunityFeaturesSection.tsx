import React, { useState, useEffect } from 'react'
import { Heading, Text, Container, Flex, Button, Card } from '@radix-ui/themes'
import { LucideIcon } from '../ui/LucideIcon'
import { trackCTAClick } from '../../lib/analytics'
import { fetchNpmDownloads } from '../../lib/npm'

export const CommunityFeaturesSection: React.FC = () => {
  const [npmDownloads, setNpmDownloads] = useState<string>('0+')

  useEffect(() => {
    // Fetch npm downloads on component mount
    fetchNpmDownloads('@doplan-dev/cli').then((downloads) => {
      if (downloads) {
        setNpmDownloads(downloads)
      }
    })
  }, [])

  const stats = [
    {
      icon: 'Terminal' as const,
      value: '5',
      label: 'Main Commands',
    },
    {
      icon: 'GitBranch' as const,
      value: '15+',
      label: 'Sub-Commands',
    },
    {
      icon: 'Brain' as const,
      value: '18',
      label: 'AI Agents',
    },
    {
      icon: 'Code' as const,
      value: '1000+',
      label: 'Rules Library',
    },
    {
      icon: 'Book' as const,
      value: '52+',
      label: 'Docs Pages',
    },
    {
      icon: 'Download' as const,
      value: npmDownloads,
      label: 'NPM Downloads',
    },
  ]

  const features = [
    {
      title: 'Performance',
      subtitle: 'Lightning-fast with optimized responses',
      icon: 'Zap' as const,
      items: [
        { text: '<100ms command execution', icon: 'Zap' as const },
        { text: 'Cached responses for speed', icon: 'HardDrive' as const },
        { text: 'Parallel processing power', icon: 'Layers' as const },
      ],
    },
    {
      title: 'Language Support',
      subtitle: 'Works with your preferred stack',
      icon: 'Code' as const,
      items: [
        { text: 'Go, JavaScript, TypeScript', icon: 'Code' as const },
        { text: 'Python, Rust, and more', icon: 'FileCode' as const },
        { text: 'Framework-specific rules', icon: 'Settings' as const },
      ],
    },
    {
      title: 'Platform Support',
      subtitle: 'Cross-platform compatibility',
      icon: 'Monitor' as const,
      items: [
        { text: 'Native macOS support', icon: 'Monitor' as const },
        { text: 'Full Linux compatibility', icon: 'Terminal' as const },
        { text: 'Windows (WSL) integration', icon: 'Laptop' as const },
      ],
    },
  ]

  return (
    <section
      id="community-features"
      className="py-20 md:py-32 bg-white"
    >
      <Container size="4">
        {/* Header */}
        <div className="text-center mb-16">
          <Heading 
            size="8" 
            className="mb-4"
            style={{ 
              fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
              letterSpacing: '-0.02em',
              color: '#0f172a'
            }}
          >
            Community & Features
          </Heading>
          <Text 
            size="5" 
            style={{ 
              color: '#64748b',
              lineHeight: '1.6'
            }}
          >
            Join thousands of developers building better projects with DoPlan
          </Text>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border border-[#e2e8f0] bg-white text-center hover:shadow-volt-md transition-all duration-200"
              style={{ borderRadius: '0.75rem', padding: '1rem' }}
            >
              <Flex direction="column" gap="3" align="center">
                <div className="w-10 h-10 rounded-lg bg-[#f0f9ff] flex items-center justify-center">
                  <LucideIcon 
                    name={stat.icon} 
                    size={20} 
                    color="#6366f1" 
                    variant="outline"
                  />
                </div>
                <Heading 
                  size="6" 
                  style={{ 
                    color: '#0f172a',
                    fontWeight: 700
                  }}
                >
                  {stat.value}
                </Heading>
                <Text 
                  size="2" 
                  style={{ 
                    color: '#64748b',
                    lineHeight: '1.4'
                  }}
                >
                  {stat.label}
                </Text>
              </Flex>
            </Card>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-[#e2e8f0] bg-white hover:shadow-volt-md transition-all duration-200 h-full"
              style={{ borderRadius: '0.75rem', padding: '1rem' }}
            >
              <Flex direction="column" gap="5" className="h-full">
                <div className="flex flex-col items-center md:items-start">
                  <div className="mb-4 flex items-center justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-xl bg-[#f0f9ff] flex items-center justify-center">
                      <LucideIcon 
                        name={feature.icon} 
                        size={32} 
                        color="#6366f1" 
                        variant="outline"
                      />
                    </div>
                  </div>
                  <Heading 
                    size="5" 
                    className="font-semibold"
                    style={{ 
                      letterSpacing: '-0.01em',
                      color: '#0f172a',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {feature.title}
                  </Heading>
                  <Text 
                    size="3" 
                    style={{ 
                      color: '#64748b',
                      lineHeight: '1.6'
                    }}
                  >
                    {feature.subtitle}
                  </Text>
                </div>
                <Flex direction="column" gap="3" className="flex-1">
                  {feature.items.map((item, itemIndex) => (
                    <Flex key={itemIndex} align="start" gap="3">
                      <div className="flex-shrink-0 mt-0.5">
                        <LucideIcon 
                          name={item.icon} 
                          size={18} 
                          color="#6366f1" 
                          variant="outline"
                        />
                      </div>
                      <Text 
                        size="3" 
                        style={{ 
                          color: '#64748b',
                          lineHeight: '1.6'
                        }}
                      >
                        {item.text}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="4"
            variant="outline"
            onClick={() => {
              window.open('https://github.com/DoPlan-dev/CLI', '_blank')
              trackCTAClick('github-repository', 'community-features')
            }}
            style={{ 
              minHeight: '48px',
              paddingLeft: '24px',
              paddingRight: '24px'
            }}
          >
            <Flex align="center" gap="2">
              <LucideIcon name="Github" size={20} color="currentColor" variant="outline" />
              <span>GitHub Repository</span>
            </Flex>
          </Button>
          <Button
            size="4"
            variant="outline"
            onClick={() => {
              window.open('https://discord.gg/doplan', '_blank')
              trackCTAClick('discord-community', 'community-features')
            }}
            style={{ 
              minHeight: '48px',
              paddingLeft: '24px',
              paddingRight: '24px'
            }}
          >
            <Flex align="center" gap="2">
              <LucideIcon name="Users" size={20} color="currentColor" variant="outline" />
              <span>Discord Community</span>
            </Flex>
          </Button>
        </div>
      </Container>
    </section>
  )
}

