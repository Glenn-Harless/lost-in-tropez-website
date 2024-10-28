import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
      <div className="relative w-screen h-screen overflow-hidden">
        {children}
      </div>
    )
  }