"use client"

import { useRef, useMemo, useCallback } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import * as THREE from "three"

function Nucleus() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.7
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial color="#C8102E" emissive="#ff4d4d" emissiveIntensity={2} metalness={0.5} roughness={0.2} />
    </mesh>
  )
}

function ClubText() {
  return (
    <Text
      fontSize={0.4}
      position={[0, -2.5, 0]}
      color="#00AEEF"
      anchorX="center"
      anchorY="middle"
      font="/fonts/Montserrat-Bold.ttf"
    >
      McMaster RoboSub
    </Text>
  )
}

function Electron({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.5} />
    </mesh>
  )
}

interface OrbitRingProps {
  radius: number
  tilt: [number, number, number]
  rotationSpeed: number
}

function OrbitRing({ radius, tilt, rotationSpeed }: OrbitRingProps) {
  const groupRef = useRef<THREE.Group>(null)

  const electrons = useMemo(() => {
    const count = 4
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2
      const x = radius * Math.cos(angle)
      const y = radius * Math.sin(angle)
      return [x, y, 0] as [number, number, number]
    })
  }, [radius])

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += rotationSpeed * delta
    }
  })

  return (
    <group ref={groupRef} rotation={tilt}>
      <mesh>
        <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} />
        <meshStandardMaterial color="#00AEEF" side={THREE.DoubleSide} emissive="#00AEEF" emissiveIntensity={0.5} />
      </mesh>
      {electrons.map((pos, i) => (
        <Electron key={i} position={pos} />
      ))}
    </group>
  )
}

function AtomicModel() {
  const orbitProps = useMemo(
    () => [
      { radius: 2, tilt: [0, 0, 0] as [number, number, number], rotationSpeed: 0.5 },
      { radius: 2, tilt: [Math.PI / 3, 0, 0] as [number, number, number], rotationSpeed: 0.7 },
      { radius: 2, tilt: [0, Math.PI / 3, 0] as [number, number, number], rotationSpeed: 0.9 },
    ],
    [],
  )

  return (
    <group>
      <Nucleus />
      {orbitProps.map((props, i) => (
        <OrbitRing key={i} {...props} />
      ))}
    </group>
  )
}

export default function AtomicIcon3D() {
  const handleCreated = useCallback((state: any) => {
    state.gl.setClearColor(new THREE.Color("#0A192F"))
  }, [])

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <AtomicModel />
        <ClubText />
      </Canvas>
    </div>
  )
}

