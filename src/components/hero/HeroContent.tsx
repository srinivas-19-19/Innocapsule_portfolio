import React from 'react'
import { motion } from 'framer-motion'

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none w-full py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex justify-center items-center"
      >
        <h1 className="text-4xl min-[400px]:text-5xl min-[520px]:text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] font-black tracking-tight font-display text-center select-none uppercase leading-none">
          <span className="text-[#111827] dark:text-[#F9FAFB] drop-shadow-[0_4px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_4px_30px_rgba(255,255,255,0.05)]">
            INNO
          </span>
          <span className="bg-gradient-to-r from-[#FF4500] via-[#FF6A00] to-[#FF8C00] bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(255,69,0,0.45)]">
            CAPSULE
          </span>
        </h1>
      </motion.div>
    </div>
  )
}

