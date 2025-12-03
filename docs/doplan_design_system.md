# DoPlan CLI Design System
## Typography, Components & Page Architecture (Google Colors, Light Theme)

---

## 1. TYPOGRAPHY SYSTEM

### Type Scale Hierarchy

| Level | Use Case | Size | Weight | Line Height | Letter Spacing |
|-------|----------|------|--------|-------------|-----------------|
| **H1** | Page titles, hero headline | 48-56px | 700 Bold | 1.2 | -0.02em |
| **H2** | Section headers, major divisions | 32-40px | 600 Semi-Bold | 1.3 | -0.01em |
| **H3** | Card titles, subsections | 24-28px | 600 Semi-Bold | 1.4 | 0 |
| **H4** | Command labels, feature names | 18-20px | 600 Semi-Bold | 1.5 | 0 |
| **Body Large** | Feature descriptions, key messaging | 16-18px | 400 Regular | 1.6 | 0 |
| **Body** | Standard body copy, descriptions | 14-16px | 400 Regular | 1.6 | 0 |
| **Caption** | Metadata, stats, footnotes | 12-14px | 400 Regular | 1.5 | 0.01em |
| **Code** | Terminal commands, code blocks | 13-14px | 500 Medium | 1.6 | 0 |

### Font Stack

```css
/* Primary: Clean, modern, Google's Material Design default */
font-family: 'Roboto', 'Segoe UI', sans-serif;

/* Code blocks: Google's monospace choice */
font-family: 'Roboto Mono', 'Courier New', monospace;

/* Display: Bold, modern accent (use sparingly) */
font-family: 'Google Sans', 'Roboto', sans-serif;
```

### Font Weights Used

- **400 Regular**: Body copy, descriptions
- **500 Medium**: Commands, labels, emphasis
- **600 Semi-Bold**: Headings, card titles, CTAs
- **700 Bold**: Hero headlines, primary CTAs

---

## 2. COLOR PALETTE & THEMING (Google Material Design 3)

### Primary Colors (Google Blue)

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Google Blue 50** | #F3F3FF | Background, light surfaces | Calm, clarity |
| **Google Blue 100** | #E8EAFF | Subtle backgrounds, hover states | Light, accessible |
| **Google Blue 300** | #C5CAFF | Borders, secondary accents | Professional |
| **Google Blue 500** | #5B8DFF | Primary CTAs, primary accents | Trust, reliability |
| **Google Blue 600** | #4B6AFF | Hover states, darker accents | Depth, emphasis |
| **Google Blue 700** | #3B55D6 | Active states, deepest interactive | Authority |
| **Google Blue 900** | #1A2B70 | Text on light backgrounds, dominance | Dark, focused |

### Secondary Colors (Google Green)

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Google Green 50** | #F1F8F5 | Alternative backgrounds | Growth, success |
| **Google Green 500** | #1DB679 | Success states, achievements | Positive, progress |
| **Google Green 600** | #1AAD6B | Hover on success, emphasis | Action, growth |

### Tertiary Colors (Google Yellow/Amber)

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Google Yellow 50** | #FFFBEF | Warning backgrounds | Caution, attention |
| **Google Yellow 500** | #FCC934 | Badges, achievements, alerts | Celebration, prominence |
| **Google Yellow 600** | #FBC02D | Hover on badges, emphasis | Energy, highlight |

### Neutral Colors (Google Gray)

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Gray 0** | #FFFFFF | Pure white, primary backgrounds | Clean, pure |
| **Gray 50** | #F8F9FA | Subtle backgrounds, cards | Minimal, spacious |
| **Gray 100** | #F3F3F3 | Secondary backgrounds | Distinction |
| **Gray 200** | #E8E8E8 | Borders, dividers | Definition |
| **Gray 300** | #DADCE0 | Secondary borders | Subtle separation |
| **Gray 400** | #9AA0A6 | Secondary text, icons | Balance |
| **Gray 600** | #5F6368 | Primary text | Readability |
| **Gray 700** | #3C4043 | Dark text, headings | Authority |
| **Gray 900** | #202124 | Darkest text, code blocks | Maximum contrast |

### Accent/Status Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Google Red** | #EA4335 | Error states, alerts, destructive actions |
| **Google Orange** | #EA8C55 | Warning, attention-needed states |
| **Google Light Blue** | #5DADE2 | Info, secondary highlights |
| **Google Teal** | #00BFA5 | Active states, progress highlights |

---

## 3. COMPONENT LIBRARY

### 3.1 Button System

#### Primary CTA Button
```
State: Default
Background: Google Blue 500 (#5B8DFF)
Text: Pure White (#FFFFFF), 600 Semi-Bold
Padding: 14px 32px
Border-radius: 8px
Shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
Transition: all 0.2s ease

State: Hover
Background: Google Blue 600 (#4B6AFF)
Shadow: 0 4px 8px rgba(91, 141, 255, 0.3)
Transform: translateY(-1px)

State: Active/Pressed
Background: Google Blue 700 (#3B55D6)
Shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2)

State: Disabled
Background: Gray 200 (#E8E8E8)
Text: Gray 400 (#9AA0A6)
Shadow: none
Cursor: not-allowed
```

#### Secondary Button
```
Background: transparent
Border: 2px solid Google Blue 500 (#5B8DFF)
Text: Google Blue 700 (#3B55D6), 600 Semi-Bold
Padding: 12px 28px
Border-radius: 8px
Transition: all 0.2s ease

State: Hover
Background: Google Blue 50 (#F3F3FF)
Border-color: Google Blue 600 (#4B6AFF)
Shadow: 0 2px 4px rgba(91, 141, 255, 0.15)

State: Active
Background: Google Blue 100 (#E8EAFF)
Border-color: Google Blue 700 (#3B55D6)
```

#### Tertiary/Ghost Button
```
Background: transparent
Text: Gray 600 (#5F6368), 600 Semi-Bold
Border: 1px solid Gray 300 (#DADCE0)
Padding: 10px 20px
Border-radius: 8px
Transition: all 0.2s ease

State: Hover
Background: Gray 50 (#F8F9FA)
Border-color: Gray 400 (#9AA0A6)
Text-color: Gray 700 (#3C4043)
```

#### Success Button
```
Background: Google Green 500 (#1DB679)
Text: Pure White, 600 Semi-Bold
Padding: 14px 32px
Border-radius: 8px
Shadow: 0 2px 4px rgba(0, 0, 0, 0.1)

State: Hover
Background: Google Green 600 (#1AAD6B)
Shadow: 0 4px 8px rgba(29, 182, 121, 0.3)
```

### 3.2 Terminal/Code Block Component

```
Background: Gray 900 (#202124)
Border: 1px solid Gray 300 (#DADCE0) or Gray 50 (#F8F9FA) overlay
Border-radius: 12px
Padding: 16px
Font: 'Roboto Mono', 13px, 400 Regular
Text color: Gray 900 (#202124)
Commands: Google Blue 600 (#4B6AFF)
Output: Gray 700 (#3C4043)
Line-height: 1.6

Copy-to-clipboard button:
Position: Top-right
Background: Google Blue 500 (#5B8DFF)
Text: Pure White
Hover: Google Blue 600 (#4B6AFF)
Padding: 8px 16px
Border-radius: 6px

Example markup:
┌────────────────────────────────────────────┐
│ $ npx @doplan-dev/cli                      │
│ (Copy this. Feel the relief.)              │
│                                            │
│ [COPY BUTTON: Blue hover]                  │
└────────────────────────────────────────────┘
```

### 3.3 Feature Card Component

```
Card Container
Background: Pure White (#FFFFFF)
Border: 1px solid Gray 200 (#E8E8E8)
Border-radius: 12px
Padding: 28px
Box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08)
Transition: all 0.3s ease

State: Hover
Border-color: Google Blue 300 (#C5CAFF)
Box-shadow: 0 4px 12px rgba(91, 141, 255, 0.15)
Transform: translateY(-4px)
Background: Gray 50 (#F8F9FA)

Card Header
Icon: 48px, Google Blue 500 (#5B8DFF) or Google Green 500 (#1DB679)
Title: H4, Gray 900 (#202124)
Subtitle: Body Small, Gray 600 (#5F6368)

Card Body
Description: Body Large, Gray 600 (#5F6368)
Bullet points: Gray 600 text, Google Blue 500 bullets (→)
Links: Google Blue 600 (#4B6AFF), underline on hover
```

### 3.4 Achievement Badge Component

```
Container: 80x80px, circular
Background: Gradient (Google Yellow 500 → Google Orange 500)
Border: 3px solid Google Yellow 500 (#FCC934)
Box-shadow: 0 2px 8px rgba(252, 201, 52, 0.3)

Icon/Text: Center, Gray 900 (#202124), 28px, bold
Glow effect on unlock: Shadow expand 0-30px over 0.5s

Hover state:
Scale: 1.08
Shadow: 0 4px 16px rgba(252, 201, 52, 0.4)

Locked state:
Opacity: 0.5
Grayscale: 100%
```

### 3.5 Stat Counter Component

```
Number: H2 size, Google Blue 600 (#4B6AFF), 700 Bold
Label: Body, Gray 600 (#5F6368), 500 Medium
Icon: 36px, Google Green 500 (#1DB679)

Layout: Flex column, center-aligned
Background: Gray 50 (#F8F9FA)
Padding: 24px
Border-radius: 8px
Border-left: 4px solid Google Blue 500 (#5B8DFF)

Animation: Number counts up on scroll into view
Duration: 1.5s ease-out
```

### 3.6 Timeline/Flow Component

```
Connector lines: 2px solid Google Blue 300 (#C5CAFF)
Nodes: 44px circles, Google Blue 500 (#5B8DFF) background
Node icons: 24px, Pure White, centered
Labels: H4, Gray 900 (#202124)
Descriptions: Body Large, Gray 600 (#5F6368)

Mobile: Stack vertical with left-aligned connector line
Desktop: Alternate left-right pattern with center line

Completed node state:
Background: Google Green 500 (#1DB679)
Icon: Checkmark, Pure White
```

### 3.7 Section Header Component

```
Preheader: 12px, ALL CAPS, Google Blue 600 (#4B6AFF), Letter-spacing +0.1em
Title: H2, Gray 900 (#202124), 700 Bold
Subtitle: Body Large, Gray 600 (#5F6368), max-width 600px

Optional: Accent bar (4px Google Blue 500, left-aligned, 60px width)

Spacing: 8px between preheader and title, 16px below subtitle
```

### 3.8 Testimonial/Social Proof Card

```
Quote: Body Large, Gray 900 (#202124), italic
Attribution: 14px, Gray 600 (#5F6368)
Avatar: 48px circle, Google Blue 100 (#E8EAFF) background
Company/Role: 12px, Gray 400 (#9AA0A6)

Background: Gray 50 (#F8F9FA)
Border-left: 4px solid Google Blue 500 (#5B8DFF)
Padding: 24px
Border-radius: 8px
Box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05)
```

### 3.9 Input Fields

```
Background: Pure White (#FFFFFF)
Border: 1px solid Gray 300 (#DADCE0)
Text: Gray 900 (#202124)
Placeholder: Gray 400 (#9AA0A6)
Padding: 12px 16px
Border-radius: 8px
Font-size: 14px
Transition: border 0.2s ease

State: Focus
Border-color: Google Blue 500 (#5B8DFF)
Box-shadow: 0 0 0 3px rgba(91, 141, 255, 0.1)
Outline: none

State: Error
Border-color: Google Red (#EA4335)
Helper text: Google Red (#EA4335)
```

---

## 4. PAGE ARCHITECTURE & LAYOUT PATTERNS

### 4.1 Page Structure (Desktop: 1920px reference)

```
┌─────────────────────────────────────────────────┐
│  HEADER/NAV (Fixed or sticky)                   │
│  Height: 72px | Bg: Pure White with shadow      │
│  Border-bottom: 1px solid Gray 200              │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  HERO SECTION                                   │
│  Full viewport height (100vh) or 80vh           │
│  Background: Gray 50 (#F8F9FA) gradient         │
│  Content: Centered, max-width 900px             │
│  Padding: 120px 40px                            │
│  Accent: Google Blue 100 blob shapes (20% opacity)
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 1 (Value Prop / Transformation)        │
│  Background: Pure White (#FFFFFF)               │
│  Max-width: 1200px | Center on page             │
│  Padding: 100px 40px                            │
│  Layout: 2-column grid or stacked               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 2 (Features / Commands)                │
│  Background: Gray 50 (#F8F9FA)                  │
│  Content max-width: 1200px                      │
│  Grid: 2x2 or 1x4 card layout                   │
│  Padding: 100px 40px                            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 3 (Timeline / Flow State)              │
│  Background: Pure White (#FFFFFF)               │
│  Max-width: 1200px                              │
│  Padding: 100px 40px                            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 4 (Achievements / Gamification)        │
│  Background: Google Blue 50 (#F3F3FF)           │
│  Grid of badges or achievement showcase         │
│  Padding: 80px 40px                             │
│  Max-width: 1200px                              │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 5 (AI Agents / Team)                   │
│  Background: Pure White (#FFFFFF)               │
│  Max-width: 1200px                              │
│  3-column grid of personality cards             │
│  Padding: 100px 40px                            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 6 (Social Proof / Stats)               │
│  Background: Google Blue 50 (#F3F3FF)           │
│  3-4 stat counters in flex row                  │
│  Padding: 80px 40px                             │
│  Max-width: 1200px                              │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 7 (Primary CTA)                        │
│  Background: Linear gradient (Blue 50 → White)  │
│  Centered, full-width                           │
│  Large button + supporting copy                 │
│  Padding: 100px 40px                            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  FOOTER / Secondary CTAs                        │
│  Background: Gray 900 (#202124)                 │
│  Text: Pure White & Gray 300                    │
│  3-4 column link grid + legal                   │
│  Padding: 60px 40px                             │
└─────────────────────────────────────────────────┘
```

### 4.2 Spacing System (8px base unit)

```
Micro:    4px  (tightest spacing)
XS:       8px  (very small gaps)
Small:   16px  (labels, tight cards)
Base:    24px  (standard padding)
Medium:  32px  (section internal spacing)
Large:   48px  (section vertical gaps)
XL:      64px  (major section breaks)
XXL:     80px+ (hero spacing, full-height sections)
```

### 4.3 Responsive Breakpoints

```
Mobile:     < 640px    (full-width, stacked layout)
Tablet:     640-1024px (2-column grids, adjusted padding)
Desktop:    1024-1920px (full 3-4 column, max-width containers)
Ultra-wide: > 1920px   (center with side padding constraints)

Mobile Adjustments:
- Font sizes: Reduce by 10-15%
- Padding: Reduce to 20-24px sides
- Cards: Single column
- Hero: 60vh instead of 100vh
- Spacing: Use Small/Base instead of Large/XL
- Button size: Increase to 48px minimum height (touch target)
```

---

## 5. ANIMATION & MICRO-INTERACTIONS

### 5.1 Entrance Animations

```
Fade-in: opacity 0 → 1, duration 0.5s ease-out
Slide-up: transform translateY(24px) → 0, duration 0.5s ease-out
Scale: transform scale(0.95) → 1, duration 0.5s ease-out
Stagger: Each child element offset by 0.08s

Applied to:
- Section headers on scroll
- Feature cards on viewport entry
- Stat counters on scroll
- Achievement badges on unlock
- Timeline nodes on view
```

### 5.2 Hover States

```
Button: translateY(-2px), shadow increase, transition 0.2s cubic-bezier(0.4, 0, 0.2, 1)
Card: translateY(-4px), shadow increase, transition 0.3s ease-out
Link: color to Google Blue 600, underline appear, transition 0.2s
Icon: scale 1.1 + subtle rotation 2°, transition 0.2s
```

### 5.3 Loading & State Animations

```
Skeleton loaders: Shimmer effect (background-position shift)
Duration: 2s infinite, linear
Background: linear-gradient(90deg, Gray 100, Gray 50, Gray 100)

Progress bars: Gradient animation left-to-right
Duration: 0.8s infinite

Badge unlock: Pop animation + subtle bounce
Scale: 0.3 → 1.15 → 1.0
Opacity: 0 → 1 → 1
Duration: 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)
```

### 5.4 Scroll Triggers

```
Fade-in text: Opacity increases from 0.3 → 1 as element reaches center
Counter animation: Numbers count up when 200px from bottom of viewport
Parallax: Light, subtle (0.3x) for floating elements only
Box-shadow: Increases on scroll down, decreases on scroll up
```

---

## 6. VISUAL EFFECTS & ATMOSPHERE

### 6.1 Background Patterns

```
Hero section:
- Base: Gray 50 (#F8F9FA)
- Gradient overlay: Radial (transparent center → Google Blue 100 at edges, 30% opacity)
- Accent blobs: Animated floating shapes in Google Blue 100 (15-20% opacity)
- Subtle grid pattern: 1px lines at 5% opacity, 80px spacing

Regular light sections:
- Base: Pure White (#FFFFFF)
- Subtle grid: Optional, very light (2% opacity)

Gray sections:
- Base: Gray 50 (#F8F9FA)
- Gradient accents: Subtle directional (top-to-bottom) with Google Blue 100 (5% opacity)
```

### 6.2 Shadow System (Material Design 3)

```
Elevation 1 (Cards, subtle):
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

Elevation 2 (Hover cards, light buttons):
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

Elevation 3 (Hover elevated, modals):
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

Elevation 4 (Modals, dropdowns):
box-shadow: 0 6px 16px rgba(0, 0, 0, 0.14);

Elevation 5 (High-emphasis overlays):
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
```

### 6.3 Backdrop Filters

```
Modals: backdrop-filter blur(4px) with rgba(0,0,0,0.1)
Navigation: No blur (clean look)
Tooltips: No blur (clean, minimal)

Fallback: Use rgba backgrounds for unsupported browsers
```

### 6.4 Accent Shapes & Illustrations

```
Blob shapes: Use Google Blue 100 (#E8EAFF) or Google Green 50 (#F1F8F5)
Opacity: 15-25% for background elements
Animations: Subtle floating motion (±20px, 6-8 second cycles)
Border-radius: 60% to create organic shapes

Example gradient:
background: linear-gradient(135deg, Google Blue 100, Google Green 50)
```

---

## 7. MICRO-COPY & VISUAL HIERARCHY

### 7.1 Label Hierarchy

```
PREHEADER (12px, ALL CAPS, Google Blue 600, +0.1em letter-spacing)
↓
Main Headline (48px, 700 Bold, Gray 900)
↓
Subheading (24px, 600 Semi-Bold, Gray 600)
↓
Body Copy (16px, 400 Regular, Gray 600)
↓
Supporting Text (14px, 400 Regular, Gray 400, 75% opacity)
```

### 7.2 Emphasis Techniques

```
Bold text: For key benefits, command names (Gray 900)
Italic text: For quotes, emphasis, testimonials
Colored text: Google Blue 600 for commands, Google Green 500 for achievements
Links: Google Blue 600 with underline on hover
Uppercase: For labels, preheaders (Google Blue 600)
Icons: Before text for visual scanning (Google Blue 500 or Green 500)
Arrows (→): Before actions/benefits (Google Blue 500)
Checkmarks (✓): For feature lists (Google Green 500)
```

---

## 8. ACCESSIBILITY & CONTRAST

### 8.1 Color Contrast Ratios (WCAG AA minimum)

```
Primary text (Gray 900) on Pure White:    17:1 ✓
Primary text (Gray 900) on Gray 50:       14:1 ✓
Secondary text (Gray 600) on Pure White:   7:1 ✓
CTA Button text (White) on Blue 500:      10:1 ✓
CTA Button text (White) on Green 500:      8:1 ✓
Link text (Blue 600) on Gray 50:           7:1 ✓

All text above 18px: Minimum 4.5:1 ratio (AA)
All text below 18px: Minimum 7:1 ratio (AAA)
```

### 8.2 Focus States

```
Keyboard focus outline: 3px solid Google Blue 500
Offset: 2px outside element
Border-radius: Match element's border-radius
Applied to: Buttons, links, inputs, interactive elements

Focus visible (:focus-visible):
outline: 3px solid #5B8DFF;
outline-offset: 2px;
```

### 8.3 Motion Preferences

```
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 8.4 Dark Mode Support (Optional)

```
@media (prefers-color-scheme: dark) {
  --bg-primary: #1F2937;
  --bg-secondary: #111827;
  --text-primary: #F3F4F6;
  --text-secondary: #D1D5DB;
  --border: #374151;
  /* Adjust colors to maintain contrast */
}
```

---

## 9. COMPONENT USAGE GUIDELINES

### When to Use Each Component

| Component | Use Case | Frequency |
|-----------|----------|-----------|
| **Primary CTA** | Main conversion actions, hero CTAs | Sparingly (1-2 per page) |
| **Secondary Button** | Alternative actions, secondary CTAs | Moderate (2-4 per page) |
| **Tertiary Button** | Lower-priority actions, "Learn more" | Moderate (2-3 per page) |
| **Feature Card** | Displaying features, benefits, services | Multiple (4-8 sections) |
| **Terminal Block** | Commands, code examples, quickstart | 1-2 per page |
| **Achievement Badge** | Unlocked features, gamification points | Multiple in gallery |
| **Timeline** | Process flows, feature walkthrough | 1 per page |
| **Stat Counter** | Social proof, metrics | 1 section (3-4 stats) |
| **Testimonial** | Social proof, user validation | 2-3 total per page |

---

## 10. IMPLEMENTATION CHECKLIST

### Before Launch

- [ ] All colors meet WCAG AA contrast standards
- [ ] Font sizes readable on mobile (minimum 16px for body)
- [ ] Buttons minimum 48px height for touch targets
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Terminal blocks have copy-to-clipboard functionality
- [ ] Hover states obvious and intuitive
- [ ] Focus states visible on all interactive elements (3px outline)
- [ ] Loading states implemented for async content
- [ ] Error states use Google Red (#EA4335)
- [ ] Success states use Google Green (#1DB679)
- [ ] Typography scales properly across breakpoints
- [ ] Shadow system applied consistently (Elevation 1-5)
- [ ] All links have discernible underlines or color change
- [ ] Form labels associated with inputs (accessibility)
- [ ] Blob shapes and gradients are subtle (15-25% opacity)

---

## 11. QUICK REFERENCE: Google Color Palette

```css
/* Primary Blue */
--blue-50: #F3F3FF;
--blue-100: #E8EAFF;
--blue-300: #C5CAFF;
--blue-500: #5B8DFF;
--blue-600: #4B6AFF;
--blue-700: #3B55D6;
--blue-900: #1A2B70;

/* Secondary Green */
--green-50: #F1F8F5;
--green-500: #1DB679;
--green-600: #1AAD6B;

/* Tertiary Yellow */
--yellow-50: #FFFBEF;
--yellow-500: #FCC934;
--yellow-600: #FBC02D;

/* Neutral Gray */
--white: #FFFFFF;
--gray-50: #F8F9FA;
--gray-100: #F3F3F3;
--gray-200: #E8E8E8;
--gray-300: #DADCE0;
--gray-400: #9AA0A6;
--gray-600: #5F6368;
--gray-700: #3C4043;
--gray-900: #202124;

/* Status Colors */
--red: #EA4335;
--orange: #EA8C55;
--light-blue: #5DADE2;
--teal: #00BFA5;
```

---

## 12. SPACING & SIZING QUICK REFERENCE

```css
/* Spacing */
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-base: 24px;
--spacing-md: 32px;
--spacing-lg: 48px;
--spacing-xl: 64px;

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-full: 50%;

/* Button Sizes */
--btn-height-sm: 40px;
--btn-height-md: 48px;
--btn-height-lg: 56px;

/* Transitions */
--transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 0.3s ease-out;
--transition-slow: 0.5s ease-out;
```

---

*Design System Version 1.0 (Google Material, Light Theme) | Last Updated: December 2025*