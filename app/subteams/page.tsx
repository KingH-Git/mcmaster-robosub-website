"use client"

import { motion } from "framer-motion"
import { FaBolt, FaCode, FaCogs, FaBullhorn } from "react-icons/fa"
import Link from "next/link"

const subteams = [
  {
    name: "Electrical",
    description:
      "Responsible for designing and implementing the electrical systems of our AUV, including power distribution, sensors, and control systems.",
    icon: FaBolt,
  },
  {
    name: "Software",
    description:
      "Develops the software that controls our AUV, including navigation algorithms, computer vision, and machine learning models for autonomous decision-making.",
    icon: FaCode,
  },
  {
    name: "Mechanical",
    description:
      "Designs and fabricates the physical structure of our AUV, ensuring hydrodynamic efficiency, durability, and modularity.",
    icon: FaCogs,
  },
  {
    name: "Marketing",
    description:
      "Manages our team's public relations, social media presence, sponsorship outreach, and event planning to promote our work and secure funding.",
    icon: FaBullhorn,
  },
]

export default function Subteams() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-midnight py-24">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-mcmaster-red mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Subteams
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subteams.map((subteam, index) => (
            <motion.div
              key={subteam.name}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <subteam.icon className="text-neon-cyan text-5xl mr-4" />
                  <h2 className="text-3xl font-semibold text-neon-cyan">{subteam.name}</h2>
                </motion.div>
                <motion.p
                  className="text-cool-grey text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  {subteam.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-neon-cyan mb-6">Join Our Team</h2>
          <p className="text-cool-grey text-lg mb-8">
            Interested in being part of the McMaster RoboSub Team? We're always looking for passionate individuals to
            join our subteams!
          </p>
          <Link href="/contact">
            <motion.button
              className="bg-mcmaster-red text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-neon-cyan hover:text-navy transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}