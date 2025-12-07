#!/usr/bin/env python3
"""
Comprehensive script to extract all sections from DesignSystem.tsx
and create properly formatted section component files.
"""

import re
import os

# Section definitions with their properties
SECTIONS = {
    'colors': {
        'start_line': 68,
        'end_line': 289,
        'component_name': 'ColorsSection',
        'radix_imports': ['Heading', 'Text', 'Card'],
        'additional_imports': [],
        'needs_codeblock': False
    },
    'buttons': {
        'start_line': 290,
        'end_line': 488,
        'component_name': 'ButtonsSection',
        'radix_imports': ['Heading', 'Text', 'Card', 'Button', 'Flex'],
        'additional_imports': [],
        'needs_codeblock': False
    },
    'menus': {
        'start_line': 489,
        'end_line': 674,
        'component_name': 'MenusSection',
        'radix_imports': ['Heading', 'Text', 'Card', 'Flex', 'Button'],
        'additional_imports': [
            "import * as DropdownMenu from '@radix-ui/react-dropdown-menu'",
            "import { LucideIcon } from '../../ui/LucideIcon'"
        ],
        'needs_codeblock': False
    },
    'spacing': {
        'start_line': 681,
        'end_line': 779,
        'component_name': 'SpacingSection',
        'radix_imports': ['Heading', 'Text', 'Card', 'Separator'],
        'additional_imports': [],
        'needs_codeblock': False
    },
    'sections': {
        'start_line': 780,
        'end_line': 1106,
        'component_name': 'SectionsSection',
        'radix_imports': ['Heading', 'Text', 'Card', 'Flex', 'Button', 'Badge'],
        'additional_imports': [
            "import * as Accordion from '@radix-ui/react-accordion'",
            "import { LucideIcon } from '../../ui/LucideIcon'"
        ],
        'needs_codeblock': False
    },
    'animations': {
        'start_line': 1107,
        'end_line': 1183,
        'component_name': 'AnimationsSection',
        'radix_imports': ['Heading', 'Text', 'Card', 'Flex', 'Button'],
        'additional_imports': [],
        'needs_codeblock': False
    }
}

def read_file(filepath):
    """Read file content."""
    with open(filepath, 'r') as f:
        return f.read()

def extract_section_content(content, start_line, end_line):
    """Extract section content between line numbers."""
    lines = content.split('\n')
    section_lines = lines[start_line - 1:end_line - 1]
    section_text = '\n'.join(section_lines)
    
    # Extract content inside the conditional wrapper
    # Pattern: {activeSection === 'xxx' && ( <div className="space-y-12"> ... </div> )}
    pattern = r'\{activeSection === \'[^\']+\' && \(\s*<div className="space-y-12">\s*(.*?)\s*</div>\s*\)\s*\}'
    match = re.search(pattern, section_text, re.DOTALL)
    
    if match:
        inner_content = match.group(1)
        # Clean up leading/trailing whitespace and fix indentation
        lines = inner_content.split('\n')
        # Remove leading whitespace (usually 12 spaces from original)
        min_indent = min(len(line) - len(line.lstrip()) for line in lines if line.strip())
        cleaned_lines = []
        for line in lines:
            if line.strip():
                # Remove the extra indentation (usually 12 spaces)
                cleaned_lines.append(line[min_indent:])
            else:
                cleaned_lines.append('')
        return '\n'.join(cleaned_lines)
    
    return None

def create_section_component(section_key, section_info, inner_content):
    """Create a properly formatted section component file."""
    component_name = section_info['component_name']
    radix_imports = ', '.join(section_info['radix_imports'])
    additional_imports = section_info['additional_imports']
    needs_codeblock = section_info['needs_codeblock']
    
    # Build imports
    imports = [
        "import React from 'react'",
        f"import {{ {radix_imports} }} from '@radix-ui/themes'"
    ]
    
    # Add additional imports
    imports.extend(additional_imports)
    
    # Add CodeBlock if needed (check if content uses it)
    if needs_codeblock or 'CodeBlock' in inner_content:
        imports.append("import { CodeBlock } from '../shared/CodeBlock'")
    
    imports_text = '\n'.join(imports)
    
    # Create component
    component = f'''{imports_text}

interface {component_name}Props {{
  copied?: string | null
  onCopy?: (text: string, label: string) => void
}}

export const {component_name}: React.FC<{component_name}Props> = ({{ copied, onCopy }}) => {{
  const copyToClipboard = (text: string, label: string) => {{
    if (onCopy) {{
      onCopy(text, label)
    }} else {{
      navigator.clipboard.writeText(text)
    }}
  }}

  return (
    <div className="space-y-12">
{inner_content}
    </div>
  )
}}
'''
    return component

def fix_indentation(content):
    """Fix indentation to be consistent (2 spaces)."""
    lines = content.split('\n')
    fixed_lines = []
    indent_level = 0
    
    for line in lines:
        stripped = line.lstrip()
        if not stripped:
            fixed_lines.append('')
            continue
        
        # Check if line closes a tag
        if stripped.startswith('</'):
            indent_level = max(0, indent_level - 1)
        
        # Apply current indent
        indent = ' ' * (indent_level * 2)
        fixed_lines.append(indent + stripped)
        
        # Check if line opens a tag (and doesn't close it on same line)
        if stripped.startswith('<') and not stripped.startswith('</') and not stripped.endswith('/>'):
            # Don't increase indent for self-closing tags or comments
            if not any(stripped.endswith(x) for x in ['/>', '-->']):
                indent_level += 1
        # Check if line closes on same line
        elif '>' in stripped and '</' in stripped:
            pass  # Self-contained, no indent change
    
    return '\n'.join(fixed_lines)

def main():
    """Main extraction function."""
    print("🚀 Starting Design System Sections Extraction...\n")
    
    # Paths
    design_system_path = 'src/pages/DesignSystem.tsx'
    sections_dir = 'src/components/design-system/sections'
    
    # Ensure sections directory exists
    os.makedirs(sections_dir, exist_ok=True)
    
    # Read DesignSystem.tsx
    print(f"📖 Reading {design_system_path}...")
    content = read_file(design_system_path)
    
    extracted_sections = {}
    
    # Extract each section
    for section_key, section_info in SECTIONS.items():
        component_name = section_info['component_name']
        print(f"\n📦 Extracting {component_name}...")
        
        # Extract content
        inner_content = extract_section_content(
            content,
            section_info['start_line'],
            section_info['end_line']
        )
        
        if not inner_content:
            print(f"  ⚠️  Warning: Could not extract {component_name} automatically")
            continue
        
        # Create component file content
        component_content = create_section_component(
            section_key,
            section_info,
            inner_content
        )
        
        # Write file
        filepath = os.path.join(sections_dir, f'{component_name}.tsx')
        with open(filepath, 'w') as f:
            f.write(component_content)
        
        extracted_sections[section_key] = component_name
        print(f"  ✅ Created {filepath}")
        print(f"     ({len(component_content)} characters)")
    
    print(f"\n✅ Extraction complete! Created {len(extracted_sections)} section files.")
    print("\n📝 Next steps:")
    print("   1. Update DesignSystem.tsx to use extracted sections")
    print("   2. Update sectionRegistry.ts")
    print("   3. Test build")

if __name__ == '__main__':
    main()

