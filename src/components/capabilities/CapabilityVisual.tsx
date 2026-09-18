import React from 'react'
import { motion } from 'framer-motion'
import type { Capability, StackLayerId } from '../../data/capabilities'

interface CapabilityVisualProps {
  activeCapability: Capability
}

interface StackLayer {
  id: StackLayerId
  number: string
  name: string
  components: string
}

const stackLayers: StackLayer[] = [
  {
    id: 'INTELLIGENCE',
    number: '04',
    name: 'INTELLIGENCE',
    components: 'AI / LLM / Agents / Vision',
  },
  {
    id: 'APPLICATION',
    number: '03',
    name: 'APPLICATION',
    components: 'Web / Mobile / Real-Time',
  },
  {
    id: 'FOUNDATION',
    number: '02',
    name: 'FOUNDATION',
    components: 'APIs / Databases / Auth / Infrastructure',
  },
  {
    id: 'DELIVERY',
    number: '01',
    name: 'DELIVERY',
    components: 'Testing / Deployment / Monitoring / Scaling',
  },
]

export const CapabilityVisual: React.FC<CapabilityVisualProps> = ({ activeCapability }) => {
  return (
    <div className="relative w-full rounded-2xl bg-white/90 dark:bg-[#080C14]/90 border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-sm select-none transition-colors">
      {/* Background subtle technical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none rounded-2xl" />

      {/* Top Status Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-4 mb-5 text-[10px] font-mono-tech">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
          <span className="text-neutral-900 dark:text-white font-bold tracking-wider">
            ENGINEERING STACK
          </span>
        </div>
        <span className="text-neutral-400 dark:text-neutral-500">
          ARCHITECTURE MODEL
        </span>
      </div>

      {/* Vertical Connected Stack Layers */}
      <div className="relative z-10 flex flex-col gap-0">
        {stackLayers.map((layer, index) => {
          const isHighlighted = activeCapability.highlightLayers.includes(layer.id)

          return (
            <React.Fragment key={layer.id}>
              {/* Layer Card */}
              <motion.div
                animate={{
                  scale: isHighlighted ? 1.01 : 1,
                }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-xl p-4 sm:p-4.5 transition-all duration-200 border ${
                  isHighlighted
                    ? 'bg-orange-500/[0.05] dark:bg-orange-500/[0.07] border-[#FF4500]/40 dark:border-[#FF4500]/50 shadow-sm'
                    : 'bg-black/[0.015] dark:bg-white/[0.015] border-black/[0.06] dark:border-white/[0.06]'
                }`}
              >
                {/* Active Left Indicator Pip */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-[2.5px] rounded-r-full transition-opacity duration-200 ${
                    isHighlighted ? 'bg-[#FF4500] opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`text-[11px] font-mono-tech font-semibold transition-colors ${
                        isHighlighted
                          ? 'text-[#FF4500]'
                          : 'text-neutral-400 dark:text-neutral-500'
                      }`}
                    >
                      {layer.number}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-mono-tech font-bold tracking-wider transition-colors ${
                        isHighlighted
                          ? 'text-neutral-900 dark:text-white'
                          : 'text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      {layer.name}
                    </span>
                  </div>

                  {isHighlighted && (
                    <span className="text-[9px] font-mono-tech text-[#FF4500] font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/20">
                      ACTIVE
                    </span>
                  )}
                </div>

                <div className="mt-1.5 pl-6 sm:pl-7">
                  <span
                    className={`text-xs font-mono-tech transition-colors ${
                      isHighlighted
                        ? 'text-neutral-800 dark:text-neutral-200'
                        : 'text-neutral-500 dark:text-neutral-400'
                    }`}
                  >
                    {layer.components}
                  </span>
                </div>
              </motion.div>

              {/* Vertical Connector Line (between layers) */}
              {index < stackLayers.length - 1 && (
                <div className="w-full flex justify-center py-1">
                  <div
                    className={`w-[1px] h-3.5 transition-colors duration-200 ${
                      isHighlighted &&
                      activeCapability.highlightLayers.includes(stackLayers[index + 1].id)
                        ? 'bg-[#FF4500]/50'
                        : 'bg-black/[0.08] dark:bg-white/[0.08]'
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* Bottom Technical Bar */}
      <div className="relative z-10 pt-4 mt-5 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono-tech text-neutral-400 dark:text-neutral-500">
        <span>TOPOLOGY: VERTICAL COUPLING</span>
        <span className="text-neutral-500 dark:text-neutral-400">DISCIPLINED SYSTEMS</span>
      </div>
    </div>
  )
}

