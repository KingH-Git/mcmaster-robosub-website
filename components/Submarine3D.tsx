import React, { useRef } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"

/**
 * Returns a series of 2D points (THREE.Vector2) that define
 * our submarine's hull profile in the (radius, y) plane.
 * We'll lathe (revolve) these around the Y-axis to get a 3D hull.
 */
function createHullProfile(
  totalLength = 7,     // overall submarine length
  mainRadius = 0.6,    // mid-body radius
  noseLength = 1.2,    // length of the nose region
  tailLength = 1.4,    // length of the tail region
  exponent = 1.5,      // controls the curvature of nose/tail
  samples = 50         // how many segments to sample
) {
  const points: THREE.Vector2[] = []
  // We'll revolve around Y, so define (radius, y).
  // Shift the hull so midpoint is ~y=0.
  const yOffset = totalLength / 2
  const step = totalLength / (samples - 1)

  for (let i = 0; i < samples; i++) {
    const x = i * step // from 0..totalLength
    let r = 0
    if (x <= noseLength) {
      // Nose: smoothly grow from 0..mainRadius
      const s = x / noseLength
      r = mainRadius * Math.pow(s, exponent)
    } else if (x >= totalLength - tailLength) {
      // Tail: from mainRadius..0
      const s = (x - (totalLength - tailLength)) / tailLength
      r = mainRadius * (1 - Math.pow(s, exponent))
    } else {
      // Mid-body: constant radius
      r = mainRadius
    }
    const y = x - yOffset
    points.push(new THREE.Vector2(r, y))
  }
  return points
}

function AdvancedSubmarine() {
  const groupRef = useRef<THREE.Group>(null)

  /**
   * 1) Hull: LatheGeometry
   */
  const hullPoints = createHullProfile()
  const hullGeometry = new THREE.LatheGeometry(hullPoints, 80)
  const metalMaterial = new THREE.MeshStandardMaterial({
    color: "#444444",
    metalness: 0.5,
    roughness: 0.35,
  })

  /**
   * 2) Sail (conning tower): Cylinder
   */
  const sailHeight = 1.5
  const sailRadiusTop = 0.4
  const sailRadiusBottom = 0.5
  const sailSegments = 32
  const sailGeometry = new THREE.CylinderGeometry(
    sailRadiusTop,
    sailRadiusBottom,
    sailHeight,
    sailSegments
  )

  /**
   * 3) Tail Fins / Diving Planes
   */
  const finMaterial = metalMaterial.clone()
  const finGeometry = new THREE.BoxGeometry(0.1, 1.2, 0.5)

  /**
   * 4) Propeller: Simple torus
   */
  const propGeometry = new THREE.TorusGeometry(0.3, 0.06, 16, 100)

  /**
   * 5) Mid-body "wings" on each side
   *    Here we use a thin, rectangular box for each side.
   */
  const wingGeometry = new THREE.BoxGeometry(1.2, 0.05, 0.4)

  /**
   * Subtle sway animation
   */
  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = 0.15 * Math.sin(clock.elapsedTime * 0.5)
  })

  return (
    <group ref={groupRef}>
      {/* 1) Hull */}
      <mesh geometry={hullGeometry} material={metalMaterial} />

      {/* 2) Sail */}
      <mesh
        geometry={sailGeometry}
        material={metalMaterial}
        position={[0, -0.5, 0]} 
      />

      {/* 3) Tail fins (horizontal + vertical cross) */}
      <mesh
        geometry={finGeometry}
        material={finMaterial}
        position={[0, -3.2, 0]}
        rotation={[0, 0, 0]}
      />
      <mesh
        geometry={finGeometry}
        material={finMaterial}
        position={[0, -3.2, 0]}
        rotation={[0, 0, Math.PI / 2]}
      />

      {/* 4) Front diving planes (like smaller fins near the nose) */}
      <mesh
        geometry={finGeometry}
        material={finMaterial}
        scale={[1, 0.6, 0.3]}
        position={[0, 3.0, 0]}
      />
      <mesh
        geometry={finGeometry}
        material={finMaterial}
        scale={[1, 0.6, 0.3]}
        position={[0, 3.0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      />

      {/* 5) Mid-body "wings" (one on each side) */}
      {/* The sub length is ~7, with y=0 near the center. 
          We'll place them at y=0, offset in X. */}
      <mesh
        geometry={wingGeometry}
        material={metalMaterial}
        position={[-0.7, 0, 0]}  // left wing
      />
      <mesh
        geometry={wingGeometry}
        material={metalMaterial}
        position={[0.7, 0, 0]}   // right wing
      />

      {/* 6) Propeller at the tail */}
      <mesh
        geometry={propGeometry}
        material={metalMaterial}
        position={[0, -3.7, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

/**
 * Main scene/canvas
 */
export function AdvancedSubmarineScene() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [10, 3, 10], fov: 50 }}
    >
      {/* OrbitControls for mouse rotation/pan/zoom */}
      <OrbitControls enableDamping />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        intensity={0.8}
        position={[10, 10, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Environment for reflections */}
      <Environment preset="city" />

      {/* The submarine */}
      <AdvancedSubmarine />

      {/* Optional "water" plane below */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.5, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#001820" transparent opacity={0.2} />
      </mesh>
    </Canvas>
  )
}

export default AdvancedSubmarineScene

