"use client"

import { motion } from "framer-motion"

const subteams = [
  { name: "Electrical", description: "Responsible for power systems, sensors, and control electronics." },
  { name: "Software", description: "Develops algorithms for navigation, control, and image processing." },
  { name: "Mechanical", description: "Designs and builds the physical structure and propulsion systems." },
  { name: "Marketing", description: "Manages team branding, sponsorships, and public relations." },
]

const Subteams = () => {
  return (
    <section id="subteams" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Subteams
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subteams.map((subteam, index) => (
            <motion.div
              key={subteam.name}
              className="bg-blue-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{subteam.name}</h3>
              <p className="text-blue-600">{subteam.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Subteams

