import React from 'react'
import type { EngineeringPrinciple } from '../../data/principles'

interface PrincipleRowProps {
  principle: EngineeringPrinciple
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export const PrincipleRow: React.FC<PrincipleRowProps> = ({
  principle,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
      role="article"
      aria-label={`${principle.title}: ${principle.statement}`}
      className={`group relative py-8 sm:py-10 border-b border-black/[0.08] dark:border-white/[0.08] transition-all duration-300 focus:outline-none focus-visible:bg-orange-500/[0.02] dark:focus-visible:bg-white/[0.02] ${
        isHovered ? 'bg-orange-500/[0.02] dark:bg-white/[0.015]' : ''
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Large Oversized Index Number (2 Cols) */}
        <div className="md:col-span-2 flex items-center md:items-start justify-between">
          <span
            className={`font-mono-tech text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight transition-all duration-300 ${
              isHovered
                ? 'text-[#FF4500] translate-x-1 sm:translate-x-2'
                : 'text-neutral-400 dark:text-neutral-600 group-hover:text-[#FF4500]'
            }`}
          >
            {principle.number}
          </span>

          <span className="md:hidden text-[10px] font-mono-tech px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.04] text-[#FF4500] border border-black/[0.06] dark:border-white/[0.08] font-semibold">
            {principle.focusTag}
          </span>
        </div>

        {/* Title and Statement (6 Cols) */}
        <div className="md:col-span-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h3
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-200 ${
                isHovered ? 'text-[#FF4500]' : 'text-neutral-900 dark:text-neutral-200'
              }`}
            >
              {principle.title}
            </h3>
            <span className="hidden md:inline-block text-[10px] font-mono-tech px-2.5 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.03] text-[#FF4500] border border-black/[0.06] dark:border-white/[0.08] font-semibold">
              {principle.focusTag}
            </span>
          </div>

          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed">
            {principle.statement}
          </p>

          {/* Accent Line that extends on hover */}
          <div className="h-[2px] w-12 group-hover:w-36 bg-gradient-to-r from-[#FF4500] to-transparent transition-all duration-500 rounded-full mt-1" />
        </div>

        {/* Detail Narrative (4 Cols) */}
        <div className="md:col-span-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
          <p>{principle.detail}</p>
        </div>
      </div>
    </div>
  )
}
