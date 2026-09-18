import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface InnocapsuleCoreProps {
  reducedMotion?: boolean
}

export const InnocapsuleCore: React.FC<InnocapsuleCoreProps> = ({
  reducedMotion = false,
}) => {
  const outerRef = useRef<THREE.Mesh>(null!)
  const latticeRef = useRef<THREE.Mesh>(null!)
  const innerRef = useRef<THREE.Mesh>(null!)
  const innerCageRef = useRef<THREE.Mesh>(null!)
  const coreGroupRef = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    if (reducedMotion) return

    const time = state.clock.getElapsedTime()

    // Outer crystalline faceted prism - slow, elegant rotation
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.16
      outerRef.current.rotation.x = 0.3 + Math.sin(time * 0.15) * 0.12
    }

    // Middle technical lattice - counter-rotation
    if (latticeRef.current) {
      latticeRef.current.rotation.y -= delta * 0.22
      latticeRef.current.rotation.z += delta * 0.1
    }

    // Inner core intelligence node - organic breathing & gentle pulse
    if (innerRef.current) {
      const pulse = 1 + Math.sin(time * 2.0) * 0.1
      innerRef.current.scale.set(pulse, pulse, pulse)
      innerRef.current.rotation.y += delta * 0.5
      innerRef.current.rotation.x += delta * 0.25
    }

    // Inner core secondary frame
    if (innerCageRef.current) {
      innerCageRef.current.rotation.y -= delta * 0.4
      innerCageRef.current.rotation.z += delta * 0.3
    }
  })

  return (
    <group ref={coreGroupRef} rotation={[0.25, 0.35, 0]}>
      {/* 1. OUTER LAYER: Translucent Crystalline Faceted Shell */}
      <mesh ref={outerRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.42, 0]} />
        <meshPhysicalMaterial
          color="#fff7ed"
          transmission={0.94}
          roughness={0.06}
          metalness={0.08}
          ior={1.52}
          thickness={1.4}
          specularIntensity={1.4}
          specularColor="#fb923c"
          transparent={true}
          opacity={0.94}
          flatShading={true}
          attenuationColor="#ea580c"
          attenuationDistance={1.8}
        />
      </mesh>

      {/* 2. MIDDLE LAYER: Structural Precision Lattice */}
      <mesh ref={latticeRef}>
        <icosahedronGeometry args={[1.43, 0]} />
        <meshBasicMaterial
          color="#FF4500"
          wireframe={true}
          transparent={true}
          opacity={0.36}
        />
      </mesh>

      {/* Secondary nested structural frame */}
      <mesh>
        <dodecahedronGeometry args={[1.08, 0]} />
        <meshStandardMaterial
          color="#FF8C00"
          wireframe={true}
          transparent={true}
          opacity={0.28}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 3. INNER CORE: Proprietary Intelligence Energy Node */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color="#FF4500"
          emissive="#FF4500"
          emissiveIntensity={2.5}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Inner energy cage */}
      <mesh ref={innerCageRef}>
        <octahedronGeometry args={[0.62, 0]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe={true}
          transparent={true}
          opacity={0.45}
        />
      </mesh>

      {/* Precision vertex node markers */}
      <mesh position={[0, 1.42, 0]}>
        <sphereGeometry args={[0.035, 10, 10]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0, -1.42, 0]}>
        <sphereGeometry args={[0.035, 10, 10]} />
        <meshBasicMaterial color="#FF4500" />
      </mesh>
      <mesh position={[1.25, 0.45, 0.45]}>
        <sphereGeometry args={[0.035, 10, 10]} />
        <meshBasicMaterial color="#FF4500" />
      </mesh>
      <mesh position={[-1.25, -0.45, -0.45]}>
        <sphereGeometry args={[0.035, 10, 10]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
    </group>
  )
}
