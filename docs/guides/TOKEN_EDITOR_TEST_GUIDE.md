# Token Editor Testing Guide

## 🧪 Comprehensive Test Checklist

Follow this guide to thoroughly test the Design Token Management System.

---

## Prerequisites

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/design-system`

---

## Test Suite

### ✅ Test 1: Navigation & Access

**Steps**:
1. Open Design System page
2. Look for "Design Tokens" in the left sidebar
3. Click on "Design Tokens"

**Expected Results**:
- ✅ "Design Tokens" appears in sidebar (9th item)
- ✅ Clicking navigates to token editor
- ✅ Header shows "Design Tokens" title
- ✅ Subtitle: "Centralized design system tokens - Single source of truth"

---

### ✅ Test 2: Color Editor

**Steps**:
1. Ensure "Colors" tab is active
2. Scroll through different color categories:
   - Primary Colors
   - Text Colors
   - Surface Colors
   - Border Colors
   - Status Colors
3. Change primary color using color picker
4. Change text color using hex input field

**Expected Results**:
- ✅ All color categories display correctly
- ✅ Color picker opens when clicked
- ✅ Changing color updates preview swatch immediately
- ✅ Hex input accepts valid hex values
- ✅ Changes persist (check by refreshing page)

---

### ✅ Test 3: Spacing Editor

**Steps**:
1. Click "Spacing" tab
2. Use slider to change "Medium" spacing from 16px to 20px
3. Use number input to change "Large" to 28px
4. Observe visual spacing representation bars

**Expected Results**:
- ✅ All spacing values display (xs, sm, md, lg, xl, 2xl, 3xl)
- ✅ Slider updates spacing value smoothly
- ✅ Number input accepts direct value entry
- ✅ Visual bars reflect spacing sizes accurately
- ✅ Changes auto-save

---

### ✅ Test 4: Typography Editor

**Steps**:
1. Click "Typography" tab
2. Adjust "Body" font size from 16px to 18px using slider
3. Change "Heading Font" to a different font family
4. Adjust "Normal" line height from 1.4 to 1.5

**Expected Results**:
- ✅ Font sizes display correctly (hero, h1, h2, h3, h4, body, small, tiny, code)
- ✅ Sliders work smoothly
- ✅ Font family inputs accept text
- ✅ Line height sliders adjust correctly
- ✅ Live type preview shows changes
- ✅ Changes persist

---

### ✅ Test 5: Validation - Default Tokens

**Steps**:
1. Click "Validation" tab
2. Review validation results

**Expected Results**:
- ✅ Validation runs automatically
- ✅ Results display in organized cards
- ✅ No errors (default tokens should pass)
- ✅ May show some info-level duplicates (expected)
- ✅ Color-coded badges (errors/warnings/info)

---

### ✅ Test 6: Validation - Color Contrast Test

**Steps**:
1. Go to "Colors" tab
2. Change "Text Primary" to `#ffffff` (white)
3. Change "Surface Primary" to `#ffffff` (white)
4. Go to "Validation" tab

**Expected Results**:
- ✅ Validation updates automatically
- ✅ Shows error for low contrast
- ✅ Message: "Low contrast ratio: X:1 (minimum: 4.5:1)"
- ✅ Suggestion provided
- ✅ Error badge appears on Validation tab

---

### ✅ Test 7: Validation - Spacing Scale Test

**Steps**:
1. Go to "Spacing" tab
2. Change "Medium" to 17px (not a multiple of 4)
3. Go to "Validation" tab

**Expected Results**:
- ✅ Shows warning: "Spacing value 17px is not a multiple of 4px"
- ✅ Suggestion provided
- ✅ Warning badge appears

---

### ✅ Test 8: Export - JSON Format

**Steps**:
1. Click "Export" tab
2. Ensure "JSON" is selected
3. Review the exported JSON structure
4. Click "Copy Code"

**Expected Results**:
- ✅ JSON format displays correctly
- ✅ All token values included
- ✅ Proper JSON syntax
- ✅ Copy button works
- ✅ Clipboard contains JSON

---

### ✅ Test 9: Export - CSS Variables

**Steps**:
1. In "Export" tab, click "CSS Variables"
2. Review the CSS output
3. Click "Copy Code"

**Expected Results**:
- ✅ CSS format displays correctly
- ✅ `:root` selector present
- ✅ CSS variable syntax (`--color-primary: #6366f1;`)
- ✅ All tokens converted to CSS variables
- ✅ Copy functionality works

---

### ✅ Test 10: Export - TypeScript Format

**Steps**:
1. In "Export" tab, click "TypeScript"
2. Review the TypeScript output
3. Click "Copy Code"

**Expected Results**:
- ✅ TypeScript format displays correctly
- ✅ TypeScript syntax
- ✅ Export statement present
- ✅ All tokens included
- ✅ Copy functionality works

---

### ✅ Test 11: Export - Tailwind Config

**Steps**:
1. In "Export" tab, click "Tailwind Config"
2. Review the Tailwind config output
3. Click "Copy Code"

**Expected Results**:
- ✅ JavaScript/JSON format
- ✅ Tailwind config structure
- ✅ Theme.extend object
- ✅ All tokens mapped to Tailwind keys
- ✅ Copy functionality works

---

### ✅ Test 12: Reset to Defaults

**Steps**:
1. Make several changes:
   - Change primary color
   - Change spacing values
   - Change font sizes
2. Click "Reset to Defaults" button in header
3. Check each tab to verify reset

**Expected Results**:
- ✅ All tokens reset to default values
- ✅ Changes visible immediately
- ✅ Validation updates
- ✅ No errors after reset

---

### ✅ Test 13: Persistence

**Steps**:
1. Make custom token changes:
   - Change primary color to `#8b5cf6`
   - Change body font size to 18px
   - Change medium spacing to 20px
2. Refresh the page (F5 or Cmd+R)
3. Navigate back to "Design Tokens"

**Expected Results**:
- ✅ Changes persist after refresh
- ✅ Custom tokens load automatically
- ✅ All edits preserved
- ✅ Validation still works

---

### ✅ Test 14: Multiple Tab Navigation

**Steps**:
1. Start on "Colors" tab
2. Navigate through all tabs in order:
   - Colors → Spacing → Typography → Validation → Export
3. Make changes in each tab
4. Navigate back and forth

**Expected Results**:
- ✅ All tabs switch smoothly
- ✅ Changes persist when switching tabs
- ✅ No data loss
- ✅ UI remains responsive

---

### ✅ Test 15: Error Handling

**Steps**:
1. In "Colors" tab, try invalid hex values:
   - `#gggggg` (invalid)
   - `12345` (too short)
2. Check validation tab

**Expected Results**:
- ✅ UI handles invalid input gracefully
- ✅ Validation may show format errors
- ✅ No crashes or errors

---

## 🎯 Validation Checklist

After completing all tests, verify:

- [ ] All tabs work correctly
- [ ] Color pickers functional
- [ ] Sliders work smoothly
- [ ] Number inputs accept values
- [ ] Changes auto-save
- [ ] Validation runs in real-time
- [ ] Export formats correct
- [ ] Copy functionality works
- [ ] Reset button works
- [ ] Persistence works
- [ ] No console errors
- [ ] UI is responsive
- [ ] All features accessible

---

## 🐛 Known Issues / Edge Cases to Test

1. **Empty values**: What happens if spacing is set to 0px?
2. **Extreme values**: Very large font sizes (>100px)
3. **Special characters**: Font family names with special chars
4. **Browser compatibility**: Test in Chrome, Safari, Firefox
5. **Mobile view**: Test responsive layout

---

## 📝 Test Results Template

```
Date: __________
Tester: __________
Browser: __________

Test Results:
[ ] Test 1: Navigation - PASS / FAIL
[ ] Test 2: Color Editor - PASS / FAIL
[ ] Test 3: Spacing Editor - PASS / FAIL
[ ] Test 4: Typography Editor - PASS / FAIL
[ ] Test 5: Validation (Default) - PASS / FAIL
[ ] Test 6: Validation (Contrast) - PASS / FAIL
[ ] Test 7: Validation (Spacing) - PASS / FAIL
[ ] Test 8: Export (JSON) - PASS / FAIL
[ ] Test 9: Export (CSS) - PASS / FAIL
[ ] Test 10: Export (TS) - PASS / FAIL
[ ] Test 11: Export (Tailwind) - PASS / FAIL
[ ] Test 12: Reset - PASS / FAIL
[ ] Test 13: Persistence - PASS / FAIL
[ ] Test 14: Tab Navigation - PASS / FAIL
[ ] Test 15: Error Handling - PASS / FAIL

Issues Found:
1. _______________________
2. _______________________

Notes:
_______________________
```

---

## 🚀 Quick Test Script

Run this quick test sequence:

1. **Access**: Navigate to `/design-system` → Click "Design Tokens"
2. **Edit**: Change primary color to `#8b5cf6`
3. **Validate**: Check "Validation" tab (should show no errors)
4. **Export**: Export as JSON and verify structure
5. **Reset**: Click "Reset to Defaults"
6. **Verify**: Confirm all values returned to defaults

If all steps complete successfully, core functionality is working! ✅

---

**Happy Testing!** 🎉

