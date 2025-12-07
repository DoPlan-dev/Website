/**
 * Menu Templates Data
 * Pre-built menu/navigation layouts for the Menu Builder
 */

export interface MenuItem {
  id: string
  text: string
  href?: string
  icon?: string
  external?: boolean
  children?: MenuItem[]
  divider?: boolean
}

export interface MenuTemplate {
  id: string
  name: string
  description: string
  type: 'horizontal' | 'vertical' | 'dropdown' | 'mega'
  items: MenuItem[]
  styles: {
    backgroundColor?: string
    textColor: string
    activeColor: string
    hoverColor: string
    spacing: string
  }
}

export const menuTemplates: MenuTemplate[] = [
  {
    id: 'menu-horizontal-simple',
    name: 'Horizontal Simple',
    description: 'Simple horizontal navigation menu',
    type: 'horizontal',
    items: [
      { id: 'item-1', text: 'Home', href: '/' },
      { id: 'item-2', text: 'Features', href: '/features' },
      { id: 'item-3', text: 'Docs', href: '/docs' },
      { id: 'item-4', text: 'Blog', href: '/blog' },
      { id: 'item-5', text: 'Pricing', href: '/pricing' }
    ],
    styles: {
      textColor: '#0f172a',
      activeColor: '#6366f1',
      hoverColor: '#6366f1',
      spacing: '2rem'
    }
  },
  {
    id: 'menu-vertical-simple',
    name: 'Vertical Simple',
    description: 'Simple vertical navigation menu',
    type: 'vertical',
    items: [
      { id: 'item-1', text: 'Home', href: '/' },
      { id: 'item-2', text: 'Features', href: '/features' },
      { id: 'item-3', text: 'Docs', href: '/docs' },
      { id: 'item-4', text: 'Blog', href: '/blog' },
      { id: 'item-5', text: 'Pricing', href: '/pricing' }
    ],
    styles: {
      textColor: '#0f172a',
      activeColor: '#6366f1',
      hoverColor: '#6366f1',
      spacing: '0.5rem'
    }
  },
  {
    id: 'menu-dropdown',
    name: 'Dropdown Menu',
    description: 'Navigation menu with dropdown submenus',
    type: 'dropdown',
    items: [
      {
        id: 'item-1',
        text: 'Product',
        children: [
          { id: 'sub-1', text: 'Features', href: '/features' },
          { id: 'sub-2', text: 'Pricing', href: '/pricing' },
          { id: 'sub-3', text: 'Changelog', href: '/changelog' }
        ]
      },
      {
        id: 'item-2',
        text: 'Resources',
        children: [
          { id: 'sub-4', text: 'Documentation', href: '/docs' },
          { id: 'sub-5', text: 'Blog', href: '/blog' },
          { id: 'sub-6', text: 'Help Center', href: '/help' }
        ]
      },
      { id: 'item-3', text: 'Company', href: '/company' },
      { id: 'item-4', text: 'Contact', href: '/contact' }
    ],
    styles: {
      textColor: '#0f172a',
      activeColor: '#6366f1',
      hoverColor: '#6366f1',
      spacing: '2rem'
    }
  },
  {
    id: 'menu-mega',
    name: 'Mega Menu',
    description: 'Large dropdown menu with multiple columns',
    type: 'mega',
    items: [
      {
        id: 'item-1',
        text: 'Product',
        children: [
          { id: 'sub-1', text: 'Features', href: '/features' },
          { id: 'sub-2', text: 'Pricing', href: '/pricing' },
          { id: 'sub-3', text: 'Changelog', href: '/changelog' },
          { id: 'sub-4', text: 'Roadmap', href: '/roadmap' }
        ]
      },
      {
        id: 'item-2',
        text: 'Developers',
        children: [
          { id: 'sub-5', text: 'Documentation', href: '/docs' },
          { id: 'sub-6', text: 'API Reference', href: '/api' },
          { id: 'sub-7', text: 'Guides', href: '/guides' },
          { id: 'sub-8', text: 'Examples', href: '/examples' }
        ]
      },
      {
        id: 'item-3',
        text: 'Company',
        children: [
          { id: 'sub-9', text: 'About', href: '/about' },
          { id: 'sub-10', text: 'Blog', href: '/blog' },
          { id: 'sub-11', text: 'Careers', href: '/careers' },
          { id: 'sub-12', text: 'Contact', href: '/contact' }
        ]
      }
    ],
    styles: {
      textColor: '#0f172a',
      activeColor: '#6366f1',
      hoverColor: '#6366f1',
      spacing: '2rem'
    }
  },
  {
    id: 'menu-with-icons',
    name: 'Menu with Icons',
    description: 'Navigation menu with icons',
    type: 'horizontal',
    items: [
      { id: 'item-1', text: 'Home', href: '/', icon: 'Home' },
      { id: 'item-2', text: 'Features', href: '/features', icon: 'Zap' },
      { id: 'item-3', text: 'Docs', href: '/docs', icon: 'BookOpen' },
      { id: 'item-4', text: 'Blog', href: '/blog', icon: 'FileText' }
    ],
    styles: {
      textColor: '#0f172a',
      activeColor: '#6366f1',
      hoverColor: '#6366f1',
      spacing: '2rem'
    }
  }
]

export const getMenuTemplateById = (id: string): MenuTemplate | undefined => {
  return menuTemplates.find(template => template.id === id)
}

