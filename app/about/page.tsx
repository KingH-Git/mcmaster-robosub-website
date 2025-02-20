"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaTrophy, FaCog, FaRocket } from "react-icons/fa"

// 1) Import your image from "app/assets/"
import MacRoboSub from "@/app/assets/MacRoboSub.jpg"

const timelineEvents = [
  {
    year: 2024,
    title: "Team Formation!",
    description: "McMaster RoboSub Team was founded by a group of passionate engineering students.",
    icon: FaRocket,
  },
  {
    year: 2025,
    title: "Development Phase",
    description: "The team begins working on the initial design and prototyping of our first submarine.",
    icon: FaCog,
  },
  {
    year: 2026,
    title: "Development Phase",
    description: "Continued refinement and testing of our submarine's systems and software.",
    icon: FaCog,
  },
  {
    year: 2026,
    title: "Our First Competition",
    description: "Participated in our first RoboSub competition, gaining valuable experience.",
    icon: FaTrophy,
  },
  {
    year: 2027,
    title: "Aiming to achieve",
    description: "Setting our sights on a top 10 finish in the international RoboSub competition.",
    icon: FaTrophy,
  },
]

const TimelineEvent = ({ event, index }: { event: (typeof timelineEvents)[0]; index: number }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`flex items-center gap-4 ${isEven ? "flex-row" : "flex-row-reverse"} w-full`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className={`w-1/2 ${isEven ? "text-right" : "text-left"}`}>
        <div className="mb-1 text-neon-cyan font-bold">{event.year}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
        <p className="text-cool-grey">{event.description}</p>
      </div>
      <div className="relative flex items-center justify-center w-12 h-12">
        <div className="absolute w-1 h-full bg-mcmaster-red" />
        <div className="relative z-10 w-12 h-12 rounded-full bg-mcmaster-red flex items-center justify-center">
          <event.icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="w-1/2" />
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-midnight py-24">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-mcmaster-red mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={MacRoboSub}
              alt="McMaster RoboSub Team working"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 glassmorphism p-8 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">Our Mission</h2>
            <p className="text-cool-grey mb-4">
              The McMaster RoboSub Team is dedicated to pushing the boundaries of underwater robotics and autonomous
              systems. Our mission is to design, build, and compete with cutting-edge autonomous underwater vehicles
              (AUVs) while fostering innovation, teamwork, and hands-on engineering experience.
            </p>
            <p className="text-cool-grey">
              Through our work, we aim to contribute to the advancement of marine technology and inspire the next
              generation of engineers and scientists to tackle the challenges of underwater exploration and research.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-mcmaster-red mb-12 text-center">Our Journey</h2>

          <div className="relative space-y-12 py-8 before:absolute before:inset-0 before:ml-[50%] before:-translate-x-px md:space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineEvent key={index} event={event} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
