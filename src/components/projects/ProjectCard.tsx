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
      className="group relative rounded-2xl bg-[#090D14] border border-white/[0.08] hover:border-[#00F0FF]/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_12px_40px_rgba(0,240,255,0.08)] select-none"
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6 text-xs font-mono-tech">
        <span className="text-[#00F0FF] font-semibold tracking-wider">
          0{index + 1} // {project.category.toUpperCase()}
        </span>
        <span className="text-neutral-500">{project.year}</span>
      </div>

      {/* Visual Frame / Graphic Preview */}
      <div className="w-full h-48 sm:h-56 rounded-xl bg-[#0F1522] border border-white/[0.06] p-5 flex flex-col justify-between mb-6 relative overflow-hidden group-hover:border-white/20 transition-colors">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div
          className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full blur-[50px] pointer-events-none transition-opacity duration-300 opacity-30 group-hover:opacity-60"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>PLATFORM CORE</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px]">
            {project.status}
          </span>
        </div>

        {/* Center Graphic */}
        <div className="my-auto flex flex-col items-center text-center gap-1.5">
          <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
            {project.title}
          </span>
          <span className="text-xs text-neutral-400 max-w-sm line-clamp-2">
            {project.shortDescription}
          </span>
        </div>

        {/* Bottom subtle bar */}
        <div className="flex items-center justify-between text-[10px] font-mono-tech text-neutral-500">
          <span>INTERACTIVE PREVIEW</span>
          <span className="text-neutral-400 group-hover:text-[#00F0FF] transition-colors">CLICK TO EXPAND</span>
        </div>
      </div>

      {/* Project Information */}
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-400 group-hover:bg-[#00F0FF] group-hover:text-[#06070B] group-hover:border-[#00F0FF] transition-all duration-300 flex-shrink-0">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono-tech text-neutral-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] font-mono-tech text-neutral-500">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
