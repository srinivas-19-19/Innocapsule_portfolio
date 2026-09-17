import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface HeroBadgeProps {
  text?: string
}

export const HeroBadge: React.FC<HeroBadgeProps> = ({
  text = 'IDEAS → INTELLIGENCE → PRODUCTS',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
      <span className="text-[10px] sm:text-[11px] font-mono-tech font-medium text-neutral-300 tracking-wider">
        {text}
      </span>
      <Sparkles className="w-3 h-3 text-[#00F0FF]/70" />
    </motion.div>
  )
}
