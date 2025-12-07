import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { Heading, Text, Container } from '@radix-ui/themes'
import { trackFAQToggle } from '../../lib/analytics'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'Is this just another scaffold tool?',
    answer:
      'No. DoPlan is a complete development companion. It doesn\'t just create projects—it guides you through building them. Git automation, time tracking, AI coaching, achievements, and personalization. All built-in. Most tools create structure. DoPlan creates momentum.',
  },
  {
    question: 'I\'m a beginner. Will I understand it?',
    answer:
      'DoPlan is built for beginners. Every step is explained. The 18 AI agents teach best practices as you code. You\'ll learn industry standards naturally. Stat: 89% of beginners complete their first project.',
  },
  {
    question: 'Doesn\'t this replace learning?',
    answer:
      'Absolutely not. DoPlan enhances learning. Each AI agent explains why it suggests something. You learn by doing, not by memorizing. You understand the "why" behind every decision.',
  },
  {
    question: 'My existing projects won\'t work with this.',
    answer:
      'DoPlan works alongside your existing projects. You can use individual features like time tracking and achievements with any project. Start new projects with DoPlan, or integrate it gradually.',
  },
  {
    question: 'Is there a free version?',
    answer:
      'DoPlan CLI is completely free and open-source. All core features are available at no cost. No credit card required. No hidden fees.',
  },
  {
    question: 'How is DoPlan different from [competing tool]?',
    answer:
      'DoPlan is the only tool that combines instant project scaffolding, 18 specialized AI agents, achievements, time tracking, and personalized learning—all in one. It\'s not just a tool, it\'s your development companion that grows with you.',
  },
]

export const FAQSectionNew: React.FC = () => {
  return (
    <section id="faq" className="py-volt-12 md:py-volt-16 bg-white">
      <Container size="3">
        <div className="text-center mb-16">
          <Heading size="8" className="mb-4">
            Questions Before You Start?
          </Heading>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          className="max-w-3xl mx-auto space-y-3"
          onValueChange={(value) => {
            if (value) {
              const faqIndex = faqs.findIndex((faq) => faq.question === value)
              if (faqIndex !== -1) {
                trackFAQToggle(faqs[faqIndex].question, true)
              }
            }
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={faq.question}
              className="overflow-hidden rounded-lg border border-gray-6 bg-white"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 p-6 text-left hover:bg-gray-2 transition-colors">
                  <Heading size="4" weight="medium" className="pr-4">
                    {faq.question}
                  </Heading>
                  <svg
                    className="h-5 w-5 text-gray-11 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden">
                <div className="px-6 pb-6">
                  <Text size="3" color="gray" className="leading-relaxed">
                    {faq.answer}
                  </Text>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </section>
  )
}

