import { useEffect } from 'react'
import { Layout } from './components/layout/Layout'
import { Hero } from './components/sections/Hero'
import { CommandsSection } from './components/sections/CommandsSection'
import { Features } from './pages/Features'
import { Documentation } from './pages/Documentation'
import { CTASection } from './components/sections/CTASection'
import { FAQSection } from './components/sections/FAQSection'
import { trackPageView } from './lib/analytics'

function App() {
  useEffect(() => {
    trackPageView('home')
  }, [])

  return (
    <Layout>
      <Hero />
      <CommandsSection />
      <Features />
      <CTASection />
      <Documentation />
      <FAQSection />
    </Layout>
  )
}

export default App

