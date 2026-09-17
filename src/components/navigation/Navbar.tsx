import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { BrandMark } from '../ui/BrandMark'
import { Button } from '../ui/Button'
import { MobileMenu } from './MobileMenu'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 glass-nav border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
            : 'py-4 sm:py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <a
            href="#hero"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]/50 rounded-lg py-1 select-none"
            aria-label="Innocapsule Home"
          >
            <BrandMark size={26} withText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
            {siteConfig.navItems.map((item) => {
              const isActive = activeItem === item.label
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`relative px-3.5 py-1 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00F0FF] ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              icon
              href={siteConfig.cta.contactLink}
            >
              {siteConfig.cta.secondary}
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 text-neutral-200" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
