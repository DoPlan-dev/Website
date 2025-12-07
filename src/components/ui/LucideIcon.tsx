import React from 'react'
import * as LucideIcons from 'lucide-react'

export type LucideIconName = keyof typeof LucideIcons

interface LucideIconProps {
  name: LucideIconName
  size?: number
  color?: string
  className?: string
  variant?: 'outline' | 'solid'
}

export const LucideIcon: React.FC<LucideIconProps> = ({ 
  name, 
  size = 24, 
  color = 'currentColor',
  className = '',
  variant = 'outline'
}) => {
  const IconComponent = LucideIcons[name] as React.ComponentType<{
    size?: number
    color?: string
    strokeWidth?: number
    className?: string
  }>

  if (!IconComponent) {
    console.warn(`Lucide icon "${name}" not found`)
    return null
  }

  // For solid variant, increase strokeWidth
  const strokeWidth = variant === 'solid' ? 2.5 : 1.5

  return (
    <IconComponent 
      size={size} 
      color={color} 
      strokeWidth={strokeWidth}
      className={className}
    />
  )
}

// Common icon mappings for easy reference
export const IconNames = {
  // Actions
  terminal: 'Terminal',
  code: 'Code',
  rocket: 'Rocket',
  zap: 'Zap',
  brain: 'Brain',
  lightbulb: 'Lightbulb',
  book: 'Book',
  play: 'Play',
  copy: 'Copy',
  checkmark: 'Check',
  star: 'Star',
  users: 'Users',
  shield: 'Shield',
  arrowRight: 'ArrowRight',
  arrowDown: 'ArrowDown',
  plus: 'Plus',
  x: 'X',
  search: 'Search',
  menu: 'Menu',
  externalLink: 'ExternalLink',
  mail: 'Mail',
  heart: 'Heart',
  target: 'Target',
  download: 'Download',
  settings: 'Settings',
  graduationCap: 'GraduationCap',
  github: 'Github',
  // New icons for sections
  package: 'Package',
  fileText: 'FileText',
  video: 'Video',
  clock: 'Clock',
  trophy: 'Trophy',
  sparkles: 'Sparkles',
  checkCircle: 'CheckCircle',
  arrowUpRight: 'ArrowUpRight',
} as const

