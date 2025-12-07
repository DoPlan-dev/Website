import { HeaderTemplate } from './headerTemplates'
import { FooterTemplate } from './footerTemplates'

export interface UnifiedWebsite {
  id: string
  name: string
  pages: WebsitePage[]
  globalSettings: {
    header?: HeaderTemplate
    footer?: FooterTemplate
    styles: GlobalStyles
    seo: SEOSettings
    domain?: string
    description?: string
    menus?: WebsiteMenu[]
  }
  createdAt: number
  updatedAt: number
}

export interface WebsitePage {
  id: string
  name: string
  path: string // URL path like "/home", "/about"
  sections: PageSection[]
  layout: {
    container: 'full' | 'wide' | 'narrow' | 'container'
  }
  seoSettings: {
    title: string
    description: string
    keywords?: string[]
  }
}

export interface PageSection {
  id: string
  type: 'header' | 'section' | 'footer' | 'custom'
  sectionId: string // Reference to section template ID
  order: number
  customizations: SectionCustomizations
  visibility: SectionVisibility
}

export interface SectionCustomizations {
  components?: Record<string, ComponentCustomization>
  componentsOverride?: Array<{
    id: string
    type: string
    props: Record<string, any>
    styles?: Record<string, any>
    children?: Array<{
      id: string
      type: string
      props: Record<string, any>
      styles?: Record<string, any>
    }>
  }>
  styles?: Record<string, any>
  layout?: Record<string, any>
}

export interface ComponentCustomization {
  props?: Record<string, any>
  styles?: Record<string, any>
}

export interface SectionVisibility {
  mobile: boolean
  tablet: boolean
  desktop: boolean
}

export interface GlobalStyles {
  primaryColor?: string
  fontFamily?: string
  monoFont?: string
  baseSpacing?: string
  pageWidth?: 'full' | 'wide' | 'narrow' | 'container'
  maxPageWidth?: string // e.g., "1200px", "1400px"
  spacing?: Record<string, string>
}

export interface MenuItem {
  id: string
  label: string
  href: string
  pageId?: string // Reference to page ID if linking to internal page
  external?: boolean
  children?: MenuItem[]
  icon?: string
}

export interface WebsiteMenu {
  id: string
  name: string
  type: 'main' | 'sidebar' | 'footer'
  items: MenuItem[]
}

export interface SEOSettings {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

export interface SelectedElement {
  type: 'section' | 'component' | 'page' | null
  id: string | null
  pageId?: string
  sectionId?: string
  componentId?: string
}

export interface BuilderState {
  website: UnifiedWebsite | null
  selectedElement: SelectedElement
  activePage: string | null
  viewport: {
    breakpoint: 'mobile' | 'tablet' | 'desktop'
    zoom: number
  }
  sidebar: {
    activeTab: 'components' | 'sections' | 'pages' | 'settings' | 'export'
  }
  inspector: {
    activeTab: 'properties' | 'styles' | 'layout' | 'responsive'
  }
  drag: {
    isDragging: boolean
    draggedItem: string | null
    dropTarget: string | null
  }
  previewMode: boolean
}

// Helper functions
export const createNewWebsite = (name: string): UnifiedWebsite => {
  return {
    id: `website-${Date.now()}`,
    name,
    pages: [],
    globalSettings: {
      styles: {},
      seo: {
        title: name,
        description: `Website: ${name}`
      }
    },
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
}

export const createNewPage = (name: string, path: string): WebsitePage => {
  return {
    id: `page-${Date.now()}`,
    name,
    path,
    sections: [],
    layout: {
      container: 'full'
    },
    seoSettings: {
      title: name,
      description: `Page: ${name}`
    }
  }
}

