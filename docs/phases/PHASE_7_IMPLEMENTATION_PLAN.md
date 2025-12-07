# Phase 7: Visual Editor Core Features - Implementation Plan

## 🎯 Goal

Enhance the Section Builder with visual editing capabilities, live preview, and component inspection.

---

## ✅ Current State (Phase 5)

- Section Builder with template selection
- Code generation (Cursor prompts, React, HTML)
- Basic export functionality
- Template browser

---

## 📋 Phase 7 Core Features

### 1. Visual Property Editor
- Edit component properties in real-time
- Form-based property inputs
- Type-safe property editing
- Property validation

### 2. Live Preview Panel
- Real-time preview of section
- Responsive view toggle (mobile/tablet/desktop)
- Interactive preview (clickable elements)
- Preview updates as you edit

### 3. Component Inspector
- Select components in preview
- View component properties
- Edit selected component
- Component tree navigation

### 4. Enhanced UX
- Split-pane layout (editor + preview)
- Property panel sidebar
- Better navigation
- Save/load customizations

---

## 🏗️ Architecture

### New Components to Create

1. **PropertyEditor.tsx**
   - Form inputs for component properties
   - Type-aware inputs (text, number, color, select)
   - Validation and error handling

2. **LivePreview.tsx**
   - Render section with current properties
   - Responsive view controls
   - Interactive preview

3. **ComponentInspector.tsx**
   - Component selection
   - Property display
   - Component tree view

4. **SectionEditor.tsx** (Main orchestrator)
   - Combines PropertyEditor + LivePreview + Inspector
   - Manages state and updates
   - Coordinates between components

### File Structure

```
src/components/design-system/builders/SectionBuilder/
  ├── index.tsx                    # Main builder (existing)
  ├── TemplateSelector.tsx         # Template browser (existing)
  ├── SectionPromptGenerator.tsx   # Export (existing)
  ├── SectionEditor.tsx            # NEW: Main editor
  ├── PropertyEditor.tsx           # NEW: Property form
  ├── LivePreview.tsx              # NEW: Preview panel
  └── ComponentInspector.tsx       # NEW: Component selector
```

---

## 📝 Implementation Steps

### Step 1: Create PropertyEditor Component
- Form inputs for common properties
- Support text, number, color, boolean, select
- Type-safe property handling
- Validation

### Step 2: Create LivePreview Component
- Render section template with properties
- Responsive view controls
- Interactive preview
- Real-time updates

### Step 3: Create ComponentInspector
- Component tree view
- Component selection
- Property display for selected component

### Step 4: Create SectionEditor (Orchestrator)
- Combine all components
- State management
- Property updates
- Preview synchronization

### Step 5: Integrate into Section Builder
- Update SectionBuilder to use SectionEditor
- Add tabs: Template → Edit → Preview → Export
- Better navigation flow

### Step 6: Enhance Property Types
- Support nested properties
- Array properties
- Object properties
- Complex types

---

## 🎨 Design Requirements

- **Layout**: Split-pane (editor left, preview right)
- **Property Panel**: Right sidebar (collapsible)
- **Responsive**: Works on desktop (primary), tablet (stacked)
- **Colors**: Use design system colors (#6366f1 primary)
- **Spacing**: Consistent with Volt-inspired design
- **Typography**: IBM Plex Sans for headings

---

## 🔧 Technical Details

### State Management
- Use React state for property values
- Deep clone template for editing
- Track selected component
- Manage preview state

### Property Types Supported
- `string` → Text input
- `number` → Number input
- `boolean` → Checkbox/Toggle
- `color` → Color picker
- `select` → Dropdown
- `array` → List editor
- `object` → Nested editor

### Preview Rendering
- Render section components dynamically
- Apply properties to components
- Handle nested components
- Support responsive views

---

## 📊 Success Metrics

- ✅ Properties can be edited visually
- ✅ Preview updates in real-time
- ✅ Components can be selected and edited
- ✅ Responsive preview works
- ✅ Properties are type-safe
- ✅ Build passes without errors

---

## ⏱️ Estimated Time

- Step 1: PropertyEditor - 1.5 hours
- Step 2: LivePreview - 2 hours
- Step 3: ComponentInspector - 1.5 hours
- Step 4: SectionEditor - 1.5 hours
- Step 5: Integration - 1 hour
- Step 6: Enhancements - 1 hour

**Total**: ~8-9 hours

---

## 🚀 Implementation Order

1. Start with PropertyEditor (foundation)
2. Add LivePreview (visual feedback)
3. Add ComponentInspector (selection)
4. Combine in SectionEditor (orchestration)
5. Integrate into SectionBuilder (UX)
6. Polish and enhancements (quality)

---

**Status**: Ready to implement  
**Priority**: High  
**Complexity**: Medium

