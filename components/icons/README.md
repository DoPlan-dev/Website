# Icon Components

This directory contains reusable icon components and utilities for the DoPlan website.

## SvgIcon Component

A flexible component for rendering SVG icons from various sources.

### Usage Examples

#### 1. Using SVGRepo Icons (as image path)

```tsx
import { SvgIcon } from "@/components/icons/SvgIcon";

<SvgIcon 
  src="/icons/svgrepo/rocket.svg" 
  size={24}
  className="text-accent-600"
/>
```

#### 2. Using SVGRepo Icons (as React component)

```tsx
import { SvgIcon } from "@/components/icons/SvgIcon";
import RocketIcon from "@/public/icons/svgrepo/rocket.svg";

<SvgIcon 
  src={RocketIcon} 
  size={32}
  color="currentColor"
/>
```

#### 3. With Custom Styling

```tsx
<SvgIcon 
  src="/icons/svgrepo/command-center.svg"
  size={48}
  width={48}
  height={48}
  className="hover:scale-110 transition-transform"
  color="#ca4d86"
  fill="currentColor"
  stroke="none"
  aria-label="Command Center Icon"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string \| React.ComponentType` | Required | SVG file path or React component |
| `size` | `number \| string` | `24` | Size for both width and height |
| `width` | `number \| string` | `size` | Custom width |
| `height` | `number \| string` | `size` | Custom height |
| `className` | `string` | `""` | Additional CSS classes |
| `color` | `string` | - | Color for fill/stroke |
| `fill` | `string` | `color` | Fill color |
| `stroke` | `string` | `color` | Stroke color |
| `aria-label` | `string` | - | Accessibility label |
| `aria-hidden` | `boolean` | - | Hide from screen readers |

## Adding New Icons

1. Download SVG from [SVGRepo.com](https://www.svgrepo.com/)
2. Save to `public/icons/svgrepo/your-icon.svg`
3. Use in components as shown above

## Icon Libraries Available

- **Lucide React**: Already installed, use directly
- **Ionicons**: `react-ionicons` package
- **Hugeicons**: `hugeicons-react` package  
- **SVGRepo**: Use `SvgIcon` component
- **Doodle Icons**: Use `SvgIcon` component

