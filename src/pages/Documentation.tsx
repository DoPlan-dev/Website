import React, { useState, useRef } from 'react'
import { Card } from '../components/ui/Card'

interface CommandDoc {
  name: string
  description: string
  usage: string
  subCommands?: SubCommand[]
  examples: string[]
  icon: string
}

interface SubCommand {
  name: string
  description: string
  usage: string
  example?: string
}

const commands: CommandDoc[] = [
  {
    name: '/hey',
    description: 'Welcome, tutorial, and command introductions. Perfect starting point for new users.',
    usage: '/hey',
    examples: [
      'Type /hey to get started with DoPlan CLI',
      'Get a comprehensive tutorial on all available commands',
      'Learn about the 18 AI agents and how they work together',
    ],
    icon: '👋',
  },
  {
    name: '/do',
    description: 'Capture project idea, conduct meeting, and refine. The core command for starting and managing projects.',
    usage: '/do [subcommand]',
    subCommands: [
      {
        name: 'feature',
        description: 'Start working on a specific feature',
        usage: '/do feature [feature_name]',
        example: '/do feature "user authentication"',
      },
      {
        name: 'now',
        description: 'Start working on the next task immediately',
        usage: '/do now',
        example: '/do now',
      },
      {
        name: 'meeting',
        description: 'Conduct a project meeting with AI agents',
        usage: '/do meeting',
        example: '/do meeting',
      },
      {
        name: 'refine',
        description: 'Refine and improve existing project elements',
        usage: '/do refine [element]',
        example: '/do refine "database schema"',
      },
    ],
    examples: [
      '/do - Start a new project',
      '/do feature "payment integration" - Work on payment feature',
      '/do meeting - Conduct project review meeting',
    ],
    icon: '🚀',
  },
  {
    name: '/plan',
    description: 'Generate documents & execution plan. Create comprehensive project documentation and plans.',
    usage: '/plan [subcommand]',
    subCommands: [
      {
        name: 'docs',
        description: 'Generate documentation files',
        usage: '/plan docs',
        example: '/plan docs',
      },
      {
        name: 'content',
        description: 'Generate content for documentation',
        usage: '/plan content',
        example: '/plan content',
      },
      {
        name: 'everything',
        description: 'Generate all planning documents',
        usage: '/plan everything',
        example: '/plan everything',
      },
      {
        name: 'phases',
        description: 'Generate phase-based planning documents',
        usage: '/plan phases',
        example: '/plan phases',
      },
      {
        name: 'next',
        description: 'Generate plan for next phase',
        usage: '/plan next',
        example: '/plan next',
      },
    ],
    examples: [
      '/plan - Generate basic execution plan',
      '/plan docs - Create documentation structure',
      '/plan everything - Generate comprehensive project plan',
    ],
    icon: '📋',
  },
  {
    name: '/dev',
    description: 'Start coding with automatic completion detection. The system monitors your progress and marks tasks complete automatically.',
    usage: '/dev [task_id]',
    subCommands: [
      {
        name: 'task_id',
        description: 'Start specific task by ID',
        usage: '/dev [task_id]',
        example: '/dev 1.2 - Start task 1.2',
      },
    ],
    examples: [
      '/dev - Start next uncompleted task',
      '/dev 2.1 - Start specific task 2.1',
      '/dev --feature "auth" - Start specific feature',
    ],
    icon: '💻',
  },
  {
    name: '/sys',
    description: 'System control panel. Manage project state, performance, backups, and system health.',
    usage: '/sys [subcommand]',
    subCommands: [
      {
        name: 'status',
        description: 'Check project status and progress',
        usage: '/sys status',
        example: '/sys status',
      },
      {
        name: 'optimize',
        description: 'Optimize project structure and performance',
        usage: '/sys optimize',
        example: '/sys optimize',
      },
      {
        name: 'performance',
        description: 'Check and improve performance metrics',
        usage: '/sys performance',
        example: '/sys performance',
      },
      {
        name: 'backup',
        description: 'Create project backup',
        usage: '/sys backup',
        example: '/sys backup',
      },
      {
        name: 'restore',
        description: 'Restore project from backup',
        usage: '/sys restore [backup_id]',
        example: '/sys restore backup-2025-12-03',
      },
    ],
    examples: [
      '/sys status - Check project status',
      '/sys optimize - Optimize project',
      '/sys backup - Create backup',
    ],
    icon: '⚙️',
  },
]

export const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null)
  const commandRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const filteredCommands = commands.filter((cmd) => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      cmd.name.toLowerCase().includes(query) ||
      cmd.description.toLowerCase().includes(query) ||
      cmd.subCommands?.some((sub) => sub.name.toLowerCase().includes(query) || sub.description.toLowerCase().includes(query))
    )
  })

  const scrollToCommand = (commandName: string) => {
    const element = commandRefs.current[commandName]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setSelectedCommand(commandName)
    }
  }

  return (
    <section id="docs" className="py-xxl md:py-xxxl min-h-screen">
      <div className="container mx-auto px-m md:px-xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-xl">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              {/* Search */}
              <div className="mb-xl">
                <input
                  type="text"
                  placeholder="Search commands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-m py-m bg-void border border-cyan/20 rounded-moderate text-light placeholder-mid focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan transition-all duration-standard ease-smooth min-h-[48px]"
                />
              </div>

              {/* Command Navigation */}
              <nav className="space-y-s">
                <h3 className="text-small font-semibold text-light mb-m">Commands</h3>
                {commands.map((cmd) => (
                  <button
                    key={cmd.name}
                    onClick={() => scrollToCommand(cmd.name)}
                    className={`w-full text-left px-m py-m rounded-moderate transition-all duration-standard ease-smooth min-h-[48px] flex items-center ${
                      selectedCommand === cmd.name
                        ? 'bg-cyan/20 text-cyan border border-cyan/30'
                        : 'text-mid hover:text-cyan hover:bg-void/50'
                    }`}
                  >
                    <div className="flex items-center gap-s">
                      <span>{cmd.icon}</span>
                      <span className="text-code">{cmd.name}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-xl md:mb-xxl">
              <h1 className="text-h1 md:text-hero mb-m">Documentation</h1>
              <p className="text-body md:text-h3 text-mid max-w-3xl">
                Complete guide to DoPlan CLI commands. Learn how to use each command and its sub-commands to build production apps efficiently.
              </p>
            </div>

            {/* Command Documentation */}
            <div className="space-y-xxxl">
              {filteredCommands.map((cmd) => (
                <div
                  key={cmd.name}
                  ref={(el) => (commandRefs.current[cmd.name] = el)}
                  className="scroll-mt-24"
                >
                  <Card className="p-xl md:p-xxl">
                    <div className="flex items-start gap-m mb-xl">
                      <span className="text-4xl md:text-5xl" aria-hidden="true">
                        {cmd.icon}
                      </span>
                      <div className="flex-1">
                        <h2 className="text-h3 md:text-h2 mb-s">{cmd.name}</h2>
                        <code className="text-code text-cyan/80 text-small block mb-m break-all">
                          {cmd.usage}
                        </code>
                        <p className="text-body text-mid">{cmd.description}</p>
                      </div>
                    </div>

                    {/* Sub-Commands */}
                    {cmd.subCommands && cmd.subCommands.length > 0 && (
                      <div className="mb-xl">
                        <h3 className="text-h4 mb-l">Sub-Commands</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-l">
                          {cmd.subCommands.map((subCmd) => (
                            <div
                              key={subCmd.name}
                              className="p-m bg-void/50 border border-cyan/10 rounded-moderate"
                            >
                              <div className="flex items-start gap-s mb-s">
                                <code className="text-code text-cyan break-all">{subCmd.name}</code>
                              </div>
                              <p className="text-small text-mid mb-s">{subCmd.description}</p>
                              <code className="text-code text-cyan/60 text-tiny block mb-s break-all">
                                {subCmd.usage}
                              </code>
                              {subCmd.example && (
                                <div className="mt-s">
                                  <p className="text-tiny text-mid mb-xs">Example:</p>
                                  <code className="text-code text-cyan/80 text-tiny block break-all">
                                    {subCmd.example}
                                  </code>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Examples */}
                    <div>
                      <h3 className="text-h4 mb-l">Examples</h3>
                      <div className="space-y-m">
                        {cmd.examples.map((example, index) => (
                          <div
                            key={index}
                            className="p-m bg-[#050A1A] border border-cyan/20 rounded-moderate overflow-x-auto"
                          >
                            <code className="text-terminal text-cyan whitespace-pre">{example}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}

              {filteredCommands.length === 0 && (
                <Card className="p-xl text-center">
                  <p className="text-body text-mid">No commands found matching "{searchQuery}"</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

