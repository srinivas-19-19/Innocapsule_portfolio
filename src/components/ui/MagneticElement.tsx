import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface MagneticElementProps {
  children: React.ReactNode
  className?: string
  strength?: number
  onClick?: () => void
}

export const MagneticElement: React.FC<MagneticElementProps> = ({
  children,
  className = '',
  strength = 0.2, // restrained subtle pull
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    // Clamp maximum translation to 8px max to remain restrained
    const deltaX = Math.max(-10, Math.min(10, (clientX - centerX) * strength))
    const deltaY = Math.max(-10, Math.min(10, (clientY - centerY) * strength))

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
