import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { MagneticElement } from './MagneticElement'
import { cn } from '../../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
  magnetic?: boolean
  href?: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = false,
  magnetic = true,
  href,
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'group relative inline-flex items-center justify-center font-medium transition-all duration-300 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4500]/50'

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-full gap-2',
    lg: 'text-base px-6 py-3.5 rounded-full gap-2.5',
  }

  const variantStyles = {
    primary:
      'bg-[#FF4500] text-white font-semibold hover:bg-[#E03E00] shadow-[0_0_20px_rgba(255,69,0,0.28)] hover:shadow-[0_0_28px_rgba(255,69,0,0.45)] border border-[#FF4500]',
    secondary:
      'bg-black/[0.04] dark:bg-[#121620] text-neutral-800 dark:text-[#F3F4F6] border border-black/[0.08] dark:border-white/10 hover:border-[#FF4500]/40 hover:bg-black/[0.08] dark:hover:bg-[#181F2C] shadow-sm',
    ghost:
      'bg-transparent text-neutral-600 dark:text-[#94A3B8] hover:text-black dark:hover:text-[#F3F4F6] hover:bg-black/[0.04] dark:hover:bg-white/5 border border-transparent',
  }

  const content = (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      <span className="relative z-10 tracking-tight flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            className="inline-block"
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 2, y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <ArrowUpRight className="w-4 h-4 text-current transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.span>
        )}
      </span>
    </button>
  )

  const wrapped = href ? (
    <a href={href} className="inline-block">
      {content}
    </a>
  ) : (
    content
  )

  return magnetic ? <MagneticElement strength={0.15}>{wrapped}</MagneticElement> : wrapped
}
