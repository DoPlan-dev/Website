/**
 * Footer Templates Data
 * Pre-built footer layouts for the Footer Builder
 */

export interface FooterColumn {
  id: string
  title?: string
  links: Array<{
    id: string
    text: string
    href: string
    external?: boolean
  }>
}

export interface FooterTemplate {
  id: string
  name: string
  description: string
  variant: 'simple' | 'multi-column' | 'complex'
  columns: FooterColumn[]
  bottom: {
    copyright: string
    socialLinks?: Array<{
      id: string
      platform: 'github' | 'twitter' | 'linkedin' | 'discord' | 'youtube'
      href: string
    }>
    additionalLinks?: Array<{
      id: string
      text: string
      href: string
    }>
  }
  styles: {
    backgroundColor: string
    textColor: string
    linkColor: string
    padding: string
  }
}

export const footerTemplates: FooterTemplate[] = [
  {
    id: 'footer-simple',
    name: 'Simple Footer',
    description: 'Minimal footer with copyright and links',
    variant: 'simple',
    columns: [
      {
        id: 'col-1',
        links: [
          { id: 'link-1', text: 'Privacy Policy', href: '/privacy' },
          { id: 'link-2', text: 'Terms of Service', href: '/terms' },
          { id: 'link-3', text: 'Contact', href: '/contact' }
        ]
      }
    ],
    bottom: {
      copyright: '© 2024 DoPlan. All rights reserved.'
    },
    styles: {
      backgroundColor: '#0f172a',
      textColor: '#f1f5f9',
      linkColor: '#cbd5e1',
      padding: '3rem 2rem 1.5rem'
    }
  },
  {
    id: 'footer-multi-column',
    name: 'Multi-Column Footer',
    description: 'Footer with multiple columns of links',
    variant: 'multi-column',
    columns: [
      {
        id: 'col-1',
        title: 'Product',
        links: [
          { id: 'link-1', text: 'Features', href: '/features' },
          { id: 'link-2', text: 'Pricing', href: '/pricing' },
          { id: 'link-3', text: 'Changelog', href: '/changelog' }
        ]
      },
      {
        id: 'col-2',
        title: 'Resources',
        links: [
          { id: 'link-4', text: 'Documentation', href: '/docs' },
          { id: 'link-5', text: 'Blog', href: '/blog' },
          { id: 'link-6', text: 'Help Center', href: '/help' }
        ]
      },
      {
        id: 'col-3',
        title: 'Company',
        links: [
          { id: 'link-7', text: 'About', href: '/about' },
          { id: 'link-8', text: 'Contact', href: '/contact' },
          { id: 'link-9', text: 'Careers', href: '/careers' }
        ]
      },
      {
        id: 'col-4',
        title: 'Legal',
        links: [
          { id: 'link-10', text: 'Privacy', href: '/privacy' },
          { id: 'link-11', text: 'Terms', href: '/terms' },
          { id: 'link-12', text: 'Security', href: '/security' }
        ]
      }
    ],
    bottom: {
      copyright: '© 2024 DoPlan. All rights reserved.',
      socialLinks: [
        { id: 'social-1', platform: 'github', href: 'https://github.com/DoPlan-dev' },
        { id: 'social-2', platform: 'twitter', href: 'https://twitter.com/DoPlan' },
        { id: 'social-3', platform: 'discord', href: 'https://discord.gg/DoPlan' }
      ]
    },
    styles: {
      backgroundColor: '#0f172a',
      textColor: '#f1f5f9',
      linkColor: '#cbd5e1',
      padding: '4rem 2rem 2rem'
    }
  },
  {
    id: 'footer-complex',
    name: 'Complex Footer',
    description: 'Full-featured footer with newsletter, social, and multiple columns',
    variant: 'complex',
    columns: [
      {
        id: 'col-1',
        title: 'Product',
        links: [
          { id: 'link-1', text: 'Features', href: '/features' },
          { id: 'link-2', text: 'Pricing', href: '/pricing' },
          { id: 'link-3', text: 'Changelog', href: '/changelog' },
          { id: 'link-4', text: 'Roadmap', href: '/roadmap' }
        ]
      },
      {
        id: 'col-2',
        title: 'Developers',
        links: [
          { id: 'link-5', text: 'Documentation', href: '/docs' },
          { id: 'link-6', text: 'API Reference', href: '/api' },
          { id: 'link-7', text: 'Guides', href: '/guides' },
          { id: 'link-8', text: 'Examples', href: '/examples' }
        ]
      },
      {
        id: 'col-3',
        title: 'Company',
        links: [
          { id: 'link-9', text: 'About', href: '/about' },
          { id: 'link-10', text: 'Blog', href: '/blog' },
          { id: 'link-11', text: 'Careers', href: '/careers' },
          { id: 'link-12', text: 'Contact', href: '/contact' }
        ]
      },
      {
        id: 'col-4',
        title: 'Legal',
        links: [
          { id: 'link-13', text: 'Privacy Policy', href: '/privacy' },
          { id: 'link-14', text: 'Terms of Service', href: '/terms' },
          { id: 'link-15', text: 'Security', href: '/security' },
          { id: 'link-16', text: 'Cookie Policy', href: '/cookies' }
        ]
      }
    ],
    bottom: {
      copyright: '© 2024 DoPlan. All rights reserved.',
      socialLinks: [
        { id: 'social-1', platform: 'github', href: 'https://github.com/DoPlan-dev' },
        { id: 'social-2', platform: 'twitter', href: 'https://twitter.com/DoPlan' },
        { id: 'social-3', platform: 'discord', href: 'https://discord.gg/DoPlan' },
        { id: 'social-4', platform: 'linkedin', href: 'https://linkedin.com/company/DoPlan' }
      ],
      additionalLinks: [
        { id: 'extra-1', text: 'Status', href: '/status' },
        { id: 'extra-2', text: 'Sitemap', href: '/sitemap' }
      ]
    },
    styles: {
      backgroundColor: '#0f172a',
      textColor: '#f1f5f9',
      linkColor: '#cbd5e1',
      padding: '4rem 2rem 2rem'
    }
  }
]

export const getFooterTemplateById = (id: string): FooterTemplate | undefined => {
  return footerTemplates.find(template => template.id === id)
}

