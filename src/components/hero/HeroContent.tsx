import React from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../../data/site'
import { HeroBadge } from './HeroBadge'
import { HeroCTA } from './HeroCTA'

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 max-w-xl lg:max-w-2xl z-10 select-none w-full overflow-hidden">
      {/* 1. Eyebrow badge */}
      <div>
        <HeroBadge text={siteConfig.ticker} />
      </div>

      {/* 2. Large Editorial Headline - Perfectly tuned for mobile, tablet, and desktop */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[1.75rem] min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-[3.85rem] font-extrabold tracking-tight leading-[1.12] sm:leading-[1.08] text-[#F3F4F6]"
      >
        <span>{siteConfig.tagline.lead} </span>
        <span className="block mt-1 bg-gradient-to-r from-white via-white to-[#00F0FF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          {siteConfig.tagline.highlight}
        </span>
      </motion.h1>

      {/* 3. Supporting Description */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-xs min-[400px]:text-sm sm:text-base md:text-lg text-[#94A3B8] leading-relaxed max-w-lg font-normal"
      >
        {siteConfig.description}
      </motion.p>

      {/* 4. Action CTAs */}
      <HeroCTA />

      {/* 5. Minimalist Capability Domain Tags - clean wrap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pt-3 sm:pt-4 mt-1 border-t border-white/[0.06] flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-[11px] font-mono-tech text-neutral-400"
      >
        <span className="text-neutral-500">DOMAINS:</span>
        <span className="text-neutral-300">Intelligent Systems</span>
        <span className="text-neutral-600">•</span>
        <span className="text-neutral-300">Web Platforms</span>
        <span className="text-neutral-600">•</span>
        <span className="text-neutral-300">3D Software</span>
      </motion.div>
    </div>
  )
}
