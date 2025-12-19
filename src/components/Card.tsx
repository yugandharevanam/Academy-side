import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  title?: string
  icon?: ReactNode
  children: ReactNode
  className?: string
  delay?: number
}

export const Card = ({ title, icon, children, className = '', delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`card ${className}`}
    >
      {icon && (
        <div className="mb-4 text-brand-primary">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      )}
      <div className="text-gray-600">
        {children}
      </div>
    </motion.div>
  )
}
