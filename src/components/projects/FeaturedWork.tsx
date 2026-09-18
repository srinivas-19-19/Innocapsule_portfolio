import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, type Project } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 lg:py-36 border-t border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#070A0F] overflow-hidden transition-colors"
    >
      {/* Background subtle radial lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#FF4500]/[0.025] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span className="text-xs font-mono-tech text-[#FF4500] uppercase tracking-widest font-semibold">
              // 03 // SELECTED WORK
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight"
            >
              Selected Work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-lg font-normal leading-relaxed"
            >
              Production platforms, intelligent systems, and scalable digital architectures engineered for real-world impact.
            </motion.p>
          </div>
        </div>

        {/* Responsive 4-Project Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal / Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export const FeaturedWork = SelectedWork

