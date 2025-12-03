# DoPlan.dev Visual Identity & System Design Guide
## Professional Art Direction for High-Conversion Developer Tool Website

---

## EXECUTIVE SUMMARY

DoPlan.dev requires a visual system that balances **mystique with clarity**, **futuristic with approachable**, and **dark elegance with functional simplicity**. This guide ensures every design decision serves conversion while maintaining brand coherence across all touchpoints.

**Design Philosophy:** Cyberpunk minimalism—visual depth without clutter, technical sophistication without gatekeeping.

---

## PART 1: VISUAL IDENTITY SYSTEM

### 1.1 COLOR PALETTE

#### **Primary Colors**

**Deep Void (Primary Background)**
- Color: `#0A0E27`
- RGB: `10, 14, 39`
- Use: Main background, card backgrounds, section dividers
- Psychology: Authority, depth, premium feel
- Contrast ratio: 16:1 (WCAG AAA compliant)

**Electric Cyan (Primary Accent)**
- Color: `#00D9FF`
- RGB: `0, 217, 255`
- Hex: `#00D9FF`
- Use: Primary CTAs, command highlights, active states, glows
- Psychology: Energy, innovation, call-to-action
- Luminance: 50+ (high visibility in dark mode)

**Neon Purple (Secondary Accent)**
- Color: `#9D4EDD`
- RGB: `157, 78, 221`
- Use: Secondary CTAs, achievements, badges, hover states
- Psychology: Premium, gamification, transformation
- Contrast: Works on Deep Void background (6.5:1 ratio)

**Gradient Primary (Hero & Feature Cards)**
- Start: `#00D9FF` (Electric Cyan)
- End: `#9D4EDD` (Neon Purple)
- Direction: 135° (top-left to bottom-right)
- Use: Borders, glows, gradient fills, progressive disclosure
- Effect: Suggests motion and elevation

#### **Secondary Colors**

**Neutral Light (Text & Dividers)**
- Color: `#E8F0FF`
- RGB: `232, 240, 255`
- Use: Primary text, borders, subtle elements
- Contrast: 16:1 on Deep Void

**Neutral Mid (Secondary Text)**
- Color: `#B0BBCC`
- RGB: `176, 187, 204`
- Use: Secondary text, labels, disabled states
- Contrast: 7:1 on Deep Void

**Neutral Dark (Tertiary Text)**
- Color: `#5A6B7F`
- RGB: `90, 107, 127`
- Use: Hints, timestamps, decorative text
- Contrast: 4.5:1 on Deep Void

**Success Green**
- Color: `#00D98E`
- Use: Checkmarks, success states, achievement unlocked
- Contrast: 8:1 on Deep Void

**Warning Orange**
- Color: `#FF9D3D`
- Use: Alerts, warnings, time-sensitive callouts
- Contrast: 7.5:1 on Deep Void

**Error Red**
- Color: `#FF4757`
- Use: Errors, critical states (use sparingly)
- Contrast: 6:1 on Deep Void

#### **Color Application Matrix**

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

### 1.2 TYPOGRAPHY SYSTEM

#### **Font Stack**

**Primary (Headlines, CTAs)**
- Font: `Inter` (Google Fonts)
- Weights: 700 (bold), 600 (semibold)
- Fallback: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto`
- Psychology: Modern, geometric, tech-forward

**Secondary (Body, UI Labels)**
- Font: `Fira Code` (Google Fonts) for code blocks
- Font: `Inter` for body text
- Weight: 400 (regular), 500 (medium)
- Letter-spacing: +0.3px for code (improves legibility)

**Monospace (Terminal, Code)**
- Font: `JetBrains Mono` or `Fira Code`
- Weight: 400
- Line-height: 1.6 (improved readability for code)
- Fallback: `Consolas, Monaco, 'Courier New'`

#### **Typography Scale**

| Level | Size | Weight | Line-height | Use Case |
|-------|------|--------|-------------|----------|
| H1 | 48-56px | 700 | 1.2 | Hero headline |
| H2 | 36-40px | 700 | 1.3 | Section headers |
| H3 | 28-32px | 600 | 1.4 | Subsection headers |
| H4 | 20-24px | 600 | 1.4 | Card titles |
| Body | 16px | 400 | 1.6 | Primary text |
| Small | 14px | 400 | 1.5 | Secondary text, labels |
| Tiny | 12px | 500 | 1.4 | Captions, badges |
| Code | 14px | 400 | 1.6 | Code blocks |
| Terminal | 13px | 400 | 1.8 | Terminal simulation |

#### **Typography Hierarchy Examples**

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

### 1.3 SPACING & LAYOUT SYSTEM

#### **Spacing Scale (8px Base)**

| Unit | Pixels | Use Case |
|------|--------|----------|
| XS | 4px | Icon padding, tight spacing |
| S | 8px | Button padding, small gaps |
| M | 16px | Card padding, medium gaps |
| L | 24px | Section margins, moderate gaps |
| XL | 32px | Large spacing, breathing room |
| XXL | 48px | Hero sections, major breaks |
| XXXL | 64px | Section separators |

#### **Grid System**

- **Desktop:** 12-column grid
- **Tablet:** 8-column grid
- **Mobile:** 4-column grid
- **Gutter:** 24px (between columns)
- **Container max-width:** 1440px
- **Edge padding:** 32px (desktop), 16px (mobile)

#### **Section Padding**

- Hero: 96px top/bottom (desktop), 64px (mobile)
- Feature sections: 80px top/bottom
- Card padding: 32px
- Inner card spacing: 16px

---

### 1.4 BORDER RADIUS & CORNERS

**Radius Scale:**

| Type | Radius | Use Case |
|------|--------|----------|
| Sharp | 0px | Structural elements, grid items |
| Subtle | 4px | Small UI elements, tags |
| Moderate | 8px | Card corners, input fields |
| Large | 12px | Large cards, containers |
| Smooth | 16px | Hero containers, modals |
| Pill | 9999px | Buttons, badges, pills |

**Application Rules:**
- Buttons: `12px` (not pill, for authority)
- Input fields: `8px`
- Card corners: `12px`
- Achievement badges: `8px` (slight corner vs. full pill)
- Glowing containers: `16px`

---

### 1.5 SHADOW & ELEVATION SYSTEM

#### **Shadow Layers (Depth Perception)**

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

#### **Shadow Rules**
- Apply shadows only to interactive or featured elements
- Avoid shadow layering (max 2 shadows per element)
- Use colored shadows (Cyan/Purple) instead of black for brand cohesion
- Reduce shadow on mobile (performance + clarity)

---

## PART 2: COMPONENT DESIGN SYSTEM

### 2.1 BUTTONS

#### **Primary Button (CTA)**

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
- **Hover:** Brightness +10%, shadow expands (Elevation 3 → Glow 1.5x)
- **Active:** Brightness -5%, shadow contracts
- **Disabled:** Opacity 50%, no glow

**Animation:**
- Transition: `all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Glow pulse: 2s infinite (subtle breathe effect)

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
  transform: translateY(-2px);
}
```

#### **Secondary Button**

- Background: `Deep Void` with `Neon Purple` border
- Text: `Neon Purple`, 16px Semibold
- Border: 2px solid `Neon Purple`
- Padding: 16px 32px
- Shadow: Elevation 1 (subtle)

#### **Tertiary Button (Ghost)**

- Background: Transparent
- Text: `Electric Cyan`, 16px Medium
- Border: 1px solid `Electric Cyan`
- Hover: Background `Electric Cyan` 10% opacity

---

### 2.2 CARDS & CONTAINERS

#### **Feature Card**

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
- **Hover:** Border glow intensifies, shadow expands, slight lift
- **Interactive:** Cursor pointer, slight scale (+2%)

#### **Stat Card (Social Proof)**

**Specifications:**
- Background: Gradient (`Deep Void` → 10% `Electric Cyan`)
- Border: 1px solid `Electric Cyan` (20% opacity)
- Border-radius: 12px
- Padding: 24px
- Text alignment: Center

**Interior:**
```
Large number (40px, Bold, Cyan)
Label (14px, Regular, Neutral Mid)
Subtext (12px, Neutral Dark)
```

#### **Achievement Badge**

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

### 2.3 TERMINAL & CODE DISPLAY

#### **Terminal Window Container**

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

```css
.terminal {
  border-radius: 12px;
  background: #050A1A;
  border: 1px solid rgba(0, 217, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.4),
              0 8px 32px rgba(0, 217, 255, 0.16);
  overflow: hidden;
}

.terminal-header {
  height: 40px;
  background: #0A0E27;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(0, 217, 255, 0.1);
}

.terminal-control {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.terminal-code {
  padding: 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.8;
  color: #00D9FF;
  overflow-x: auto;
}
```

#### **Code Syntax Highlighting**

- **Command:** `#00D9FF` (Cyan)
- **Arguments:** `#E8F0FF` (Light)
- **Variables:** `#9D4EDD` (Purple)
- **Comments:** `#5A6B7F` (Dark Gray)
- **Strings:** `#00D98E` (Green)
- **Operators:** `#FF9D3D` (Orange)

---

### 2.4 FORM ELEMENTS

#### **Input Field**

- Background: `Deep Void` with 1px border
- Border: 1px solid `Electric Cyan` (20% opacity)
- Border-radius: 8px
- Padding: 12px 16px
- Text: `Neutral Light`, 16px
- Placeholder: `Neutral Mid`, 60% opacity
- Focus: Border becomes 1px solid `Electric Cyan` (80%), shadow Elevation 1

```css
.input {
  background: #0A0E27;
  border: 1px solid rgba(0, 217, 255, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  color: #E8F0FF;
  font-size: 16px;
  transition: all 200ms ease;
}

.input:focus {
  outline: none;
  border-color: rgba(0, 217, 255, 0.8);
  box-shadow: 0 0 12px rgba(0, 217, 255, 0.3);
}
```

#### **Dropdown / Select**

- Similar to input
- Chevron icon (Cyan) on right side
- Active option highlighted with `Electric Cyan` background (20% opacity)

#### **Toggle / Checkbox**

- Size: 20x20px
- Border-radius: 4px (checkbox), 10px (toggle)
- Unchecked: Border 2px solid `Neutral Mid`
- Checked: Background `Electric Cyan`, checkmark in white

---

### 2.5 NAVIGATION & BREADCRUMBS

#### **Navigation Bar (Header)**

- Background: `Deep Void` with slight transparency (98%)
- Border-bottom: 1px solid `Electric Cyan` (10% opacity)
- Height: 64px
- Padding: 0 32px
- Sticky to top on scroll

**Interior:**
```
Logo (left, 28px height, Cyan)
— Nav links (center, 14px, Neutral Light, gap 32px)
— CTA buttons (right, Primary + Secondary)
```

**Nav Links States:**
- **Default:** `Neutral Light`
- **Hover:** `Electric Cyan`, underline (2px, Cyan, 2px offset)
- **Active:** `Electric Cyan`, underline persistent
- **Transition:** 150ms ease

#### **Breadcrumbs**

- Font: 12px, `Neutral Mid`
- Separator: " / " (Neutral Dark)
- Active link: `Electric Cyan`
- Link hover: Underline, brightness +10%

---

## PART 3: PAGE LAYOUTS & SECTIONS

### 3.1 HERO SECTION LAYOUT

#### **Visual Composition**

**Desktop Layout:**
```
┌─────────────────────────────────────────────────┐
│ HERO SECTION (Full-bleed)                       │
│ Height: 720px                                    │
│ Background: Deep Void with radial gradient      │
│            (subtle Cyan glow, center)           │
│                                                  │
│ [Left Content]              [Right Visual]      │
│ 50% width | 50% width       Terminal floating  │
│                                                  │
│ H1 Headline (56px)                              │
│ Subheading (24px)                               │
│ Body text (16px)                                │
│ Social proof (14px)                             │
│ Primary CTA (56px height)                       │
│                                                  │
│ [Command snippet]                               │
│ npx @doplan-dev/cli                            │
│                                                  │
└─────────────────────────────────────────────────┘
```

**Mobile Layout:**
- Single column
- Terminal visual below headline
- Full-width CTA button (48px height)

#### **Background Treatment**

- Base: `Deep Void`
- Radial gradient overlay: `Electric Cyan` (5% opacity) at 50%, 30%
- Subtle animated particles (2-3 moving dots, 0.3 opacity, slow drift)
- Noise texture layer: 1-2% opacity (adds premium digital feel)

#### **Terminal Visual (Right)**

- Floating container: 480x320px (desktop)
- Position: Absolute, slightly offset right
- Slight 3D perspective: `perspective(1200px) rotateX(5deg) rotateY(-10deg)`
- Animation: Subtle float (±8px vertical, 3s ease-in-out, infinite)
- Content: Live-like command output with cursor animation

```css
.hero-terminal {
  position: absolute;
  right: 60px;
  top: 80px;
  width: 480px;
  height: 320px;
  perspective: 1200px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
```

---

### 3.2 FEATURE CARDS SECTION

#### **Layout Grid**

**Desktop:** 4 columns, 2 rows (4 cards visible)
**Tablet:** 2 columns
**Mobile:** 1 column

**Spacing:**
- Column gap: 24px
- Row gap: 32px
- Section padding: 80px top/bottom

#### **Card Animation**

- **On load:** Stagger animation (100ms delay per card)
- **Hover:** Lift effect (translateY -4px) + shadow expansion
- **Click:** Pulse effect (scale 0.98 → 1.02 → 1, 200ms)

---

### 3.3 TIMELINE / FLOW SECTION

#### **Visual Treatment**

**Desktop (Vertical Timeline):**
```
        [Minute 1] ←─────────────────── 
                   │
        [Minute 2] ←── ────── ────────
                   │
        [Minute 3] ←─────────────────── 
                   │
        [Minute 4] ←── ────── ────────
                   │
        [Minute 5] ←─────────────────── 
```

- Center line: `Electric Cyan` gradient (2px width)
- Nodes: 24px circles, alternating left/right
- Node background: Gradient (Cyan → Purple)
- Node border: 2px solid `Electric Cyan`
- Content cards: Connected to nodes with subtle lines
- Connector lines: `Electric Cyan` (30% opacity), 1px width

**Mobile (Vertical, Single Column):**
- Timeline on left edge (2px line)
- Nodes at top-left of content cards
- All content cards flow downward

#### **Card Details**

- Each timeline card: 320px width (desktop), full-width (mobile)
- Padding: 24px
- Border: 1px gradient (Cyan → Purple)
- Title: 20px, Bold, Cyan
- Description: 14px, Regular
- Icon: 32px (top-right corner)

---

### 3.4 GAMIFICATION SECTION

#### **Achievement Grid**

**Layout:** 5-6 badges per row (responsive)
**Spacing:** 16px between badges

#### **Badge Presentation**

**Locked State:**
- Opacity: 40%
- Filter: Grayscale 100%
- Label: Grayed out

**Unlocked State:**
- Opacity: 100%
- Filter: None
- Animation on unlock: Pop effect (scale 0 → 1.1 → 1, 300ms, bounce)
- Glow: Permanent, pulsing subtle

---

### 3.5 STATS SECTION

#### **Counter Animation**

When section enters viewport:
- Numbers animate from 0 to final value (1.5 seconds)
- Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` (bounce-out)
- Separator: Add commas every 3 digits
- Decimal: Show for % values

```javascript
// Pseudo-code for counter animation
animateCounter(start, end, duration) {
  const startTime = performance.now();
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(start + (end - start) * progress);
    updateDisplay(value);
    if (progress < 1) requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}
```

---

## PART 4: ANIMATION & INTERACTION SYSTEM

### 4.1 MICRO-INTERACTIONS

#### **Button Interactions**

**Click Feedback:**
- Primary: Ripple effect (Cyan, 300ms fade-out)
- Secondary: Slight scale down (98%) then back (200ms)

```css
.btn-primary:active {
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  0% { box-shadow: 0 0 0 0 rgba(0, 217, 255, 0.7); }
  100% { box-shadow: 0 0 0 20px rgba(0, 217, 255, 0); }
}
```

#### **Hover Effects**

- **Text links:** Underline animation (slide in from left, 200ms)
- **Cards:** Lift + shadow expansion (translateY -4px, 200ms)
- **Icons:** Subtle rotation (2-3°) or scale (1.1x), 150ms

#### **Input Focus**

- Border color change with glow
- Placeholder text fade out (200ms)
- Focus ring: Colored outline (4px, Cyan, 30% opacity)

---

### 4.2 PAGE TRANSITIONS

#### **Scroll-triggered Animations**

**Fade-in on scroll:**
- Elements start at opacity 0, translateY +20px
- On viewport enter: Fade to opacity 1, translateY 0 (600ms, ease-out)
- Staggered: Each element delays 100ms from previous

**Parallax (Subtle):**
- Hero terminal: 0.5x scroll velocity
- Background elements: 0.3x scroll velocity
- Avoid excessive parallax (can cause motion sickness)

#### **Section Entrance**

- Fade + slide-up: Opacity 0→1, translateY 40px→0, 700ms, ease-out
- Stagger child elements: 50ms delay between each
- Use Intersection Observer API (trigger at 25% viewport entry)

---

### 4.3 Loading & Skeleton States

#### **Loading Spinner**

- Shape: Ring (circle outline)
- Stroke: `Electric Cyan` (3px)
- Size: 32x32px (default), 48x48px (large)
- Animation: Rotate 360° (1.5s infinite, linear)
- Color: Gradient spinner (Cyan → Purple → Cyan)

```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid transparent;
  border-top-color: #00D9FF;
  border-right-color: #9D4EDD;
  border-bottom-color: transparent;
  border-left-color: #00D9FF;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}
```

#### **Skeleton Screens**

- Base color: `Deep Void` + 10% opacity lighter
- Animated shimmer: Left-to-right gradient (200% width, 1.5s duration)
- Gradient: `transparent → Electric Cyan (10%) → transparent`

---

### 4.4 TRANSITION TIMING

**Standard Easing Functions:**

| Use Case | Duration | Easing | Notes |
|----------|----------|--------|-------|
| Quick feedback | 150ms | `ease-out` | Button clicks |
| Standard transition | 200ms | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Hover effects |
| Page transition | 600-700ms | `ease-out` | Scroll animations |
| Entrance animation | 500-800ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce effect |
| Loading state | Continuous | `linear` | Spinners |

---

## PART 5: RESPONSIVE DESIGN

### 5.1 BREAKPOINTS

| Device | Width | Columns | Padding |
|--------|-------|---------|---------|
| Mobile | 375-480px | 4 | 16px |
| Tablet | 768px | 8 | 24px |
| Desktop | 1024-1440px | 12 | 32px |
| Large | 1440px+ | 12 | 64px |

### 5.2 MOBILE OPTIMIZATIONS

- Touch targets: Minimum 48x48px (all buttons)
- Spacing: Increase padding on mobile (96px → 48px sections)
- Typography: Scale down 1-2 levels on mobile (56px H1 → 32px)
- Hero: Single column, terminal below headline
- Cards: Full-width, single column
- CTAs: Full-width buttons on mobile (48px height)
- Navigation: Hamburger menu on tablet/mobile

### 5.3 TABLET LAYOUT

- 2-column feature cards
- Adjusted padding (24px)
- Side-by-side comparisons become stacked
- Optimized touch spacing

---

## PART 6: ACCESSIBILITY & PERFORMANCE

### 6.1 WCAG AA COMPLIANCE

**Color Contrast:**
- Body text on background: 16:1 minimum
- Headline text on background: 7:1 minimum
- Interactive elements: 3:1 for non-text elements

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

### 6.2 PERFORMANCE OPTIMIZATION

**Image Strategy:**
- Hero terminal: SVG or optimized PNG (max 150KB)
- Achievement badges: SVG (scalable, small file size)
- Background gradients: CSS (not images)
- Use WebP with PNG fallback

**CSS Optimization:**
- CSS-in-JS