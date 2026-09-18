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
  const emblemWidth = Math.round(size * 2.2)

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
        {/* Left Capsule Deep Charcoal / Dark Slate Gradient */}
        <linearGradient id="brandCharcoalGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E2430" />
          <stop offset="50%" stopColor="#2D3748" />
          <stop offset="100%" stopColor="#3E4C63" />
        </linearGradient>

        {/* Right Capsule Vibrant High-Tech Orange Gradient */}
        <linearGradient id="brandOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#FF4500" />
          <stop offset="100%" stopColor="#D83600" />
        </linearGradient>

        {/* Center Play Triangle Gradient */}
        <linearGradient id="brandArrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF5722" />
          <stop offset="100%" stopColor="#E64A19" />
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
      <circle cx="80" cy="23" r="18" fill="#FF4500" fillOpacity="0.12" />

      {/* LEFT HALF: Solid Charcoal Capsule Cap */}
      <path
        d="M 53,2 L 23,2 A 21,21 0 0,0 23,44 L 53,44 Z"
        fill="url(#brandCharcoalGrad)"
      />

      {/* Curved Gloss / Reflection Highlight on Top-Left Rim */}
      <path
        d="M 12,16 C 15,9 22,6 34,6"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* RIGHT HALF: Orange Circuit Frame */}
      <path
        d="M 53,3.2 L 83,3.2 A 19.8,19.8 0 0,1 83,42.8 L 53,42.8"
        stroke="url(#brandOrangeGrad)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="square"
      />

      {/* CIRCUIT TRACES & NODES */}
      {/* Trace 1 (Top) */}
      <path
        d="M 53,11 L 78,11 L 84,7"
        stroke="url(#brandOrangeGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Node 1 (Top) */}
      <circle
        cx="87.5"
        cy="7"
        r="2.2"
        stroke="url(#brandOrangeGrad)"
        strokeWidth="1.4"
        fill="#111827"
      />

      {/* Trace 2 (Upper Mid) */}
      <path
        d="M 53,18 L 65,18 L 70,14"
        stroke="url(#brandOrangeGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Node 2 (Upper Mid) */}
      <circle
        cx="73"
        cy="14"
        r="2"
        stroke="url(#brandOrangeGrad)"
        strokeWidth="1.4"
        fill="#111827"
      />

      {/* Center Play/Arrow Triangle */}
      <motion.polygon
        points="78.5,17 87.5,23 78.5,29"
        fill="url(#brandArrowGrad)"
        stroke="url(#brandOrangeGrad)"
        strokeWidth="0.9"
        strokeLinejoin="round"
        animate={
          animate
            ? {
                strokeOpacity: [0.85, 1, 0.85],
                scale: [1, 1.05, 1],
              }
            : undefined
        }
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Trace 3 (Lower Mid) */}
      <path
        d="M 53,28 L 65,28 L 70,32"
        stroke="url(#brandOrangeGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Node 3 (Lower Mid) */}
      <circle
        cx="73"
        cy="32"
        r="2"
        stroke="url(#brandOrangeGrad)"
        strokeWidth="1.4"
        fill="#111827"
      />

      {/* Trace 4 (Bottom) */}
      <path
        d="M 53,35 L 78,35 L 84,39"
        stroke="url(#brandOrangeGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Node 4 (Bottom) */}
      <circle
        cx="87.5"
        cy="39"
        r="2.2"
        stroke="url(#brandOrangeGrad)"
        strokeWidth="1.4"
        fill="#111827"
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

  const fontSize = Math.round(size * 0.76)

  return (
    <div className={`relative inline-flex items-center gap-2 select-none ${className}`}>
      {Emblem}
      <div
        className="font-bold tracking-tight font-sans flex items-baseline leading-none"
        style={{ fontSize: `${fontSize}px` }}
      >
        <span className="text-[#111827] dark:text-white transition-colors">Inno</span>
        <span className="text-[#FF4500]">Capsule</span>
      </div>
    </div>
  )
}
