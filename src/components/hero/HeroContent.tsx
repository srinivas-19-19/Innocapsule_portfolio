import React from 'react'
import { motion } from 'framer-motion'
import { HeroCTA } from './HeroCTA'
import { Sparkles } from 'lucide-react'

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 max-w-2xl z-10 select-none w-full">
      {/* 1. Subtle futuristic pill */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/[0.06] backdrop-blur-md text-[11px] sm:text-xs font-mono-tech tracking-wider uppercase text-neutral-800 dark:text-neutral-200"
      >
        <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
        <span className="font-semibold text-[#FF4500]">STUDIO</span>
        <span className="text-neutral-400 dark:text-neutral-500">•</span>
        <span>IDEAS TO INTELLIGENT PRODUCTS</span>
        <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
      </motion.div>

      {/* 2. Massive, Bold "INNO CAPSULE" Title with 3D Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-1 sm:space-y-2"
      >
        <h1 className="text-5xl min-[400px]:text-6xl sm:text-7xl md:text-8xl lg:text-[6.25rem] font-black tracking-tight leading-[0.95] select-none font-display">
          <span className="block text-[#111827] dark:text-[#F9FAFB] drop-shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_4px_30px_rgba(255,255,255,0.05)]">
            INNO
          </span>
          <span className="block bg-gradient-to-r from-[#FF4500] via-[#FF6A00] to-[#FF8C00] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,69,0,0.38)]">
            CAPSULE
          </span>
        </h1>
      </motion.div>

      {/* 3. Sleek Action CTAs */}
      <div className="pt-2 sm:pt-3">
        <HeroCTA />
      </div>
    </div>
  )
}
