import { Layout } from './components/layout/Layout'
import { Hero } from './components/sections/Hero'
import { CommandsSection } from './components/sections/CommandsSection'
import { Features } from './pages/Features'
import { Documentation } from './pages/Documentation'

function App() {
  return (
    <Layout>
      <Hero />
      <CommandsSection />
      <Features />
      <Documentation />
    </Layout>
  )
}

export default App

