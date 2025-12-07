# Radix UI Integration Guide

## Overview

We're integrating [Radix UI](https://www.radix-ui.com/) components to achieve a professional, serious design aesthetic similar to their homepage. Radix UI provides accessible, unstyled primitives and a beautiful theme system.

## Installation

Radix UI packages have been installed:
- `@radix-ui/themes` - Pre-styled components with themes
- `@radix-ui/react-slot` - Slot component for composition
- `@radix-ui/react-dialog` - Dialog/Modal components
- `@radix-ui/react-dropdown-menu` - Dropdown menus
- `@radix-ui/react-accordion` - Accordion components
- `@radix-ui/react-tabs` - Tab navigation

## Theme Setup

The Radix UI Theme provider is configured in:
- **Provider**: `src/components/providers/RadixThemeProvider.tsx`
- **Integration**: Wrapped around the entire app in `src/main.tsx`
- **Styles**: Imported in `src/index.css`

### Theme Configuration

```tsx
<Theme
  appearance="light"
  accentColor="blue"
  grayColor="slate"
  radius="medium"
  scaling="100%"
>
```

## Available Components

### Buttons
```tsx
import { Button } from '@radix-ui/themes'

<Button size="4" color="blue">Primary Action</Button>
<Button size="4" variant="outline" color="gray">Secondary</Button>
<Button size="4" variant="soft" color="blue">Soft Style</Button>
```

### Typography
```tsx
import { Heading, Text } from '@radix-ui/themes'

<Heading size="9">Large Heading</Heading>
<Text size="5" color="gray">Body text</Text>
```

### Cards & Containers
```tsx
import { Card, Box, Container } from '@radix-ui/themes'

<Card>
  <Heading>Card Title</Heading>
  <Text>Card content</Text>
</Card>
```

### Tabs
```tsx
import * as Tabs from '@radix-ui/react-tabs'

<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content</Tabs.Content>
</Tabs.Root>
```

### Accordion (FAQ)
```tsx
import * as Accordion from '@radix-ui/react-accordion'

<Accordion.Root type="single" collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Question?</Accordion.Trigger>
    <Accordion.Content>Answer</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```

## Design Principles from Radix UI

### Professional & Serious Look

1. **Spacing**: Generous, consistent spacing (8px base grid)
2. **Typography**: Clear hierarchy with Inter font
3. **Colors**: Muted, professional palette
4. **Shadows**: Subtle elevation system
5. **Borders**: Clean, minimal borders
6. **Interactions**: Smooth, predictable animations

### Color Palette

Radix UI uses a sophisticated color system:
- **Accent Colors**: blue, green, red, yellow, etc.
- **Gray Scale**: slate, gray, mauve
- **Semantic Colors**: success, warning, error

### Component Sizing

- **Small**: `size="1"` - Compact components
- **Medium**: `size="2"` or `size="3"` - Default
- **Large**: `size="4"` or `size="5"` - Prominent CTAs
- **XLarge**: `size="6"`+ - Hero elements

## Migration Strategy

### Phase 1: Core Components ✅
- [x] Install Radix UI packages
- [x] Set up Theme provider
- [x] Import Radix UI CSS
- [x] Update Hero section buttons

### Phase 2: Navigation & Layout
- [ ] Update Header with Radix UI components
- [ ] Update Footer styling
- [ ] Use Radix UI Container for layout

### Phase 3: Content Sections
- [ ] Update Problem section with Cards
- [ ] Update Solution section
- [ ] Update FAQ section with Accordion
- [ ] Update Features page with Tabs

### Phase 4: Interactive Components
- [ ] Replace modals with Radix Dialog
- [ ] Update dropdowns with Radix Dropdown
- [ ] Add tooltips where needed

## Best Practices

1. **Use Radix UI for interactive elements** - Buttons, inputs, dialogs
2. **Keep Tailwind for layout** - Grid, flexbox, spacing utilities
3. **Combine both** - Radix components + Tailwind classes
4. **Maintain accessibility** - Radix UI is built for accessibility
5. **Follow Radix patterns** - Read their docs for best practices

## Examples

### Professional Button
```tsx
<Button 
  size="4" 
  color="blue"
  radius="medium"
  style={{ minHeight: '56px' }}
>
  Get Started
</Button>
```

### Professional Card
```tsx
<Card>
  <Flex direction="column" gap="4">
    <Heading size="6">Card Title</Heading>
    <Text color="gray">Description</Text>
    <Button>Action</Button>
  </Flex>
</Card>
```

## Resources

- [Radix UI Themes Docs](https://www.radix-ui.com/themes/docs/overview/getting-started)
- [Radix UI Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [Radix UI Homepage](https://www.radix-ui.com/) - Design reference

## Next Steps

1. Continue updating components to use Radix UI
2. Refine spacing and typography
3. Ensure consistent professional aesthetic
4. Test accessibility features
5. Review design against Radix UI homepage style

