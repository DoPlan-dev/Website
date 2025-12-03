# DoPlan CLI Marketing Website

Professional marketing website for DoPlan CLI - Build Production Apps Without the Burnout.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Analytics**: Plausible (privacy-first)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
app/
  ├── layout.tsx          # Root layout with metadata and SEO
  ├── page.tsx            # Homepage (3 sections: Hero, Problems, Commands)
  ├── features/           # Features deep-dive page
  ├── faq/                # FAQ page
  ├── discord/            # Discord community page
  └── not-found.tsx       # Custom 404 page

components/
  ├── ui/                 # Reusable UI components
  ├── Terminal.tsx        # Animated terminal with copy-to-clipboard
  ├── Hero.tsx            # Hero section
  ├── ProblemsSection.tsx # Problems section
  ├── CommandsSection.tsx # Commands section
  └── ...                 # Other components

content/
  ├── marketing-content.ts # All marketing content
  └── agents.ts            # 18 AI agents data

lib/
  ├── utils.ts            # Utility functions
  ├── analytics.ts        # Analytics integration
  └── clipboard.ts        # Clipboard utilities
```

## Features

- ✅ Animated terminal component with character-by-character typing
- ✅ Copy-to-clipboard with analytics tracking
- ✅ Fully responsive (320px+)
- ✅ WCAG 2.2 AA accessible
- ✅ SEO optimized (meta tags, Open Graph, JSON-LD)
- ✅ Performance optimized (target: Lighthouse 100)
- ✅ Privacy-first analytics (Plausible)
- ✅ Keyboard navigation
- ✅ Screen reader support

## Analytics Events

The site tracks the following custom events:

- `command_copied` - When user copies CLI command
- `cta_clicked` - When user clicks CTA (with type prop)
- `page_view` - Page views (automatic)
- `404_page` - 404 page views

## Design System

- **Primary Colors**: Calm blues (#3B82F6, #1E40AF)
- **Accent Colors**: Warm accents (#F59E0B)
- **Font**: Inter (via Next.js font optimization)
- **Theme**: "Humanized Professional" (clean, light mode)

## Performance Targets

- Lighthouse Score: 100
- Bundle Size: < 200kb gzipped
- TTFB: < 1.5s
- Conversion Rate: 8-12% (run command)
- Time to First Command: < 90 seconds

## Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigable
- Screen reader optimized
- Focus indicators visible
- Color contrast ratios meet AA standards
- Skip to main content link

## License

Private - DoPlan Team

