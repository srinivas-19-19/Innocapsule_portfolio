import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, CheckCircle2 } from 'lucide-react'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
  onSelect: (project: Project) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      className="group relative rounded-2xl bg-white dark:bg-[#090D15] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#FF4500]/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_16px_44px_rgba(255,69,0,0.12)] hover:-translate-y-1 select-none overflow-hidden"
    >
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 dark:opacity-20 pointer-events-none rounded-2xl" />

      {/* Top Ambient Glow on Hover */}
      <div
        className="absolute -right-16 -top-16 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-40 dark:group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Top Meta Bar */}
          <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-4 mb-5 text-xs font-mono-tech">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
              <span className="text-[#FF4500] font-bold tracking-wider uppercase">
                // 0{index + 1} // {project.category}
              </span>
            </div>

            {/* Timeline Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.035] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono-tech text-neutral-600 dark:text-neutral-400">
              <Calendar className="w-3 h-3 text-[#FF4500]" />
              <span>{project.timeline}</span>
            </div>
          </div>

          {/* Title & Action Arrow */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight group-hover:text-[#FF4500] transition-colors">
              {project.title}
            </h3>

            <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.08] text-neutral-500 dark:text-neutral-400 group-hover:bg-[#FF4500] group-hover:text-white group-hover:border-[#FF4500] group-hover:shadow-[0_4px_16px_rgba(255,69,0,0.35)] transition-all duration-300 flex-shrink-0">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-neutral-600 dark:text-neutral-300/90 leading-relaxed font-normal mb-5">
            {project.description}
          </p>

          {/* Key Details Architectural Bullets */}
          {project.keyDetails && project.keyDetails.length > 0 && (
            <div className="flex flex-col gap-2 py-3.5 border-y border-black/[0.06] dark:border-white/[0.06] mb-5">
              {project.keyDetails.slice(0, 3).map((detail) => (
                <div
                  key={detail}
                  className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300 font-sans"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4500] flex-shrink-0" />
                  <span className="line-clamp-1">{detail}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech Stack Pills & Expand Trigger */}
        <div className="pt-2 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.08] text-[11px] font-mono-tech text-neutral-700 dark:text-neutral-300 group-hover:border-black/15 dark:group-hover:border-white/15 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Interactive Bar */}
          <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono-tech text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
            <span>SPECIFICATION DETAILS</span>
            <span className="text-[#FF4500] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              VIEW SPECS →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

