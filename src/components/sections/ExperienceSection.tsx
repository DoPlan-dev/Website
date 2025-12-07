import React, { useState } from 'react'
import { Icon } from '../ui/Icon'
import { copyToClipboard } from '../../utils/clipboard'
import { trackCommandCopy } from '../../lib/analytics'

export const ExperienceSection: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const installCommand = 'npx @doplan-dev/cli'

  const handleCopy = async () => {
    const success = await copyToClipboard(installCommand)
    if (success) {
      setCopied(true)
      trackCommandCopy(installCommand)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  const steps = [
    {
      title: 'Command.',
      icon: 'terminal' as const,
      color: '#6366f1',
      bgColor: '#E8F0FE',
      time: '30s',
      description: "One command. That's all. DoPlan scaffolds everything.",
    },
    {
      title: 'Idea.',
      icon: 'chat' as const,
      color: '#FBBC04',
      bgColor: '#FEF7E0',
      time: '60s',
      description: 'Tell DoPlan your idea. It asks smart follow-ups. Your vision becomes a plan.',
    },
    {
      title: 'Code.',
      icon: 'code' as const,
      color: '#EA4335',
      bgColor: '#FDECEB',
      time: '60s',
      description: 'Development environment set. Git branch created. 18 agents ready to help. Start coding.',
    },
    {
      title: 'Ship.',
      icon: 'trophy' as const,
      color: '#34A853',
      bgColor: '#E6F4EA',
      time: '150s',
      description: 'Mark task done with /done. Auto-commit. Auto-push. First achievement unlocked. You\'re a builder.',
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-dark-text mb-4">
            Your First 5 Minutes (The Magic Happens Here)
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Step Card */}
                  <div className="flex-1 bg-white rounded-lg shadow-md p-6 border-t-4" style={{ borderTopColor: step.color }}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: step.bgColor }}
                        >
                          <Icon name={step.icon} size={40} color={step.color} />
                        </div>
                        <h3 className="text-xl font-bold text-dark-text">{step.title}</h3>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{
                          backgroundColor: step.bgColor,
                          color: step.color,
                        }}
                      >
                        {step.time}
                      </span>
                    </div>
                    <p className="text-medium-gray leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <Icon name="arrow-down" size={32} color="#80868B" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Text and CTA */}
        <div className="text-center mt-12">
          <p className="text-medium-gray mb-6">
            This isn't theoretical. Run the command below right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
            <div className="flex-1 bg-dark-text rounded-lg p-4 text-white font-mono text-sm">
              {installCommand}
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-4 bg-google-blue text-white font-semibold rounded-lg hover:bg-[#4f46e5] transition-all duration-200 min-h-[56px]"
            >
              <Icon name="copy" size={18} color="#FFFFFF" />
              <span>{copied ? 'Copied!' : 'Copy Installation Command'}</span>
            </button>
          </div>
          {copied && (
            <p className="text-google-green mt-4 flex items-center justify-center gap-2">
              <Icon name="checkmark" size={18} color="#34A853" />
              Copied! Paste in terminal to start.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

