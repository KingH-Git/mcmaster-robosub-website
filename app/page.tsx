"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import ParticleBackground from "@/components/ParticleBackground"

// Local asset usage
import PCBLogo from "@/app/assets/PCB_lib.jpg"
import SolidWorksLogo from "@/app/assets/SolidWorks-Logo.png"
import AltiumLogo from "@/app/assets/2560px-Altium_Logo.png"

const AdvancedSubmarineScene = dynamic(() => import("@/components/Submarine3D"), { ssr: false })

// Sponsor logos
const sponsors = [
  { name: "PCB Libraries", logo: PCBLogo },
  { name: "SolidWorks", logo: SolidWorksLogo },
  { name: "Altium", logo: AltiumLogo },
  { name: "Sponsor 4", logo: "/placeholder-logo.svg" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-midnight relative overflow-hidden">
      <ParticleBackground />

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 py-20 min-h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Headings & Link */}
          <div>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-montserrat leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-neon-cyan">Engineering</span> the Future of{" "}
              <span className="text-mcmaster-red">Underwater Autonomy</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-cool-grey mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Dive into the world of autonomous underwater robotics with McMaster RoboSub Team
            </motion.p>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="bg-mcmaster-red text-white px-8 py-4 rounded-full text-lg font-semibold 
                           hover:bg-neon-cyan hover:text-navy transition-all duration-300 inline-block 
                           relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More</span>
                <motion.div
                  className="absolute inset-0 bg-neon-cyan"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Right: 3D Submarine */}
          <motion.div
            className="w-full h-[300px] md:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AdvancedSubmarineScene />
          </motion.div>
        </div>
      </section>

      {/* SPONSORS SECTION */}
      <section className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neon-cyan mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Main Sponsors
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                className="flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative p-8 bg-white bg-opacity-10 rounded-lg shadow-lg transition-all duration-300 group-hover:bg-opacity-20">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={150}
                    height={75}
                    className="w-full max-w-[150px] h-auto filter grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 border-2 border-neon-cyan opacity-0 rounded-lg transition-all duration-300 group-hover:opacity-100"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy opacity-50"></div>
      </section>
    </div>
  )
}


