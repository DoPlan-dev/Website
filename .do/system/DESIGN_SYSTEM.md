# Design System
## DoPlan.dev Marketing Website

**Version:** 1.0.0  
**Status:** Draft  
**Last Updated:** 2025-12-03  
**Based on:** Visual Identity & System Design Guide

---

## Design Philosophy

**One Principle:** Beauty through constraint. Every pixel serves conversion. No decoration without purpose.

**Visual DNA:** Cyberpunk minimalism meets developer authenticity. Dark, focused, fast-loading. Premium without gatekeeping.

**Core Values:**
- **Mystique with Clarity:** Futuristic aesthetic without gatekeeping
- **Conversion-Focused:** Every design decision serves user conversion
- **Performance First:** Design choices prioritize speed and performance
- **Accessibility:** WCAG AA compliance throughout

---

## Color System

### Core Palette

| Name | Hex | RGB | Use | Psychology |
|------|-----|-----|-----|------------|
| **Void** | `#0A0E27` | 10, 14, 39 | Background | Deep authority, focus |
| **Cyan** | `#00D9FF` | 0, 217, 255 | Primary CTA, Accents | Energy, "go" signal |
| **Purple** | `#9D4EDD` | 157, 78, 221 | Secondary Accents | Premium, achievement |
| **Light** | `#E8F0FF` | 232, 240, 255 | Text | High contrast (16:1) |
| **Mid** | `#B0BBCC` | 176, 187, 204 | Secondary Text | Visual hierarchy |
| **Success** | `#00D98E` | 0, 217, 142 | Achievements | Reward signal |

### Gradient Primary
- **Start:** `#00D9FF` (Electric Cyan)
- **End:** `#9D4EDD` (Neon Purple)
- **Direction:** 135° (top-left to bottom-right)
- **Use:** Borders, glows, gradient fills, progressive disclosure

### Semantic Colors

| Color | Hex | Use | Contrast Ratio |
|-------|-----|-----|----------------|
| **Warning Orange** | `#FF9D3D` | Alerts, warnings | 7.5:1 |
| **Error Red** | `#FF4757` | Errors, critical states | 6:1 |
| **Neutral Dark** | `#5A6B7F` | Hints, timestamps | 4.5:1 |

### Color Application Rules

- **Text:** Always Light on Void (16:1 contrast)
- **Interactive:** Cyan for primary, Purple for secondary
- **Glows:** Cyan only, 20% opacity max
- **Borders:** Cyan at 20% opacity
- **No decoration colors** — everything must work for a user

### Color Application Matrix

| Component | Color | Purpose |
|-----------|-------|---------|
| Background | Deep Void | Foundation |
| Primary CTA | Electric Cyan | Drive action |
| Secondary CTA | Neon Purple | Alternative action |
| Glow Effects | Cyan → Purple Gradient | Visual hierarchy, emphasis |
| Body Text | Neutral Light | Readability |
| Secondary Text | Neutral Mid | Visual hierarchy |
| Borders | Electric Cyan (20% opacity) | Define sections |
| Achievement Badge | Success Green + Neon Purple gradient | Reward signal |
| Disabled State | Neutral Dark | Indicate unavailability |

---

## Typography System

### Font Stack

**Primary (Headlines, CTAs)**
- Font: `Inter` (Google Fonts)
- Weights: 700 (bold), 600 (semibold)
- Fallback: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto`
- Psychology: Modern, geometric, tech-forward

**Secondary (Body, UI Labels)**
- Font: `Inter` for body text
- Font: `Fira Code` for code blocks
- Weight: 400 (regular), 500 (medium)
- Letter-spacing: +0.3px for code (improves legibility)

**Monospace (Terminal, Code)**
- Font: `JetBrains Mono` or `Fira Code`
- Weight: 400
- Line-height: 1.6 (improved readability for code)
- Fallback: `Consolas, Monaco, 'Courier New'`

### Typography Scale

| Level | Size | Weight | Line-height | Use Case |
|-------|------|--------|-------------|----------|
| Hero | 56px | 700 | 1.2 | Hero headline |
| H1 | 48-56px | 700 | 1.2 | Main headlines |
| H2 | 36-40px | 700 | 1.3 | Section headers |
| H3 | 28-32px | 600 | 1.4 | Subsection headers |
| H4 | 20-24px | 600 | 1.4 | Card titles |
| Body | 16px | 400 | 1.6 | Primary text |
| Small | 14px | 400 | 1.5 | Secondary text, labels |
| Tiny | 12px | 500 | 1.4 | Captions, badges |
| Code | 14px | 400 | 1.6 | Code blocks |
| Terminal | 13px | 400 | 1.8 | Terminal simulation |

### Typography Rules

- **Max 3 sizes per page** — consistency builds trust
- **Line-height 1.6+** — readable on all screens
- **Never lighter than 400 weight** — always legible
- **Mono for commands only** — highlights technical nature

### Typography Hierarchy Examples

**Hero Section:**
```
H1: "Code at the Speed of Thought." (56px, Bold)
Subheading: "Finish projects before your coffee gets cold." (24px, Regular)
Body: "Join 50,000+ developers..." (16px, Regular)
```

**Feature Card:**
```
H4: "/dev Build Features" (24px, Semibold)
Body: "Auto-branch creation, docs..." (16px, Regular)
Label: "15-min average per feature" (12px, Medium, Cyan tint)
```

---

## Spacing & Layout System

### Spacing Scale (8px Base)

| Unit | Pixels | Use Case |
|------|--------|----------|
| XS | 4px | Icon padding, tight spacing |
| S | 8px | Button padding, small gaps |
| M | 16px | Card padding, medium gaps |
| L | 24px | Section margins, moderate gaps |
| XL | 32px | Large spacing, breathing room |
| XXL | 48px | Hero sections, major breaks |
| XXXL | 64px | Section separators |

### Grid System

- **Desktop:** 12-column grid
- **Tablet:** 8-column grid
- **Mobile:** 4-column grid
- **Gutter:** 24px (between columns)
- **Container max-width:** 1440px
- **Edge padding:** 32px (desktop), 16px (mobile)

### Section Padding

- Hero: 96px top/bottom (desktop), 64px (mobile)
- Feature sections: 80px top/bottom
- Card padding: 32px
- Inner card spacing: 16px

---

## Border Radius & Corners

### Radius Scale

| Type | Radius | Use Case |
|------|--------|----------|
| Sharp | 0px | Structural elements, grid items |
| Subtle | 4px | Small UI elements, tags |
| Moderate | 8px | Card corners, input fields |
| Large | 12px | Large cards, containers |
| Smooth | 16px | Hero containers, modals |
| Pill | 9999px | Buttons, badges, pills |

### Application Rules

- Buttons: `12px` (not pill, for authority)
- Input fields: `8px`
- Card corners: `12px`
- Achievement badges: `8px` (slight corner vs. full pill)
- Glowing containers: `16px`

---

## Shadow & Elevation System

### Shadow Layers (Depth Perception)

**Elevation 1 (Subtle)**
```css
box-shadow: 0 2px 8px rgba(0, 217, 255, 0.08);
/* Use: Hover states, slight elevation */
```

**Elevation 2 (Moderate)**
```css
box-shadow: 0 4px 16px rgba(0, 217, 255, 0.12),
            0 0 24px rgba(157, 78, 221, 0.06);
/* Use: Cards, container emphasis */
```

**Elevation 3 (High)**
```css
box-shadow: 0 8px 32px rgba(0, 217, 255, 0.16),
            0 0 48px rgba(157, 78, 221, 0.1);
/* Use: Featured sections, CTAs, modals */
```

**Glow Effect (Primary)**
```css
box-shadow: 0 0 20px rgba(0, 217, 255, 0.4),
            inset 0 0 20px rgba(0, 217, 255, 0.1);
/* Use: Hero terminal, glowing buttons */
```

**Glow Effect (Secondary)**
```css
box-shadow: 0 0 20px rgba(157, 78, 221, 0.3),
            inset 0 0 20px rgba(157, 78, 221, 0.05);
/* Use: Achievements, gamification elements */
```

### Shadow Rules

- Apply shadows only to interactive or featured elements
- Avoid shadow layering (max 2 shadows per element)
- Use colored shadows (Cyan/Purple) instead of black for brand cohesion
- Reduce shadow on mobile (performance + clarity)

---

## Component Design System

### Primary Button (CTA)

**Visual Specifications:**
- Background: Linear gradient (`Electric Cyan` → `Neon Purple`)
- Text: `Neutral Light` (#E8F0FF), 16px Bold
- Padding: 16px 32px
- Border-radius: 12px
- Height: 56px (touch-friendly)
- Border: 1px solid `Electric Cyan` (80% opacity)
- Shadow: Elevation 3 + Glow

**States:**
- **Default:** Gradient + Glow
- **Hover:** Brightness +10%, shadow expands (Elevation 3 → Glow 1.5x), translateY(-4px)
- **Active:** Brightness -5%, shadow contracts
- **Disabled:** Opacity 50%, no glow

**Animation:**
- Transition: `all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Glow pulse: 2s infinite (subtle breathe effect)

**Code Example:**
```css
.btn-primary {
  background: linear-gradient(135deg, #00D9FF, #9D4EDD);
  border: 1px solid rgba(0, 217, 255, 0.8);
  border-radius: 12px;
  padding: 16px 32px;
  font-weight: 700;
  color: #E8F0FF;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.4),
              0 8px 32px rgba(0, 217, 255, 0.16);
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-primary:hover {
  box-shadow: 0 0 30px rgba(0, 217, 255, 0.6),
              0 12px 48px rgba(0, 217, 255, 0.2);
  transform: translateY(-4px);
}
```

### Secondary Button

- Background: `Deep Void` with `Neon Purple` border
- Text: `Neon Purple`, 16px Semibold
- Border: 2px solid `Neon Purple`
- Padding: 16px 32px
- Shadow: Elevation 1 (subtle)

### Feature Card

**Specifications:**
- Background: `Deep Void` with gradient border
- Border: 1px gradient (`Cyan` → `Purple`), 30% opacity
- Border-radius: 12px
- Padding: 32px
- Shadow: Elevation 2

**Interior Structure:**
```
Icon (32x32px, Cyan tint) — top-left
Title (24px, Semibold)
Description (16px, Regular, 1.6 line-height)
CTA Link (14px, Cyan, underline on hover)
Decorative element (bottom-right, 10% opacity Cyan)
```

**States:**
- **Default:** Static
- **Hover:** Border glow intensifies, shadow expands, slight lift (translateY -4px)
- **Interactive:** Cursor pointer, slight scale (+2%)

### Terminal Window Container

**Visual:**
- Border-radius: 12px
- Background: Darker variant of `Deep Void` (#050A1A)
- Border: 1px solid `Electric Cyan` (20% opacity)
- Header bar: 40px height, `Deep Void` color
- Header text: "Terminal" (12px, Gray), rounded window controls (top-left)
- Padding: 24px (inside terminal area)
- Shadow: Elevation 3 + Glow

**Header Controls:**
- Three circles: Red, Yellow, Green (8px diameter, left-aligned)
- Spacing: 8px between circles
- Colors: Desaturated #FF5F57, #FFBD2E, #28C840

**Interior (Code Block):**
- Font: `JetBrains Mono`, 13px, 1.8 line-height
- Text color: `Electric Cyan`
- Background: Slightly darker `Deep Void`
- Padding: 16px
- Overflow-x: Auto with custom scrollbar (Cyan thumb, Deep Void track)

### Achievement Badge

**Specifications:**
- Shape: Rounded square (12px radius)
- Size: 88x88px (display), 64x64px (compact)
- Background: Radial gradient (`Success Green` → `Neon Purple`)
- Border: 2px solid `Success Green`
- Shadow: Glow effect (Secondary)
- Animation on unlock: Scale 0 → 1.1 → 1 (300ms, bounce easing)

**Interior:**
```
Icon (56px for display, 40px for compact)
Label (12px, Bold, Center)
XP value (+50) (10px, Cyan, bottom-right corner)
```

---

## Layout System

### Hero Section Layout

**Desktop Layout:**
- Height: 720px
- Grid: 50-50 split (left content, right visual)
- Background: Deep Void + radial Cyan glow at 50%, 30% (5% opacity)
- Terminal visual: 480x320px, floating, 3D perspective

**Mobile Layout:**
- Single column
- Terminal visual below headline
- Full-width CTA button (48px height)

### Feature Cards Grid

**Desktop:** 4 columns, 2 rows  
**Tablet:** 2 columns  
**Mobile:** 1 column  
**Gap:** 24px  
**Padding:** 80px top/bottom

**Animation on scroll:** Fade + slide-up (opacity 0→1, Y: +40px→0, 600ms ease-out, stagger 100ms)

---

## Animation & Interaction System

### Timing

| Use Case | Duration | Easing | Notes |
|----------|----------|--------|-------|
| Quick feedback | 150ms | `ease-out` | Button clicks |
| Standard transition | 200ms | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Hover effects |
| Page transition | 600-700ms | `ease-out` | Scroll animations |
| Entrance animation | 500-800ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce effect |
| Loading state | Continuous | `linear` | Spinners |

### Micro-Interactions

**Button Hover:**
- Transform: translateY(-4px)
- Shadow: Expanded 30% more
- Duration: 200ms

**Card Hover:**
- Transform: translateY(-4px)
- Border glow intensifies
- Shadow elevation increases
- Duration: 200ms

**On-Scroll Fade-In:**
- Start: opacity 0, translateY +40px
- End: opacity 1, translateY 0
- Duration: 600ms ease-out
- Trigger: When 25% in viewport

**Badge Unlock:**
- Scale: 0 → 1.1 → 1
- Duration: 300ms
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1) [bounce]
- Then: Glow pulsing (infinite subtle)

---

## Responsive Design

### Breakpoints

| Device | Width | Columns | Padding |
|--------|-------|---------|---------|
| Mobile | 375-480px | 4 | 16px |
| Tablet | 768px | 8 | 24px |
| Desktop | 1024-1440px | 12 | 32px |
| Large | 1440px+ | 12 | 64px |

### Mobile Optimizations

- Touch targets: Minimum 48x48px (all buttons)
- Spacing: Increase padding on mobile (96px → 48px sections)
- Typography: Scale down 1-2 levels on mobile (56px H1 → 32px)
- Hero: Single column, terminal below headline
- Cards: Full-width, single column
- CTAs: Full-width buttons on mobile (48px height)
- Navigation: Hamburger menu on tablet/mobile

---

## Accessibility Standards

### WCAG AA Compliance

**Color Contrast:**
- Body text on background: 16:1 minimum ✓
- Headline text on background: 7:1 minimum ✓
- Interactive elements: 3:1 for non-text elements ✓

**Keyboard Navigation:**
- Tab order: Logical, top-to-bottom
- Focus visible: 2px outline, distinct color
- Tabindex: Avoid custom tab order (use semantic HTML)
- Skip links: "Skip to main content" (always first focusable)

**Screen Reader Support:**
- Semantic HTML: `<button>`, `<nav>`, `<main>`, `<section>`
- ARIA labels: For icons without text
- Alt text: All decorative images (empty `alt=""`), meaningful images descriptive
- Headings: Proper hierarchy (H1 → H2 → H3, no gaps)

---

## Performance Considerations

### Design for Performance

- **Images:** SVG for icons, optimized PNG/WebP for photos (max 150KB)
- **Animations:** CSS animations preferred, reduce on low-end devices
- **Critical CSS:** Inline for hero + above-fold
- **Lazy Loading:** Below-fold images and components
- **No Layout Shifts:** Use size containers for dynamic content

---

## Implementation Guidelines

### Tailwind CSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        void: '#0A0E27',
        cyan: '#00D9FF',
        purple: '#9D4EDD',
        light: '#E8F0FF',
        mid: '#B0BBCC',
        success: '#00D98E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      spacing: {
        // 8px base grid
      },
    },
  },
}
```

### Component Structure

```typescript
// Example component structure
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  // Implementation following design system
};
```

---

## Design Tokens

### CSS Variables (Recommended)

```css
:root {
  /* Colors */
  --color-void: #0A0E27;
  --color-cyan: #00D9FF;
  --color-purple: #9D4EDD;
  --color-light: #E8F0FF;
  --color-mid: #B0BBCC;
  --color-success: #00D98E;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  
  /* Typography */
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Consolas', monospace;
  
  /* Shadows */
  --shadow-elevation-1: 0 2px 8px rgba(0, 217, 255, 0.08);
  --shadow-elevation-2: 0 4px 16px rgba(0, 217, 255, 0.12);
  --shadow-glow-primary: 0 0 20px rgba(0, 217, 255, 0.4);
}
```

---

*Generated by DoPlan CLI v1.3.4*  
*Sup-Agent: Design Manager*  
*Date: 2025-12-03*
