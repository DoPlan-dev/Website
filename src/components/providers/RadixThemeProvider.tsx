import React from 'react'
import { Theme } from '@radix-ui/themes'

interface RadixThemeProviderProps {
  children: React.ReactNode
}

export const RadixThemeProvider: React.FC<RadixThemeProviderProps> = ({ children }) => {
  return (
    <Theme
      appearance="light"
      accentColor="indigo" // Match Volt's primary indigo color
      grayColor="slate"    // Match Volt's slate gray
      radius="medium"
      scaling="100%"
    >
      {children}
    </Theme>
  )
}

