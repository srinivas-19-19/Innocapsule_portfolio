import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface SceneLightingProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>
}

export const SceneLighting: React.FC<SceneLightingProps> = ({ mouse }) => {
  const accentLightRef = useRef<THREE.PointLight>(null!)
  const keyLightRef = useRef<THREE.DirectionalLight>(null!)

  useFrame((_, delta) => {
    if (accentLightRef.current) {
      const targetX = 3 + mouse.current.x * 1.2
      const targetY = 2 + mouse.current.y * 1.2
      accentLightRef.current.position.x += (targetX - accentLightRef.current.position.x) * delta * 2.5
      accentLightRef.current.position.y += (targetY - accentLightRef.current.position.y) * delta * 2.5
    }
  })

  return (
    <>
      {/* Soft base ambient light for deep shadows */}
      <ambientLight intensity={0.45} color="#0a1120" />

      {/* Primary Key Directional Light (Crisp studio white) */}
      <directionalLight
        ref={keyLightRef}
        position={[6, 7, 5]}
        intensity={1.3}
        color="#ffffff"
      />

      {/* Crystalline Rim Highlight (Catches top-left crystal edges) */}
      <directionalLight
        position={[-6, 5, -4]}
        intensity={1.1}
        color="#e0f2fe"
      />

      {/* Orange Accent Point Light (Interactive with cursor) */}
      <pointLight
        ref={accentLightRef}
        position={[3, 2, 4]}
        intensity={3.2}
        distance={10}
        decay={2}
        color="#FF4500"
      />

      {/* Under-glow Fill Light (Warm Amber) */}
      <pointLight
        position={[0, -3.5, 2]}
        intensity={0.8}
        distance={7}
        color="#FF8C00"
      />
    </>
  )
}
