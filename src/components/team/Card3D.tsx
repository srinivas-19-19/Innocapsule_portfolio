import React from 'react'
import { motion } from 'framer-motion'
import type { TeamMember } from '../../data/team'

interface Card3DProps {
  member: TeamMember
  onOpenDeveloper?: (id: 'founder' | 'co-founder') => void
}

export const Card3D: React.FC<Card3DProps> = ({ member, onOpenDeveloper }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      onClick={() => onOpenDeveloper && onOpenDeveloper(member.id)}
      className="group relative w-full max-w-md mx-auto rounded-[2rem] bg-white dark:bg-[#0A0E17] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_50px_rgba(255,69,0,0.16)] hover:border-[#FF4500]/40 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col select-none"
    >
      {/* Top Curved Gradient Banner */}
      <div className="h-32 sm:h-36 w-full bg-gradient-to-r from-[#B51E00] via-[#DE3A00] to-[#FF6E00] relative overflow-hidden">
        {/* Subtle mesh & highlight sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent)] pointer-events-none" />
        <div className="absolute top-3 right-4 text-[10px] font-mono-tech text-white/70 uppercase tracking-widest">
          INNOCAPSULE // CORE
        </div>
      </div>

      {/* Overlapping Centered Avatar */}
      <div className="relative -mt-16 sm:-mt-18 flex flex-col items-center z-10">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-white dark:bg-[#0A0E17] shadow-xl ring-1 ring-black/5 dark:ring-white/10 group-hover:ring-[#FF4500]/50 transition-all duration-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full rounded-full object-cover object-[50%_18%] group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>

      {/* Card Body Info */}
      <div className="px-6 sm:px-8 pt-4 pb-8 text-center flex flex-col items-center">
        {/* Name */}
        <h3 className="text-2xl sm:text-[28px] font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight group-hover:text-[#FF4500] transition-colors">
          {member.name}
        </h3>

        {/* Orange Accent Divider Line */}
        <div className="w-12 h-[2px] bg-[#FF4500] rounded-full mx-auto mt-3 mb-4 group-hover:w-16 transition-all duration-300" />

        {/* 3 to 4 lines description */}
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[290px] sm:max-w-[320px] mx-auto text-center font-normal">
          {member.description}
        </p>

        {/* Subtle view profile hint on hover */}
        <div className="mt-6 pt-4 border-t border-black/[0.05] dark:border-white/[0.05] w-full flex items-center justify-center gap-1 text-[11px] font-mono-tech text-neutral-400 group-hover:text-[#FF4500] transition-colors">
          <span>VIEW FULL PROFILE</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.div>
  )
}
