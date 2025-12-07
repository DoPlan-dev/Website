/**
 * Design System Usage Guidelines
 * Best practices and principles for using the Design System
 */

export interface Guideline {
  id: string
  title: string
  category: 'principles' | 'accessibility' | 'performance' | 'patterns'
  description: string
  content: string
  examples?: Array<{
    title: string
    code: string
    explanation: string
  }>
  relatedGuidelines?: string[]
}

export const guidelines: Guideline[] = [
  {
    id: 'design-principles',
    title: 'Design Principles',
    category: 'principles',
    description: 'Core principles that guide our design decisions',
    content: `Our Design System is built on four core principles:

1. **Consistency**: Use design tokens and components consistently across the application
2. **Accessibility**: Every component meets WCAG AA standards
3. **Performance**: Components are optimized for fast rendering and small bundle size
4. **Flexibility**: Components are composable and customizable while maintaining consistency

These principles ensure a cohesive user experience and maintainable codebase.`,
    examples: [
      {
        title: 'Use Design Tokens',
        code: `// ✅ Good: Use design tokens
const Button = styled.button\`
  color: var(--color-primary);
  padding: var(--spacing-md);
\`

// ❌ Bad: Hard-coded values
const Button = styled.button\`
  color: #6366f1;
  padding: 16px;
\``,
        explanation: 'Design tokens ensure consistency and make updates easier'
      }
    ]
  },
  {
    id: 'accessibility-first',
    title: 'Accessibility First',
    category: 'accessibility',
    description: 'Accessibility should be considered from the start, not added later',
    content: `Accessibility is not optional. Every component and page must be accessible:

- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Screen Readers**: Use semantic HTML and ARIA attributes appropriately
- **Color Contrast**: Meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- **Focus Management**: Clear focus indicators and logical tab order
- **Alternative Text**: Images and icons need descriptive alt text

Remember: Accessible design is better design for everyone.`,
    examples: [
      {
        title: 'Semantic HTML',
        code: `// ✅ Good: Semantic HTML
<button onClick={handleClick}>Submit</button>

// ❌ Bad: Non-semantic element
<div onClick={handleClick} role="button">Submit</div>`,
        explanation: 'Use semantic HTML elements - they have built-in accessibility features'
      }
    ]
  },
  {
    id: 'component-composition',
    title: 'Component Composition',
    category: 'patterns',
    description: 'Build complex UIs by composing simple components',
    content: `Instead of creating monolithic components, compose smaller components:

- **Start Small**: Build basic components first (Button, Input, Card)
- **Compose Up**: Combine components to create more complex patterns
- **Reuse Patterns**: Identify common patterns and extract them
- **Stay Flexible**: Keep components focused and composable

This approach leads to more maintainable and testable code.`,
    examples: [
      {
        title: 'Compose Components',
        code: `// ✅ Good: Composed components
<Card>
  <Heading>Title</Heading>
  <Text>Description</Text>
  <Button>Action</Button>
</Card>

// ❌ Bad: Monolithic component
<CardWithTitleDescriptionAndButton
  title="Title"
  description="Description"
  buttonText="Action"
/>`,
        explanation: 'Composition is more flexible and maintainable'
      }
    ]
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    category: 'patterns',
    description: 'Design for all screen sizes from the start',
    content: `Our Design System is mobile-first:

- **Mobile First**: Design for mobile, then enhance for larger screens
- **Flexible Layouts**: Use Grid and Flexbox for responsive layouts
- **Touch Targets**: Minimum 44x44px for touch interactions
- **Progressive Enhancement**: Core functionality works everywhere, enhanced features for capable devices

Test on real devices when possible.`,
    examples: [
      {
        title: 'Mobile-First CSS',
        code: `// ✅ Good: Mobile-first
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

// ❌ Bad: Desktop-first
.container {
  padding: 2rem;
}

@media (max-width: 767px) {
  .container {
    padding: 1rem;
  }
}`,
        explanation: 'Mobile-first is easier to maintain and more performant'
      }
    ]
  }
]

/**
 * Get guidelines by category
 */
export const getGuidelinesByCategory = (category: Guideline['category']): Guideline[] => {
  return guidelines.filter(guideline => guideline.category === category)
}

/**
 * Get guideline by ID
 */
export const getGuidelineById = (id: string): Guideline | undefined => {
  return guidelines.find(guideline => guideline.id === id)
}

