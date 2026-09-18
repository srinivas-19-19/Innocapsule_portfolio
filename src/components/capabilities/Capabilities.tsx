import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { capabilities, type Capability } from '../../data/capabilities'
import { CapabilityRow } from './CapabilityRow'
import { CapabilityVisual } from './CapabilityVisual'

export const Capabilities: React.FC = () => {
  const [activeCapability, setActiveCapability] = useState<Capability>(capabilities[0])
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(capabilities[0].id)

  const handleToggleMobile = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id))
    const found = capabilities.find((c) => c.id === id)
    if (found) setActiveCapability(found)
  }

  return (
    <section
      id="capabilities"
      className="relative py-28 sm:py-36 border-t border-black/[0.06] dark:border-white/[0.06] bg-neutral-100/50 dark:bg-[#06080D] overflow-hidden transition-colors"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF4500]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span className="text-xs font-mono-tech text-[#FF4500] uppercase tracking-widest font-semibold">
              02 // CAPABILITIES
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight"
            >
              What We Build
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md font-normal leading-relaxed"
            >
              Comprehensive technical capabilities across artificial intelligence, modern web architecture, and digital engineering.
            </motion.p>
          </div>
        </div>

        {/* Desktop Interactive Layout (List + Sticky Visual Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Capability List */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/[0.08]">
            {capabilities.map((cap) => (
              <CapabilityRow
                key={cap.id}
                capability={cap}
                isActive={activeCapability.id === cap.id}
                isExpandedMobile={expandedMobileId === cap.id}
                onMouseEnter={() => setActiveCapability(cap)}
                onToggleMobile={() => handleToggleMobile(cap.id)}
              />
            ))}
          </div>

          {/* Right Column: Sticky Contextual Visual Preview (Desktop only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <CapabilityVisual activeCapability={activeCapability} />
          </div>
        </div>
      </div>
    </section>
  )
}
