// components/Submarine.tsx
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

const Submarine = () => {
  const submarineRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (submarineRef.current) {
      submarineRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={submarineRef}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  )
}

export default Submarine

