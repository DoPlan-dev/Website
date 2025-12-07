import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'
import { initIntegrations } from './lib/integrations'
import { initMonitoring } from './lib/monitoring'
import { RadixThemeProvider } from './components/providers/RadixThemeProvider'

// Initialize monitoring and error tracking
initMonitoring()

// Initialize third-party integrations
initIntegrations()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RadixThemeProvider>
      <RouterProvider router={router} />
    </RadixThemeProvider>
  </React.StrictMode>,
)

