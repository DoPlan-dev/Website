import { Layout } from './components/layout/Layout'
import { Hero } from './components/sections/Hero'
import { CommandsSection } from './components/sections/CommandsSection'

function App() {
  return (
    <Layout>
      <Hero />
      <CommandsSection />
    </Layout>
  )
}

export default App

