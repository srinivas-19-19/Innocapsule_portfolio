import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ProcessStepItem } from '../../data/process'
import {
  Compass,
  FileCode2,
  Palette,
  Cpu,
  CheckCircle2,
  Sparkles,
  GitBranch,
} from 'lucide-react'

interface ProcessVisualProps {
  activeStep: ProcessStepItem
  activeIndex: number
}

export const ProcessVisual: React.FC<ProcessVisualProps> = ({
  activeStep,
  activeIndex,
}) => {
  const stepIcons = [
    <Compass key="1" className="w-5 h-5" />,
    <FileCode2 key="2" className="w-5 h-5" />,
    <Palette key="3" className="w-5 h-5" />,
    <Cpu key="4" className="w-5 h-5" />,
    <CheckCircle2 key="5" className="w-5 h-5" />,
  ]

  const stageMilestones = [
    { label: 'IDEA', code: '00' },
    { label: 'DISCOVERY', code: '01' },
    { label: 'SYSTEM', code: '02' },
    { label: 'DESIGN', code: '03' },
    { label: 'ENGINEERING', code: '04' },
    { label: 'PRODUCT', code: '05' },
  ]

  return (
    <div className="relative w-full rounded-2xl bg-white dark:bg-[#090D15]/80 border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8 backdrop-blur-md overflow-hidden flex flex-col justify-between min-h-[380px] sm:min-h-[420px] shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors">
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 dark:opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4500]/[0.05] rounded-full blur-[90px] pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.06] pb-4 text-[11px] font-mono-tech text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
          <span className="text-neutral-900 dark:text-white font-semibold tracking-wider">
            PIPELINE STATUS // {activeStep.number} {activeStep.title.toUpperCase()}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-neutral-500">
          <span>SPEC: ISO-CORE</span>
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <span className="text-[#FF4500] font-semibold">STAGE {activeIndex + 1} OF 5</span>
        </div>
      </div>

      {/* Central Interactive Schematic Stage */}
      <div className="relative z-10 py-6 sm:py-8 flex flex-col items-center justify-center my-auto">
        {/* Animated Horizontal Progression Rail */}
        <div className="w-full max-w-md relative mb-8">
          {/* Base hairline track */}
          <div className="h-[2px] w-full bg-black/[0.08] dark:bg-white/[0.08] rounded-full" />
          {/* Active progress fill */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#FF4500]/40 to-[#FF4500] rounded-full"
            initial={false}
            animate={{ width: `${((activeIndex + 1) / 5) * 100}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />

          {/* Micro dots for each step */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
            {[0, 1, 2, 3, 4].map((idx) => {
              const isPassed = idx <= activeIndex
              const isCurrent = idx === activeIndex
              return (
                <div
                  key={idx}
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#FF4500] shadow-[0_0_12px_rgba(255,69,0,0.7)] scale-110'
                      : isPassed
                      ? 'bg-[#FF4500]/60'
                      : 'bg-neutral-200 dark:bg-[#141A24] border border-black/10 dark:border-white/10'
                  }`}
                >
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Dynamic Center Node State Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm rounded-xl bg-orange-500/[0.03] dark:bg-white/[0.025] border border-black/[0.08] dark:border-white/[0.08] p-5 flex flex-col gap-4 text-left shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FF4500]/10 border border-[#FF4500]/30 flex items-center justify-center text-[#FF4500]">
                  {stepIcons[activeIndex]}
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech text-neutral-500 dark:text-neutral-400 block tracking-widest">
                    STAGE // {activeStep.number}
                  </span>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white tracking-wide">
                    {activeStep.title}
                  </h4>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-[#FF4500]/10 text-[#FF4500] border border-[#FF4500]/30 font-semibold">
                ACTIVE
              </span>
            </div>

            {/* Stage Deliverables List */}
            <div className="flex flex-col gap-2 pt-2 border-t border-black/[0.06] dark:border-white/[0.05]">
              <span className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-wider">
                Key Architectural Deliverables:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeStep.deliverables.map((del) => (
                  <span
                    key={del}
                    className="text-xs px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-neutral-700 dark:text-neutral-300"
                  >
                    {del}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Process Chain Ribbon */}
      <div className="relative z-10 pt-4 border-t border-black/[0.08] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono-tech text-neutral-500">
        <div className="flex items-center gap-1 sm:gap-2">
          <GitBranch className="w-3.5 h-3.5 text-[#FF4500]" />
          <span className="hidden xs:inline">FLOW:</span>
          {stageMilestones.map((m, idx) => (
            <React.Fragment key={m.label}>
              <span
                className={`transition-colors font-medium ${
                  idx <= activeIndex + 1 ? 'text-neutral-900 dark:text-white' : 'text-neutral-400 dark:text-neutral-600'
                }`}
              >
                {m.label}
              </span>
              {idx < stageMilestones.length - 1 && (
                <span className="text-neutral-300 dark:text-neutral-700">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-1 text-[10px] text-neutral-600 dark:text-neutral-400">
          <Sparkles className="w-3 h-3 text-[#FF4500]" />
          <span>VERIFIED RUNTIME</span>
        </div>
      </div>
    </div>
  )
}
