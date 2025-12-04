import React from 'react'

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  command?: string
  output?: string[]
  className?: string
}

export const Terminal: React.FC<TerminalProps> = ({
  command = 'npx @doplan-dev/cli',
  output = [],
  className = '',
}) => {
  return (
    <div className={`terminal-container ${className}`}>
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="terminal-control-red" aria-hidden="true"></div>
          <div className="terminal-control-yellow" aria-hidden="true"></div>
          <div className="terminal-control-green" aria-hidden="true"></div>
        </div>
        <span className="text-tiny text-mid ml-auto">Terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="terminal-content">
        {command && (
          <div className="mb-s">
            <span className="text-success">$</span>{' '}
            <span className="text-cyan">{command}</span>
          </div>
        )}
        {output.map((line, index) => (
          <div key={index} className="text-mid">
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

