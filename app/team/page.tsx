"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Import images manually from "app/assets/"
import ErionImage from "@/app/assets/Erion.png";
import HarisImage from "@/app/assets/Haris.jpeg";
import HumzaImage from "@/app/assets/Humza.png";
import SabriImage from "@/app/assets/Sabri.jpg";
import AmnaImage from "@/app/assets/Amna.jpeg";
import AbduImage from "@/app/assets/Abdu.jpeg";
import NivinduImage from "@/app/assets/Nivindu.jpeg";
import OmarImage from "@/app/assets/Omar.jpg";
import ZayedImage from "@/app/assets/Zayed.jpeg";
import JacobImage from "@/app/assets/Jacob.png";
import FaresImage from "@/app/assets/Faris.jpeg";
import TeoImage from "@/app/assets/Teo.jpg";
import CharlotteImage from "@/app/assets/charlotte.jpg"
import ChantelleImage from "@/app/assets/Chantelle.jpg"
import KareemImage from "@/app/assets/Kareem.jpeg"

// Team members list with imported images
const teamMembers = [
  { name: "Erion Keka", role: "Founder", image: ErionImage, }, // Fixing alignment
  { name: "Haris Ali", role: "Co-Founder", image: HarisImage },
  { name: "Humza Noor", role: "Machine Learning Lead", image: HumzaImage },
  { name: "Mohamed Sabri", role: "Vice President", image: SabriImage },
  { name: "Amna Khan", role: "Vice President", image: AmnaImage },
  { name: "Abdurahman", role: "Secretary", image: AbduImage },
  { name: "Nivindu", role: "Secretary", image: NivinduImage },
  { name: "Omar", role: "Software Lead", image: OmarImage },
  { name: "Zayed", role: "Software Lead", image: ZayedImage },
  { name: "Jacob", role: "Mechanical Lead", image: JacobImage },
  { name: "Fares", role: "Mechanical Lead", image: FaresImage },
  { name: "Teo", role: "Mechanical Lead", image: TeoImage },
  { name: "Charlotte", role: "Electrical Lead", image: CharlotteImage },
  { name: "Kareem", role: "Electrical Lead", image: KareemImage },
  { name: "Chantelle", role: "Marketing Lead", image: ChantelleImage },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-midnight py-24">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-mcmaster-red mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet the Team
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-neon-cyan mb-2">{member.name}</h2>
              <p className="text-cool-grey">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

