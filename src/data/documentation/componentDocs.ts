/**
 * Component Documentation Data
 * Auto-generated and manual documentation for Design System components
 */

export interface ComponentDocumentation {
  componentId: string
  componentName: string
  category: string
  description: string
  whenToUse: string[]
  whenNotToUse: string[]
  bestPractices: string[]
  commonMistakes: string[]
  examples: {
    good: Array<{
      title: string
      description: string
      code: string
      visual?: string // URL or description
    }>
    bad: Array<{
      title: string
      description: string
      code: string
      whyBad: string
      visual?: string
    }>
  }
  relatedComponents: string[]
  migrationGuide?: {
    from?: string
    to: string
    steps: Array<{
      step: string
      code?: string
      explanation: string
    }>
  }
}

export const componentDocumentation: ComponentDocumentation[] = [
  {
    componentId: 'button',
    componentName: 'Button',
    category: 'form',
    description: 'The Button component is used for triggering actions, submitting forms, and navigating. It provides multiple variants and sizes to fit different use cases.',
    whenToUse: [
      'Triggering primary actions (Submit, Save, Continue)',
      'Navigating to another page or section',
      'Opening modals or dialogs',
      'Performing important actions that need emphasis'
    ],
    whenNotToUse: [
      'For secondary or tertiary actions (use outline or ghost variant instead)',
      'For destructive actions without proper warning',
      'For navigation links (use Link component)',
      'For icon-only actions in toolbars (use IconButton)'
    ],
    bestPractices: [
      'Use descriptive, action-oriented text (e.g., "Save Changes" not "OK")',
      'Ensure sufficient color contrast for accessibility',
      'Use appropriate size based on context (larger for CTAs, smaller for toolbars)',
      'Provide loading states for async actions',
      'Disable buttons during processing to prevent double-submission'
    ],
    commonMistakes: [
      'Using generic text like "Click here" or "OK"',
      'Making buttons too small for touch targets (minimum 44x44px)',
      'Not providing disabled states for unavailable actions',
      'Using too many primary buttons on a single page',
      'Forgetting keyboard accessibility'
    ],
    examples: {
      good: [
        {
          title: 'Clear Action Text',
          description: 'Button text clearly describes the action',
          code: `<Button size="3">Save Changes</Button>`
        },
        {
          title: 'Loading State',
          description: 'Button shows loading state during async operations',
          code: `<Button size="3" disabled>
  <Flex align="center" gap="2">
    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
    Saving...
  </Flex>
</Button>`
        },
        {
          title: 'Icon with Text',
          description: 'Icon enhances button meaning',
          code: `<Button size="3">
  <LucideIcon name="Download" size={18} color="#ffffff" variant="outline" />
  <span className="ml-2">Download Report</span>
</Button>`
        }
      ],
      bad: [
        {
          title: 'Generic Text',
          description: 'Button text doesn\'t describe the action',
          code: `<Button size="3">Click Here</Button>`,
          whyBad: 'Users don\'t know what will happen when they click'
        },
        {
          title: 'Too Small',
          description: 'Button is too small for touch devices',
          code: `<Button size="1">Save</Button>`,
          whyBad: 'Hard to tap on mobile devices, accessibility issue'
        },
        {
          title: 'No Loading State',
          description: 'Button doesn\'t indicate processing',
          code: `<Button size="3" onClick={handleSave}>Save</Button>`,
          whyBad: 'Users may click multiple times, causing duplicate submissions'
        }
      ]
    },
    relatedComponents: ['link', 'icon-button', 'input'],
    migrationGuide: {
      to: 'Button',
      steps: [
        {
          step: '1. Replace HTML button',
          code: `// Before
<button className="btn-primary">Click me</button>

// After
<Button size="3">Click me</Button>`,
          explanation: 'Replace native HTML button with Button component'
        },
        {
          step: '2. Update variants',
          code: `// Before
<button className="btn-secondary">Cancel</button>

// After
<Button size="3" variant="outline">Cancel</Button>`,
          explanation: 'Map custom button classes to Button variants'
        }
      ]
    }
  },
  {
    componentId: 'card',
    componentName: 'Card',
    category: 'layout',
    description: 'The Card component is a container for grouping related content. Use it to organize information into distinct, scannable sections.',
    whenToUse: [
      'Grouping related content together',
      'Displaying product or feature information',
      'Creating dashboard widgets',
      'Organizing content into distinct sections',
      'Highlighting important information'
    ],
    whenNotToUse: [
      'For simple text containers (use div with padding)',
      'For modal dialogs (use Dialog component)',
      'For navigation menus (use Menu components)',
      'When content doesn\'t need visual separation'
    ],
    bestPractices: [
      'Keep card content focused and related',
      'Use consistent padding and spacing',
      'Ensure cards have clear visual hierarchy',
      'Don\'t nest cards too deeply (max 2 levels)',
      'Use hover effects sparingly and consistently'
    ],
    commonMistakes: [
      'Using cards for everything (overuse)',
      'Inconsistent spacing between cards',
      'Too much content in a single card',
      'Missing hover states for interactive cards',
      'Poor mobile responsiveness'
    ],
    examples: {
      good: [
        {
          title: 'Focused Content',
          description: 'Card contains related, focused content',
          code: `<Card className="border border-[#e2e8f0]" style={{ padding: '1rem' }}>
  <Heading size="4">Feature Title</Heading>
  <Text size="3" style={{ color: '#64748b' }}>
    Clear, concise description of the feature.
  </Text>
</Card>`
        },
        {
          title: 'With Icon Header',
          description: 'Icon helps identify card content quickly',
          code: `<Card className="border border-[#e2e8f0]" style={{ padding: '1rem' }}>
  <div className="w-10 h-10 rounded-lg bg-[#f0f9ff] flex items-center justify-center mb-3">
    <LucideIcon name="Zap" size={20} color="#6366f1" variant="outline" />
  </div>
  <Heading size="4">Feature</Heading>
  <Text size="3">Description</Text>
</Card>`
        }
      ],
      bad: [
        {
          title: 'Too Much Content',
          description: 'Card contains too much unrelated content',
          code: `<Card>
  {/* 50+ lines of mixed content */}
</Card>`,
          whyBad: 'Cards should be focused - split into multiple cards or use a different layout'
        },
        {
          title: 'Inconsistent Spacing',
          description: 'Different padding values across cards',
          code: `<Card style={{ padding: '0.5rem' }}>...</Card>
<Card style={{ padding: '2rem' }}>...</Card>`,
          whyBad: 'Inconsistent spacing creates visual noise and confusion'
        }
      ]
    },
    relatedComponents: ['grid', 'flex', 'container']
  },
  {
    componentId: 'input',
    componentName: 'Input',
    category: 'form',
    description: 'Input fields allow users to enter text data. They should always be associated with labels and provide clear validation feedback.',
    whenToUse: [
      'Collecting user text input',
      'Form data entry',
      'Search functionality',
      'Filtering and sorting',
      'Any text-based data collection'
    ],
    whenNotToUse: [
      'For file uploads (use file input)',
      'For selections from options (use Select/Dropdown)',
      'For toggles (use Checkbox or Switch)',
      'For rich text editing (use TextEditor)'
    ],
    bestPractices: [
      'Always associate inputs with labels',
      'Provide placeholder text as hints, not as labels',
      'Show validation feedback clearly',
      'Use appropriate input types (email, password, etc.)',
      'Ensure minimum touch target size (48px)',
      'Provide clear error messages'
    ],
    commonMistakes: [
      'Missing labels (accessibility issue)',
      'Using placeholder as label',
      'Poor error message placement',
      'Not indicating required fields',
      'Too many inputs on one form'
    ],
    examples: {
      good: [
        {
          title: 'With Label',
          description: 'Input has associated label for accessibility',
          code: `<div>
  <label className="block text-sm font-medium mb-2">
    Email Address
  </label>
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg"
  />
</div>`
        },
        {
          title: 'With Error State',
          description: 'Clear error feedback',
          code: `<div>
  <label className="block text-sm font-medium mb-2">
    Email Address
  </label>
  <input
    type="email"
    className="w-full px-4 py-3 border border-red-500 rounded-lg"
    aria-invalid="true"
  />
  <Text size="2" style={{ color: '#ef4444', marginTop: '0.5rem' }}>
    Please enter a valid email address
  </Text>
</div>`
        }
      ],
      bad: [
        {
          title: 'Missing Label',
          description: 'Input has no associated label',
          code: `<input
  type="text"
  placeholder="Enter your name"
  className="..."
/>`,
          whyBad: 'Screen readers can\'t identify the input purpose - accessibility violation'
        },
        {
          title: 'Placeholder as Label',
          description: 'Using placeholder instead of proper label',
          code: `<input
  type="text"
  placeholder="Email Address"
  className="..."
/>`,
          whyBad: 'Placeholder disappears when typing, users lose context'
        }
      ]
    },
    relatedComponents: ['textarea', 'select', 'checkbox', 'label']
  }
]

/**
 * Get documentation for a component
 */
export const getComponentDoc = (componentId: string): ComponentDocumentation | undefined => {
  return componentDocumentation.find(doc => doc.componentId === componentId)
}

/**
 * Get all documentation
 */
export const getAllComponentDocs = (): ComponentDocumentation[] => {
  return componentDocumentation
}

/**
 * Search documentation
 */
export const searchDocumentation = (query: string): ComponentDocumentation[] => {
  const lowerQuery = query.toLowerCase()
  return componentDocumentation.filter(doc =>
    doc.componentName.toLowerCase().includes(lowerQuery) ||
    doc.description.toLowerCase().includes(lowerQuery) ||
    doc.whenToUse.some(use => use.toLowerCase().includes(lowerQuery)) ||
    doc.bestPractices.some(practice => practice.toLowerCase().includes(lowerQuery))
  )
}

