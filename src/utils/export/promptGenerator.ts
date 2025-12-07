import { UnifiedWebsite, PageSection } from '../../data/builders/unifiedWebsite'
import { getTemplateById } from '../../data/sectionTemplates'

export const generateSectionPrompt = (section: PageSection): string => {
  const template = getTemplateById(section.sectionId)
  
  return `# Section: ${template?.name || 'Custom Section'}

## Overview
${template?.description || ''}

## Components Structure
${template?.components.map((c, i) => `
### Component ${i + 1}: ${c.type}
- **Props**: ${JSON.stringify(c.props, null, 2)}
- **Styles**: ${JSON.stringify(c.styles || {}, null, 2)}
${c.children ? `- **Children**: ${c.children.length} child components` : ''}
`).join('\n')}

## Customizations Applied
\`\`\`json
${JSON.stringify(section.customizations, null, 2)}
\`\`\`

## Instructions for Cursor AI
Create this section component with the following specifications:

1. **Structure**: Use the component structure defined above
2. **Styling**: Apply the styles from the template and any customizations
3. **Responsive**: Ensure it works on mobile (375px), tablet (768px), and desktop (1024px+)
4. **Design System**: Follow the DoPlan design system:
   - Primary color: #6366f1
   - Font: IBM Plex Sans for headings, Inter for body
   - Spacing: Use consistent spacing scale
   - Border radius: 0.75rem for cards, 0.5rem for buttons
5. **Functionality**: Make all interactive elements functional
6. **Accessibility**: Ensure proper ARIA labels and keyboard navigation

Generate React component code that matches this specification exactly.
`
}

export const generateWebsitePrompt = (website: UnifiedWebsite): string => {
  return `# Website: ${website.name}

## Overview
Complete website with ${website.pages.length} page(s).

## Pages Structure
${website.pages.map((page, index) => `
### Page ${index + 1}: ${page.name}
- **Path**: ${page.path}
- **Sections**: ${page.sections.length}
- **Layout**: ${page.layout.container}

#### Sections:
${page.sections.map((s, i) => {
  const template = getTemplateById(s.sectionId)
  return `  ${i + 1}. ${template?.name || 'Section'} (Order: ${s.order})`
}).join('\n')}
`).join('\n')}

## Global Settings
\`\`\`json
${JSON.stringify(website.globalSettings, null, 2)}
\`\`\`

## Instructions for Cursor AI
Create this complete website with the following specifications:

1. **Pages**: Build all ${website.pages.length} page(s) with their respective sections
2. **Navigation**: Implement navigation between pages using React Router
3. **Layout**: Apply the specified layout settings for each page
4. **Global Components**: Include header and footer if specified in global settings
5. **Responsive Design**: Ensure all pages work on mobile, tablet, and desktop
6. **SEO**: Apply SEO settings from each page
7. **Design System**: Follow DoPlan design system consistently
8. **Code Structure**: 
   - Use React 18 with TypeScript
   - Use React Router for navigation
   - Use Tailwind CSS for styling
   - Organize components in logical folders
9. **Performance**: Optimize for fast loading and smooth interactions

Generate the complete React application structure and code.
`
}

export const generateComponentPrompt = (component: any): string => {
  return `# Component: ${component.type}

## Props
\`\`\`json
${JSON.stringify(component.props, null, 2)}
\`\`\`

## Styles
\`\`\`json
${JSON.stringify(component.styles || {}, null, 2)}
\`\`\`

## Instructions for Cursor AI
Create this component with:
1. Props as specified above
2. Styles applied exactly as defined
3. Responsive behavior
4. Accessibility features
5. TypeScript types
`
}

