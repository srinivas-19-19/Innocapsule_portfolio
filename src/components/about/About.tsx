import React from 'react'
import { motion } from 'framer-motion'
import { AboutVisual } from './AboutVisual'
import { Sparkles } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] bg-[#070A0F] overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00F0FF]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span className="text-xs font-mono-tech text-[#00F0FF] uppercase tracking-widest font-semibold">
            01 // ABOUT INNOCAPSULE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Story */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Ideas are everywhere.{' '}
              <span className="block mt-1 text-[#94A3B8] font-medium">
                Building them is different.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              <p>
                Innocapsule is a technology startup building modern digital products, intelligent systems, and scalable software experiences.
              </p>
              <p className="text-sm sm:text-base text-neutral-400/90 leading-relaxed">
                Most software fails not from lack of ambition, but from fragmentation between creative vision, deep systems engineering, and modern intelligence. We unite these domains under one roof—engineering resilient platforms from day zero.
              </p>
            </motion.div>

            {/* Core Values / Philosophy Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]"
            >
              <div className="flex flex-col gap-1 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-white font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>Deterministic Quality</span>
                </div>
                <p className="text-xs text-neutral-500 leading-normal">
                  Reliability and performance engineered from architectural first principles.
                </p>
              </div>

              <div className="flex flex-col gap-1 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-white font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                  <span>Intelligent Systems</span>
                </div>
                <p className="text-xs text-neutral-500 leading-normal">
                  Weaving machine intelligence directly into business operations and UX.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Abstract Transformation Matrix Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <AboutVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
