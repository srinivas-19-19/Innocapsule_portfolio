import React from 'react'
import { motion } from 'framer-motion'
import type { ProcessStepItem } from '../../data/process'
import { ArrowRight, Check } from 'lucide-react'

interface ProcessStepProps {
  step: ProcessStepItem
  isActive: boolean
  isPassed: boolean
  isLast: boolean
  onSelect: () => void
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  isActive,
  isPassed,
  isLast,
  onSelect,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      aria-current={isActive ? 'step' : undefined}
      className={`group relative text-left w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4500]/60 rounded-xl transition-all duration-300 p-4 sm:p-5 ${
        isActive
          ? 'bg-orange-500/[0.06] dark:bg-white/[0.04] border border-[#FF4500]/30 dark:border-white/[0.12] shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
          : 'hover:bg-black/[0.02] dark:hover:bg-white/[0.015] border border-transparent'
      }`}
    >
      <div className="flex items-start gap-4 sm:gap-6">
        {/* Step Indicator Node & Connecting Line for Mobile/Tablet */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-mono-tech text-xs font-bold transition-all duration-300 ${
              isActive
                ? 'bg-[#FF4500] text-white shadow-[0_0_16px_rgba(255,69,0,0.5)] scale-105'
                : isPassed
                ? 'bg-black/[0.05] dark:bg-white/[0.08] text-[#FF4500] border border-[#FF4500]/30'
                : 'bg-black/[0.03] dark:bg-white/[0.03] text-neutral-500 border border-black/[0.08] dark:border-white/[0.08] group-hover:border-black/20 dark:group-hover:border-white/[0.2] group-hover:text-neutral-900 dark:group-hover:text-neutral-300'
            }`}
          >
            {isPassed && !isActive ? (
              <Check className="w-4 h-4 stroke-[2.5]" />
            ) : (
              step.number
            )}
          </div>

          {!isLast && (
            <div
              className={`w-[1.5px] h-12 sm:h-14 my-1 transition-colors duration-300 ${
                isPassed ? 'bg-[#FF4500]/40' : 'bg-black/[0.08] dark:bg-white/[0.07]'
              }`}
            />
          )}
        </div>

        {/* Content Column */}
        <div className="flex-1 min-w-0 pt-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span
              className={`text-[10px] font-mono-tech tracking-widest uppercase transition-colors font-semibold ${
                isActive ? 'text-[#FF4500]' : 'text-neutral-500'
              }`}
            >
              {step.subtitle}
            </span>

            <ArrowRight
              className={`w-4 h-4 transition-all duration-300 ${
                isActive
                  ? 'text-[#FF4500] translate-x-1 opacity-100'
                  : 'text-neutral-400 dark:text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5'
              }`}
            />
          </div>

          <h3
            className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-200 ${
              isActive ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white'
            }`}
          >
            {step.title}
          </h3>

          <p
            className={`text-sm leading-relaxed mt-2 transition-colors duration-200 ${
              isActive
                ? 'text-neutral-700 dark:text-neutral-300'
                : 'text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400'
            }`}
          >
            {step.description}
          </p>

          {/* Quick deliverables on mobile when active */}
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-black/[0.08] dark:border-white/[0.06] sm:hidden"
            >
              {step.deliverables.map((del) => (
                <span
                  key={del}
                  className="text-[11px] px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-black/[0.08] dark:border-white/[0.06]"
                >
                  {del}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
