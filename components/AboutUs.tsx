"use client"

import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-blue-600 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The McMaster Robosub team is a group of passionate students dedicated to designing, building, and competing
          with autonomous underwater vehicles. Our team brings together diverse skills and expertise to push the
          boundaries of underwater robotics.
        </motion.p>
      </div>
    </section>
  )
}

export default AboutUs

