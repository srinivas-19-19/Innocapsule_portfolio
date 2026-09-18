import React from 'react'
import { motion } from 'framer-motion'

interface ApproachStep {
  num: string
  title: string
  desc: string
}

const approachSteps: ApproachStep[] = [
  {
    num: '01',
    title: 'PRODUCT',
    desc: 'Understand the problem',
  },
  {
    num: '02',
    title: 'SYSTEM',
    desc: 'Engineer the foundation',
  },
  {
    num: '03',
    title: 'INTELLIGENCE',
    desc: 'Add meaningful technology',
  },
  {
    num: '04',
    title: 'SCALE',
    desc: 'Build for what comes next',
  },
]

export const AboutVisual: React.FC = () => {
  return (
    <div className="relative w-full rounded-2xl bg-black/[0.02] dark:bg-[#090D14]/80 border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between select-none shadow-sm transition-colors">
      {/* Subtle technical grid background */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none rounded-2xl" />

      {/* Panel Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-4 mb-2 sm:mb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
          <span className="text-[11px] font-mono-tech text-neutral-800 dark:text-neutral-200 font-semibold tracking-wider">
            INNOCAPSULE // ENGINEERING APPROACH
          </span>
        </div>
        <span className="text-[10px] font-mono-tech text-neutral-400 dark:text-neutral-500">
          SYSTEM MATRIX
        </span>
      </div>

      {/* Approach Rows */}
      <div className="relative z-10 flex flex-col divide-y divide-black/[0.06] dark:divide-white/[0.06]">
        {approachSteps.map((step) => (
          <motion.div
            key={step.num}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
            className="group py-4 sm:py-5 flex items-center justify-between transition-colors px-2.5 sm:px-3.5 rounded-xl hover:bg-black/[0.025] dark:hover:bg-white/[0.03]"
          >
            <div className="flex items-baseline gap-4 sm:gap-5">
              <span className="text-xs font-mono-tech text-[#FF4500] font-semibold">
                {step.num}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-xs sm:text-sm font-mono-tech font-bold text-neutral-900 dark:text-white tracking-wider">
                  {step.title}
                </span>
                <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  {step.desc}
                </span>
              </div>
            </div>

            {/* Subtle indicator pip */}
            <span className="w-1.5 h-1.5 rounded-full bg-black/15 dark:bg-white/20 group-hover:bg-[#FF4500] transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* Panel Footer */}
      <div className="relative z-10 pt-4 mt-2 sm:mt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono-tech text-neutral-400 dark:text-neutral-500">
        <span>FRAMEWORK: CONTINUOUS</span>
        <span className="text-neutral-500 dark:text-neutral-400">DISCIPLINED EXECUTION</span>
      </div>
    </div>
  )
}

