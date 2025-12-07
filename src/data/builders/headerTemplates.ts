/**
 * Header Templates Data
 * Pre-built header/navigation layouts for the Header Builder
 */

export interface HeaderComponent {
  id: string
  type: 'logo' | 'nav-item' | 'search' | 'button' | 'menu-toggle' | 'divider'
  props: Record<string, any>
  styles?: Record<string, any>
}

export interface HeaderTemplate {
  id: string
  name: string
  description: string
  variant: 'horizontal' | 'vertical' | 'centered' | 'split'
  sticky: boolean
  components: HeaderComponent[]
  styles: {
    backgroundColor: string
    textColor: string
    height: string
    padding: string
  }
}

export const headerTemplates: HeaderTemplate[] = [
  {
    id: 'header-simple',
    name: 'Simple Header',
    description: 'Clean header with logo, navigation, and CTA button',
    variant: 'horizontal',
    sticky: true,
    components: [
      {
        id: 'logo',
        type: 'logo',
        props: {
          text: 'DoPlan.dev',
          href: '/',
          highlight: '.dev'
        }
      },
      {
        id: 'nav-item-1',
        type: 'nav-item',
        props: {
          text: 'Features',
          href: '/features'
        }
      },
      {
        id: 'nav-item-2',
        type: 'nav-item',
        props: {
          text: 'Docs',
          href: '/docs'
        }
      },
      {
        id: 'nav-item-3',
        type: 'nav-item',
        props: {
          text: 'Blog',
          href: '/blog'
        }
      },
      {
        id: 'divider',
        type: 'divider',
        props: {}
      },
      {
        id: 'cta-button',
        type: 'button',
        props: {
          text: 'Get Started',
          href: '/get-started',
          variant: 'solid'
        }
      }
    ],
    styles: {
      backgroundColor: '#ffffff',
      textColor: '#0f172a',
      height: '72px',
      padding: '0 2rem'
    }
  },
  {
    id: 'header-centered',
    name: 'Centered Header',
    description: 'Logo centered with navigation items on both sides',
    variant: 'centered',
    sticky: true,
    components: [
      {
        id: 'nav-left-1',
        type: 'nav-item',
        props: {
          text: 'Features',
          href: '/features'
        }
      },
      {
        id: 'nav-left-2',
        type: 'nav-item',
        props: {
          text: 'Docs',
          href: '/docs'
        }
      },
      {
        id: 'logo',
        type: 'logo',
        props: {
          text: 'DoPlan.dev',
          href: '/',
          highlight: '.dev'
        }
      },
      {
        id: 'nav-right-1',
        type: 'nav-item',
        props: {
          text: 'Blog',
          href: '/blog'
        }
      },
      {
        id: 'cta-button',
        type: 'button',
        props: {
          text: 'Get Started',
          href: '/get-started',
          variant: 'solid'
        }
      }
    ],
    styles: {
      backgroundColor: '#ffffff',
      textColor: '#0f172a',
      height: '72px',
      padding: '0 2rem'
    }
  },
  {
    id: 'header-with-search',
    name: 'Header with Search',
    description: 'Header with logo, navigation, search bar, and CTA',
    variant: 'horizontal',
    sticky: true,
    components: [
      {
        id: 'logo',
        type: 'logo',
        props: {
          text: 'DoPlan.dev',
          href: '/',
          highlight: '.dev'
        }
      },
      {
        id: 'nav-item-1',
        type: 'nav-item',
        props: {
          text: 'Features',
          href: '/features'
        }
      },
      {
        id: 'nav-item-2',
        type: 'nav-item',
        props: {
          text: 'Docs',
          href: '/docs'
        }
      },
      {
        id: 'search',
        type: 'search',
        props: {
          placeholder: 'Search...'
        }
      },
      {
        id: 'cta-button',
        type: 'button',
        props: {
          text: 'Get Started',
          href: '/get-started',
          variant: 'solid'
        }
      }
    ],
    styles: {
      backgroundColor: '#ffffff',
      textColor: '#0f172a',
      height: '72px',
      padding: '0 2rem'
    }
  },
  {
    id: 'header-mobile-first',
    name: 'Mobile-First Header',
    description: 'Responsive header with mobile menu toggle',
    variant: 'horizontal',
    sticky: true,
    components: [
      {
        id: 'logo',
        type: 'logo',
        props: {
          text: 'DoPlan.dev',
          href: '/',
          highlight: '.dev'
        }
      },
      {
        id: 'menu-toggle',
        type: 'menu-toggle',
        props: {
          label: 'Menu'
        }
      }
    ],
    styles: {
      backgroundColor: '#ffffff',
      textColor: '#0f172a',
      height: '64px',
      padding: '0 1.5rem'
    }
  }
]

export const getHeaderTemplateById = (id: string): HeaderTemplate | undefined => {
  return headerTemplates.find(template => template.id === id)
}

