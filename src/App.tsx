import { Layout } from './components/layout/Layout'
import { Hero } from './components/sections/Hero'
import { CommandsSection } from './components/sections/CommandsSection'
import { Features } from './pages/Features'

function App() {
  return (
    <Layout>
      <Hero />
      <CommandsSection />
      <Features />
    </Layout>
  )
}

export default App

