import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { InnocapsuleCore } from './InnocapsuleCore'
import { OrbitalRings } from './OrbitalRings'
import { ParticleCloud } from './ParticleCloud'
import { SceneLighting } from './SceneLighting'
import { BrandMark } from '../ui/BrandMark'

interface SceneRigProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>
  scrollY: number
  isMobile: boolean
  isTablet: boolean
  reducedMotion: boolean
}

const SceneRig: React.FC<SceneRigProps> = ({
  mouse,
  scrollY,
  isMobile,
  isTablet,
  reducedMotion,
}) => {
  const groupRef = useRef<THREE.Group>(null!)

  // Responsive coordinates:
  // Since the Canvas container is already positioned on the right (w-[55%]),
  // basePosX = 0 places the 3D core right in the center of that area (at ~73% of screen width),
  // and orbital rings (radius ~2.2) extend naturally towards the left edge of the Canvas!
  const basePosX = 0
  const basePosY = isMobile ? 0 : isTablet ? 0 : 0.05
  const baseScale = isMobile ? 0.82 : isTablet ? 0.92 : 1.05

  useFrame((_, delta) => {
    if (!groupRef.current) return

    // Subtle restrained mouse parallax (max ~8-12px equivalent)
    const targetRotY = reducedMotion ? 0 : mouse.current.x * 0.2
    const targetRotX = reducedMotion ? 0 : -mouse.current.y * 0.16
    const targetPosX = basePosX + (reducedMotion ? 0 : mouse.current.x * 0.22)
    const targetPosY = basePosY + (reducedMotion ? 0 : mouse.current.y * 0.14) + scrollY * 0.0022
    const targetPosZ = -scrollY * 0.0025

    // Smooth lerp factor
    const factor = Math.min(delta * 4.5, 0.2)
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * factor
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * factor
    groupRef.current.position.x += (targetPosX - groupRef.current.position.x) * factor
    groupRef.current.position.y += (targetPosY - groupRef.current.position.y) * factor
    groupRef.current.position.z += (targetPosZ - groupRef.current.position.z) * factor
  })

  return (
    <group ref={groupRef} scale={baseScale}>
      <InnocapsuleCore reducedMotion={reducedMotion} />
      <OrbitalRings reducedMotion={reducedMotion} />
      <ParticleCloud
        count={isMobile ? 35 : isTablet ? 60 : 100}
        reducedMotion={reducedMotion}
      />
    </group>
  )
}

interface CapsuleSceneProps {
  scrollY?: number
}

export const CapsuleScene: React.FC<CapsuleSceneProps> = ({ scrollY = 0 }) => {
  const mouse = useRef({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [hasWebGLError, setHasWebGLError] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }

    const checkMotion = () => {
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkViewport()
    checkMotion()

    const handleResize = () => checkViewport()
    const handleMouseMove = (e: MouseEvent) => {
      if (reducedMotion) return
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [reducedMotion])

  if (hasWebGLError) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <BrandMark size={56} animate={true} />
          <span className="text-[11px] font-mono-tech text-neutral-500">
            SYSTEM CORE // COMPATIBLE MODE
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={isMobile ? [1, 1.2] : [1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
        onError={() => setHasWebGLError(true)}
      >
        <Suspense fallback={null}>
          <SceneLighting mouse={mouse} />
          <SceneRig
            mouse={mouse}
            scrollY={scrollY}
            isMobile={isMobile}
            isTablet={isTablet}
            reducedMotion={reducedMotion}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
