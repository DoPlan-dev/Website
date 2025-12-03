# DoPlan.dev — System Design & Art Direction

## Minimal. Branded. Professional.

---

## DESIGN PHILOSOPHY

**One principle:** Beauty through constraint. Every pixel serves conversion. No decoration without purpose.

**Visual DNA:** Cyberpunk minimalism meets developer authenticity. Dark, focused, fast-loading. Premium without gatekeeping.

---

## COLOR SYSTEM

### Core Palette

| Name | Hex | Use | Why |
|------|-----|-----|-----|
| **Void** | `#0A0E27` | Background | Deep authority, focus |
| **Cyan** | `#00D9FF` | Primary CTA, Accents | Energy, "go" signal |
| **Purple** | `#9D4EDD` | Secondary Accents | Premium, achievement |
| **Light** | `#E8F0FF` | Text | High contrast (16:1) |
| **Mid** | `#B0BBCC` | Secondary Text | Visual hierarchy |
| **Success** | `#00D98E` | Achievements | Reward signal |

### Rules

- **Text:** Always Light on Void (16:1 contrast)
- **Interactive:** Cyan for primary, Purple for secondary
- **Glows:** Cyan only, 20% opacity max
- **Borders:** Cyan at 20% opacity
- **No decoration colors** — everything must work for a user

---

## TYPOGRAPHY

### Fonts

- **Headlines:** Inter 700 (geometric, technical)
- **Body:** Inter 400, 16px, 1.6 line-height
- **Code:** JetBrains Mono 400, 13px, 1.8 line-height

### Scale (Minimal)

```
Hero:     56px Bold
Section:  40px Bold
Heading:  28px Semibold
Subhead:  16px Regular
Body:     16px Regular (1.6 line)
Label:    14px Medium
Code:     13px Mono
```

### Rules

- **Max 3 sizes per page** — consistency builds trust
- **Line-height 1.6+** — readable on all screens
- **Never lighter than 400 weight** — always legible
- **Mono for commands only** — highlights technical nature

---

## SPACING (8px Grid)

```
XS = 8px   (small gaps)
S  = 16px  (default spacing)
M  = 24px  (card padding)
L  = 32px  (section gaps)
XL = 48px  (hero spacing)
```

### Application

- Hero: 96px top/bottom
- Cards: 32px padding
- Sections: 80px top/bottom
- Mobile: Halve everything

---

## COMPONENTS

### Primary Button

```
Gradient: Cyan → Purple
Padding: 16px 32px
Height: 56px
Radius: 12px
Border: 1px Cyan (80%)
Glow: Subtle, on hover expand
Text: Bold, Light color
Hover: +4px lift, +shadow
```

**Code:**

```css
.btn-primary {
  background: linear-gradient(135deg, #00D9FF, #9D4EDD);
  padding: 16px 32px;
  border-radius: 12px;
  border: 1px solid rgba(0,217,255,0.8);
  box-shadow: 0 0 20px rgba(0,217,255,0.4);
  transition: all 200ms ease-out;
}
.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(0,217,255,0.6);
}
```

### Feature Card

```
Background: Void with subtle gradient border
Border: 1px Cyan (30% opacity)
Padding: 32px
Radius: 12px
Shadow: Lift on hover
Icon: 32px Cyan (top-left)
Title: 24px Bold
Body: 16px Regular
Link: Cyan, underline on hover
```

### Terminal Block

```
Header: 40px, 3 circles (decorative)
Background: Darker Void (#050A1A)
Border: 1px Cyan (20%)
Code: 13px Mono, Cyan text
Padding: 16px
Glow: Cyan shadow on all 4 sides
Animation: Subtle float (±8px, 3s loop)
```

### Achievement Badge

```
Size: 88x88px
Radius: 8px (not pill)
Gradient: Success Green → Purple
Border: 2px Green
Icon: 56px center
Label: 12px Bold, centered
XP: "+50" top-right, 10px
Animation on unlock: Pop (0 → 1.1 → 1, 300ms bounce)
```

---

## LAYOUTS

### Hero Section

```
Height: 720px (desktop), 600px (mobile)
Grid: 50-50 split (desktop), 100% (mobile)
Left: Headline + CTA + Command snippet
Right: Floating terminal (perspective 3D)

Headline: 56px Bold, Light
Subhead: 24px Regular, Mid
Body: 16px Regular, Light
CTA: Primary button (full-width mobile)
Code: 14px Mono, in terminal box
```

**Background:** Void + radial Cyan glow at 50%, 30% (5% opacity)

### Feature Cards Grid

```
Desktop: 4 columns, 2 rows
Tablet: 2 columns
Mobile: 1 column
Gap: 24px
Padding: 80px top/bottom
```

**Animation on scroll:** Fade + slide-up (opacity 0→1, Y: +40px→0, 600ms ease-out, stagger 100ms)

### Timeline Section

```
Layout: Vertical line (Cyan gradient, 2px)
Nodes: 24px circles alternating left-right
Cards: 320px wide, connected to nodes
Mobile: Single column, line on left edge
```

### Stats Section

```
Grid: 3-4 columns desktop, 2 mobile
Each stat: Large number + label
Numbers animate on scroll: 0 → final (1.5s bounce)
Card style: Subtle gradient background
```

---

## ANIMATIONS

### Timing

- **Quick:** 150ms (button clicks)
- **Standard:** 200ms (hovers, transitions)
- **Scroll:** 600ms (entrance animations)
- **Bounce:** 300ms (achievements unlock)

### Effects

**Button Hover:**

```css
transform: translateY(-4px);
box-shadow: expanded 30% more
```

**Card Hover:**

```css
transform: translateY(-4px);
border glow intensifies
shadow elevation increases
```

**On-Scroll Fade-In:**

```
Start: opacity 0, translateY +40px
End: opacity 1, translateY 0
Duration: 600ms ease-out
Trigger: When 25% in viewport
```

**Badge Unlock:**

```
Scale: 0 → 1.1 → 1
Duration: 300ms
Easing: cubic-bezier(0.34, 1.56, 0.64, 1) [bounce]
Then: Glow pulsing (infinite subtle)
```

**Counter Animation:**

```
Numbers: 0 → final value
Duration: 1.5s
Easing: bounce-out
Trigger: On scroll into view
Add commas for readability
```

---

## RESPONSIVE RULES

### Desktop (1024px+)

- 12-column grid, 32px gutters
- Hero: 50-50 split
- Cards: 4 columns
- Full spacing (80px sections)

### Tablet (768px)

- 8-column grid, 24px gutters
- Hero: Single column, terminal below
- Cards: 2 columns
- Medium spacing (48px sections)

### Mobile (< 768px)

- 4-column grid, 16px gutters
- All full-width
- Hero: Single column, vertical stack
- Cards: 1 column
- Reduced spacing (32px sections)
- Buttons: Full-width, 48px height
- Touch targets: 48px minimum

---

## ACCESSIBILITY

### Contrast

- Body text on background: 16:1 ✓
- Headlines: 7:1 minimum ✓
- Interactive elements: 3:1 ✓
- All colors WCAG AA compliant ✓

### Keyboard

- Tab order: Logical, top-to-bottom
- Focus visible: 2px Cyan outline
- All buttons focusable
- No invisible skip links

### Screen Readers

- Semantic HTML: `<button>`, `<nav>`, `<main>`, `<section>`
- Alt text: Meaningful descriptions
- Headings: Proper hierarchy (H1 → H2 → H3)
- ARIA labels: For icon-only buttons

---

## PERFORMANCE

### Images

- Hero terminal: SVG (if possible) or optimized PNG max 150KB
- Badges: SVG (scalable, tiny)
- Backgrounds: CSS gradients only
- No animations on low-end devices

### CSS

- Critical CSS inline (hero + above-fold)
- Rest deferred/async
- Minimal JavaScript (vanilla only)
- No layout shifts (use size containers)

### Core Web Vitals Target

- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

---

## GRID & SIZING

### Hero Terminal (Right side)

```
Width: 480px (desktop), 100% (mobile)
Height: 320px
Position: Absolute, right 60px, top 80px
3D: perspective(1200px) rotateX(5deg) rotateY(-10deg)
Animation: Float ±8px vertical, 3s infinite
```

### Cards

```
Default: 320px wide
Padding: 32px
Gap: 24px
Hover: translateY(-4px)
```

### Buttons

```
Primary: 16px 32px padding, 56px height
Secondary: 16px 24px padding, 48px height
Icon: 32x32px or 24x24px
```

---

## MICRO-COPY SWAPS

Replace generic language:

| ❌ Generic | ✅ DoPlan Brand |
|-----------|-----------------|
| "Streamlined workflow" | "Distraction-free ritual" |
| "AI assistance" | "18 agents that think like you" |
| "Project templates" | "Sacred blueprints" |
| "Track progress" | "Ascension metrics" |
| "Collaboration" | "Symphony orchestration" |
| "Configuration" | "Ritual setup" |
| "Deploy" | "Ascend" |

---

## COMPONENT CHECKLIST

- [ ] Primary button (gradient, glow, hover state)
- [ ] Secondary button (purple border, no fill)
- [ ] Feature cards (gradient border, hover lift)
- [ ] Terminal window (header, code, glow)
- [ ] Achievement badge (pop animation)
- [ ] Input fields (focus glow, accessible)
- [ ] Timeline (vertical line, nodes, stagger)
- [ ] Stat cards (counter animation)
- [ ] Navigation (sticky, fade on scroll)
- [ ] Mobile menu (hamburger, smooth slide)
- [ ] Loading spinner (gradient, rotate 360°)
- [ ] Skeleton screen (shimmer animation)

---

## FILE STRUCTURE (For Developers)

```
/styles
  /tokens
    colors.css
    typography.css
    spacing.css
  /components
    buttons.css
    cards.css
    terminal.css
    badges.css
    timeline.css
  /layouts
    hero.css
    sections.css
    responsive.css
  /animations
    transitions.css
    keyframes.css
    scroll-triggers.js

/components
  Button.jsx
  Card.jsx
  Terminal.jsx
  Badge.jsx
  Timeline.jsx
  Hero.jsx
```

---

## HANDOFF CHECKLIST

**Design Team:**

- [ ] All components in Figma/Adobe XD
- [ ] Color system documented
- [ ] Component library created
- [ ] Responsive breakpoints shown
- [ ] Animation specs detailed (duration, easing)

**Development Team:**

- [ ] CSS variables for all colors
- [ ] Utility classes for common patterns
- [ ] Responsive classes (@media queries)
- [ ] Animation library (Framer Motion or vanilla CSS)
- [ ] Performance audit (Core Web Vitals)

**QA Team:**

- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Accessibility audit (WAVE, axe DevTools)
- [ ] Performance testing (PageSpeed Insights, WebPageTest)
- [ ] Keyboard navigation (tab, enter, escape)

---

## QUICK REFERENCE

**Brand Colors:**

```
Cyan:    #00D9FF
Purple:  #9D4EDD
Void:    #0A0E27
Light:   #E8F0FF
Success: #00D98E
```

**Fonts:**

```
Headers:  Inter 700
Body:     Inter 400, 16px
Code:     JetBrains Mono 400, 13px
```

**Spacing:**

```
Hero:     96px
Section:  80px
Card:     32px
Gap:      24px
```

**Buttons:**

```
Height:   56px
Padding:  16px 32px
Radius:   12px
Hover:    -4px lift + glow
```

**Animations:**

```
Quick:    150ms
Standard: 200ms
Entrance: 600ms
Bounce:   300ms
```

---

## BRAND PROMISE

Every design decision reflects DoPlan's core: **Flow without friction.** Clean. Fast. Purposeful. No visual noise. No cognitive load. Just the ritual, elevated.

Design is the promise kept.

---

*Generated by: DoPlan CLI v1.3.4*

*Sup-Agent: Product Manager*

*Date: 2025-01-15*
