# SVGRepo Icons

This directory contains SVG icons downloaded from [SVGRepo.com](https://www.svgrepo.com/).

## How to Add Icons

1. Visit [SVGRepo.com](https://www.svgrepo.com/)
2. Search for the icon you need
3. Click on the icon to view details
4. Click "Download" and select "SVG" format
5. Save the SVG file to this directory: `public/icons/svgrepo/your-icon-name.svg`
6. Use the icon in your components:

```tsx
import { SvgIcon } from "@/components/icons/SvgIcon";

// As image path
<SvgIcon src="/icons/svgrepo/your-icon-name.svg" size={24} />

// With custom styling
<SvgIcon 
  src="/icons/svgrepo/your-icon-name.svg" 
  size={32}
  className="text-accent-600"
  color="currentColor"
/>
```

## Icon Naming Convention

- Use kebab-case: `command-center.svg`, `ai-agent.svg`
- Be descriptive: `rocket-launch.svg` not `icon1.svg`
- Group related icons: `commands/`, `features/`, etc.

## License

SVGRepo icons are typically free to use (check individual icon licenses). Most are CC0 (public domain) or similar open licenses.

## Popular Icon Categories

- **Commands**: `/hey`, `/do`, `/plan`, `/dev`, `/sys`
- **Features**: AI, automation, speed, quality
- **Team**: collaboration, workflow, productivity
- **Technology**: CLI, terminal, code, development

