import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Layers, Cpu } from 'lucide-react'
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
            className="relative w-full max-w-3xl rounded-2xl bg-[#090D15] border border-white/[0.12] p-6 sm:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Top Close Button */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                <span>PROJECT SPECIFICATION // {project.id.toUpperCase()}</span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Category */}
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-xs font-mono-tech text-[#00F0FF] uppercase tracking-wider">
                {project.category}
              </span>
              <h3
                id="modal-project-title"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
              >
                {project.title}
              </h3>
            </div>

            {/* Main Visual Frame */}
            <div className="w-full h-52 sm:h-64 rounded-xl bg-[#0F1626] border border-white/[0.08] mb-6 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
              <div
                className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full blur-[60px] pointer-events-none"
                style={{ backgroundColor: `${project.accentColor}20` }}
              />

              <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-400">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00F0FF]" />
                  <span>ARCHITECTURE ENGINE</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-white/[0.06] text-white">
                  {project.status}
                </span>
              </div>

              <div className="my-auto flex flex-col items-center text-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {project.title}
                </span>
                <span className="text-xs text-neutral-400 max-w-md">
                  {project.shortDescription}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-500">
                <span>YEAR: {project.year}</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="flex flex-col gap-4 mb-8">
              <h4 className="text-xs font-mono-tech text-neutral-400 uppercase tracking-wider">
                Overview & Technical Architecture
              </h4>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-col gap-3 mb-8">
              <h4 className="text-xs font-mono-tech text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Core Technology Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono-tech text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-neutral-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Production Pipeline Ready</span>
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
