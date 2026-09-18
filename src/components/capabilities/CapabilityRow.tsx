import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import type { Capability } from '../../data/capabilities'

interface CapabilityRowProps {
  capability: Capability
  isActive: boolean
  isExpandedMobile: boolean
  onMouseEnter: () => void
  onToggleMobile: () => void
}

export const CapabilityRow: React.FC<CapabilityRowProps> = ({
  capability,
  isActive,
  isExpandedMobile,
  onMouseEnter,
  onToggleMobile,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`group relative border-b border-white/[0.08] transition-all duration-300 ${
        isActive ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
      }`}
    >
      {/* Active Left Indicator Accent Line (Desktop) */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF4500] transition-opacity duration-300 hidden lg:block ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Main Header / Trigger */}
      <button
        type="button"
        onClick={onToggleMobile}
        aria-expanded={isExpandedMobile}
        className="w-full text-left py-6 sm:py-7 px-4 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4500]"
      >
        <div className="flex items-center gap-4 sm:gap-8">
          <span
            className={`text-sm sm:text-base font-mono-tech font-bold transition-colors duration-300 ${
              isActive ? 'text-[#FF4500]' : 'text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300'
            }`}
          >
            {capability.number}
          </span>
          <h3
            className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isActive
                ? 'text-neutral-900 dark:text-white'
                : 'text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white'
            }`}
          >
            {capability.title}
          </h3>
        </div>

        {/* Desktop Arrow Indicator */}
        <div className="hidden lg:flex items-center gap-3">
          <span
            className={`text-xs font-mono-tech transition-opacity duration-300 ${
              isActive ? 'opacity-100 text-[#FF4500]' : 'opacity-0 text-neutral-500'
            }`}
          >
            EXPLORE SPEC
          </span>
          <div
            className={`p-2 rounded-full border transition-all duration-300 ${
              isActive
                ? 'bg-[#FF4500] text-white border-[#FF4500] translate-x-1 shadow-md shadow-[#FF4500]/25'
                : 'border-black/10 dark:border-white/10 text-neutral-400 group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:text-neutral-900 dark:group-hover:text-white'
            }`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Mobile Accordion Chevron */}
        <div className="lg:hidden p-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] text-neutral-400">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpandedMobile ? 'rotate-180 text-[#FF4500]' : ''
            }`}
          />
        </div>
      </button>

      {/* Desktop Description & Details Reveal */}
      <motion.div
        initial={false}
        animate={{
          height: isActive ? 'auto' : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="hidden lg:block overflow-hidden px-4 sm:px-6"
      >
        <div className="pb-6 pl-12 sm:pl-16 max-w-2xl flex flex-col gap-3">
          <p className="text-sm text-neutral-300 leading-relaxed font-normal">
            {capability.fullDescription}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {capability.domains.map((domain) => (
              <span
                key={domain}
                className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono-tech text-neutral-400"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Accordion Expandable Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpandedMobile ? 'auto' : 0,
          opacity: isExpandedMobile ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="lg:hidden overflow-hidden px-4 sm:px-6"
      >
        <div className="pb-6 pl-8 sm:pl-12 flex flex-col gap-3">
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {capability.fullDescription}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {capability.domains.map((domain) => (
              <span
                key={domain}
                className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[9px] sm:text-[10px] font-mono-tech text-neutral-400"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
