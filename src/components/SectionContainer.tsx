import { ReactNode } from 'react'

interface SectionContainerProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'brand'
}

export const SectionContainer = ({
  id,
  children,
  className = '',
  background = 'white'
}: SectionContainerProps) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    brand: 'bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5'
  }

  return (
    <section id={id} className={`${bgColors[background]} ${className}`}>
      <div className="section-container">
        {children}
      </div>
    </section>
  )
}
