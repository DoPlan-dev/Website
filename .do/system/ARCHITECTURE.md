# Technical Architecture
## DoPlan.dev Marketing Website

**Version:** 1.0.0  
**Status:** Draft  
**Last Updated:** 2025-12-03  
**Project Type:** Marketing Website

---

## System Overview

DoPlan.dev is a high-performance, conversion-optimized marketing website built with React, designed to convert visitors into DoPlan CLI users. The architecture prioritizes speed (<1s load time), scalability (1000+ daily visitors), and conversion optimization.

**Architecture Pattern:** Static Site Generation (SSG) with Client-Side Interactivity

---

## Technology Stack

### Frontend
- **Framework:** React (latest stable version)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion + CSS animations
- **Build Tool:** Vite or Create React App (TBD based on performance requirements)
- **Language:** TypeScript (recommended) or JavaScript

### Hosting & Deployment
- **Platform:** Vercel
- **Deployment:** Automatic deployments from GitHub
- **CDN:** Vercel Edge Network (global distribution)
- **SSL:** Automatic via Vercel

### Third-Party Integrations
- **Analytics:** Custom analytics + heatmap tracking
- **Chat:** 8n8 chat integration
- **Automation:** Workflow automation tools
- **Monitoring:** Uptime, error, and performance monitoring

### Development Tools
- **Version Control:** GitHub (https://github.com/DoPlan-dev/Website/)
- **Package Manager:** npm or pnpm
- **Linting:** ESLint
- **Formatting:** Prettier

---

## System Design Structure

### Architecture Layers

```
┌─────────────────────────────────────────────────┐
│           Presentation Layer                    │
│  (React Components, UI, Animations)            │
├─────────────────────────────────────────────────┤
│           Application Layer                     │
│  (State Management, Routing, Business Logic)   │
├─────────────────────────────────────────────────┤
│           Integration Layer                    │
│  (Analytics, Chat, Third-party APIs)            │
├─────────────────────────────────────────────────┤
│           Infrastructure Layer                 │
│  (Vercel, CDN, Monitoring, Backups)           │
└─────────────────────────────────────────────────┘
```

### Component Architecture

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (buttons, cards, etc.)
│   ├── layout/          # Layout components (header, footer, etc.)
│   ├── sections/        # Page sections (hero, features, etc.)
│   └── terminal/        # Terminal/code display components
├── pages/               # Page components
│   ├── Home.tsx
│   ├── Features.tsx
│   └── Docs.tsx
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── styles/              # Global styles, Tailwind config
├── assets/              # Static assets (images, icons)
└── lib/                 # Third-party library integrations
    ├── analytics.ts
    ├── chat.ts
    └── monitoring.ts
```

---

## Performance Architecture

### Load Time Optimization (<1s Target)

**Strategy:**
1. **Code Splitting:** Route-based code splitting
2. **Asset Optimization:**
   - Image optimization (WebP with PNG fallback)
   - SVG for icons and simple graphics
   - Lazy loading for below-fold content
3. **Critical CSS:** Inline critical CSS for above-fold content
4. **Font Optimization:** Preload critical fonts, use font-display: swap
5. **Minimal JavaScript:** Vanilla JS where possible, minimal dependencies

**Implementation:**
```javascript
// Route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));

// Image optimization
import heroImage from './assets/hero.webp';
// Use Next.js Image component or similar optimization

// Critical CSS inline
// Extract and inline critical CSS for hero section
```

### Core Web Vitals Targets

**LCP (Largest Contentful Paint):** <2.5s
- Optimize hero image/terminal visual
- Preload critical resources
- Use efficient image formats

**FID (First Input Delay):** <100ms
- Minimize JavaScript execution time
- Defer non-critical JavaScript
- Use web workers for heavy computations

**CLS (Cumulative Layout Shift):** <0.1
- Set explicit dimensions for images/videos
- Reserve space for dynamic content
- Avoid inserting content above existing content

---

## Scalability Architecture

### Traffic Handling (1000+ Daily Visitors)

**Current Scale:**
- Expected: 1000+ daily visitors (~42 visitors/hour peak)
- Vercel can handle this easily

**Future Scale Considerations:**
- Vercel auto-scales
- CDN caching for static assets
- Edge functions for dynamic content (if needed)

### Caching Strategy

**Static Assets:**
- CDN caching (Vercel Edge Network)
- Long cache headers for immutable assets
- Cache busting via filename hashing

**Dynamic Content:**
- Client-side caching for API responses
- Service worker for offline capability (future)

---

## Security Architecture

### Security Measures
- **HTTPS:** Automatic via Vercel
- **Content Security Policy:** Implement CSP headers
- **XSS Protection:** React's built-in XSS protection
- **Dependency Scanning:** Regular security audits
- **Environment Variables:** Secure storage for API keys

### Data Privacy
- **Analytics:** Privacy-first analytics (Plausible or similar)
- **GDPR Compliance:** Cookie consent if required
- **No Personal Data Collection:** Minimal data collection

---

## Monitoring & Observability

### Monitoring Stack
- **Uptime Monitoring:** Vercel Analytics + external service
- **Error Tracking:** Sentry or similar
- **Performance Monitoring:** Vercel Analytics + Web Vitals
- **User Analytics:** Custom analytics + heatmap

### Logging Strategy
- **Client-Side Errors:** Error boundary + error logging service
- **Performance Metrics:** Web Vitals API
- **User Interactions:** Custom event tracking

### Alerting
- **Uptime Alerts:** Notify on downtime
- **Error Alerts:** Notify on critical errors
- **Performance Alerts:** Notify on performance degradation

---

## Backup & Disaster Recovery

### Backup Strategy
- **Code:** GitHub repository (primary backup)
- **Content:** Version controlled in repository
- **Configuration:** Environment variables in Vercel
- **Frequency:** Monthly backups (as per requirements)

### Disaster Recovery Plan
- **Code Recovery:** Restore from GitHub
- **Deployment Recovery:** Vercel deployment history
- **Data Recovery:** No database, minimal data loss risk

---

## Integration Architecture

### Analytics Integration
```typescript
// lib/analytics.ts
export const trackEvent = (eventName: string, properties?: object) => {
  // Custom analytics implementation
  // Heatmap tracking
  // Conversion funnel tracking
};
```

### Chat Integration (8n8)
```typescript
// lib/chat.ts
export const initializeChat = () => {
  // 8n8 chat widget initialization
  // Load chat script
  // Configure chat settings
};
```

### Automation Integration
```typescript
// lib/automation.ts
export const triggerAutomation = (event: string, data?: object) => {
  // Workflow automation triggers
  // Integration with automation tools
};
```

---

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

### Deployment Pipeline
1. **Push to GitHub:** Main branch
2. **Vercel Auto-Deploy:** Automatic deployment on push
3. **Build Process:** Vercel builds React app
4. **Deploy:** Deployed to Vercel Edge Network
5. **Monitoring:** Automatic monitoring starts

### Environment Management
- **Development:** Local environment variables
- **Staging:** Vercel preview deployments
- **Production:** Vercel production environment

---

## Component Design Patterns

### Component Structure
```typescript
// components/sections/Hero.tsx
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  command: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, command }) => {
  // Component implementation
  // Follows design system
  // Optimized for performance
};
```

### State Management
- **Local State:** React useState/useReducer for component state
- **Global State:** Context API for shared state (if needed)
- **No Redux:** Keep it simple, add only if necessary

### Styling Approach
- **Tailwind CSS:** Utility-first CSS
- **Component Styles:** Tailwind classes + CSS modules for complex components
- **Design Tokens:** Tailwind config matches design system

---

## Accessibility Architecture

### Implementation
- **Semantic HTML:** Proper HTML5 semantic elements
- **ARIA Labels:** For interactive elements
- **Keyboard Navigation:** Full keyboard support
- **Screen Reader Support:** Proper heading hierarchy, alt text
- **Focus Management:** Visible focus indicators

### Testing
- **Automated:** axe DevTools, Lighthouse
- **Manual:** Keyboard navigation testing
- **Screen Reader:** NVDA/JAWS testing

---

## SEO Architecture

### Implementation
- **Meta Tags:** Dynamic meta tags per page
- **Structured Data:** JSON-LD schema markup
- **Sitemap:** XML sitemap generation
- **Robots.txt:** Proper robots.txt configuration
- **Open Graph:** Social media sharing optimization

### Content Optimization
- **SEO-Friendly URLs:** Clean, descriptive URLs
- **Heading Hierarchy:** Proper H1-H6 structure
- **Alt Text:** Descriptive alt text for images
- **Internal Linking:** Strategic internal links

---

## Browser Support Strategy

### Supported Browsers
- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)

### Polyfills
- **Modern JavaScript:** Use Babel for transpilation
- **CSS:** Autoprefixer for vendor prefixes
- **Features:** Feature detection + polyfills if needed

---

## File Structure

```
do-plan-website/
├── public/                 # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Base UI components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   └── terminal/     # Terminal components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Utility functions
│   ├── styles/           # Global styles
│   ├── assets/           # Assets (images, etc.)
│   ├── lib/              # Third-party integrations
│   └── App.tsx           # Root component
├── .github/              # GitHub workflows
├── .vercel/              # Vercel configuration
├── package.json
├── tailwind.config.js
├── tsconfig.json         # TypeScript config (if using TS)
└── README.md
```

---

## Performance Budget

### Asset Size Limits
- **JavaScript:** <200KB gzipped (initial load)
- **CSS:** <50KB gzipped (critical CSS inline)
- **Images:** <150KB per image (optimized)
- **Fonts:** <100KB total (subset if needed)

### Metrics Targets
- **Load Time:** <1 second
- **Time to Interactive:** <2 seconds
- **First Contentful Paint:** <0.8 seconds
- **Speed Index:** <1.2 seconds

---

## Future Considerations

### Potential Enhancements
- **Service Worker:** Offline capability
- **Progressive Web App:** PWA features
- **Server-Side Rendering:** If SEO becomes critical
- **Internationalization:** Multi-language support
- **A/B Testing:** Conversion optimization testing

### Scalability Improvements
- **Edge Functions:** For dynamic content
- **Database:** If user accounts needed
- **API Backend:** If dynamic features added

---

*Generated by DoPlan CLI v1.3.4*  
*Sup-Agent: Engineering Lead*  
*Date: 2025-12-03*
