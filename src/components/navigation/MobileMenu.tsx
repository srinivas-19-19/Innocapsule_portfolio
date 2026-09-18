import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Home, Info, Sparkles, FolderGit2, Users, Code2, Mail } from 'lucide-react'
import { BrandMark } from '../ui/BrandMark'
import { ThemeToggle } from '../ui/ThemeToggle'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  currentView?: 'home' | 'developers'
  onSelectView?: (view: 'home' | 'developers', developer?: 'founder' | 'co-founder') => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentView = 'home',
  onSelectView,
}) => {
  const navItems = [
    { label: 'Home', href: '#hero', icon: Home, view: 'home' as const },
    { label: 'About', href: '#about', icon: Info, view: 'home' as const },
    { label: 'Services', href: '#capabilities', icon: Sparkles, view: 'home' as const },
    { label: 'Projects', href: '#work', icon: FolderGit2, view: 'home' as const },
    { label: 'Team', href: '#team', icon: Users, view: 'home' as const },
    { label: 'Developers', href: '#developers', icon: Code2, view: 'developers' as const },
    { label: 'Contact', href: '#contact', icon: Mail, view: 'home' as const },
  ]

  const handleItemClick = (item: (typeof navItems)[0]) => {
    onClose()
    if (item.view === 'developers') {
      if (onSelectView) {
        onSelectView('developers')
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      if (currentView === 'developers' && onSelectView) {
        onSelectView('home')
      }
      setTimeout(() => {
        const el = document.querySelector(item.href)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-50 bg-white/95 dark:bg-[#090B0E]/95 backdrop-blur-2xl flex flex-col px-6 py-6 lg:hidden"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/10 pb-5">
            <div className="flex items-center">
              <BrandMark size={28} withText={true} />
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle size="sm" />
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4 my-auto py-6">
            {navItems.map((item, idx) => {
              const Icon = item.icon
              const isDevelopersActive = item.label === 'Developers' && currentView === 'developers'

              return (
                <motion.button
                  key={item.label}
                  onClick={() => handleItemClick(item)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  className={`text-xl font-bold transition-colors py-2 flex items-center justify-between group rounded-xl px-3 ${
                    isDevelopersActive
                      ? 'bg-[#FF4500] text-white shadow-md shadow-[#FF4500]/30'
                      : 'text-neutral-800 dark:text-neutral-200 hover:text-[#FF4500]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#FF4500]" />
                    <span>{item.label}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </motion.button>
              )
            })}
          </div>

          {/* Footer CTA in Mobile Drawer */}
          <div className="border-t border-black/[0.08] dark:border-white/10 pt-5 flex flex-col gap-3">
            <button
              onClick={() => {
                onClose()
                if (onSelectView) {
                  onSelectView('developers')
                }
              }}
              className="w-full py-3 rounded-full bg-[#FF4500] text-white font-bold text-sm shadow-lg shadow-[#FF4500]/25 flex items-center justify-center gap-2"
            >
              <span>Hire Developer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
