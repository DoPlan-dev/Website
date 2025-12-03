import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'

function App() {
  return (
    <div className="min-h-screen bg-void text-light">
      <main className="container mx-auto px-xl py-xxl">
        <h1 className="text-hero mb-m">DoPlan.dev</h1>
        <p className="text-body text-mid mb-xl">Marketing website coming soon...</p>
        
        {/* Design System Test */}
        <div className="flex gap-m mb-xl">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        
        <Card className="max-w-md">
          <h3 className="text-h4 mb-m">Feature Card</h3>
          <p className="text-body text-mid">
            This is a test card to verify the design system is working correctly.
          </p>
        </Card>
      </main>
    </div>
  )
}

export default App

