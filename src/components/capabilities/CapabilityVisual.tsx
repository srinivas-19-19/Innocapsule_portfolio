import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Capability } from '../../data/capabilities'

interface CapabilityVisualProps {
  activeCapability: Capability
}

export const CapabilityVisual: React.FC<CapabilityVisualProps> = ({ activeCapability }) => {
  return (
    <div className="relative w-full h-[380px] lg:h-[440px] rounded-2xl bg-[#080C14]/90 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#00F0FF]/[0.06] rounded-full blur-[70px] pointer-events-none" />

      {/* Top Status Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-4 text-[10px] font-mono-tech text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="text-white font-semibold">INTERACTIVE CAPABILITY MATRIX</span>
        </div>
        <span className="text-[#00F0FF]">{activeCapability.number} // {activeCapability.type.toUpperCase()}</span>
      </div>

      {/* Dynamic Graphic Preview based on active capability */}
      <div className="relative z-10 my-auto w-full h-[220px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCapability.id}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full h-full flex items-center justify-center"
          >
            {/* 1. AI & Intelligent Systems: Neural Node Network */}
            {activeCapability.type === 'ai' && (
              <div className="relative w-48 h-48 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border border-[#00F0FF]/30 border-dashed rounded-full"
                />
                <div className="w-20 h-20 rounded-2xl bg-[#10192A] border border-[#00F0FF]/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                  <span className="text-xs font-mono-tech font-bold text-[#00F0FF]">AI CORE</span>
                </div>
                {/* Orbiting nodes */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4"
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#fff]" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00F0FF] shadow-[0_0_12px_#00F0FF]" />
                </motion.div>
              </div>
            )}

            {/* 2. Web Platforms: Multi-viewport Scalable Architecture */}
            {activeCapability.type === 'web' && (
              <div className="w-64 flex flex-col gap-2.5">
                <div className="h-6 rounded-t-lg bg-[#121927] border border-white/10 px-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/60" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  <span className="ml-2 text-[9px] font-mono-tech text-neutral-500">https://edge.innocapsule.com</span>
                </div>
                <div className="h-32 rounded-b-lg bg-[#0C121D] border border-white/10 p-3 grid grid-cols-3 gap-2">
                  <div className="col-span-2 rounded bg-white/[0.04] p-2 flex flex-col justify-between">
                    <div className="h-2 w-16 bg-[#00F0FF]/40 rounded" />
                    <div className="h-2 w-28 bg-white/10 rounded" />
                    <div className="h-10 rounded bg-[#00F0FF]/[0.08] border border-[#00F0FF]/20" />
                  </div>
                  <div className="col-span-1 rounded bg-white/[0.04] p-2 flex flex-col gap-2">
                    <div className="h-4 rounded bg-white/10" />
                    <div className="h-4 rounded bg-white/10" />
                    <div className="h-4 rounded bg-[#00F0FF]/20" />
                  </div>
                </div>
              </div>
            )}

            {/* 3. Mobile Experiences: Tactile Native Interface */}
            {activeCapability.type === 'mobile' && (
              <div className="w-36 h-52 rounded-2xl bg-[#101726] border-2 border-white/20 p-2 shadow-2xl flex flex-col justify-between relative">
                <div className="w-10 h-1.5 rounded-full bg-white/20 mx-auto" />
                <div className="flex flex-col gap-2 my-auto">
                  <div className="h-12 rounded-xl bg-[#00F0FF]/15 border border-[#00F0FF]/30 p-2 flex items-center justify-between">
                    <span className="w-3 h-3 rounded-full bg-[#00F0FF] animate-ping" />
                    <span className="text-[10px] font-mono-tech text-white">60 FPS</span>
                  </div>
                  <div className="h-8 rounded-lg bg-white/[0.04] border border-white/[0.08]" />
                </div>
                <div className="w-8 h-1 rounded-full bg-white/30 mx-auto" />
              </div>
            )}

            {/* 4. Product Engineering: System Architecture Pipeline */}
            {activeCapability.type === 'engineering' && (
              <div className="flex items-center gap-3">
                <div className="w-16 h-24 rounded-lg bg-[#101726] border border-white/10 flex flex-col items-center justify-center gap-2 p-2">
                  <span className="w-4 h-4 rounded bg-[#00F0FF]/30 border border-[#00F0FF]" />
                  <span className="text-[9px] font-mono-tech text-neutral-400">INPUT</span>
                </div>
                <div className="w-8 h-0.5 bg-[#00F0FF]/60 relative">
                  <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                </div>
                <div className="w-20 h-28 rounded-lg bg-[#141E30] border border-[#00F0FF]/40 flex flex-col items-center justify-center gap-2 p-2 shadow-lg">
                  <span className="w-6 h-6 rounded-full border border-dashed border-[#00F0FF] animate-spin" />
                  <span className="text-[9px] font-mono-tech text-[#00F0FF]">BUILD</span>
                </div>
                <div className="w-8 h-0.5 bg-[#00F0FF]/60" />
                <div className="w-16 h-24 rounded-lg bg-[#101726] border border-white/10 flex flex-col items-center justify-center gap-2 p-2">
                  <span className="w-4 h-4 rounded bg-emerald-400/30 border border-emerald-400" />
                  <span className="text-[9px] font-mono-tech text-neutral-400">DEPLOY</span>
                </div>
              </div>
            )}

            {/* 5. Automation: Event-Driven Stream */}
            {activeCapability.type === 'automation' && (
              <div className="w-56 flex flex-col gap-2.5">
                {[1, 2, 3].map((step) => (
                  <motion.div
                    key={step}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: step * 0.1 }}
                    className="p-2.5 rounded-lg bg-[#101827] border border-white/[0.08] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                      <span className="text-[10px] font-mono-tech text-neutral-300">QUEUE JOB 0{step}</span>
                    </div>
                    <span className="text-[9px] font-mono-tech text-emerald-400">RESOLVED</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* 6. Digital Experiences: Spatial Field */}
            {activeCapability.type === 'experiences' && (
              <div className="relative w-48 h-48 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-28 h-28 border border-[#00F0FF]/40 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.2)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#00F0FF] to-[#38bdf8] rotate-45 opacity-80" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-white opacity-80" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                  <span className="w-2 h-2 rounded-full bg-sky-300 opacity-60" />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Technical Tag Row */}
      <div className="relative z-10 pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
        {activeCapability.domains.map((dom) => (
          <span
            key={dom}
            className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono-tech text-neutral-300"
          >
            {dom}
          </span>
        ))}
      </div>
    </div>
  )
}
