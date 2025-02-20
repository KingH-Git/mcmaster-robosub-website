"use client"

import { motion } from "framer-motion"

const OurGoal = () => {
  return (
    <section id="goal" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Goal
        </motion.h2>
        <motion.p
          className="text-lg text-blue-600 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our goal is to develop cutting-edge autonomous underwater vehicles that can navigate complex underwater
          environments, perform tasks with precision, and contribute to the advancement of marine technology. We aim to
          compete at the highest level in international competitions while fostering innovation and teamwork among our
          members.
        </motion.p>
      </div>
    </section>
  )
}

export default OurGoal

