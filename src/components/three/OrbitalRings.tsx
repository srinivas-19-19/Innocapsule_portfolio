import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface OrbitalRingsProps {
  reducedMotion?: boolean
}

export const OrbitalRings: React.FC<OrbitalRingsProps> = ({
  reducedMotion = false,
}) => {
  const ring1Ref = useRef<THREE.Group>(null!)
  const ring2Ref = useRef<THREE.Group>(null!)
  const node1Ref = useRef<THREE.Mesh>(null!)
  const node2Ref = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (reducedMotion) return

    const time = state.clock.getElapsedTime()

    // Orbital ring 1: tilted, medium steady rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.32
      ring1Ref.current.rotation.x = Math.sin(time * 0.18) * 0.08
    }

    // Orbital ring 2: counter-rotating at different speed and inclination
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.2
      ring2Ref.current.rotation.y += delta * 0.12
    }

    // Node 1 tracking on Ring 1 (radius 2.15)
    if (node1Ref.current) {
      const angle = time * 0.85
      node1Ref.current.position.x = Math.cos(angle) * 2.15
      node1Ref.current.position.y = Math.sin(angle) * 2.15
    }

    // Node 2 tracking on Ring 2 (radius 2.45)
    if (node2Ref.current) {
      const angle = -time * 0.6 + 1.2
      node2Ref.current.position.x = Math.cos(angle) * 2.45
      node2Ref.current.position.y = Math.sin(angle) * 2.45
    }
  })

  return (
    <>
      {/* Ring 1 - Inner Gyroscope Ring */}
      <group ref={ring1Ref} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <mesh>
          <torusGeometry args={[2.15, 0.009, 16, 120]} />
          <meshBasicMaterial
            color="#FF4500"
            transparent={true}
            opacity={0.38}
          />
        </mesh>

        <mesh>
          <torusGeometry args={[2.18, 0.004, 16, 64]} />
          <meshBasicMaterial
            color="#FFFFFF"
            transparent={true}
            opacity={0.14}
          />
        </mesh>

        {/* Traveling Data Node 1 */}
        <mesh ref={node1Ref}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshBasicMaterial color="#FF4500" />
        </mesh>
      </group>

      {/* Ring 2 - Outer Elliptic Orbital */}
      <group ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[2.45, 0.008, 16, 140]} />
          <meshBasicMaterial
            color="#fb923c"
            transparent={true}
            opacity={0.28}
          />
        </mesh>

        {/* Traveling Data Node 2 */}
        <mesh ref={node2Ref}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
      </group>
    </>
  )
}
