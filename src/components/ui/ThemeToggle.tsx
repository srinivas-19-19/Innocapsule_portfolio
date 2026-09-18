import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

interface ThemeToggleProps {
  className?: string
  size?: 'sm' | 'md'
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', size = 'md' }) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  const buttonSizeClass = size === 'sm' ? 'w-8 h-8' : 'w-9 h-9'
  const iconSize = size === 'sm' ? 15 : 17

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4500] ${buttonSizeClass} ${
        isDark
          ? 'bg-white/[0.08] hover:bg-white/[0.14] text-amber-300 border border-white/[0.12] hover:shadow-[0_0_12px_rgba(255,69,0,0.3)]'
          : 'bg-black/[0.05] hover:bg-black/[0.09] text-neutral-700 hover:text-neutral-900 border border-black/[0.08] hover:shadow-[0_0_12px_rgba(255,69,0,0.15)]'
      } ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun size={iconSize} className="text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
        ) : (
          <Moon size={iconSize} className="text-neutral-700" />
        )}
      </motion.div>
    </button>
  )
}
