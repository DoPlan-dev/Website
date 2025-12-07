import React from 'react'

interface TerminalProps {
  command?: string
  output?: string[]
  className?: string
}

export const TerminalNew: React.FC<TerminalProps> = ({
  command = 'npx @doplan-dev/cli',
  output = [],
  className = '',
}) => {
  return (
    <div className={`w-full max-w-[600px] bg-white rounded-lg shadow-lg border border-light-gray overflow-hidden ${className}`}>
      {/* Terminal Header */}
      <div className="h-10 bg-light-gray flex items-center gap-2 px-4 border-b border-light-gray">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-google-red" aria-hidden="true"></div>
          <div className="w-3 h-3 rounded-full bg-google-yellow" aria-hidden="true"></div>
          <div className="w-3 h-3 rounded-full bg-google-green" aria-hidden="true"></div>
        </div>
        <span className="text-xs text-medium-gray ml-4">Terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm bg-dark-text text-white min-h-[200px]" role="log" aria-label="Terminal output">
        {command && (
          <div className="mb-2">
            <span className="text-google-green" aria-hidden="true">$</span>{' '}
            <span className="text-white" aria-label={`Command: ${command}`}>{command}</span>
          </div>
        )}
        {output.map((line, index) => (
          <div key={index} className="text-white/90" aria-label={line || 'Empty line'}>
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

