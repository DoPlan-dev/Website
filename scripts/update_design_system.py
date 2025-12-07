#!/usr/bin/env python3
"""
Update DesignSystem.tsx to use extracted sections and update section registry.
"""

import re

# Section definitions
SECTIONS = {
    'colors': {'component': 'ColorsSection', 'lines': (68, 289)},
    'buttons': {'component': 'ButtonsSection', 'lines': (290, 488)},
    'menus': {'component': 'MenusSection', 'lines': (489, 674)},
    'spacing': {'component': 'SpacingSection', 'lines': (681, 779)},
    'sections': {'component': 'SectionsSection', 'lines': (780, 1106)},
    'animations': {'component': 'AnimationsSection', 'lines': (1107, 1183)}
}

def update_design_system():
    """Update DesignSystem.tsx to use extracted sections."""
    filepath = 'src/pages/DesignSystem.tsx'
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Read lines for easier manipulation
    lines = content.split('\n')
    
    # Add imports for all sections
    import_line = "import { TypographySection } from '../components/design-system/sections/TypographySection'"
    import_index = next(i for i, line in enumerate(lines) if 'TypographySection' in line)
    
    # Add all new imports after TypographySection import
    new_imports = []
    for section_key, section_info in SECTIONS.items():
        component = section_info['component']
        new_imports.append(f"import {{ {component} }} from '../components/design-system/sections/{component}'")
    
    # Insert imports
    for i, new_import in enumerate(new_imports):
        lines.insert(import_index + 1 + i, new_import)
    
    # Replace each section block with component usage
    # Process in reverse order to maintain line numbers
    sections_sorted = sorted(SECTIONS.items(), key=lambda x: x[1]['lines'][0], reverse=True)
    
    for section_key, section_info in sections_sorted:
        start_line = section_info['lines'][0] - 1  # Convert to 0-indexed
        end_line = section_info['lines'][1] - 1
        component = section_info['component']
        
        # Find the exact block
        block_lines = lines[start_line:end_line]
        block_text = '\n'.join(block_lines)
        
        # Create replacement
        replacement = f'''      {{activeSection === '{section_key}' && (
        <Suspense fallback={{<div className="text-center py-12">Loading...</div>}}>
          <{component} copied={{copied}} onCopy={{copyToClipboard}} />
        </Suspense>
      )}}'''
        
        # Replace the block
        lines[start_line:end_line] = replacement.split('\n')
        print(f"✅ Replaced {section_key} section with {component}")
    
    # Write back
    new_content = '\n'.join(lines)
    with open(filepath, 'w') as f:
        f.write(new_content)
    
    print(f"\n✅ Updated {filepath}")

def update_section_registry():
    """Update sectionRegistry.ts to include all extracted sections."""
    filepath = 'src/utils/design-system/sectionRegistry.ts'
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Add imports for all new sections
    import_lines = []
    for section_key, section_info in SECTIONS.items():
        component = section_info['component']
        import_lines.append(f"import {{ {component} }} from '../../components/design-system/sections/{component}'")
    
    # Find where to insert imports (after TypographySection import)
    lines = content.split('\n')
    typography_import_index = next(i for i, line in enumerate(lines) if 'TypographySection' in line and 'import' in line)
    
    # Insert new imports
    for i, new_import in enumerate(import_lines):
        lines.insert(typography_import_index + 1 + i, new_import)
    
    # Update section definitions
    section_order = ['typography', 'colors', 'buttons', 'menus', 'components', 'spacing', 'sections', 'animations']
    
    # Find the sections array
    sections_start = next(i for i, line in enumerate(lines) if 'export const sections:' in line)
    sections_end = next(i for i, line in enumerate(lines[sections_start:], sections_start) if ']' in line and i > sections_start)
    
    # Build new sections array
    new_sections = []
    order_map = {
        'typography': 1,
        'colors': 2,
        'buttons': 3,
        'menus': 4,
        'components': 5,
        'spacing': 6,
        'sections': 7,
        'animations': 8
    }
    
    icon_map = {
        'typography': 'Type',
        'colors': 'Palette',
        'buttons': 'MousePointer2',
        'menus': 'Menu',
        'components': 'Layers',
        'spacing': 'Move',
        'sections': 'Layout',
        'animations': 'Zap'
    }
    
    for section_id in section_order:
        if section_id == 'typography':
            new_sections.append(f'''  {{
    id: 'typography',
    name: 'Typography',
    component: TypographySection,
    icon: 'Type',
    order: 1,
    isExtracted: true
  }},''')
        elif section_id == 'components':
            new_sections.append(f'''  {{
    id: 'components',
    name: 'Components',
    component: ComponentsSection,
    icon: 'Layers',
    order: 5,
    isExtracted: true
  }},''')
        else:
            component = SECTIONS[section_id]['component']
            # Convert component name to display name
            name_map = {
                'colors': 'Colors',
                'buttons': 'Buttons',
                'menus': 'Menus',
                'spacing': 'Spacing',
                'sections': 'Sections',
                'animations': 'Animations'
            }
            name = name_map.get(section_id, component.replace('Section', ''))
            new_sections.append(f'''  {{
    id: '{section_id}',
    name: '{name}',
    component: {component},
    icon: '{icon_map[section_id]}',
    order: {order_map[section_id]},
    isExtracted: true
  }},''')
    
    # Replace sections array
    new_content_lines = lines[:sections_start+1] + new_sections + lines[sections_end:]
    
    # Write back
    with open(filepath, 'w') as f:
        f.write('\n'.join(new_content_lines))
    
    print(f"✅ Updated {filepath}")

if __name__ == '__main__':
    print("🔄 Updating DesignSystem.tsx and section registry...\n")
    update_design_system()
    print()
    update_section_registry()
    print("\n✅ All updates complete!")

