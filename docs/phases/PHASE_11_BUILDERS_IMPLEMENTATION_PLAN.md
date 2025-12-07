# Phase 11: Additional Builders - Implementation Plan

## 🎯 Goal

Add four new builders to the Design System:
1. **Page Builder** - Build complete pages
2. **Header Builder** - Build website headers/navigation
3. **Footer Builder** - Build website footers
4. **Menu Builder** - Build navigation menus

---

## 📋 Features for Each Builder

### Page Builder
- **Templates**: Pre-built page layouts (Landing, Documentation, Blog, etc.)
- **Drag-and-drop**: Arrange sections on a page
- **Section Library**: Add sections from Section Builder
- **Page Settings**: Meta tags, SEO, routing
- **Export**: Full page code or Cursor prompts
- **Preview**: Responsive preview of complete page

### Header Builder
- **Template Library**: Navigation styles (horizontal, vertical, mobile)
- **Component Library**: Logo, nav items, search, CTA buttons
- **Responsive Controls**: Desktop, tablet, mobile breakpoints
- **Sticky Options**: Fixed, sticky, or static positioning
- **Export**: Header component code
- **Preview**: Live preview with scroll simulation

### Footer Builder
- **Template Library**: Footer layouts (simple, multi-column, complex)
- **Component Library**: Links, social icons, newsletter, copyright
- **Column Layout**: Customize footer columns and spacing
- **Export**: Footer component code
- **Preview**: Live preview

### Menu Builder
- **Menu Types**: Horizontal, vertical, dropdown, mega menu
- **Menu Items**: Links, buttons, icons, dividers
- **Nesting**: Multi-level menu support
- **Styling**: Colors, spacing, typography
- **Export**: Menu component code
- **Preview**: Interactive menu preview

---

## 🏗️ Architecture

### File Structure

```
src/
├── data/
│   ├── builders/
│   │   ├── pageTemplates.ts           # Page templates
│   │   ├── headerTemplates.ts         # Header templates
│   │   ├── footerTemplates.ts         # Footer templates
│   │   └── menuTemplates.ts           # Menu templates
│   └── documentation/
│       └── ... (existing)
├── components/
│   └── design-system/
│       └── builders/
│           ├── SectionBuilder/        # (existing)
│           ├── PageBuilder/
│           │   ├── index.tsx
│           │   ├── PageTemplateSelector.tsx
│           │   ├── PageEditor.tsx
│           │   ├── SectionLibrary.tsx
│           │   └── PagePreview.tsx
│           ├── HeaderBuilder/
│           │   ├── index.tsx
│           │   ├── HeaderTemplateSelector.tsx
│           │   ├── HeaderEditor.tsx
│           │   ├── ComponentLibrary.tsx
│           │   └── HeaderPreview.tsx
│           ├── FooterBuilder/
│           │   ├── index.tsx
│           │   ├── FooterTemplateSelector.tsx
│           │   ├── FooterEditor.tsx
│           │   ├── ComponentLibrary.tsx
│           │   └── FooterPreview.tsx
│           └── MenuBuilder/
│               ├── index.tsx
│               ├── MenuTemplateSelector.tsx
│               ├── MenuEditor.tsx
│               ├── MenuItemEditor.tsx
│               └── MenuPreview.tsx
└── utils/
    └── codeGenerators/
        ├── pageCodeGenerator.ts       # Generate page code
        ├── headerCodeGenerator.ts     # Generate header code
        ├── footerCodeGenerator.ts     # Generate footer code
        └── menuCodeGenerator.ts       # Generate menu code
```

---

## 📝 Implementation Steps

### Step 1: Data Structures
- [x] Define template structures for each builder
- [x] Create template data files
- [x] Define component types and properties

### Step 2: Shared Components
- [x] Extract common builder UI components
- [x] Create reusable editor components
- [x] Shared preview components

### Step 3: Page Builder
- [x] Page template selector
- [x] Section library integration
- [x] Page editor (drag-and-drop sections)
- [x] Page settings panel
- [x] Page preview
- [x] Code generator

### Step 4: Header Builder
- [x] Header template selector
- [x] Component library
- [x] Header editor
- [x] Responsive breakpoint controls
- [x] Header preview
- [x] Code generator

### Step 5: Footer Builder
- [x] Footer template selector
- [x] Component library
- [x] Footer editor
- [x] Column layout editor
- [x] Footer preview
- [x] Code generator

### Step 6: Menu Builder
- [x] Menu template selector
- [x] Menu item editor
- [x] Nesting support
- [x] Menu preview
- [x] Code generator

### Step 7: Integration
- [x] Add builders to Design System navigation
- [x] Create builder hub/landing page
- [x] Update routing
- [x] Cross-builder linking

---

## 🎨 Design Consistency

All builders must:
- Use the same design system tokens
- Follow Section Builder UI patterns
- Have consistent toolbar/controls
- Share preview capabilities
- Use same code generation approach

---

## ⏱️ Estimated Time

- **Step 1**: Data Structures - 2 hours
- **Step 2**: Shared Components - 1.5 hours
- **Step 3**: Page Builder - 3 hours
- **Step 4**: Header Builder - 2 hours
- **Step 5**: Footer Builder - 2 hours
- **Step 6**: Menu Builder - 2 hours
- **Step 7**: Integration - 1.5 hours

**Total**: ~14 hours

---

## 🚀 Implementation Order

1. **Data Structures** (foundation for all builders)
2. **Shared Components** (reusable UI)
3. **Page Builder** (most complex, sets patterns)
4. **Header Builder** (uses patterns from Page Builder)
5. **Footer Builder** (similar to Header)
6. **Menu Builder** (can reuse Header patterns)
7. **Integration** (bring it all together)

---

## 📊 Success Criteria

Each builder should:
- ✅ Have template selector
- ✅ Support visual editing
- ✅ Live preview (responsive)
- ✅ Export code/prompts
- ✅ Save/load custom builds
- ✅ Follow design system patterns
- ✅ Generate clean, production-ready code

---

**Status**: Ready to implement  
**Priority**: High (extends Design System capabilities)  
**Complexity**: Medium-High

