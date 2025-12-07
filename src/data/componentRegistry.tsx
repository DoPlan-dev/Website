/**
 * Component Registry for Component Playground
 * Defines all available components with metadata, examples, and props
 */

import React from 'react'
import { Button, Heading, Text, Card, Badge, Flex } from '@radix-ui/themes'
import * as Accordion from '@radix-ui/react-accordion'
import { LucideIcon } from '../components/ui/LucideIcon'
import { TerminalNew } from '../components/terminal/TerminalNew'

export interface ComponentProp {
  name: string
  type: string
  required?: boolean
  default?: string
  description?: string
}

export interface ComponentExample {
  name: string
  description: string
  code: string
  preview: () => React.ReactNode
}

export interface PlaygroundComponent {
  id: string
  name: string
  category: 'layout' | 'form' | 'feedback' | 'navigation' | 'display' | 'custom'
  description: string
  icon: string
  props: ComponentProp[]
  examples: ComponentExample[]
  accessibility?: {
    keyboard?: boolean
    screenReader?: string
    contrast?: string
    notes?: string
  }
}

/**
 * Button Component Examples
 */
const ButtonExamples: ComponentExample[] = [
  {
    name: 'Primary Button',
    description: 'Standard primary action button',
    code: `<Button size="3">Click Me</Button>`,
    preview: () => <Button size="3">Click Me</Button>
  },
  {
    name: 'Outline Button',
    description: 'Secondary action button with outline',
    code: `<Button size="3" variant="outline">Cancel</Button>`,
    preview: () => <Button size="3" variant="outline">Cancel</Button>
  },
  {
    name: 'Button with Icon',
    description: 'Button with icon prefix',
    code: `<Button size="3">
  <LucideIcon name="Rocket" size={18} color="#ffffff" variant="outline" />
  <span className="ml-2">Launch</span>
</Button>`,
    preview: () => (
      <Button size="3">
        <LucideIcon name="Rocket" size={18} color="#ffffff" variant="outline" />
        <span className="ml-2">Launch</span>
      </Button>
    )
  },
  {
    name: 'Disabled Button',
    description: 'Button in disabled state',
    code: `<Button size="3" disabled>Disabled</Button>`,
    preview: () => <Button size="3" disabled>Disabled</Button>
  }
]

/**
 * Card Component Examples
 */
const CardExamples: ComponentExample[] = [
  {
    name: 'Basic Card',
    description: 'Simple card with content',
    code: `<Card className="border border-[#e2e8f0]" style={{ padding: '1rem' }}>
  <Heading size="4">Card Title</Heading>
  <Text size="3" style={{ color: '#64748b' }}>Card content</Text>
</Card>`,
    preview: () => (
      <Card className="border border-[#e2e8f0]" style={{ padding: '1rem' }}>
        <Heading size="4">Card Title</Heading>
        <Text size="3" style={{ color: '#64748b' }}>Card content</Text>
      </Card>
    )
  },
  {
    name: 'Card with Icon',
    description: 'Card with icon header',
    code: `<Card className="border border-[#e2e8f0]" style={{ padding: '1rem' }}>
  <div className="w-10 h-10 rounded-lg bg-[#f0f9ff] flex items-center justify-center mb-3">
    <LucideIcon name="Zap" size={20} color="#6366f1" variant="outline" />
  </div>
  <Heading size="4">Feature</Heading>
  <Text size="3" style={{ color: '#64748b' }}>Description</Text>
</Card>`,
    preview: () => (
      <Card className="border border-[#e2e8f0]" style={{ padding: '1rem' }}>
        <div className="w-10 h-10 rounded-lg bg-[#f0f9ff] flex items-center justify-center mb-3">
          <LucideIcon name="Zap" size={20} color="#6366f1" variant="outline" />
        </div>
        <Heading size="4">Feature</Heading>
        <Text size="3" style={{ color: '#64748b' }}>Description</Text>
      </Card>
    )
  }
]

/**
 * Badge Component Examples
 */
const BadgeExamples: ComponentExample[] = [
  {
    name: 'Default Badge',
    description: 'Standard badge',
    code: `<Badge size="2">Default</Badge>`,
    preview: () => <Badge size="2">Default</Badge>
  },
  {
    name: 'Status Badges',
    description: 'Badges for different statuses',
    code: `<Flex gap="2">
  <Badge size="2" style={{ backgroundColor: '#f0f9ff', color: '#6366f1' }}>Primary</Badge>
  <Badge size="2" style={{ backgroundColor: '#fef2f2', color: '#ef4444' }}>Error</Badge>
  <Badge size="2" style={{ backgroundColor: '#f0fdf4', color: '#10b981' }}>Success</Badge>
</Flex>`,
    preview: () => (
      <Flex gap="2">
        <Badge size="2" style={{ backgroundColor: '#f0f9ff', color: '#6366f1' }}>Primary</Badge>
        <Badge size="2" style={{ backgroundColor: '#fef2f2', color: '#ef4444' }}>Error</Badge>
        <Badge size="2" style={{ backgroundColor: '#f0fdf4', color: '#10b981' }}>Success</Badge>
      </Flex>
    )
  }
]

/**
 * Input Component Examples
 */
const InputExamples: ComponentExample[] = [
  {
    name: 'Text Input',
    description: 'Standard text input field',
    code: `<input
  type="text"
  placeholder="Enter text..."
  className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] min-h-[48px]"
/>`,
    preview: () => (
      <input
        type="text"
        placeholder="Enter text..."
        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] min-h-[48px]"
      />
    )
  },
  {
    name: 'Textarea',
    description: 'Multi-line text input',
    code: `<textarea
  placeholder="Enter longer text..."
  rows={4}
  className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] resize-none"
/>`,
    preview: () => (
      <textarea
        placeholder="Enter longer text..."
        rows={4}
        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] resize-none"
      />
    )
  }
]

/**
 * Accordion Component Examples
 */
const AccordionExamples: ComponentExample[] = [
  {
    name: 'Basic Accordion',
    description: 'Simple collapsible accordion',
    code: `<Accordion.Root type="single" collapsible>
  <Accordion.Item value="item-1" className="border border-[#e2e8f0] rounded-lg">
    <Accordion.Header>
      <Accordion.Trigger className="w-full p-4 text-left">
        Accordion Item
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>
      <div className="px-4 pb-4">Content here...</div>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`,
    preview: () => (
      <Accordion.Root type="single" collapsible className="w-full">
        <Accordion.Item value="item-1" className="border border-[#e2e8f0] rounded-lg overflow-hidden">
          <Accordion.Header>
            <Accordion.Trigger className="w-full p-4 text-left hover:bg-[#f8fafc]">
              Accordion Item
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <div className="px-4 pb-4">
              <Text size="3" style={{ color: '#64748b' }}>Content here...</Text>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    )
  }
]

/**
 * Terminal Component Examples
 */
const TerminalExamples: ComponentExample[] = [
  {
    name: 'Basic Terminal',
    description: 'Terminal with command and output',
    code: `<TerminalNew
  command="npx @doplan-dev/cli"
  output={[
    '✓ Project created',
    '✓ Ready to code'
  ]}
/>`,
    preview: () => (
      <TerminalNew
        command="npx @doplan-dev/cli"
        output={[
          '✓ Project created',
          '✓ Ready to code'
        ]}
      />
    )
  }
]

/**
 * Component Registry
 */
export const componentRegistry: PlaygroundComponent[] = [
  {
    id: 'button',
    name: 'Button',
    category: 'form',
    description: 'Interactive button component for actions and navigation',
    icon: 'MousePointerClick',
    props: [
      { name: 'size', type: "'1' | '2' | '3' | '4'", default: "'3'", description: 'Button size' },
      { name: 'variant', type: "'solid' | 'outline' | 'ghost' | 'soft'", default: "'solid'", description: 'Button style variant' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the button' },
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' }
    ],
    examples: ButtonExamples,
    accessibility: {
      keyboard: true,
      screenReader: 'Button is accessible via keyboard navigation',
      contrast: 'WCAG AA compliant',
      notes: 'Use descriptive text for screen readers'
    }
  },
  {
    id: 'card',
    name: 'Card',
    category: 'layout',
    description: 'Container component for grouping related content',
    icon: 'SquareStack',
    props: [
      { name: 'className', type: 'string', description: 'Additional CSS classes' },
      { name: 'style', type: 'React.CSSProperties', description: 'Inline styles' },
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' }
    ],
    examples: CardExamples,
    accessibility: {
      keyboard: false,
      screenReader: 'Card is a container element',
      notes: 'Ensure meaningful content structure'
    }
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'display',
    description: 'Small label component for status, categories, or tags',
    icon: 'Tag',
    props: [
      { name: 'size', type: "'1' | '2' | '3'", default: "'2'", description: 'Badge size' },
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Badge content' },
      { name: 'style', type: 'React.CSSProperties', description: 'Inline styles for colors' }
    ],
    examples: BadgeExamples,
    accessibility: {
      keyboard: false,
      screenReader: 'Badge is a visual indicator',
      contrast: 'Ensure sufficient color contrast',
      notes: 'Use descriptive text for screen readers'
    }
  },
  {
    id: 'input',
    name: 'Input',
    category: 'form',
    description: 'Text input fields for user data entry',
    icon: 'SquarePen',
    props: [
      { name: 'type', type: 'string', default: "'text'", description: 'Input type' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text' },
      { name: 'className', type: 'string', description: 'Additional CSS classes' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the input' }
    ],
    examples: InputExamples,
    accessibility: {
      keyboard: true,
      screenReader: 'Input is accessible via keyboard and screen readers',
      contrast: 'WCAG AA compliant',
      notes: 'Always associate with a label element'
    }
  },
  {
    id: 'accordion',
    name: 'Accordion',
    category: 'layout',
    description: 'Collapsible content sections for organizing information',
    icon: 'ChevronDown',
    props: [
      { name: 'type', type: "'single' | 'multiple'", default: "'single'", description: 'Accordion behavior' },
      { name: 'collapsible', type: 'boolean', default: 'true', description: 'Allow closing opened items' },
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Accordion items' }
    ],
    examples: AccordionExamples,
    accessibility: {
      keyboard: true,
      screenReader: 'Fully keyboard accessible with ARIA support',
      notes: 'Uses proper ARIA attributes'
    }
  },
  {
    id: 'terminal',
    name: 'Terminal',
    category: 'display',
    description: 'Terminal/console component for displaying commands and output',
    icon: 'Terminal',
    props: [
      { name: 'command', type: 'string', required: true, description: 'Command to display' },
      { name: 'output', type: 'string[]', description: 'Command output lines' }
    ],
    examples: TerminalExamples,
    accessibility: {
      keyboard: false,
      screenReader: 'Terminal output is read as text',
      contrast: 'High contrast for code readability',
      notes: 'Use for code/command display only'
    }
  }
]

/**
 * Get component by ID
 */
export const getComponentById = (id: string): PlaygroundComponent | undefined => {
  return componentRegistry.find(comp => comp.id === id)
}

/**
 * Get components by category
 */
export const getComponentsByCategory = (category: PlaygroundComponent['category']): PlaygroundComponent[] => {
  return componentRegistry.filter(comp => comp.category === category)
}

/**
 * Get all categories
 */
export const getCategories = (): PlaygroundComponent['category'][] => {
  return Array.from(new Set(componentRegistry.map(comp => comp.category)))
}

