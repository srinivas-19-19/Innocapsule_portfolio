import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Cpu, Calendar, Layers } from 'lucide-react'
import type { Project } from '../../data/projects'
import { Button } from '../ui/Button'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#06070B]/80 backdrop-blur-xl"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-[#090D15] border border-black/[0.1] dark:border-white/[0.12] p-6 sm:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.3)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-5 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-neutral-500 dark:text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-[#FF4500]" />
                <span>PROJECT SPECIFICATION // {project.id.toUpperCase()}</span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4500]"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Category & Timeline Badge */}
            <div className="flex flex-col gap-2.5 mb-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs font-mono-tech text-[#FF4500] uppercase tracking-wider font-semibold">
                  {project.category}
                </span>

                {/* Timeline Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono-tech text-neutral-700 dark:text-neutral-300">
                  <Calendar className="w-3.5 h-3.5 text-[#FF4500]" />
                  <span>{project.timeline}</span>
                </div>
              </div>

              <h3
                id="modal-project-title"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight"
              >
                {project.title}
              </h3>
            </div>

            {/* Visual Header Frame */}
            <div className="w-full h-44 sm:h-52 rounded-xl bg-neutral-100 dark:bg-[#0F1626] border border-black/[0.08] dark:border-white/[0.08] mb-6 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
              <div
                className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full blur-[60px] pointer-events-none"
                style={{ backgroundColor: `${project.accentColor}25` }}
              />

              <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#FF4500]" />
                  <span>ARCHITECTURE ENGINE</span>
                </div>
                <span className="text-[11px] text-neutral-500">
                  TIMELINE: {project.timeline}
                </span>
              </div>

              <div className="my-auto flex flex-col items-center text-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-wide">
                  {project.title}
                </span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md">
                  {project.shortDescription}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-500">
                <span>INNOCAPSULE // VERIFIED SYSTEM</span>
                <span>ENGINEERED TO EVOLVE</span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="flex flex-col gap-3 mb-6">
              <h4 className="text-xs font-mono-tech text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                Overview & System Purpose
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Key Details Architectural Highlights */}
            {project.keyDetails && project.keyDetails.length > 0 && (
              <div className="flex flex-col gap-3 mb-6">
                <h4 className="text-xs font-mono-tech text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                  Key Engineering Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyDetails.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] text-xs text-neutral-700 dark:text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF4500] flex-shrink-0 mt-0.5" />
                      <span className="leading-normal">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Technologies */}
            <div className="flex flex-col gap-3 mb-8">
              <h4 className="text-xs font-mono-tech text-neutral-500 dark:text-neutral-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <Cpu className="w-3.5 h-3.5 text-[#FF4500]" />
                <span>Core Technology Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono-tech text-neutral-700 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/[0.08] dark:border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Architectural Specification Verified</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={onClose}
                  className="w-full sm:w-auto"
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  icon
                  href="#contact"
                  onClick={onClose}
                  className="w-full sm:w-auto"
                >
                  Discuss System
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

