import React, { useEffect, useRef, useState } from 'react'

interface TechBadge {
  id: string
  name: string
  track: 'inner' | 'outer'
  initialAngle: number // in radians
  connectsTo?: string // id of other badge
}

const TECH_BADGES: TechBadge[] = [
  // Inner Track (tilt: -13deg) - 4 evenly spaced nodes
  { id: 'react', name: 'React', track: 'inner', initialAngle: 0, connectsTo: 'nextjs' },
  { id: 'typescript', name: 'TypeScript', track: 'inner', initialAngle: Math.PI * 0.5 },
  { id: 'python', name: 'Python', track: 'inner', initialAngle: Math.PI, connectsTo: 'aiml' },
  { id: 'fastapi', name: 'FastAPI', track: 'inner', initialAngle: Math.PI * 1.5 },

  // Outer Track (tilt: +14deg) - 4 offset evenly spaced nodes
  { id: 'flutter', name: 'Flutter', track: 'outer', initialAngle: Math.PI * 0.25 },
  { id: 'aiml', name: 'AI / ML', track: 'outer', initialAngle: Math.PI * 0.75, connectsTo: 'python' },
  { id: 'nextjs', name: 'Next.js', track: 'outer', initialAngle: Math.PI * 1.25, connectsTo: 'react' },
  { id: 'cloud', name: 'Cloud & DB', track: 'outer', initialAngle: Math.PI * 1.75 },
]

export const TechOrbitals: React.FC = () => {
  const isHoveredRef = useRef(false)
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null)

  // Dynamic scale based on viewport width
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 480) setScale(0.42)
      else if (w < 640) setScale(0.55)
      else if (w < 768) setScale(0.7)
      else if (w < 1024) setScale(0.85)
      else if (w < 1280) setScale(0.96)
      else setScale(1.06)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animation refs for 60fps GPU performance (NO React re-renders during orbit)
  const angleInnerRef = useRef(0)
  const angleOuterRef = useRef(0)
  const badgeRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const linePythonAimlRef = useRef<SVGLineElement>(null)
  const nodePythonAimlRef = useRef<SVGCircleElement>(null)
  const lineReactNextRef = useRef<SVGLineElement>(null)
  const nodeReactNextRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    let animationFrameId: number
    let lastTime = performance.now()

    // Ellipse Radii in pixels (scaled)
    const rInnerX = 490 * scale
    const rInnerY = 175 * scale
    const tiltInner = -13 * (Math.PI / 180)

    const rOuterX = 640 * scale
    const rOuterY = 235 * scale
    const tiltOuter = 14 * (Math.PI / 180)

    const loop = (time: number) => {
      const delta = (time - lastTime) / 1000
      lastTime = time

      // Advance angles if not paused by hover
      if (!isHoveredRef.current) {
        // Inner track: ~46s per revolution
        angleInnerRef.current += (delta * (Math.PI * 2)) / 46
        // Outer track: ~62s per revolution (slightly slower, organic depth)
        angleOuterRef.current += (delta * (Math.PI * 2)) / 62
      }

      const currentPos: Record<string, { x: number; y: number }> = {}

      TECH_BADGES.forEach((badge) => {
        const isInner = badge.track === 'inner'
        const rx = isInner ? rInnerX : rOuterX
        const ry = isInner ? rInnerY : rOuterY
        const tilt = isInner ? tiltInner : tiltOuter
        const baseAngle = isInner ? angleInnerRef.current : angleOuterRef.current

        const theta = baseAngle + badge.initialAngle

        // Elliptical coordinates
        const unrotatedX = rx * Math.cos(theta)
        const unrotatedY = ry * Math.sin(theta)

        // Rotated by tilt angle
        const x = unrotatedX * Math.cos(tilt) - unrotatedY * Math.sin(tilt)
        const y = unrotatedX * Math.sin(tilt) + unrotatedY * Math.cos(tilt)

        // Depth projection based on vertical orientation (-1: furthest back, +1: closest front)
        const depth = Math.sin(theta)
        const depthNorm = (depth + 1) / 2 // 0 to 1

        const scaleFactor = 0.82 + 0.22 * depthNorm
        const opacityFactor = 0.42 + 0.52 * depthNorm
        // Keep z-index lower than main title (title is z-20) so badges never obscure INNOCAPSULE
        const zIndex = depth > 0 ? 12 : 4

        const el = badgeRefs.current[badge.id]
        if (el) {
          el.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${scaleFactor})`
          el.style.opacity = `${opacityFactor}`
          el.style.zIndex = `${zIndex}`
        }

        currentPos[badge.id] = { x, y }
      })

      // Update connecting line: Python <-> AI/ML
      if (linePythonAimlRef.current && currentPos['python'] && currentPos['aiml']) {
        const p1 = currentPos['python']
        const p2 = currentPos['aiml']
        linePythonAimlRef.current.setAttribute('x1', `${p1.x}`)
        linePythonAimlRef.current.setAttribute('y1', `${p1.y}`)
        linePythonAimlRef.current.setAttribute('x2', `${p2.x}`)
        linePythonAimlRef.current.setAttribute('y2', `${p2.y}`)
        if (nodePythonAimlRef.current) {
          nodePythonAimlRef.current.setAttribute('cx', `${(p1.x + p2.x) / 2}`)
          nodePythonAimlRef.current.setAttribute('cy', `${(p1.y + p2.y) / 2}`)
        }
      }

      // Update connecting line: React <-> Next.js
      if (lineReactNextRef.current && currentPos['react'] && currentPos['nextjs']) {
        const p1 = currentPos['react']
        const p2 = currentPos['nextjs']
        lineReactNextRef.current.setAttribute('x1', `${p1.x}`)
        lineReactNextRef.current.setAttribute('y1', `${p1.y}`)
        lineReactNextRef.current.setAttribute('x2', `${p2.x}`)
        lineReactNextRef.current.setAttribute('y2', `${p2.y}`)
        if (nodeReactNextRef.current) {
          nodeReactNextRef.current.setAttribute('cx', `${(p1.x + p2.x) / 2}`)
          nodeReactNextRef.current.setAttribute('cy', `${(p1.y + p2.y) / 2}`)
        }
      }

      animationFrameId = requestAnimationFrame(loop)
    }

    animationFrameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animationFrameId)
  }, [scale])

  // Radii for SVG dashed orbital tracks
  const rInnerX = 490 * scale
  const rInnerY = 175 * scale
  const rOuterX = 640 * scale
  const rOuterY = 235 * scale

  return (
    <div
      className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible select-none"
      aria-hidden="true"
    >
      {/* Zero-size Center Origin Anchor: perfectly centered behind/around INNOCAPSULE */}
      <div className="relative w-0 h-0 flex items-center justify-center pointer-events-none">
        {/* SVG Canvas for Elliptical Orbital Tracks and Dynamic Telemetry Lines */}
        <svg
          className="absolute overflow-visible pointer-events-none"
          style={{ width: '1px', height: '1px', left: 0, top: 0 }}
        >
          {/* 1. Inner Orbital Track (Dashed Faint Ellipse tilted -13deg) */}
          <g transform="rotate(-13)">
            <ellipse
              cx="0"
              cy="0"
              rx={rInnerX}
              ry={rInnerY}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 6"
              className="text-black/[0.09] dark:text-white/[0.08] transition-colors"
            />
          </g>

          {/* 2. Outer Orbital Track (Dashed Faint Ellipse tilted +14deg) */}
          <g transform="rotate(14)">
            <ellipse
              cx="0"
              cy="0"
              rx={rOuterX}
              ry={rOuterY}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 7"
              className="text-black/[0.07] dark:text-white/[0.07] transition-colors"
            />
          </g>

          {/* 3. Connecting Line: Python <-> AI / ML */}
          <g>
            <line
              ref={linePythonAimlRef}
              x1="0"
              y1="0"
              x2="0"
              y2="0"
              stroke={
                hoveredBadge === 'python' || hoveredBadge === 'aiml'
                  ? 'rgba(255, 69, 0, 0.75)'
                  : 'rgba(255, 69, 0, 0.22)'
              }
              strokeWidth={hoveredBadge === 'python' || hoveredBadge === 'aiml' ? '1.5' : '1'}
              strokeDasharray="3 4"
              className="transition-colors duration-300"
            />
            <circle
              ref={nodePythonAimlRef}
              cx="0"
              cy="0"
              r="2.5"
              fill="#FF4500"
              opacity={hoveredBadge === 'python' || hoveredBadge === 'aiml' ? '0.9' : '0.4'}
              className="transition-opacity duration-300"
            />
          </g>

          {/* 4. Connecting Line: React <-> Next.js */}
          <g>
            <line
              ref={lineReactNextRef}
              x1="0"
              y1="0"
              x2="0"
              y2="0"
              stroke={
                hoveredBadge === 'react' || hoveredBadge === 'nextjs'
                  ? 'rgba(255, 69, 0, 0.75)'
                  : 'rgba(255, 69, 0, 0.2)'
              }
              strokeWidth={hoveredBadge === 'react' || hoveredBadge === 'nextjs' ? '1.5' : '1'}
              strokeDasharray="3 4"
              className="transition-colors duration-300"
            />
            <circle
              ref={nodeReactNextRef}
              cx="0"
              cy="0"
              r="2.5"
              fill="#FF4500"
              opacity={hoveredBadge === 'react' || hoveredBadge === 'nextjs' ? '0.9' : '0.4'}
              className="transition-opacity duration-300"
            />
          </g>
        </svg>

        {/* Orbiting Badges */}
        {TECH_BADGES.map((badge) => {
          const isConnected =
            hoveredBadge === badge.id ||
            (hoveredBadge &&
              TECH_BADGES.find((b) => b.id === hoveredBadge)?.connectsTo === badge.id) ||
            (hoveredBadge && badge.connectsTo === hoveredBadge)

          return (
            <div
              key={badge.id}
              ref={(el) => {
                badgeRefs.current[badge.id] = el
              }}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
              }}
              onMouseEnter={() => {
                isHoveredRef.current = true
                setHoveredBadge(badge.id)
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false
                setHoveredBadge(null)
              }}
              className={`pointer-events-auto cursor-default px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full backdrop-blur-md transition-colors duration-300 flex items-center gap-1.5 shadow-sm whitespace-nowrap will-change-transform ${
                isConnected
                  ? 'bg-white dark:bg-[#10141E] border border-[#FF4500] text-[#FF4500] shadow-[0_0_16px_rgba(255,69,0,0.4)] !opacity-100 !z-30'
                  : 'bg-white/70 dark:bg-[#070A10]/75 border border-black/[0.08] dark:border-white/[0.09] text-neutral-600 dark:text-neutral-300 hover:border-[#FF4500]/60 hover:text-[#FF4500] hover:shadow-[0_0_14px_rgba(255,69,0,0.25)]'
              }`}
            >
              {/* Subtle Pulsing Orange Node Dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] shadow-[0_0_5px_rgba(255,69,0,0.8)] inline-block shrink-0" />

              {/* Tech Name */}
              <span className="text-[10px] sm:text-[11px] font-mono-tech font-semibold tracking-wider">
                {badge.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
