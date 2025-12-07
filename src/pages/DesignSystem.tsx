import React, { useState, Suspense } from 'react'
import { Heading, Text, Button } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import { LucideIcon } from '../components/ui/LucideIcon'
import { DashboardLayout } from '../components/design-system/layout/DashboardLayout'
import { TypographySection } from '../components/design-system/sections/TypographySection'
import { ColorsSection } from '../components/design-system/sections/ColorsSection'
import { ButtonsSection } from '../components/design-system/sections/ButtonsSection'
import { MenusSection } from '../components/design-system/sections/MenusSection'
import { SpacingSection } from '../components/design-system/sections/SpacingSection'
import { SectionsSection } from '../components/design-system/sections/SectionsSection'
import { AnimationsSection } from '../components/design-system/sections/AnimationsSection'
import { ComponentsSection } from '../components/design-system/sections/ComponentsSection'
import { TokenEditorSection } from '../components/design-system/sections/TokenEditorSection'
import { PlaygroundSection } from '../components/design-system/sections/PlaygroundSection'
import { DocumentationSection } from '../components/design-system/sections/DocumentationSection'

export const DesignSystem: React.FC = () => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('typography')
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <DashboardLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      {/* Header */}
      <div className="mb-12">
        <div className="mb-4">
          <div>
            <Heading 
              size="9" 
              style={{ 
                fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
                letterSpacing: '-0.02em',
                color: '#0f172a',
                marginBottom: '1rem'
              }}
            >
              DoPlan Design System
            </Heading>
            <Text 
              size="4" 
              style={{ 
                color: '#64748b',
                lineHeight: '1.6',
                maxWidth: '600px'
              }}
            >
              Comprehensive guide to our brand standards, components, and design patterns
            </Text>
          </div>
        </div>
      </div>

      {/* Content Sections - Conditionally Rendered */}
      {activeSection === 'typography' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <TypographySection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}

      {activeSection === 'colors' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <ColorsSection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}

      {activeSection === 'buttons' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <ButtonsSection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}

      {activeSection === 'menus' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <MenusSection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}

      {activeSection === 'components' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <ComponentsSection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}

      {activeSection === 'spacing' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <SpacingSection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}

      {activeSection === 'sections' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <SectionsSection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}

      {activeSection === 'animations' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <AnimationsSection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}

      {activeSection === 'tokens' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <TokenEditorSection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}

      {activeSection === 'playground' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <PlaygroundSection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}

      {activeSection === 'documentation' && (
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <DocumentationSection copied={copied} onCopy={copyToClipboard} />
        </Suspense>
      )}
    </DashboardLayout>
  )
}

