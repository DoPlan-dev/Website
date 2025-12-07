/**
 * Page Templates Data
 * Pre-built page layouts for the Page Builder
 */

export interface PageTemplate {
  id: string
  name: string
  description: string
  category: 'landing' | 'documentation' | 'blog' | 'dashboard' | 'marketing'
  thumbnail?: string
  sections: string[] // References to section template IDs
  layout: {
    container: 'full' | 'wide' | 'narrow' | 'container'
    sidebar?: boolean
    header?: boolean
    footer?: boolean
  }
  seoSettings: {
    title: string
    description: string
    keywords?: string[]
  }
}

export const pageTemplates: PageTemplate[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Modern landing page with hero, features, testimonials, and CTA',
    category: 'landing',
    sections: ['hero-fullscreen', 'features-grid', 'testimonials', 'cta-section'],
    layout: {
      container: 'full',
      header: true,
      footer: true
    },
    seoSettings: {
      title: 'Welcome to Our Product',
      description: 'Discover our amazing product and start building today',
      keywords: ['product', 'landing', 'features']
    }
  },
  {
    id: 'documentation-page',
    name: 'Documentation Page',
    description: 'Documentation layout with sidebar navigation and content area',
    category: 'documentation',
    sections: ['doc-header', 'doc-content'],
    layout: {
      container: 'wide',
      sidebar: true,
      header: true,
      footer: true
    },
    seoSettings: {
      title: 'Documentation',
      description: 'Complete documentation and guides',
      keywords: ['docs', 'documentation', 'guides']
    }
  },
  {
    id: 'blog-post',
    name: 'Blog Post',
    description: 'Blog post layout with article content and related posts',
    category: 'blog',
    sections: ['blog-header', 'blog-content', 'related-posts'],
    layout: {
      container: 'narrow',
      header: true,
      footer: true
    },
    seoSettings: {
      title: 'Blog Post Title',
      description: 'Read our latest blog post',
      keywords: ['blog', 'article']
    }
  },
  {
    id: 'marketing-page',
    name: 'Marketing Page',
    description: 'Marketing page with multiple sections and conversion focus',
    category: 'marketing',
    sections: ['hero-fullscreen', 'features-grid', 'pricing', 'testimonials', 'cta-section'],
    layout: {
      container: 'full',
      header: true,
      footer: true
    },
    seoSettings: {
      title: 'Marketing Page',
      description: 'Learn about our product and services',
      keywords: ['marketing', 'features', 'pricing']
    }
  },
  {
    id: 'dashboard-page',
    name: 'Dashboard Page',
    description: 'Dashboard layout with sidebar and main content area',
    category: 'dashboard',
    sections: ['dashboard-header', 'dashboard-content'],
    layout: {
      container: 'wide',
      sidebar: true,
      header: true,
      footer: false
    },
    seoSettings: {
      title: 'Dashboard',
      description: 'Your dashboard overview',
      keywords: ['dashboard']
    }
  }
]

export const getPageTemplateById = (id: string): PageTemplate | undefined => {
  return pageTemplates.find(template => template.id === id)
}

export const getPageTemplatesByCategory = (category: PageTemplate['category']): PageTemplate[] => {
  return pageTemplates.filter(template => template.category === category)
}

