import React from 'react'
import { HeaderNew } from './HeaderNew'
import { FooterNew } from './FooterNew'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-dark-text">
      <HeaderNew />
      <main className="flex-1">
        {children}
      </main>
      <FooterNew />
    </div>
  )
}

