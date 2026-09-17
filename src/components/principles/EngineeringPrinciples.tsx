import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { engineeringPrinciples } from '../../data/principles'
import { PrincipleRow } from './PrincipleRow'

export const EngineeringPrinciples: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="principles"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] bg-[#06070B] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-1/4 left-1/3 w-[28rem] h-[28rem] bg-[#00F0FF]/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Eyebrow & Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span className="text-xs font-mono-tech text-[#00F0FF] uppercase tracking-widest font-semibold">
              06 // ARCHITECTURAL CONVICTIONS
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                How We Think
              </h2>
              <p className="text-lg sm:text-xl text-neutral-400 mt-2 font-medium max-w-2xl">
                Technology should solve problems, not simply demonstrate technology.
              </p>
            </div>

            <p className="text-xs sm:text-sm font-mono-tech text-neutral-500 max-w-xs">
              // ENGINEERING MANIFESTO
              <br />
              Four tenets safeguarding clarity, deterministic speed, and human relevance.
            </p>
          </motion.div>
        </div>

        {/* Editorial Principles List */}
        <div className="flex flex-col border-t border-white/[0.08]">
          {engineeringPrinciples.map((principle, idx) => (
            <PrincipleRow
              key={principle.number}
              principle={principle}
              isHovered={hoveredIndex === idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
