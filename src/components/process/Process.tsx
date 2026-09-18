import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { processSteps } from '../../data/process'
import { ProcessStep } from './ProcessStep'
import { ProcessVisual } from './ProcessVisual'

export const Process: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id="process"
      className="relative py-28 sm:py-36 border-t border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#06070B] overflow-hidden transition-colors"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[32rem] h-[32rem] bg-[#FF4500]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Eyebrow & Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span className="text-xs font-mono-tech text-[#FF4500] uppercase tracking-widest font-semibold">
              04 // METHODOLOGY & DELIVERY
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Our Process
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mt-2 font-medium">
                From idea to intelligent product.
              </p>
            </div>

            <p className="text-xs sm:text-sm font-mono-tech text-neutral-500 max-w-sm">
              // REPEATABLE METHODOLOGY
              <br />
              Deterministic execution eliminating architectural drift between vision and deployment.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Process Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Process Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            {processSteps.map((step, idx) => (
              <ProcessStep
                key={step.id}
                step={step}
                isActive={activeIndex === idx}
                isPassed={idx < activeIndex}
                isLast={idx === processSteps.length - 1}
                onSelect={() => setActiveIndex(idx)}
              />
            ))}
          </div>

          {/* Right Column: Sticky Contextual Pipeline Visual */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <ProcessVisual
              activeStep={processSteps[activeIndex]}
              activeIndex={activeIndex}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
