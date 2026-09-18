import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Menu,
  Home,
  Sparkles,
  FolderGit2,
  Users,
  Mail,
  ArrowRight,
} from 'lucide-react'
import { BrandMark } from '../ui/BrandMark'
import { ThemeToggle } from '../ui/ThemeToggle'
import { MobileMenu } from './MobileMenu'

interface NavbarProps {
  currentView?: 'home' | 'developers'
  onSelectView?: (view: 'home' | 'developers', developer?: 'founder' | 'co-founder') => void
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView = 'home',
  onSelectView,
}) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#hero', icon: Home, view: 'home' as const },
    { label: 'Services', href: '#capabilities', icon: Sparkles, view: 'home' as const },
    { label: 'Projects', href: '#work', icon: FolderGit2, view: 'home' as const },
    { label: 'Developers', href: '#developers', icon: Users, view: 'developers' as const },
    { label: 'Contact', href: '#contact', icon: Mail, view: 'home' as const },
  ]

  const handleNavClick = (
    e: React.MouseEvent,
    item: { label: string; href: string; view: 'home' | 'developers' }
  ) => {
    if (item.view === 'developers') {
      e.preventDefault()
      if (onSelectView) {
        onSelectView('developers')
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      if (currentView === 'developers') {
        e.preventDefault()
        if (onSelectView) {
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
  }

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 glass-nav shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              if (currentView === 'developers' && onSelectView) {
                e.preventDefault()
                onSelectView('home')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="flex items-center group focus:outline-none rounded-lg py-1 select-none"
            aria-label="Innocapsule Home"
          >
            <BrandMark size={28} withText={true} />
          </a>

          {/* Center Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/85 dark:bg-[#121620]/80 border border-black/[0.08] dark:border-white/[0.1] shadow-sm backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon
              const isDevelopersActive = item.label === 'Developers' && currentView === 'developers'
              const isHomeActive = item.label === 'Home' && currentView === 'home' && !scrolled

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full flex items-center gap-1.5 focus:outline-none ${
                    isDevelopersActive
                      ? 'bg-[#FF4500] text-white shadow-[0_2px_12px_rgba(255,69,0,0.4)]'
                      : isHomeActive
                      ? 'text-[#FF4500] dark:text-[#FF6B35]'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isDevelopersActive ? 'text-white' : ''}`} />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Right Action CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button (Light/Dark Mode) */}
            <ThemeToggle size="md" />

            {/* Hire Developer Button */}
            <button
              onClick={() => {
                if (onSelectView) {
                  onSelectView('developers')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="px-4 py-2 rounded-full bg-[#1E293B] hover:bg-[#0F172A] dark:bg-white dark:text-[#111827] dark:hover:bg-neutral-200 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Hire Developer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle size="sm" />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentView={currentView}
        onSelectView={onSelectView}
      />
    </>
  )
}
