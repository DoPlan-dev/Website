# Design System Sections Extraction Plan

## Overview
Extracting 6 remaining sections from `DesignSystem.tsx` to create modular, maintainable components.

## Sections to Extract

### 1. ColorsSection (Lines 68-289, 221 lines)
- Primary Colors (3 cards)
- Text Colors (4 cards)
- Surface & Border Colors (4 cards)
- **File**: `src/components/design-system/sections/ColorsSection.tsx`

### 2. ButtonsSection (Lines 290-488, 198 lines)
- Primary Buttons
- Outline Buttons
- White Outline Buttons
- Button States
- **File**: `src/components/design-system/sections/ButtonsSection.tsx`

### 3. MenusSection (Lines 489-674, 185 lines)
- Horizontal Navigation Menu
- Vertical Navigation Menu
- Mobile Menu (Blue Background)
- Dropdown Menu (interactive)
- **File**: `src/components/design-system/sections/MenusSection.tsx`

### 4. SpacingSection (Lines 681-779, 98 lines)
- Spacing Scale
- Section Padding
- **File**: `src/components/design-system/sections/SpacingSection.tsx`

### 5. SectionsSection (Lines 780-1106, 326 lines)
- Hero Section showcase
- Stats Cards Section
- Feature Cards Grid
- Workflow/Command Cards
- Problem & Solution Layout
- FAQ Accordion Section
- **File**: `src/components/design-system/sections/SectionsSection.tsx`

### 6. AnimationsSection (Lines 1107-1183, 76 lines)
- Button Hover Effects
- Card Hover Animations
- Transition Durations
- Micro-interactions
- **File**: `src/components/design-system/sections/AnimationsSection.tsx`

## Implementation Steps

1. ✅ Extract ComponentsSection (already done)
2. ⏳ Extract ColorsSection
3. ⏳ Extract ButtonsSection
4. ⏳ Extract MenusSection
5. ⏳ Extract SpacingSection
6. ⏳ Extract SectionsSection
7. ⏳ Extract AnimationsSection
8. ⏳ Update DesignSystem.tsx to use extracted sections
9. ⏳ Update sectionRegistry.ts
10. ⏳ Test build

## Total Impact
- **Lines to extract**: ~1,104 lines
- **Files to create**: 6 new section files
- **Estimated reduction**: ~50% in DesignSystem.tsx file size

