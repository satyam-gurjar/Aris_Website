'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, RoundedBox, Float, Text } from '@react-three/drei'
import * as THREE from 'three'

function LaptopScreen() {
  const groupRef = useRef<THREE.Group>(null)
  const screenRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (screenRef.current) {
      // Subtle glow animation
      const material = screenRef.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = 0.3 + Math.sin(time * 2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Laptop Base */}
      <RoundedBox args={[4, 0.2, 3]} radius={0.05} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Laptop Screen */}
      <group rotation={[-0.3, 0, 0]} position={[0, 0, -1.5]}>
        {/* Screen Frame */}
        <RoundedBox args={[4.2, 2.8, 0.1]} radius={0.05} position={[0, 0, -0.05]}>
          <meshStandardMaterial color="#2a2a3e" metalness={0.6} roughness={0.3} />
        </RoundedBox>

        {/* Screen Display */}
        <mesh ref={screenRef} position={[0, 0, 0.05]}>
          <planeGeometry args={[3.8, 2.4]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.3}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>

        {/* UI Elements on Screen */}
        <Text
          position={[0, 0.5, 0.06]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          AI Assistant
        </Text>

        {/* Chat bubbles simulation */}
        <RoundedBox args={[1.5, 0.3, 0.05]} radius={0.05} position={[-0.8, 0, 0.07]}>
          <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
        </RoundedBox>

        <RoundedBox args={[1.5, 0.3, 0.05]} radius={0.05} position={[0.8, -0.3, 0.07]}>
          <meshStandardMaterial color="#00d4ff" opacity={0.9} transparent />
        </RoundedBox>

        {/* Screen glow */}
        <pointLight position={[0, 0, 1]} intensity={1} color="#00d4ff" distance={5} />
      </group>
    </group>
  )
}

function FloatingIcons() {
  const icons = [
    { position: [-3, 2, 0], color: '#00d4ff' },
    { position: [3, 1.5, 0], color: '#9d00ff' },
    { position: [-2, -1, 1], color: '#00ffff' },
    { position: [2.5, -0.5, -1], color: '#ff00ff' },
  ]

  return (
    <>
      {icons.map((icon, i) => (
        <Float key={i} speed={2 + i * 0.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={icon.position as [number, number, number]}>
            <octahedronGeometry args={[0.2]} />
            <meshStandardMaterial
              color={icon.color}
              emissive={icon.color}
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

export default function AppMockup3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00d4ff" />
        <spotLight position={[-10, 10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#9d00ff" />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffffff" />

        {/* 3D Models */}
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <LaptopScreen />
        </Float>
        <FloatingIcons />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}
