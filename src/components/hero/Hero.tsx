import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { HeroContent } from './HeroContent'
import { CapsuleScene } from '../three/CapsuleScene'
import { siteConfig } from '../../data/site'

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-20 sm:pt-28 lg:pt-36 pb-6 sm:pb-10 overflow-hidden bg-tech-grid"
    >
      {/* 1. Subtle Radial Background Vignette & Restrained Glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial-vignette" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00F0FF]/[0.035] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-8 w-72 h-72 bg-[#0284C7]/[0.025] rounded-full blur-[100px] pointer-events-none" />

      {/* 2. Top-right Subtle Coordinate / Engineering Stamp */}
      <div className="absolute top-20 right-8 hidden lg:flex flex-col items-end gap-0.5 text-[10px] font-mono-tech text-neutral-500 select-none pointer-events-none">
        <span className="text-neutral-400">{siteConfig.meta.coordinates}</span>
        <span>STUDIO CORE</span>
      </div>

      {/* 3. Main Composition Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-2 items-center">
          {/* Left/Center Text Content */}
          <div className="lg:col-span-7 relative z-20 w-full">
            <HeroContent />
          </div>

          {/* 3D Scene Container */}
          {/* On Desktop: absolute overlay on right, seamlessly blending behind and around the right side of the headline */}
          {/* On Tablet & Mobile: dedicated responsive section below CTA */}
          <div className="lg:col-span-5 h-[260px] min-[400px]:h-[300px] sm:h-[360px] lg:h-[600px] w-full relative z-10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[54%] pointer-events-none flex items-center justify-center">
            <CapsuleScene scrollY={scrollY} />
          </div>
        </div>
      </div>

      {/* 4. Bottom Information & Scroll Hint */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full flex items-center justify-between pt-6 sm:pt-8 text-xs font-mono-tech text-neutral-500 select-none border-t border-white/[0.04]">
        {/* Left: Ticker statement */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]/80" />
          <span>{siteConfig.ticker}</span>
        </div>

        {/* Center/Right: Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center gap-2 text-neutral-400 hover:text-[#00F0FF] transition-colors py-1.5 px-3 rounded-full hover:bg-white/[0.04] group cursor-pointer mx-auto sm:mx-0"
        >
          <span className="text-[10px] sm:text-[11px] tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-y-0.5 transition-transform" />
          </motion.div>
        </motion.a>

        {/* Right: Studio year */}
        <div className="hidden md:block text-[11px] text-neutral-500">
          <span>INNOCAPSULE // {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  )
}
