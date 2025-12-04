import React from 'react'

interface TerminalProps {
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
    <div className={`terminal-container w-full max-w-[480px] ${className}`}>
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="terminal-control-red" aria-hidden="true"></div>
          <div className="terminal-control-yellow" aria-hidden="true"></div>
          <div className="terminal-control-green" aria-hidden="true"></div>
        </div>
        <span className="text-tiny text-mid ml-m">Terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="terminal-content" role="log" aria-label="Terminal output">
        {command && (
          <div className="mb-s">
            <span className="text-success" aria-hidden="true">$</span>{' '}
            <span className="text-cyan" aria-label={`Command: ${command}`}>{command}</span>
          </div>
        )}
        {output.map((line, index) => (
          <div key={index} className="text-mid" aria-label={line || 'Empty line'}>
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
