import React, { useState } from 'react'
import { Card } from '../ui/Card'
import { trackFAQToggle } from '../../lib/analytics'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'Is DoPlan CLI free to use?',
    answer: 'Yes! DoPlan CLI is completely free and open-source. You can start using it right away with no restrictions.',
  },
  {
    question: 'Do I need programming experience?',
    answer: 'No prior experience required! DoPlan CLI is designed for beginners and experts alike. The 18 AI agents guide you through every step.',
  },
  {
    question: 'How does it compare to other AI coding tools?',
    answer: 'DoPlan CLI offers 18 specialized AI agents that work together, ensuring you never get lost. Unlike other tools, it provides personalized guidance and a 98% success rate.',
  },
  {
    question: 'Can I use it for commercial projects?',
    answer: 'Absolutely! DoPlan CLI is perfect for both personal and commercial projects. Build production-ready apps with confidence.',
  },
  {
    question: 'What programming languages are supported?',
    answer: 'DoPlan CLI supports all major programming languages and frameworks. The AI agents adapt to your project needs automatically.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply run `npx @doplan-dev/cli` in your terminal and follow the guided setup. Type /hey to get started with your first project!',
  },
]

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index
    setOpenIndex(openIndex === index ? null : index)
    if (isOpening) {
      trackFAQToggle(faqs[index].question, true)
    }
  }

  return (
    <section id="faq" className="py-xxl md:py-xxxl">
      <div className="container mx-auto px-m md:px-xl">
        <div className="text-center mb-xxl">
          <h2 className="text-h2 md:text-h1 mb-m">Frequently Asked Questions</h2>
          <p className="text-body md:text-h3 text-mid max-w-2xl mx-auto">
            Everything you need to know about DoPlan CLI
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-m">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="hover:border-cyan/50 cursor-pointer transition-all duration-standard ease-smooth"
            >
              <button
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleFAQ(index)
                  }
                }}
                className="w-full text-left p-xl focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-void rounded-moderate"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between gap-m">
                  <h3 id={`faq-question-${index}`} className="text-h4 text-light pr-m">{faq.question}</h3>
                  <span
                    className={`text-cyan text-2xl transition-transform duration-standard ease-smooth flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </div>
                {openIndex === index && (
                  <div id={`faq-answer-${index}`} className="mt-m pt-m border-t border-cyan/20" role="region" aria-labelledby={`faq-question-${index}`}>
                    <p className="text-body text-mid">{faq.answer}</p>
                  </div>
                )}
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

