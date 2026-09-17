import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleCloudProps {
  count?: number
  reducedMotion?: boolean
}

export const ParticleCloud: React.FC<ParticleCloudProps> = ({
  count = 110,
  reducedMotion = false,
}) => {
  const pointsRef = useRef<THREE.Points>(null!)

  // Generate deterministic coordinates in a 3D spherical shell around the core
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)

    const color1 = new THREE.Color('#00F0FF')
    const color2 = new THREE.Color('#94a3b8')
    const color3 = new THREE.Color('#ffffff')

    // Pure deterministic hash function
    const pseudoRandom = (n: number) => {
      const x = Math.sin(n * 12.9898) * 43758.5453
      return x - Math.floor(x)
    }

    for (let i = 0; i < count; i++) {
      // Radius between 2.2 and 5.5
      const radius = 2.2 + pseudoRandom(i * 4) * 3.3
      const theta = pseudoRandom(i * 4 + 1) * Math.PI * 2
      const phi = Math.acos(pseudoRandom(i * 4 + 2) * 2 - 1)

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)

      // Color assignment
      const r = pseudoRandom(i * 4 + 3)
      const c = r < 0.4 ? color1 : r < 0.75 ? color2 : color3
      cols[i * 3] = c.r
      cols[i * 3 + 1] = c.g
      cols[i * 3 + 2] = c.b
    }

    return [pos, cols]
  }, [count])

  useFrame((state) => {
    if (reducedMotion || !pointsRef.current) return
    const time = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = time * 0.04
    pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.06
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors={true}
        transparent={true}
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  )
}
