import React from 'react'
import { HeroContent } from './HeroContent'
import { DottedSurface } from '../ui/dotted-surface'

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-tech-grid"
    >
      {/* 1. 3D Wave Particle Dotted Surface */}
      <DottedSurface className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-75" />

      {/* 2. Subtle Radial Background Vignette & Ambient Warm Center Glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-50 dark:opacity-100 z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF4500]/[0.05] dark:bg-[#FF4500]/[0.08] rounded-full blur-[140px] pointer-events-none z-[1]" />

      {/* 3. Main Composition Layout - Perfectly Centered Title */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full flex items-center justify-center">
        <HeroContent />
      </div>
    </section>
  )
}

