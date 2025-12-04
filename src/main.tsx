import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initIntegrations } from './lib/integrations'
import { initMonitoring } from './lib/monitoring'

// Initialize monitoring and error tracking
initMonitoring()

// Initialize third-party integrations
initIntegrations()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

