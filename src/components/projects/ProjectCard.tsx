import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Layers } from 'lucide-react'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
  onSelect: (project: Project) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      className="group relative rounded-2xl bg-neutral-50 dark:bg-[#090D14] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#FF4500]/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_12px_40px_rgba(255,69,0,0.12)] select-none"
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.06] pb-4 mb-6 text-xs font-mono-tech">
        <span className="text-[#FF4500] font-semibold tracking-wider">
          0{index + 1} // {project.category.toUpperCase()}
        </span>
        <span className="text-neutral-500">{project.year}</span>
      </div>

      {/* Visual Frame / Graphic Preview */}
      <div className="w-full h-48 sm:h-56 rounded-xl bg-white dark:bg-[#0F1522] border border-black/[0.06] dark:border-white/[0.06] p-5 flex flex-col justify-between mb-6 relative overflow-hidden group-hover:border-[#FF4500]/30 transition-colors shadow-inner">
        <div className="absolute inset-0 bg-tech-grid opacity-30 dark:opacity-20 pointer-events-none" />
        <div
          className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full blur-[50px] pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-50"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#FF4500]" />
            <span>PLATFORM CORE</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] text-[10px]">
            {project.status}
          </span>
        </div>

        {/* Center Graphic */}
        <div className="my-auto flex flex-col items-center text-center gap-1.5">
          <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
            {project.title}
          </span>
          <span className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm line-clamp-2">
            {project.shortDescription}
          </span>
        </div>

        {/* Bottom subtle bar */}
        <div className="flex items-center justify-between text-[10px] font-mono-tech text-neutral-500">
          <span>INTERACTIVE PREVIEW</span>
          <span className="text-neutral-400 group-hover:text-[#FF4500] transition-colors">CLICK TO EXPAND</span>
        </div>
      </div>

      {/* Project Information */}
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-[#FF4500] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-neutral-600 dark:text-neutral-400 group-hover:bg-[#FF4500] group-hover:text-white group-hover:border-[#FF4500] transition-all duration-300 flex-shrink-0 shadow-sm">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/[0.08] dark:border-white/[0.06]">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-[10px] font-mono-tech text-neutral-600 dark:text-neutral-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.03] text-[10px] font-mono-tech text-neutral-500">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
