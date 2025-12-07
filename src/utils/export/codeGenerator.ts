// Builder types removed - functions below may need refactoring if used
import { getTemplateById, SectionComponent } from '../../data/sectionTemplates'
import { generateCSS } from '../style-editor/styleGenerator'
import { generateKeyframesCSS } from '../animations/animationGenerator'
// import { generateResponsiveCSS } from '../responsive/breakpointUtils' // Not used - requires breakpoints array
import { ComponentAnimations } from '../../types/animations'
// import { ResponsiveStyles } from '../../types/responsive' // Not used - responsive CSS generation simplified

/**
 * Generate React component code from a section
 */
export const generateReactComponent = (section: any, componentName?: string): string => {
  const template = getTemplateById(section.sectionId)
  if (!template) return '// Template not found'

  const name = componentName || toPascalCase(template.name) || 'Section'
  const customizations = section.customizations

  const renderComponent = (component: SectionComponent, depth: number = 0): string => {
    const indent = '  '.repeat(depth + 2)
    const customization = customizations?.components?.[component.id]
    const mergedProps = { ...component.props, ...customization?.props }
    const mergedStyles = { ...component.styles, ...customization?.styles }

    // Generate CSS string from styles
    const styleString = generateCSS(mergedStyles || {})
    const styleProp = styleString ? ` style={{ ${styleString.split('; ').map(s => {
      const [key, value] = s.split(': ')
      return `${key}: '${value}'`
    }).join(', ')} }}` : ''

    // Note: Responsive styles and animations would be handled at the section level
    // Component-level styles are already merged above

    switch (component.type) {
      case 'heading':
        const headingLevel = mergedProps.level || 'h1'
        const headingText = mergedProps.text || ''
        return `${indent}<${headingLevel}${styleProp}>\n${indent}  ${escapeJSX(headingText)}\n${indent}</${headingLevel}>`

      case 'text':
        const textContent = mergedProps.text || ''
        return `${indent}<p${styleProp}>\n${indent}  ${escapeJSX(textContent)}\n${indent}</p>`

      case 'button':
        const buttonText = mergedProps.text || 'Button'
        const buttonVariant = mergedProps.variant || 'solid'
        const buttonSize = mergedProps.size || '3'
        const buttonHref = mergedProps.href || mergedProps.link || ''
        
        const buttonClasses = getButtonClasses(buttonVariant, buttonSize)
        
        if (buttonHref) {
          return `${indent}<a href="${buttonHref}" className="${buttonClasses}"${styleProp}>\n${indent}  ${escapeJSX(buttonText)}\n${indent}</a>`
        }
        return `${indent}<button className="${buttonClasses}"${styleProp}>\n${indent}  ${escapeJSX(buttonText)}\n${indent}</button>`

      case 'link':
        const linkText = mergedProps.text || mergedProps.label || 'Link'
        const linkHref = mergedProps.href || mergedProps.url || '#'
        return `${indent}<a href="${linkHref}"${styleProp}>\n${indent}  ${escapeJSX(linkText)}\n${indent}</a>`

      case 'image':
        const imageSrc = mergedProps.src || mergedProps.url || ''
        const imageAlt = mergedProps.alt || ''
        return `${indent}<img src="${imageSrc}" alt="${imageAlt}"${styleProp} />`

      case 'grid':
        const columns = mergedProps.columns || 2
        const gap = mergedProps.gap || '1rem'
        const children = component.children?.map(child => renderComponent(child, depth + 1)).join('\n') || ''
        return `${indent}<div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(${columns}, 1fr)', gap: '${gap}' }}${styleProp}>\n${children}\n${indent}</div>`

      case 'card':
        const cardChildren = component.children?.map(child => renderComponent(child, depth + 1)).join('\n') || ''
        return `${indent}<div className="rounded-lg p-6 border border-gray-200"${styleProp}>\n${cardChildren}\n${indent}</div>`

      case 'terminal':
        const prompt = mergedProps.prompt || '$'
        const output = mergedProps.output || ''
        return `${indent}<div className="bg-slate-800 rounded-lg p-4 font-mono text-white"${styleProp}>\n${indent}  <div className="text-sm mb-2">${prompt}</div>\n${indent}  <div className="text-green-400">${escapeJSX(output)}</div>\n${indent}</div>`

      case 'icon':
        const iconName = mergedProps.name || 'Icon'
        return `${indent}<div className="inline-flex items-center justify-center"${styleProp}>\n${indent}  {/* Icon: ${iconName} */}\n${indent}</div>`

      default:
        return `${indent}{/* Component type: ${component.type} */}`
    }
  }

  const componentsCode = template.components
    .map(component => renderComponent(component, 0))
    .join('\n\n')

  // Generate animations CSS if available (from customizations - using type assertion)
  const animations = (customizations as any)?.animations as ComponentAnimations | undefined
  const animationsCSS = animations?.animations
    ?.map(anim => generateKeyframesCSS(anim))
    .join('\n\n') || ''

  // Generate responsive CSS if available
  // Note: Responsive CSS generation requires breakpoints array - simplified for now
  const responsiveCSS = ''

  return `import React from 'react'
${animationsCSS ? `\n// Animations\n${animationsCSS}` : ''}
${responsiveCSS ? `\n// Responsive Styles\n${responsiveCSS}` : ''}

interface ${name}Props {
  className?: string
}

export const ${name}: React.FC<${name}Props> = ({ className = '' }) => {
  return (
    <section className={\`\${className}\`}>
${componentsCode}
    </section>
  )
}

export default ${name}
`
}

/**
 * Generate HTML code from a section
 */
export const generateHTML = (section: PageSection): string => {
  const template = getTemplateById(section.sectionId)
  if (!template) return '<!-- Template not found -->'

  const customizations = section.customizations

  const renderComponent = (component: SectionComponent, depth: number = 0): string => {
    const indent = '  '.repeat(depth + 1)
    const customization = customizations?.components?.[component.id]
    const mergedProps = { ...component.props, ...customization?.props }
    const mergedStyles = { ...component.styles, ...customization?.styles }

    const styleString = Object.entries(mergedStyles || {})
      .map(([key, value]) => `${camelToKebab(key)}: ${value}`)
      .join('; ')

    const styleAttr = styleString ? ` style="${styleString}"` : ''

    switch (component.type) {
      case 'heading':
        const headingLevel = mergedProps.level || 'h1'
        const headingText = mergedProps.text || ''
        return `${indent}<${headingLevel}${styleAttr}>${escapeHTML(headingText)}</${headingLevel}>`

      case 'text':
        const textContent = mergedProps.text || ''
        return `${indent}<p${styleAttr}>${escapeHTML(textContent)}</p>`

      case 'button':
        const buttonText = mergedProps.text || 'Button'
        const buttonHref = mergedProps.href || mergedProps.link || ''
        const buttonVariant = mergedProps.variant || 'solid'
        
        if (buttonHref) {
          return `${indent}<a href="${buttonHref}" class="btn btn-${buttonVariant}"${styleAttr}>${escapeHTML(buttonText)}</a>`
        }
        return `${indent}<button class="btn btn-${buttonVariant}"${styleAttr}>${escapeHTML(buttonText)}</button>`

      case 'link':
        const linkText = mergedProps.text || mergedProps.label || 'Link'
        const linkHref = mergedProps.href || mergedProps.url || '#'
        return `${indent}<a href="${linkHref}"${styleAttr}>${escapeHTML(linkText)}</a>`

      case 'image':
        const imageSrc = mergedProps.src || mergedProps.url || ''
        const imageAlt = mergedProps.alt || ''
        return `${indent}<img src="${imageSrc}" alt="${imageAlt}"${styleAttr} />`

      case 'grid':
        const columns = mergedProps.columns || 2
        const gap = mergedProps.gap || '1rem'
        const children = component.children?.map(child => renderComponent(child, depth + 1)).join('\n') || ''
        return `${indent}<div class="grid" style="grid-template-columns: repeat(${columns}, 1fr); gap: ${gap};"${styleAttr}>\n${children}\n${indent}</div>`

      case 'card':
        const cardChildren = component.children?.map(child => renderComponent(child, depth + 1)).join('\n') || ''
        return `${indent}<div class="card"${styleAttr}>\n${cardChildren}\n${indent}</div>`

      case 'terminal':
        const prompt = mergedProps.prompt || '$'
        const output = mergedProps.output || ''
        return `${indent}<div class="terminal"${styleAttr}>\n${indent}  <div class="prompt">${escapeHTML(prompt)}</div>\n${indent}  <div class="output">${escapeHTML(output)}</div>\n${indent}</div>`

      default:
        return `${indent}<!-- Component type: ${component.type} -->`
    }
  }

  const componentsHTML = template.components
    .map(component => renderComponent(component, 0))
    .join('\n\n')

  return `<!-- ${template.name} -->
<section>
${componentsHTML}
</section>
`
}

/**
 * Generate Next.js page code
 */
export const generateNextJSPage = (page: any): string => {
  const sectionsCode = page.sections
    .sort((a, b) => a.order - b.order)
    .map(section => {
      const componentName = toPascalCase(getTemplateById(section.sectionId)?.name || 'Section')
      return `      <${componentName} />`
    })
    .join('\n')

  const uniqueSectionIds = Array.from(new Set(page.sections.map(s => s.sectionId)))
  const imports = uniqueSectionIds.map(sectionId => {
    const template = getTemplateById(sectionId)
    const componentName = toPascalCase(template?.name || 'Section')
    return `import { ${componentName} } from '@/components/sections/${componentName}'`
  }).join('\n')

  return `import { Metadata } from 'next'
${imports}

export const metadata: Metadata = {
  title: '${page.seoSettings.title || page.name}',
  description: '${page.seoSettings.description || ''}',
${page.seoSettings.keywords ? `  keywords: ${JSON.stringify(page.seoSettings.keywords)},` : ''}
}

export default function ${toPascalCase(page.name)}Page() {
  return (
    <main>
${sectionsCode}
    </main>
  )
}
`
}

/**
 * Generate complete project structure
 */
export const generateProjectStructure = (website: any): Record<string, string> => {
  const files: Record<string, string> = {}

  // Generate all sections as React components
  const uniqueSections = new Map<string, PageSection>()
  website.pages.forEach(page => {
    page.sections.forEach(section => {
      if (!uniqueSections.has(section.sectionId)) {
        uniqueSections.set(section.sectionId, section)
      }
    })
  })

  uniqueSections.forEach(section => {
    const template = getTemplateById(section.sectionId)
    if (template) {
      const componentName = toPascalCase(template.name)
      files[`src/components/sections/${componentName}.tsx`] = generateReactComponent(section, componentName)
    }
  })

  // Generate pages
  website.pages.forEach(page => {
    const pagePath = page.path === '/' ? 'page' : page.path.replace(/^\//, '').replace(/\//g, '/')
    files[`src/app/${pagePath}/page.tsx`] = generateNextJSPage(page)
  })

  // Generate package.json
  files['package.json'] = JSON.stringify({
    name: website.name.toLowerCase().replace(/\s+/g, '-'),
    version: '1.0.0',
    private: true,
    scripts: {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
      lint: 'next lint'
    },
    dependencies: {
      react: '^18.2.0',
      'react-dom': '^18.2.0',
      next: '^14.0.0',
      '@radix-ui/themes': '^3.0.0'
    },
    devDependencies: {
      typescript: '^5.0.0',
      '@types/react': '^18.2.0',
      '@types/node': '^20.0.0',
      tailwindcss: '^3.3.0',
      autoprefixer: '^10.4.0',
      postcss: '^8.4.0'
    }
  }, null, 2)

  // Generate README
  files['README.md'] = `# ${website.name}

Generated with DoPlan Unified Builder.

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the site.
`

  // Generate tsconfig.json
  files['tsconfig.json'] = JSON.stringify({
    compilerOptions: {
      target: 'es5',
      lib: ['dom', 'dom.iterable', 'esnext'],
      allowJs: true,
      skipLibCheck: true,
      strict: true,
      noEmit: true,
      esModuleInterop: true,
      module: 'esnext',
      moduleResolution: 'bundler',
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: 'preserve',
      incremental: true,
      plugins: [{ name: 'next' }],
      paths: {
        '@/*': ['./src/*']
      }
    },
    include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
    exclude: ['node_modules']
  }, null, 2)

  return files
}

// Helper functions
function toPascalCase(str: string): string {
  return str
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

function escapeJSX(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\n/g, '\\n')
}

function escapeHTML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function getButtonClasses(variant: string, size: string): string {
  const variants: Record<string, string> = {
    solid: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
    ghost: 'text-indigo-600 hover:bg-indigo-50',
    soft: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
  }

  const sizes: Record<string, string> = {
    '1': 'px-3 py-1.5 text-sm',
    '2': 'px-4 py-2 text-base',
    '3': 'px-6 py-3 text-base',
    '4': 'px-8 py-4 text-lg'
  }

  return `px-6 py-3 rounded-lg font-semibold transition-colors ${variants[variant] || variants.solid} ${sizes[size] || sizes['3']}`
}
