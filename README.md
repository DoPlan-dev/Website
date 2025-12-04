# DoPlan.dev Marketing Website

High-conversion marketing website for DoPlan CLI - Build Production Apps Without the Burnout.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your integration keys (all optional):

```bash
cp .env.example .env
```

- `VITE_GA_MEASUREMENT_ID` - Google Analytics Measurement ID
- `VITE_HEATMAP_SITE_ID` - Heatmap tracking site ID (e.g., Hotjar)
- `VITE_8N8_API_KEY` - 8n8 chat API key

All integrations are optional and will gracefully handle missing configuration.

### Development

```bash
npm run dev
```

Open http://localhost:3000 to see the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
├── pages/          # Page components
├── hooks/          # Custom hooks
├── utils/          # Utility functions
├── styles/         # Global styles
└── App.tsx         # Root component
```

## Design System

See `.do/system/DESIGN_SYSTEM.md` for complete design system documentation.

## Browser Support

This website supports the latest 2 versions of:
- **Chrome** (desktop and mobile)
- **Safari** (desktop and iOS)
- **Firefox** (desktop)
- **Edge** (desktop)

For detailed browser support information and testing checklist, see:
- `.do/system/content/browser-testing/BROWSER_SUPPORT.md`
- `.do/system/content/browser-testing/TESTING_CHECKLIST.md`

## License

Private - DoPlan Team
