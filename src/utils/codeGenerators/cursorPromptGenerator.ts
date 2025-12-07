import { SectionTemplate, SectionComponent } from '../../data/sectionTemplates'

export const generateCursorPrompt = (template: SectionTemplate): string => {
  const componentStructure = analyzeComponentStructure(template.components)
  
  return `# Create ${template.name} Section Component

## Overview
${template.description}

## Component Specifications

### File Location
Create the component at: \`src/components/sections/${template.id.charAt(0).toUpperCase() + template.id.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Section.tsx\`

### Component Structure
${componentStructure.markdown}

### Props Interface
\`\`\`typescript
interface ${toPascalCase(template.id)}SectionProps {
  // Add any props if needed
}
\`\`\`

### Styling Requirements
- Background: ${template.defaultProps.backgroundColor}
- Padding: ${template.defaultProps.padding}
- Use Radix UI components where possible
- Follow Volt-inspired design system
- Ensure responsive design (mobile-first)

### Implementation Steps
1. Create the component file
2. Import necessary dependencies (React, Radix UI components, LucideIcon)
3. Implement the component structure as specified
4. Apply styling using Tailwind CSS classes
5. Ensure accessibility (ARIA labels, semantic HTML)
6. Test responsiveness across breakpoints

### Design Tokens
Use the following design tokens from the design system:
- Primary color: \`#6366f1\`
- Text primary: \`#0f172a\`
- Text secondary: \`#64748b\`
- Border: \`#e2e8f0\`
- Border radius: \`0.75rem\`
- Font: IBM Plex Sans for headings, Inter for body text

### Component Details
${generateComponentDetails(template.components)}

### Example Usage
\`\`\`tsx
import { ${toPascalCase(template.id)}Section } from './components/sections/${toPascalCase(template.id)}Section'

export const Page = () => {
  return (
    <>
      {/* Other sections */}
      <${toPascalCase(template.id)}Section />
    </>
  )
}
\`\`\`

### Notes
- Ensure the component is fully responsive
- Use TypeScript for type safety
- Follow existing code patterns in the project
- Include proper error handling if needed
- Optimize for performance (lazy loading if applicable)
- Use LucideIcon for all icons (outline variant)
`
}

const analyzeComponentStructure = (components: SectionComponent[]): { markdown: string } => {
  const buildStructure = (comps: SectionComponent[], depth: number = 0): string => {
    return comps.map(comp => {
      const indent = '  '.repeat(depth)
      let structure = `${indent}- **${comp.type}** (id: ${comp.id})`
      
      if (comp.props) {
        const propsSummary = Object.entries(comp.props)
          .slice(0, 3)
          .map(([key, value]) => {
            const valStr = typeof value === 'string' ? value : JSON.stringify(value)
            return `${key}: ${valStr.slice(0, 30)}`
          })
          .join(', ')
        structure += `\n${indent}  Props: ${propsSummary}${Object.keys(comp.props).length > 3 ? '...' : ''}`
      }
      
      if (comp.children && comp.children.length > 0) {
        structure += `\n${indent}  Children:\n${buildStructure(comp.children, depth + 2)}`
      }
      
      return structure
    }).join('\n')
  }

  return {
    markdown: buildStructure(components)
  }
}

const generateComponentDetails = (components: SectionComponent[]): string => {
  return components.map((comp, index) => {
    let details = `\n#### Component ${index + 1}: ${comp.type} (${comp.id})\n`
    details += `- **Type**: ${comp.type}\n`
    
    if (comp.props) {
      details += `- **Properties**:\n`
      Object.entries(comp.props).forEach(([key, value]) => {
        const valStr = typeof value === 'string' ? value : JSON.stringify(value)
        details += `  - ${key}: ${valStr}\n`
      })
    }
    
    if (comp.styles) {
      details += `- **Styles**:\n`
      Object.entries(comp.styles).forEach(([key, value]) => {
        details += `  - ${key}: ${value}\n`
      })
    }
    
    if (comp.children && comp.children.length > 0) {
      details += `- **Children**: ${comp.children.length} child component(s)\n`
      details += generateComponentDetails(comp.children)
    }
    
    return details
  }).join('\n')
}

const toPascalCase = (str: string): string => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

export const generateReactComponent = (template: SectionTemplate): string => {
  const componentName = toPascalCase(template.id) + 'Section'

  return `import React from 'react'
import { Heading, Text, Container, Flex, Card, Button } from '@radix-ui/themes'
import { LucideIcon } from '../ui/LucideIcon'

interface ${componentName}Props {
  // Add props here if needed
}

export const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return (
    <section
      className="${template.defaultProps.padding}"
      style={{ backgroundColor: '${template.defaultProps.backgroundColor}' }}
    >
      <Container size="4">
        {/* Generated component structure */}
        ${generateReactJSX(template.components)}
      </Container>
    </section>
  )
}
`
}

const generateReactJSX = (components: SectionComponent[], indent: string = '        '): string => {
  return components.map(comp => {
    switch (comp.type) {
      case 'heading':
        return `${indent}<Heading size="${comp.props.size || '8'}" style={{ fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif" }}>
${indent}  ${comp.props.text || ''}
${indent}</Heading>`
      
      case 'text':
        return `${indent}<Text size="${comp.props.size || '4'}" style={{ color: '#64748b' }}>
${indent}  ${comp.props.text || ''}
${indent}</Text>`
      
      case 'button':
        return `${indent}<Button size="${comp.props.size || '3'}" variant="${comp.props.variant || 'solid'}">
${indent}  ${comp.props.text || 'Button'}
${indent}</Button>`
      
      case 'card':
        return `${indent}<Card className="border border-[#e2e8f0] bg-white" style={{ padding: '1rem' }}>
${indent}  {/* Card content */}
${comp.children ? generateReactJSX(comp.children, indent + '  ') : ''}
${indent}</Card>`
      
      case 'grid':
        const columns = comp.props.columns || 1
        return `${indent}<div className="grid grid-cols-${columns} gap-${comp.props.gap || '4'}">
${comp.children ? generateReactJSX(comp.children, indent + '  ') : ''}
${indent}</div>`
      
      default:
        return `${indent}{/* ${comp.type} component */}`
    }
  }).join('\n\n')
}

export const generateHTMLCSS = (template: SectionTemplate): string => {
  return `<!-- ${template.name} Section -->
<section class="section-container" style="background-color: ${template.defaultProps.backgroundColor}; padding: ${template.defaultProps.padding};">
  <div class="container">
    ${generateHTML(template.components)}
  </div>
</section>

<style>
.section-container {
  /* Add section styles */
}

${generateCSS(template.components)}
</style>
`
}

const generateHTML = (components: SectionComponent[]): string => {
  return components.map(comp => {
    switch (comp.type) {
      case 'heading':
        return `<h1>${comp.props.text || ''}</h1>`
      case 'text':
        return `<p>${comp.props.text || ''}</p>`
      case 'button':
        return `<button class="btn btn-${comp.props.variant || 'primary'}">${comp.props.text || 'Button'}</button>`
      case 'grid':
        return `<div class="grid grid-cols-${comp.props.columns || 1}">
  ${comp.children ? generateHTML(comp.children) : ''}
</div>`
      default:
        return `<!-- ${comp.type} component -->`
    }
  }).join('\n    ')
}

const generateCSS = (components: SectionComponent[]): string => {
  return components.map(comp => {
    if (comp.styles) {
      const styles = Object.entries(comp.styles)
        .map(([key, value]) => `  ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
        .join('\n')
      return `.${comp.id} {\n${styles}\n}`
    }
    return ''
  }).filter(Boolean).join('\n\n')
}

