import React, { useState, useEffect } from 'react'
import { Heading, Text, Container, Flex, Card } from '@radix-ui/themes'

export const SocialProofSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const stats = [
    {
      number: '47,293',
      label: 'Active Developers',
      subtext: 'This Month',
    },
    {
      number: '128,547',
      label: 'Projects Launched',
      subtext: 'Average completion: 92%',
    },
    {
      number: '2.3M+',
      label: 'Hours Saved',
      subtext: 'Time spent shipping instead',
    },
  ]

  const testimonials = [
    {
      quote: "I had an idea on Monday. Shipped on Friday. DoPlan made that possible.",
      author: 'Alex',
      title: 'Junior Developer',
    },
    {
      quote: "My team uses DoPlan. Onboarding interns became a breeze. They're productive from day one.",
      author: 'Jamie',
      title: 'Team Lead',
    },
    {
      quote: "The achievements kept me motivated. I finished my first project in 2 weeks instead of abandoning it.",
      author: 'Morgan',
      title: 'Career Changer',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="social-proof" className="py-volt-12 md:py-volt-16 bg-white">
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
            Developers Are Already Here
          </Heading>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg border border-[#e2e8f0] bg-white"
            >
              <div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: '#0f172a' }}
              >
                {stat.number}
              </div>
              <div 
                className="text-lg font-semibold mb-1"
                style={{ color: '#0f172a' }}
              >
                {stat.label}
              </div>
              <div 
                className="text-sm"
                style={{ color: '#64748b' }}
              >
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <Card className="border border-[#e2e8f0] bg-white">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <Text 
                  size="5" 
                  className="mb-6 italic"
                  style={{ 
                    color: '#64748b',
                    lineHeight: '1.6'
                  }}
                >
                  "{testimonial.quote}"
                </Text>
                <Flex direction="column" gap="1">
                  <Text 
                    size="3" 
                    className="font-semibold"
                    style={{ color: '#0f172a' }}
                  >
                    {testimonial.author}
                  </Text>
                  <Text 
                    size="2" 
                    style={{ color: '#64748b' }}
                  >
                    {testimonial.title}
                  </Text>
                </Flex>
              </div>
            ))}
          </Card>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'w-8 bg-[#6366f1]' 
                    : 'w-2 bg-[#e2e8f0]'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
