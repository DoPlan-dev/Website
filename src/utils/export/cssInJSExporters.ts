// CSS-in-JS exporters (styled-components, emotion)

import { PageSection } from '../../data/builders/unifiedWebsite'
import { getTemplateById, SectionComponent } from '../../data/sectionTemplates'

/**
 * Generate styled-components code from a section
 */
export function generateStyledComponents(section: PageSection): string {
  const template = getTemplateById(section.sectionId)
  if (!template) return '// Template not found'

  const componentName = toPascalCase(template.name) || 'Section'
  const customizations = section.customizations

  const generateStyledComponent = (component: SectionComponent): string => {
    const customization = customizations?.components?.[component.id]
    const mergedStyles = { ...component.styles, ...customization?.styles }

    const styleProps = Object.entries(mergedStyles || {})
      .map(([key, value]) => `${camelToKebab(key)}: '${value}';`)
      .join('\n    ')

    const componentName = `${toPascalCase(component.type)}${component.id.replace(/[^a-zA-Z0-9]/g, '')}`
    
    if (styleProps) {
      return `const ${componentName} = styled.${getStyledComponentTag(component.type)}\`
    ${styleProps}
  \``
    }
    return ''
  }

  const componentsCode = template.components
    .map(component => generateStyledComponent(component))
    .filter(Boolean)
    .join('\n\n')

  return `import styled from 'styled-components'

${componentsCode}

export const ${componentName}: React.FC = () => {
  return (
    <Section>
      {/* Component content */}
    </Section>
  )
}
`
}

/**
 * Generate emotion (css prop) code from a section
 */
export function generateEmotionCSS(section: PageSection): string {
  const template = getTemplateById(section.sectionId)
  if (!template) return '// Template not found'

  const componentName = toPascalCase(template.name) || 'Section'

  return `import { css } from '@emotion/react'

const sectionStyles = css\`
  /* Section styles */
\`

export const ${componentName}: React.FC = () => {
  return (
    <section css={sectionStyles}>
      {/* Component content */}
    </section>
  )
}
`
}

/**
 * Generate CSS modules code from a section
 */
export function generateCSSModules(section: PageSection): string {
  const template = getTemplateById(section.sectionId)
  if (!template) return '// Template not found'

  const componentName = toPascalCase(template.name) || 'Section'
  const customizations = section.customizations

  const generateCSS = (): string => {
    const styles: string[] = []
    
    template.components.forEach(component => {
      const customization = customizations?.components?.[component.id]
      const mergedStyles = { ...component.styles, ...customization?.styles }
      
      const className = `.${component.type}-${component.id.replace(/[^a-zA-Z0-9]/g, '-')}`
      const styleProps = Object.entries(mergedStyles || {})
        .map(([key, value]) => `  ${camelToKebab(key)}: ${value};`)
        .join('\n')
      
      if (styleProps) {
        styles.push(`${className} {\n${styleProps}\n}`)
      }
    })

    return styles.join('\n\n')
  }

  return `// ${componentName}.module.css
${generateCSS()}

// ${componentName}.tsx
import styles from './${componentName}.module.css'

export const ${componentName}: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Component content */}
    </section>
  )
}
`
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

function getStyledComponentTag(type: string): string {
  const tagMap: Record<string, string> = {
    heading: 'h1',
    text: 'p',
    button: 'button',
    link: 'a',
    image: 'img',
    grid: 'div',
    card: 'div',
    terminal: 'div',
    icon: 'div'
  }
  return tagMap[type] || 'div'
}
