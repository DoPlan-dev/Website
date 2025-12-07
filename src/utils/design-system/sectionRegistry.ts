import React from 'react'
import { TypographySection } from '../../components/design-system/sections/TypographySection'
import { ColorsSection } from '../../components/design-system/sections/ColorsSection'
import { ButtonsSection } from '../../components/design-system/sections/ButtonsSection'
import { MenusSection } from '../../components/design-system/sections/MenusSection'
import { SpacingSection } from '../../components/design-system/sections/SpacingSection'
import { SectionsSection } from '../../components/design-system/sections/SectionsSection'
import { AnimationsSection } from '../../components/design-system/sections/AnimationsSection'
import { ComponentsSection } from '../../components/design-system/sections/ComponentsSection'
import { TokenEditorSection } from '../../components/design-system/sections/TokenEditorSection'
import { PlaygroundSection } from '../../components/design-system/sections/PlaygroundSection'
import { DocumentationSection } from '../../components/design-system/sections/DocumentationSection'

export interface SectionComponent {
  id: string
  name: string
  component: React.ComponentType<any>
  icon: string
  order: number
  isExtracted?: boolean
}

export const sections: SectionComponent[] = [
  {
    id: 'typography',
    name: 'Typography',
    component: TypographySection,
    icon: 'Type',
    order: 1,
    isExtracted: true
  },
  {
    id: 'colors',
    name: 'Colors',
    component: ColorsSection,
    icon: 'Palette',
    order: 2,
    isExtracted: true
  },
  {
    id: 'buttons',
    name: 'Buttons',
    component: ButtonsSection,
    icon: 'MousePointer2',
    order: 3,
    isExtracted: true
  },
  {
    id: 'menus',
    name: 'Menus',
    component: MenusSection,
    icon: 'Menu',
    order: 4,
    isExtracted: true
  },
  {
    id: 'components',
    name: 'Components',
    component: ComponentsSection,
    icon: 'Layers',
    order: 5,
    isExtracted: true
  },
  {
    id: 'spacing',
    name: 'Spacing',
    component: SpacingSection,
    icon: 'Move',
    order: 6,
    isExtracted: true
  },
  {
    id: 'sections',
    name: 'Sections',
    component: SectionsSection,
    icon: 'Layout',
    order: 7,
    isExtracted: true
  },
  {
    id: 'animations',
    name: 'Animations',
    component: AnimationsSection,
    icon: 'Zap',
    order: 8,
    isExtracted: true
  },
  {
    id: 'tokens',
    name: 'Design Tokens',
    component: TokenEditorSection,
    icon: 'Settings',
    order: 9,
    isExtracted: true
  },
  {
    id: 'playground',
    name: 'Component Playground',
    component: PlaygroundSection,
    icon: 'Play',
    order: 10,
    isExtracted: true
  },
  {
    id: 'documentation',
    name: 'Documentation',
    component: DocumentationSection,
    icon: 'BookOpen',
    order: 11,
    isExtracted: true
  },
]

export const getSectionById = (id: string): SectionComponent | undefined => {
  return sections.find(s => s.id === id)
}

export const getSectionByOrder = (order: number): SectionComponent | undefined => {
  return sections.find(s => s.order === order)
}
