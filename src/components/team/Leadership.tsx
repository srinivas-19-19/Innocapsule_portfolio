import React from 'react'
import { motion } from 'framer-motion'
import { teamMembers } from '../../data/team'
import { Card3D } from './Card3D'
import { Move } from 'lucide-react'

export const Leadership: React.FC = () => {
  return (
    <section
      id="team"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] bg-[#06070B] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-[#00F0FF]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span className="text-xs font-mono-tech text-[#00F0FF] uppercase tracking-widest font-semibold">
              07 // LEADERSHIP CORE
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
                Leadership
              </h2>
              <p className="text-lg sm:text-xl text-neutral-400 mt-2 font-medium">
                The minds engineering the foundation.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono-tech text-[#00F0FF]">
              <Move className="w-3.5 h-3.5 animate-pulse" />
              <span>INTERACTIVE // DRAG BADGES FREELY</span>
            </div>
          </motion.div>
        </div>

        {/* 3D Interactive ID Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center justify-center max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card3D key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
