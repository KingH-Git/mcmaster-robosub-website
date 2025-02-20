"use client"

import { motion } from "framer-motion"

export default function Goal() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold text-blue-600 mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Goal
        </motion.h1>
        <motion.div
          className="bg-blue-100 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 mb-4">
            At McMaster Robosub, our primary goal is to design, build, and compete with cutting-edge autonomous
            underwater vehicles (AUVs). We strive to push the boundaries of underwater robotics technology while
            providing invaluable hands-on experience to our team members.
          </p>
          <p className="text-lg text-gray-700 mb-4">Our objectives include:</p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Developing innovative solutions for underwater navigation and control</li>
            <li>Advancing computer vision and machine learning techniques for underwater environments</li>
            <li>Improving energy efficiency and endurance of AUVs</li>
            <li>Fostering interdisciplinary collaboration among team members</li>
            <li>Competing successfully in international robosub competitions</li>
          </ul>
          <p className="text-lg text-gray-700">
            Through our work, we aim to contribute to the broader field of marine robotics and inspire the next
            generation of engineers and scientists to tackle the challenges of underwater exploration and research.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

