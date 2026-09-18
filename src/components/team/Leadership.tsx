import React from 'react'
import { motion } from 'framer-motion'
import { teamMembers } from '../../data/team'
import { Card3D } from './Card3D'

interface LeadershipProps {
  onOpenDeveloper?: (id: 'founder' | 'co-founder') => void
}

export const Leadership: React.FC<LeadershipProps> = ({ onOpenDeveloper }) => {
  return (
    <section
      id="team"
      className="relative py-28 sm:py-36 border-t border-black/[0.06] dark:border-white/[0.06] bg-neutral-100/50 dark:bg-[#090B0E] overflow-hidden transition-colors"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-[#FF4500]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span className="text-xs font-mono-tech text-[#FF4500] uppercase tracking-widest font-semibold">
              // 04 // LEADERSHIP CORE
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Leadership
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mt-2 font-medium">
                The minds engineering the foundation.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono-tech text-[#FF4500]">
              <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
              <span>FOUNDING CORE // 02 VERIFIED ARCHITECTS</span>
            </div>
          </motion.div>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center justify-center max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card3D
              key={member.id}
              member={member}
              onOpenDeveloper={onOpenDeveloper}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
