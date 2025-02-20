import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Submarine from "./Submarine"

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Submarine />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white text-center drop-shadow-lg">McMaster Robosub Team</h1>
      </div>
    </section>
  )
}

export default Hero

