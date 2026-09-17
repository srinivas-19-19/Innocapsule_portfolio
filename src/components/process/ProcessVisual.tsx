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
    <div className="relative w-full rounded-2xl bg-[#090D15]/80 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-md overflow-hidden flex flex-col justify-between min-h-[380px] sm:min-h-[420px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00F0FF]/[0.025] rounded-full blur-[90px] pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-4 text-[11px] font-mono-tech text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="text-white font-semibold tracking-wider">
            PIPELINE STATUS // {activeStep.number} {activeStep.title.toUpperCase()}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-neutral-500">
          <span>SPEC: ISO-CORE</span>
          <span className="text-neutral-700">|</span>
          <span className="text-[#00F0FF]/80">STAGE {activeIndex + 1} OF 5</span>
        </div>
      </div>

      {/* Central Interactive Schematic Stage */}
      <div className="relative z-10 py-6 sm:py-8 flex flex-col items-center justify-center my-auto">
        {/* Animated Horizontal Progression Rail */}
        <div className="w-full max-w-md relative mb-8">
          {/* Base hairline track */}
          <div className="h-[2px] w-full bg-white/[0.08] rounded-full" />
          {/* Active progress fill */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#00F0FF]/40 to-[#00F0FF] rounded-full"
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
                      ? 'bg-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.7)] scale-110'
                      : isPassed
                      ? 'bg-[#00F0FF]/60'
                      : 'bg-[#141A24] border border-white/10'
                  }`}
                >
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06070B]" />
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
            className="w-full max-w-sm rounded-xl bg-white/[0.025] border border-white/[0.08] p-5 flex flex-col gap-4 text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/25 flex items-center justify-center text-[#00F0FF]">
                  {stepIcons[activeIndex]}
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech text-neutral-400 block tracking-widest">
                    STAGE // {activeStep.number}
                  </span>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {activeStep.title}
                  </h4>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20">
                ACTIVE
              </span>
            </div>

            {/* Stage Deliverables List */}
            <div className="flex flex-col gap-2 pt-2 border-t border-white/[0.05]">
              <span className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-wider">
                Key Architectural Deliverables:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeStep.deliverables.map((del) => (
                  <span
                    key={del}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-neutral-300"
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
      <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono-tech text-neutral-500">
        <div className="flex items-center gap-1 sm:gap-2">
          <GitBranch className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span className="hidden xs:inline">FLOW:</span>
          {stageMilestones.map((m, idx) => (
            <React.Fragment key={m.label}>
              <span
                className={`transition-colors ${
                  idx <= activeIndex + 1 ? 'text-white' : 'text-neutral-600'
                }`}
              >
                {m.label}
              </span>
              {idx < stageMilestones.length - 1 && (
                <span className="text-neutral-700">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-1 text-[10px] text-neutral-400">
          <Sparkles className="w-3 h-3 text-[#00F0FF]" />
          <span>VERIFIED RUNTIME</span>
        </div>
      </div>
    </div>
  )
}
