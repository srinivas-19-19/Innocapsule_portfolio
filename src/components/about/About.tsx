import React from 'react'
import { motion } from 'framer-motion'
import { AboutVisual } from './AboutVisual'

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 lg:py-36 border-t border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#070A0F] overflow-hidden transition-colors"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF4500]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
          <span className="text-xs font-mono-tech text-[#FF4500] uppercase tracking-widest font-semibold">
            01 // ABOUT INNOCAPSULE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Story + How We Think */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]"
            >
              Ideas are everywhere.{' '}
              <span className="block mt-1 text-neutral-500 dark:text-[#94A3B8] font-medium">
                We build what comes next.
              </span>
            </motion.h2>

            {/* Supporting Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 text-neutral-600 dark:text-neutral-300/90 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              <p>
                Innocapsule is a technology startup focused on turning ambitious ideas into reliable digital products, intelligent systems, and scalable software.
              </p>
              <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
                We bring product thinking, modern engineering, and intelligent technology together from the beginning—so ideas don't just become prototypes, they become systems built to evolve.
              </p>
            </motion.div>

            {/* How We Think Compact Three-Part Principles */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 sm:pt-8 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col gap-5"
            >
              <div className="flex items-center gap-2 text-[11px] font-mono-tech text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-semibold">
                <span>HOW WE THINK</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                {/* 01 // THINK */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-mono-tech text-[#FF4500] font-semibold">
                    01 // THINK
                  </span>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">
                    Start with the problem.
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Understand the people, context, and outcome before writing the first line of code.
                  </p>
                </div>

                {/* 02 // BUILD */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-mono-tech text-[#FF4500] font-semibold">
                    02 // BUILD
                  </span>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">
                    Engineer the foundation.
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Build clean, reliable systems designed for real-world use—not just demonstrations.
                  </p>
                </div>

                {/* 03 // EVOLVE */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-mono-tech text-[#FF4500] font-semibold">
                    03 // EVOLVE
                  </span>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">
                    Keep moving forward.
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Technology changes quickly, so every product should be ready to adapt, improve, and scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Minimal Engineering Approach Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <AboutVisual />
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 pt-8 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-center text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 tracking-wide font-sans">
              From first idea to evolving product — <span className="text-neutral-800 dark:text-neutral-200 font-medium">we build with intention.</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

