import React, { useState, useEffect, useRef } from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { trackCTAClick } from '../lib/analytics'

interface Feature {
  title: string
  description: string
  icon: string
}

interface Agent {
  name: string
  role: string
  description: string
}

interface Competitor {
  name: string
  comparison: string[]
}

const keyFeatures: Feature[] = [
  {
    title: 'Automated Workflows',
    description: '18 specialized AI agents handle project management, code generation, testing, and deployment automatically.',
    icon: '⚡',
  },
  {
    title: 'Clean Command Interface',
    description: 'Five simple commands (/hey, /do, /plan, /dev, /sys) replace complex toolchains and workflows.',
    icon: '🎯',
  },
  {
    title: 'Intelligent Communication',
    description: 'AI agents communicate with each other, ensuring seamless project coordination and consistency.',
    icon: '🤝',
  },
  {
    title: 'Built-in Learning',
    description: 'Learn as you build. Get explanations, best practices, and guidance throughout your project journey.',
    icon: '📚',
  },
  {
    title: 'Production-Ready Output',
    description: 'Generate production-quality code, documentation, and project structures from day one.',
    icon: '🚀',
  },
  {
    title: 'Zero Configuration',
    description: 'Start building immediately. No complex setup, no configuration files, no learning curve.',
    icon: '✨',
  },
]

const aiAgents: Agent[] = [
  { name: 'Product Manager', role: 'Planning & Strategy', description: 'Defines product vision and requirements' },
  { name: 'Engineering Lead', role: 'Architecture & Design', description: 'Designs system architecture and technical decisions' },
  { name: 'Frontend Lead', role: 'UI/UX Development', description: 'Builds user interfaces and experiences' },
  { name: 'Backend Lead', role: 'API & Services', description: 'Develops APIs and backend services' },
  { name: 'QA Engineer', role: 'Testing & Quality', description: 'Ensures code quality and tests functionality' },
  { name: 'DevOps Engineer', role: 'Deployment & Infrastructure', description: 'Manages deployment and infrastructure' },
  { name: 'Security Specialist', role: 'Security & Compliance', description: 'Ensures security best practices' },
  { name: 'Documentation Writer', role: 'Documentation', description: 'Creates comprehensive documentation' },
  { name: 'Code Reviewer', role: 'Code Quality', description: 'Reviews code for quality and standards' },
  { name: 'Performance Engineer', role: 'Performance', description: 'Optimizes application performance' },
  { name: 'Accessibility Specialist', role: 'Accessibility', description: 'Ensures WCAG compliance' },
  { name: 'SEO Specialist', role: 'SEO & Marketing', description: 'Optimizes for search and marketing' },
  { name: 'Database Architect', role: 'Data Management', description: 'Designs database schemas and queries' },
  { name: 'API Designer', role: 'API Design', description: 'Creates RESTful and GraphQL APIs' },
  { name: 'UI Designer', role: 'Visual Design', description: 'Creates visual designs and mockups' },
  { name: 'Project Orchestrator', role: 'Project Management', description: 'Coordinates project execution' },
  { name: 'Technical Writer', role: 'Technical Content', description: 'Writes technical documentation' },
  { name: 'Mentor', role: 'Learning & Growth', description: 'Provides guidance and learning support' },
]

const competitors: Competitor[] = [
  {
    name: 'spec-kit',
    comparison: [
      'DoPlan: 18 specialized AI agents vs spec-kit: Limited automation',
      'DoPlan: 5 simple commands vs spec-kit: Complex workflows',
      'DoPlan: Built-in learning vs spec-kit: Documentation only',
      'DoPlan: Production-ready output vs spec-kit: Templates only',
    ],
  },
  {
    name: 'bmad',
    comparison: [
      'DoPlan: Intelligent agent communication vs bmad: Manual coordination',
      'DoPlan: Zero configuration vs bmad: Setup required',
      'DoPlan: Complete project lifecycle vs bmad: Limited scope',
      'DoPlan: Personalized assistance vs bmad: Generic templates',
    ],
  },
]

const stats = {
  users: '50,000+',
  projects: '10,000+',
  successRate: '98%',
  avgTimeToFirstFeature: '15 min',
}

export const Features: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(5).fill(false))
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-section-index') || '0')
            setTimeout(() => {
              setVisibleSections((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 150) // Stagger animation
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="features" className="py-xxl md:py-xxxl">
      <div className="container mx-auto px-m md:px-xl">
        {/* Hero Section */}
        <div className="text-center mb-xxl">
          <h1 className="text-hero md:text-h1 mb-m">Powerful Features</h1>
          <p className="text-body md:text-h3 text-mid max-w-3xl mx-auto">
            Everything you need to build production apps without the burnout. 
            Powered by 18 specialized AI agents working together.
          </p>
        </div>

        {/* Key Features Grid */}
        <div 
          className="mb-xxxl"
          ref={(el) => (sectionRefs.current[0] = el)}
          data-section-index="0"
        >
          <h2 className="text-h2 mb-xl text-center">Key Features</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-l md:gap-xl max-w-7xl mx-auto transition-entrance ${
            visibleSections[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="h-full hover:border-cyan/50 cursor-pointer group">
                <div className="flex items-start gap-m mb-m">
                  <span className="text-4xl" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-s group-hover:text-cyan transition-all duration-standard ease-smooth">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-body text-mid">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* 18 AI Agents Section */}
        <div 
          className="mb-xxxl"
          ref={(el) => (sectionRefs.current[1] = el)}
          data-section-index="1"
        >
          <div className={`text-center mb-xl transition-entrance ${
            visibleSections[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-h2 mb-m">18 Specialized AI Agents</h2>
            <p className="text-body text-mid max-w-2xl mx-auto">
              Each agent has a specific role and expertise. They work together seamlessly 
              to guide you through every aspect of your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-l md:gap-xl max-w-7xl mx-auto">
            {aiAgents.map((agent, index) => (
              <Card key={index} className="hover:border-cyan/50 cursor-pointer group">
                <div className="mb-s">
                  <h3 className="text-h4 mb-xs group-hover:text-cyan transition-all duration-standard ease-smooth">
                    {agent.name}
                  </h3>
                  <p className="text-small text-cyan mb-s">{agent.role}</p>
                </div>
                <p className="text-body text-mid">{agent.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Proof Section */}
        <div 
          className="mb-xxxl"
          ref={(el) => (sectionRefs.current[2] = el)}
          data-section-index="2"
        >
          <div className={`bg-void border border-cyan/30 rounded-large p-xl md:p-xxl transition-entrance ${
            visibleSections[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-xl">
              <h2 className="text-h2 mb-m">Trusted by Developers</h2>
              <p className="text-body text-mid">
                Join thousands of developers building production apps with DoPlan
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-l md:gap-xl max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-h2 md:text-hero text-cyan mb-s">{stats.users}</div>
                <div className="text-small text-mid">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-h2 md:text-hero text-cyan mb-s">{stats.projects}</div>
                <div className="text-small text-mid">Projects Created</div>
              </div>
              <div className="text-center">
                <div className="text-h2 md:text-hero text-cyan mb-s">{stats.successRate}</div>
                <div className="text-small text-mid">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-h3 md:text-hero text-cyan mb-s">{stats.avgTimeToFirstFeature}</div>
                <div className="text-small text-mid">Avg. Time to Feature</div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitor Comparison */}
        <div 
          className="mb-xxxl"
          ref={(el) => (sectionRefs.current[3] = el)}
          data-section-index="3"
        >
          <div className={`text-center mb-xl transition-entrance ${
            visibleSections[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-h2 mb-m">Why Choose DoPlan?</h2>
            <p className="text-body text-mid max-w-2xl mx-auto">
              See how DoPlan compares to other tools in the market
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl max-w-5xl mx-auto">
            {competitors.map((competitor, index) => (
              <Card key={index} className="hover:border-cyan/50">
                <h3 className="text-h3 mb-m">vs {competitor.name}</h3>
                <ul className="space-y-m">
                  {competitor.comparison.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-m">
                      <span className="text-success text-xl mt-xs">✓</span>
                      <span className="text-body text-mid flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="text-center"
          ref={(el) => (sectionRefs.current[4] = el)}
          data-section-index="4"
        >
          <div className={`transition-entrance ${
            visibleSections[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="mb-xl">
            <h2 className="text-h2 mb-m">Ready to Get Started?</h2>
            <p className="text-body text-mid max-w-2xl mx-auto mb-xl">
              Join thousands of developers building production apps with DoPlan CLI
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-m justify-center items-center">
            <Button
              variant="primary"
              onClick={() => {
                window.location.href = '#home'
                trackCTAClick('get-started', 'features-cta')
              }}
              className="w-full sm:w-auto"
            >
              Start Building Free →
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                window.open('https://github.com/DoPlan-dev/Website', '_blank')
                trackCTAClick('github', 'features-cta')
              }}
              className="w-full sm:w-auto"
            >
              Star on GitHub
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
