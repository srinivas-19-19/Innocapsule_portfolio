import React from 'react'
import { motion } from 'framer-motion'

interface BrandMarkProps {
  className?: string
  size?: number // height in px
  withText?: boolean
  animate?: boolean
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  className = '',
  size = 28,
  withText = false,
  animate = true,
}) => {
  // Capsule aspect ratio: width is ~2.35 * height
  const emblemWidth = Math.round(size * 2.35)

  const Emblem = (
    <svg
      width={emblemWidth}
      height={size}
      viewBox="0 0 108 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible flex-shrink-0"
      aria-hidden="true"
    >
      <defs>
        {/* Left Capsule Deep Blue / Cobalt Gradient */}
        <linearGradient id="brandBlueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0B1A54" />
          <stop offset="50%" stopColor="#103385" />
          <stop offset="100%" stopColor="#1852B8" />
        </linearGradient>

        {/* Right Capsule Cyan/Teal Gradient */}
        <linearGradient id="brandCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="60%" stopColor="#00D0DF" />
          <stop offset="100%" stopColor="#009BAA" />
        </linearGradient>

        {/* Center Play Triangle Gradient */}
        <linearGradient id="brandArrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#164BA8" />
          <stop offset="100%" stopColor="#0E327D" />
        </linearGradient>

        {/* Subtle Ambient Glow */}
        <filter id="brandGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient subtle back-glow on right circuit half */}
      <circle cx="80" cy="23" r="18" fill="#00F0FF" fillOpacity="0.08" />

      {/* LEFT HALF: Solid Cobalt Blue Capsule Cap */}
      <path
        d="M 53,2 L 23,2 A 21,21 0 0,0 23,44 L 53,44 Z"
        fill="url(#brandBlueGrad)"
      />

      {/* Curved Gloss / Reflection Highlight on Top-Left Rim */}
      <path
        d="M 12,16 C 15,9 22,6 34,6"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.95"
      />

      {/* RIGHT HALF: Cyan/Teal Circuit Frame */}
      <path
        d="M 53,3.2 L 83,3.2 A 19.8,19.8 0 0,1 83,42.8 L 53,42.8"
        stroke="url(#brandCyanGrad)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="square"
      />

      {/* CIRCUIT TRACES & NODES */}
      {/* Trace 1 (Top) */}
      <path
        d="M 53,11 L 78,11 L 84,7"
        stroke="url(#brandCyanGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Node 1 (Top) */}
      <circle
        cx="87.5"
        cy="7"
        r="2.2"
        stroke="url(#brandCyanGrad)"
        strokeWidth="1.4"
        fill="#06070B"
      />

      {/* Trace 2 (Upper Mid) */}
      <path
        d="M 53,18 L 65,18 L 70,14"
        stroke="url(#brandCyanGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Node 2 (Upper Mid) */}
      <circle
        cx="73"
        cy="14"
        r="2"
        stroke="url(#brandCyanGrad)"
        strokeWidth="1.4"
        fill="#06070B"
      />

      {/* Center Play/Arrow Triangle */}
      <motion.polygon
        points="78.5,17 87.5,23 78.5,29"
        fill="url(#brandArrowGrad)"
        stroke="url(#brandCyanGrad)"
        strokeWidth="0.9"
        strokeLinejoin="round"
        animate={
          animate
            ? {
                strokeOpacity: [0.8, 1, 0.8],
                scale: [1, 1.04, 1],
              }
            : undefined
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Trace 3 (Lower Mid) */}
      <path
        d="M 53,28 L 65,28 L 70,32"
        stroke="url(#brandCyanGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Node 3 (Lower Mid) */}
      <circle
        cx="73"
        cy="32"
        r="2"
        stroke="url(#brandCyanGrad)"
        strokeWidth="1.4"
        fill="#06070B"
      />

      {/* Trace 4 (Bottom) */}
      <path
        d="M 53,35 L 78,35 L 84,39"
        stroke="url(#brandCyanGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Node 4 (Bottom) */}
      <circle
        cx="87.5"
        cy="39"
        r="2.2"
        stroke="url(#brandCyanGrad)"
        strokeWidth="1.4"
        fill="#06070B"
      />
    </svg>
  )

  if (!withText) {
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
        {Emblem}
      </div>
    )
  }

  // Calculate typography scales proportional to size
  const innoFontSize = Math.round(size * 0.65)
  const capsuleFontSize = Math.round(size * 0.42)

  return (
    <div className={`relative inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {Emblem}
      <div className="flex flex-col leading-[0.9] text-left">
        <span
          className="font-extrabold text-white tracking-[0.04em] font-sans"
          style={{ fontSize: `${innoFontSize}px` }}
        >
          INNO
        </span>
        <span
          className="font-normal text-[#94A3B8] tracking-[0.18em] font-sans mt-[2px]"
          style={{ fontSize: `${capsuleFontSize}px` }}
        >
          CAPSULE
        </span>
      </div>
    </div>
  )
}
