import React, { useState, useEffect, useRef } from 'react'
import { Card } from '../ui/Card'

interface Command {
  name: string
  description: string
  usage: string
  example: string
  icon: string
}

const commands: Command[] = [
  {
    name: '/hey',
    description: 'Welcome, tutorial, and command introductions',
    usage: '/hey',
    example: 'Get started with DoPlan CLI',
    icon: '👋',
  },
  {
    name: '/do',
    description: 'Capture project idea, conduct meeting, and refine',
    usage: '/do [feature|now|meeting|refine]',
    example: 'Start your project journey',
    icon: '🚀',
  },
  {
    name: '/plan',
    description: 'Generate documents & execution plan',
    usage: '/plan [docs|content|everything|phases|next]',
    example: 'Create comprehensive project plan',
    icon: '📋',
  },
  {
    name: '/dev',
    description: 'Start coding with automatic completion detection',
    usage: '/dev [task_id]',
    example: 'Build features systematically',
    icon: '💻',
  },
  {
    name: '/sys',
    description: 'System control panel',
    usage: '/sys [status|optimize|performance|backup|restore]',
    example: 'Manage your project system',
    icon: '⚙️',
  },
]

export const CommandsSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(commands.length).fill(false))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 100) // Stagger animation
          }
        })
      },
      { threshold: 0.25 }
    )

    const cards = sectionRef.current?.querySelectorAll('[data-index]')
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section
      id="commands"
      ref={sectionRef}
      className="py-xxl container mx-auto px-xl"
    >
      <div className="text-center mb-xxl">
        <h2 className="text-h2 mb-m">5 Sacred Commands</h2>
        <p className="text-h3 text-mid max-w-2xl mx-auto">
          Simple commands. Powerful results. Your entire workflow in 5 steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl max-w-7xl mx-auto">
        {/* First row: 3 commands */}
        {commands.slice(0, 3).map((command, index) => (
          <div
            key={command.name}
            data-index={index}
            className={`transition-entrance ${
              visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="h-full hover:border-cyan/50 cursor-pointer group">
              <div className="flex items-start gap-m mb-m">
                <span className="text-4xl" aria-hidden="true">
                  {command.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-h4 mb-s group-hover:text-cyan transition-standard">
                    {command.name}
                  </h3>
                  <code className="text-code text-cyan/80 text-small">
                    {command.usage}
                  </code>
                </div>
              </div>

              <p className="text-body text-mid mb-m">{command.description}</p>

              <div className="mt-auto pt-m border-t border-cyan/20">
                <p className="text-small text-mid">
                  <span className="text-cyan">Example:</span> {command.example}
                </p>
              </div>
            </Card>
          </div>
        ))}
        
        {/* Second row: 2 commands (centered) */}
        <div className="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row justify-center gap-xl">
          {commands.slice(3, 5).map((command, index) => (
            <div
              key={command.name}
              data-index={index + 3}
              className={`transition-entrance w-full md:max-w-md ${
                visibleCards[index + 3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Card className="h-full hover:border-cyan/50 cursor-pointer group">
                <div className="flex items-start gap-m mb-m">
                  <span className="text-4xl" aria-hidden="true">
                    {command.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-s group-hover:text-cyan transition-standard">
                      {command.name}
                    </h3>
                    <code className="text-code text-cyan/80 text-small">
                      {command.usage}
                    </code>
                  </div>
                </div>

                <p className="text-body text-mid mb-m">{command.description}</p>

                <div className="mt-auto pt-m border-t border-cyan/20">
                  <p className="text-small text-mid">
                    <span className="text-cyan">Example:</span> {command.example}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-xxl text-center">
        <p className="text-body text-mid">
          Each command activates specialized AI agents to guide you through your project journey.
        </p>
      </div>
    </section>
  )
}
