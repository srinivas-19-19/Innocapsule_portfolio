import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { TechnologyCategory } from '../../data/technology'
import { ChevronDown, Sparkles } from 'lucide-react'

interface TechnologyMobileListProps {
  categories: TechnologyCategory[]
}

export const TechnologyMobileList: React.FC<TechnologyMobileListProps> = ({
  categories,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>('ai')

  const toggleCategory = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="flex flex-col gap-3 w-full lg:hidden">
      {categories.map((cat) => {
        const isExpanded = expandedId === cat.id
        return (
          <div
            key={cat.id}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              isExpanded
                ? 'bg-orange-500/[0.04] dark:bg-white/[0.04] border-[#FF4500]/30 dark:border-white/[0.14] shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
                : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] hover:border-black/10 dark:hover:border-white/[0.1]'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleCategory(cat.id)}
              aria-expanded={isExpanded}
              aria-controls={`tech-content-${cat.id}`}
              className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4500]/60"
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={`font-mono-tech text-xs transition-colors font-bold ${
                    isExpanded ? 'text-[#FF4500]' : 'text-neutral-500'
                  }`}
                >
                  {cat.number}
                </span>
                <span
                  className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                    isExpanded ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  {cat.title}
                </span>
              </div>

              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  isExpanded
                    ? 'rotate-180 bg-[#FF4500]/15 text-[#FF4500]'
                    : 'bg-black/[0.04] dark:bg-white/[0.04] text-neutral-500 dark:text-neutral-400'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  id={`tech-content-${cat.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="px-5 pb-5 pt-1 border-t border-black/[0.06] dark:border-white/[0.04]"
                >
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-widest">
                      Production Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded bg-black/[0.04] dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {cat.metrics && (
                    <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.05] flex items-center justify-between text-[11px] font-mono-tech">
                      <span className="text-neutral-500">{cat.metrics.label}:</span>
                      <span className="text-[#FF4500] font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {cat.metrics.value}
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
