import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { technologyCategories } from '../../data/technology'
import { TechnologyNode } from './TechnologyNode'
import { TechnologyMobileList } from './TechnologyMobileList'
import { Sparkles, Terminal, Layers } from 'lucide-react'

export const TechnologyEcosystem: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('ai')
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const activeCategory =
    technologyCategories.find((c) => c.id === (hoveredId || activeId)) ||
    technologyCategories[0]

  // Spatial coordinates for desktop SVG network (viewBox 800 x 540)
  const nodePositions: Record<string, { x: number; y: number }> = {
    ai: { x: 400, y: 75 },
    web: { x: 670, y: 165 },
    mobile: { x: 670, y: 375 },
    backend: { x: 400, y: 465 },
    data: { x: 130, y: 375 },
    interactive: { x: 130, y: 165 },
  }

  const centerPoint = { x: 400, y: 270 }

  return (
    <section
      id="technology"
      className="relative py-28 sm:py-36 border-t border-white/[0.06] bg-[#070A0F] overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00F0FF]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span className="text-xs font-mono-tech text-[#00F0FF] uppercase tracking-widest font-semibold">
              05 // SYSTEM ARCHITECTURE
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
                Technology Ecosystem
              </h2>
              <p className="text-lg sm:text-xl text-neutral-400 mt-2 font-medium">
                The systems behind the experience.
              </p>
            </div>

            <p className="text-xs sm:text-sm font-mono-tech text-neutral-500 max-w-sm">
              // CONNECTED PRODUCTION FABRIC
              <br />
              Zero monolithic friction. Every layer works as an orchestrated, modular subsystem.
            </p>
          </motion.div>
        </div>

        {/* Mobile View: Accessible Accordion List */}
        <TechnologyMobileList categories={technologyCategories} />

        {/* Desktop View: Interactive Connected Architecture Network */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          {/* Left: SVG Architecture Network Diagram (7 Cols) */}
          <div className="col-span-7 relative rounded-2xl bg-[#090D15]/80 border border-white/[0.08] p-4 backdrop-blur-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

            {/* Micro Header in Canvas */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] text-[10px] font-mono-tech text-neutral-500">
              <span className="text-neutral-400 flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-[#00F0FF]" />
                TOPOLOGY // MULTI-TIER SYSTEM MESH
              </span>
              <span>INTERACTIVE // HOVER NODE TO INSPECT</span>
            </div>

            <svg
              viewBox="0 0 800 540"
              className="w-full h-auto select-none"
              aria-label="Interactive technology ecosystem diagram"
            >
              <defs>
                <linearGradient id="busGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.1" />
                </linearGradient>

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Perimeter Orbit Rings */}
              <circle
                cx={centerPoint.x}
                cy={centerPoint.y}
                r="195"
                fill="none"
                stroke="rgba(255, 255, 255, 0.04)"
                strokeWidth="1"
                strokeDasharray="6 6"
              />

              {/* Bus connection lines from center to each node */}
              {technologyCategories.map((cat) => {
                const pos = nodePositions[cat.id]
                if (!pos) return null
                const isLineActive = activeCategory.id === cat.id

                return (
                  <g key={`line-${cat.id}`}>
                    {/* Background faint line */}
                    <line
                      x1={centerPoint.x}
                      y1={centerPoint.y}
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isLineActive ? '#00F0FF' : 'rgba(255, 255, 255, 0.08)'}
                      strokeWidth={isLineActive ? 2 : 1}
                      strokeDasharray={isLineActive ? 'none' : '4 4'}
                      opacity={isLineActive ? 1 : 0.6}
                      className="transition-colors duration-300"
                    />

                    {/* Animated pulse dot along the active path */}
                    {isLineActive && (
                      <circle
                        r="3.5"
                        fill="#00F0FF"
                        filter="url(#glow)"
                        className="animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"
                      >
                        <animateMotion
                          path={`M ${centerPoint.x} ${centerPoint.y} L ${pos.x} ${pos.y}`}
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                )
              })}

              {/* Center Node: INNOCAPSULE CORE ARCHITECTURE */}
              <g transform={`translate(${centerPoint.x}, ${centerPoint.y})`}>
                <circle
                  r="52"
                  fill="#0B111C"
                  stroke="rgba(0, 240, 255, 0.4)"
                  strokeWidth="1.5"
                  className="transition-colors"
                />
                <circle
                  r="42"
                  fill="rgba(0, 240, 255, 0.04)"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                />
                <circle
                  r="6"
                  fill="#00F0FF"
                  filter="url(#glow)"
                  className="animate-pulse"
                />
                <text
                  textAnchor="middle"
                  y="-14"
                  fill="#64748B"
                  fontSize="8"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="600"
                  letterSpacing="0.1em"
                >
                  ENGINEERING
                </text>
                <text
                  textAnchor="middle"
                  y="2"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontWeight="800"
                  letterSpacing="0.08em"
                >
                  INNOCAPSULE
                </text>
                <text
                  textAnchor="middle"
                  y="16"
                  fill="#00F0FF"
                  fontSize="7.5"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="600"
                  letterSpacing="0.12em"
                >
                  SYSTEM CORE
                </text>
              </g>

              {/* Satellite Category Nodes */}
              {technologyCategories.map((cat) => {
                const pos = nodePositions[cat.id]
                if (!pos) return null
                return (
                  <TechnologyNode
                    key={cat.id}
                    category={cat}
                    x={pos.x}
                    y={pos.y}
                    isActive={activeId === cat.id}
                    isHovered={hoveredId === cat.id}
                    onMouseEnter={() => setHoveredId(cat.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setActiveId(cat.id)}
                  />
                )
              })}
            </svg>
          </div>

          {/* Right: Detailed Inspector Panel for Selected Category (5 Cols) */}
          <div className="col-span-5 flex flex-col gap-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-[#090D15]/90 border border-white/[0.1] p-6 sm:p-7 backdrop-blur-md flex flex-col gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                {/* Header with Domain Index */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                    <span className="text-xs font-mono-tech text-[#00F0FF] uppercase tracking-widest font-semibold">
                      DOMAIN {activeCategory.number}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-tech px-2.5 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/[0.08]">
                    VERIFIED STACK
                  </span>
                </div>

                {/* Title and Narrative */}
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    {activeCategory.title}
                  </h3>
                  <p className="text-sm text-neutral-300 mt-2.5 leading-relaxed">
                    {activeCategory.description}
                  </p>
                </div>

                {/* Production Technologies List */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-mono-tech text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#00F0FF]" />
                    Production Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance / Contract Metric */}
                {activeCategory.metrics && (
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono-tech">
                    <span className="text-neutral-500">
                      {activeCategory.metrics.label}:
                    </span>
                    <span className="text-[#00F0FF] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {activeCategory.metrics.value}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Quick Domain Selector Tabs */}
            <div className="grid grid-cols-3 gap-2">
              {technologyCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className={`p-2.5 rounded-xl text-left border transition-all duration-200 text-xs font-mono-tech focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]/50 ${
                    activeId === c.id
                      ? 'bg-white/[0.06] border-[#00F0FF]/40 text-white shadow-[0_0_12px_rgba(0,240,255,0.15)]'
                      : 'bg-white/[0.02] border-white/[0.06] text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="text-[#00F0FF] block text-[10px]">
                    {c.number}
                  </span>
                  <span className="font-semibold truncate block mt-0.5">
                    {c.title.split('&')[0].trim()}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
