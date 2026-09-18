import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export const HeroContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse coordinates normalized [-0.5, 0.5]
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth buttery springs for 3D rotation
  const springConfig = { damping: 28, stiffness: 140 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [25, -25]), springConfig)
  const shadowScale = useSpring(useTransform(mouseY, [-0.5, 0.5], [0.95, 1.05]), springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = e.clientX / innerWidth - 0.5
      const y = e.clientY / innerHeight - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center text-center select-none w-full py-10 sm:py-16 perspective-[1200px]"
    >
      {/* 3D Floating Interactive Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center justify-center cursor-default group"
      >
        {/* Floating Levitation Container */}
        <motion.div
          animate={{ y: [-7, 7, -7] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative inline-block"
        >
          {/* Main 3D Extruded Title */}
          <h1 className="relative text-5xl min-[480px]:text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] font-black tracking-tighter uppercase font-display leading-none text-center select-none flex items-center justify-center">
            {/* INNO - 3D Architectural / Platinum Extrusion */}
            <span className="text-3d-inno transition-transform duration-300 inline-block drop-shadow-sm group-hover:scale-[1.01]">
              INNO
            </span>

            {/* CAPSULE - 3D High-Tech Flame Orange Extrusion */}
            <span className="text-3d-capsule transition-transform duration-300 inline-block drop-shadow-sm group-hover:scale-[1.01]">
              CAPSULE
            </span>

            {/* Shimmer / Gloss Light Sweep Overlay */}
            <span
              className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-20 dark:opacity-30 mix-blend-overlay"
              aria-hidden="true"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 animate-shimmer-sweep" />
            </span>
          </h1>
        </motion.div>

        {/* 3D Physical Floor / Ground Shadow System ("shadows under that") */}
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center mt-4 sm:mt-7 pointer-events-none select-none">
          {/* 1. Sharp Contact Occlusion Shadow (directly under letters) */}
          <motion.div
            style={{
              x: shadowX,
              scaleX: shadowScale,
            }}
            animate={{
              scale: [0.95, 1.05, 0.95],
              opacity: [0.75, 0.9, 0.75],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[82%] sm:w-[88%] h-3 sm:h-5 rounded-[100%] bg-black/45 dark:bg-black/90 blur-[3px] transform"
          />

          {/* 2. Soft Wide Ambient Floor Projection Shadow */}
          <motion.div
            style={{
              x: shadowX,
              scaleX: shadowScale,
            }}
            animate={{
              scale: [0.92, 1.06, 0.92],
              opacity: [0.55, 0.75, 0.55],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[90%] sm:w-[96%] h-8 sm:h-14 -mt-2 rounded-[100%] bg-gradient-to-r from-transparent via-black/35 dark:via-black/85 to-transparent blur-xl"
          />

          {/* 3. High-Tech Orange Radiosity / Ground Bounce Reflection (under CAPSULE) */}
          <motion.div
            style={{
              x: shadowX,
            }}
            animate={{
              opacity: [0.4, 0.65, 0.4],
              scale: [0.95, 1.08, 0.95],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[52%] h-8 sm:h-16 -mt-8 sm:-mt-12 ml-auto mr-[2%] rounded-[100%] bg-[#FF4500]/30 dark:bg-[#FF4500]/55 blur-2xl pointer-events-none"
          />
        </div>
      </motion.div>
    </div>
  )
}


