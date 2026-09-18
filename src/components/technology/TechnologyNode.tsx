import React from 'react'
import type { TechnologyCategory } from '../../data/technology'

interface TechnologyNodeProps {
  category: TechnologyCategory
  x: number
  y: number
  isActive: boolean
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}

export const TechnologyNode: React.FC<TechnologyNodeProps> = ({
  category,
  x,
  y,
  isActive,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const isHighlighted = isActive || isHovered

  return (
    <g
      transform={`translate(${x}, ${y})`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="cursor-pointer select-none focus:outline-none"
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      aria-label={`Inspect ${category.title} technology stack`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
    >
      {/* Outer halo on active */}
      {isHighlighted && (
        <circle
          r="64"
          fill="none"
          stroke="#FF4500"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.35"
          className="animate-[spin_16s_linear_infinite]"
        />
      )}

      {/* Node Backing Pill */}
      <rect
        x="-95"
        y="-32"
        width="190"
        height="64"
        rx="12"
        fill={isHighlighted ? '#1E2530' : '#0F1522'}
        stroke={isHighlighted ? '#FF4500' : 'rgba(255, 255, 255, 0.12)'}
        strokeWidth={isHighlighted ? '1.5' : '1'}
        className="transition-colors duration-300"
        filter="drop-shadow(0 4px 16px rgba(0,0,0,0.5))"
      />

      {/* Connection Anchor Pin */}
      <circle
        cx="0"
        cy={y < 260 ? 32 : -32}
        r="3.5"
        fill={isHighlighted ? '#FF4500' : '#64748B'}
        stroke="#06070B"
        strokeWidth="1.5"
      />

      {/* Status Dot */}
      <circle
        cx="-76"
        cy="-12"
        r="2.5"
        fill={isHighlighted ? '#FF4500' : '#64748B'}
      />

      {/* Category Number */}
      <text
        x="-66"
        y="-9"
        fill={isHighlighted ? '#FF4500' : '#94A3B8'}
        fontSize="9"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        DOMAIN // {category.number}
      </text>

      {/* Category Short Title */}
      <text
        x="-76"
        y="12"
        fill={isHighlighted ? '#FFFFFF' : '#CBD5E1'}
        fontSize="12"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="700"
        letterSpacing="-0.01em"
      >
        {category.title.length > 20
          ? `${category.title.slice(0, 19)}…`
          : category.title}
      </text>
    </g>
  )
}
