import React from 'react'
import { Heading, Text, Container } from '@radix-ui/themes'
import { FAQSectionNew } from '../components/sections/FAQSectionNew'
import { ExperienceEnhanced } from '../components/sections/ExperienceEnhanced'

export const HelpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <Container size="4" className="py-volt-12 md:py-volt-16">
        <div className="text-center mb-12">
          <Heading 
            size="8" 
            className="mb-4"
            style={{ 
              letterSpacing: '-0.02em',
              color: '#0f172a'
            }}
          >
            Help & FAQ
          </Heading>
          <Text 
            size="5" 
            style={{ 
              color: '#64748b',
              lineHeight: '1.6'
            }}
          >
            Everything you need to know to get started
          </Text>
        </div>
      </Container>

      {/* Getting Started Section */}
      <ExperienceEnhanced />

      {/* FAQ Section */}
      <FAQSectionNew />
    </div>
  )
}

