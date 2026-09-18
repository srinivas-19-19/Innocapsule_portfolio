import React from 'react'
import { motion } from 'framer-motion'

export const AboutVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl bg-black/[0.02] dark:bg-[#090D14]/80 border border-black/[0.08] dark:border-white/[0.07] overflow-hidden p-6 sm:p-8 flex flex-col justify-between select-none shadow-sm">
      {/* Subtle background grid within visual */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#FF4500]/[0.05] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#FF8C00]/[0.04] rounded-full blur-[80px] pointer-events-none" />

      {/* Top Header Label */}
      <div className="relative z-10 flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF4500]" />
          <span className="text-[11px] font-mono-tech text-neutral-800 dark:text-neutral-300 font-semibold tracking-wider">
            TRANSFORMATION MATRIX
          </span>
        </div>
        <span className="text-[10px] font-mono-tech text-neutral-500">
          SIGNAL: ACTIVE // 100%
        </span>
      </div>

      {/* Center Graph: Idea → System → Product Pipeline */}
      <div className="relative z-10 my-auto py-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 relative">
          {/* Animated Connecting Bus Line */}
          <div className="absolute top-1/2 left-[16%] right-[16%] -translate-y-1/2 h-[1px] bg-black/[0.08] dark:bg-white/[0.08] z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-[#FF4500] to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ width: '40%' }}
            />
          </div>

          {/* Node 1: Idea */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white dark:bg-[#101622] border border-black/[0.08] dark:border-white/[0.12] flex items-center justify-center shadow-md relative group"
            >
              <div className="w-3 h-3 rounded-sm bg-neutral-400 rotate-45 group-hover:bg-[#FF4500] transition-colors" />
              <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 rounded-full bg-black/10 dark:bg-white/20" />
            </motion.div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-mono-tech text-neutral-500">01 // INCEPTION</span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">Idea</span>
            </div>
          </div>

          {/* Node 2: Intelligence / System */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white dark:bg-[#10192A] border border-[#FF4500]/40 flex items-center justify-center shadow-[0_0_24px_rgba(255,69,0,0.15)] relative group"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="w-6 h-6 border border-[#FF4500]/60 border-dashed rounded-full flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-[#FF4500]" />
              </motion.div>
              <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 rounded-full bg-[#FF4500] animate-pulse" />
            </motion.div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-mono-tech text-[#FF4500]">02 // ARCHITECTURE</span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">System</span>
            </div>
          </div>

          {/* Node 3: Product */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white dark:bg-[#101622] border border-black/[0.08] dark:border-white/[0.12] flex items-center justify-center shadow-md relative group"
            >
              <div className="w-5 h-5 border border-black/30 dark:border-white/40 rounded-md flex items-center justify-center group-hover:border-[#FF4500] transition-colors">
                <div className="w-2 h-2 bg-neutral-800 dark:bg-white group-hover:bg-[#FF4500] transition-colors" />
              </div>
              <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 rounded-full bg-black/10 dark:bg-white/20" />
            </motion.div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-mono-tech text-neutral-500">03 // DEPLOYMENT</span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">Product</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Telemetry Bar */}
      <div className="relative z-10 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono-tech text-neutral-500">
        <span>PIPELINE: DETERMINISTIC</span>
        <span className="text-neutral-500 dark:text-neutral-400">ENGINEERING CONTINUUM</span>
      </div>
    </div>
  )
}
