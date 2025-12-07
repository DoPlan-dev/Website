/**
 * Component Library
 * Pre-built components that can be added to sections
 */

import { SectionComponent } from './sectionTemplates'

export interface ComponentLibraryItem {
  id: string
  name: string
  description: string
  type: SectionComponent['type']
  category: 'text' | 'media' | 'navigation' | 'layout' | 'interactive' | 'display'
  icon: string
  preview?: React.ReactNode
  component: SectionComponent
  tags: string[]
  usage?: string
}

export const componentLibrary: ComponentLibraryItem[] = [
  // Text Components
  {
    id: 'heading-h1',
    name: 'Heading H1',
    description: 'Large heading for main titles',
    type: 'heading',
    category: 'text',
    icon: 'Type',
    tags: ['heading', 'title', 'h1', 'text'],
    component: {
      id: 'heading-h1',
      type: 'heading',
      props: {
        text: 'Main Heading',
        size: '9',
        level: 'h1'
      },
      styles: {
        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        fontWeight: '700',
        lineHeight: '1.2',
      }
    },
    usage: 'Use for page titles and hero headings'
  },
  {
    id: 'heading-h2',
    name: 'Heading H2',
    description: 'Medium heading for section titles',
    type: 'heading',
    category: 'text',
    icon: 'Type',
    tags: ['heading', 'title', 'h2', 'text'],
    component: {
      id: 'heading-h2',
      type: 'heading',
      props: {
        text: 'Section Heading',
        size: '6',
        level: 'h2'
      },
      styles: {
        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
        fontWeight: '600',
        lineHeight: '1.3',
      }
    },
    usage: 'Use for section titles'
  },
  {
    id: 'paragraph',
    name: 'Paragraph',
    description: 'Body text paragraph',
    type: 'text',
    category: 'text',
    icon: 'FileText',
    tags: ['text', 'paragraph', 'body', 'content'],
    component: {
      id: 'paragraph',
      type: 'text',
      props: {
        text: 'This is a paragraph of text. Replace this with your content.'
      },
      styles: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#64748b',
      }
    },
    usage: 'Use for body text and descriptions'
  },

  // Interactive Components
  {
    id: 'button-primary',
    name: 'Primary Button',
    description: 'Main call-to-action button',
    type: 'button',
    category: 'interactive',
    icon: 'MousePointer2',
    tags: ['button', 'cta', 'action', 'click'],
    component: {
      id: 'button-primary',
      type: 'button',
      props: {
        text: 'Get Started',
        variant: 'solid',
        size: '3'
      },
      styles: {
        backgroundColor: '#6366f1',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
      }
    },
    usage: 'Use for primary actions'
  },
  {
    id: 'button-secondary',
    name: 'Secondary Button',
    description: 'Secondary action button',
    type: 'button',
    category: 'interactive',
    icon: 'MousePointer2',
    tags: ['button', 'secondary', 'outline'],
    component: {
      id: 'button-secondary',
      type: 'button',
      props: {
        text: 'Learn More',
        variant: 'outline',
        size: '3'
      },
      styles: {}
    },
    usage: 'Use for secondary actions'
  },
  {
    id: 'link-text',
    name: 'Text Link',
    description: 'Inline text link',
    type: 'link',
    category: 'navigation',
    icon: 'Link',
    tags: ['link', 'anchor', 'navigation'],
    component: {
      id: 'link-text',
      type: 'link',
      props: {
        text: 'Learn more',
        href: '#'
      },
      styles: {
        color: '#6366f1',
        textDecoration: 'underline',
      }
    },
    usage: 'Use for inline links'
  },

  // Media Components
  {
    id: 'image-basic',
    name: 'Image',
    description: 'Standard image component',
    type: 'image',
    category: 'media',
    icon: 'Image',
    tags: ['image', 'photo', 'picture', 'media'],
    component: {
      id: 'image-basic',
      type: 'image',
      props: {
        src: 'https://via.placeholder.com/400x300',
        alt: 'Image description'
      },
      styles: {
        width: '100%',
        borderRadius: '0.5rem',
      }
    },
    usage: 'Use for photos and illustrations'
  },
  {
    id: 'icon-basic',
    name: 'Icon',
    description: 'Icon component',
    type: 'icon',
    category: 'display',
    icon: 'Circle',
    tags: ['icon', 'symbol', 'graphic'],
    component: {
      id: 'icon-basic',
      type: 'icon',
      props: {
        name: 'Circle',
        size: 24
      },
      styles: {
        color: '#6366f1',
      }
    },
    usage: 'Use for visual indicators'
  },

  // Layout Components
  {
    id: 'card-basic',
    name: 'Card',
    description: 'Card container component',
    type: 'card',
    category: 'layout',
    icon: 'Square',
    tags: ['card', 'container', 'box', 'layout'],
    component: {
      id: 'card-basic',
      type: 'card',
      props: {},
      styles: {
        padding: '1.5rem',
        borderRadius: '0.75rem',
        border: '1px solid #e2e8f0',
        backgroundColor: 'white',
      },
      children: []
    },
    usage: 'Use as a container for grouped content'
  },
  {
    id: 'grid-2-columns',
    name: '2 Column Grid',
    description: 'Two column grid layout',
    type: 'grid',
    category: 'layout',
    icon: 'Grid3x3',
    tags: ['grid', 'layout', 'columns', '2-column'],
    component: {
      id: 'grid-2-columns',
      type: 'grid',
      props: {
        columns: 2,
        gap: '1rem'
      },
      styles: {},
      children: []
    },
    usage: 'Use for two-column layouts'
  },
  {
    id: 'grid-3-columns',
    name: '3 Column Grid',
    description: 'Three column grid layout',
    type: 'grid',
    category: 'layout',
    icon: 'Grid3x3',
    tags: ['grid', 'layout', 'columns', '3-column'],
    component: {
      id: 'grid-3-columns',
      type: 'grid',
      props: {
        columns: 3,
        gap: '1rem'
      },
      styles: {},
      children: []
    },
    usage: 'Use for three-column layouts'
  },

  // Display Components
  {
    id: 'terminal-basic',
    name: 'Terminal',
    description: 'Terminal/command line display',
    type: 'terminal',
    category: 'display',
    icon: 'Terminal',
    tags: ['terminal', 'code', 'command', 'cli'],
    component: {
      id: 'terminal-basic',
      type: 'terminal',
      props: {
        prompt: '$',
        output: 'npm install doplan'
      },
      styles: {
        backgroundColor: '#1e293b',
        color: '#f1f5f9',
        fontFamily: 'monospace',
        padding: '1rem',
        borderRadius: '0.5rem',
      }
    },
    usage: 'Use for displaying commands or code output'
  },

  // Compound Components (Components with children)
  {
    id: 'card-with-heading',
    name: 'Card with Heading',
    description: 'Card containing a heading and text',
    type: 'card',
    category: 'layout',
    icon: 'Square',
    tags: ['card', 'heading', 'compound'],
    component: {
      id: 'card-with-heading',
      type: 'card',
      props: {},
      styles: {
        padding: '1.5rem',
        borderRadius: '0.75rem',
        border: '1px solid #e2e8f0',
      },
      children: [
        {
          id: 'card-heading',
          type: 'heading',
          props: { text: 'Card Title', size: '4' },
          styles: { marginBottom: '0.5rem' }
        },
        {
          id: 'card-text',
          type: 'text',
          props: { text: 'Card description text goes here.' },
          styles: { color: '#64748b' }
        }
      ]
    },
    usage: 'Use for feature cards and content blocks'
  },
  {
    id: 'button-with-icon',
    name: 'Button with Icon',
    description: 'Button with icon placeholder',
    type: 'button',
    category: 'interactive',
    icon: 'MousePointer2',
    tags: ['button', 'icon', 'compound'],
    component: {
      id: 'button-with-icon',
      type: 'button',
      props: {
        text: 'Button with Icon',
        variant: 'solid',
        size: '3'
      },
      styles: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
      }
    },
    usage: 'Use for buttons that need icons'
  },
]

export const getComponentById = (id: string): ComponentLibraryItem | undefined => {
  return componentLibrary.find(item => item.id === id)
}

export const getComponentsByCategory = (category: ComponentLibraryItem['category']): ComponentLibraryItem[] => {
  return componentLibrary.filter(item => item.category === category)
}

export const getComponentsByType = (type: SectionComponent['type']): ComponentLibraryItem[] => {
  return componentLibrary.filter(item => item.type === type)
}

export const searchComponents = (query: string): ComponentLibraryItem[] => {
  const lowerQuery = query.toLowerCase()
  return componentLibrary.filter(item =>
    item.name.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

