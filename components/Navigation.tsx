"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const Navigation = () => {
  return (
    <motion.nav
      className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          McMaster Robosub
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" className="text-blue-600 hover:text-blue-800">
              About
            </Link>
          </li>
          <li>
            <Link href="#goal" className="text-blue-600 hover:text-blue-800">
              Goal
            </Link>
          </li>
          <li>
            <Link href="#team" className="text-blue-600 hover:text-blue-800">
              Team
            </Link>
          </li>
          <li>
            <Link href="#subteams" className="text-blue-600 hover:text-blue-800">
              Subteams
            </Link>
          </li>
          <li>
            <Link href="#sponsors" className="text-blue-600 hover:text-blue-800">
              Sponsors
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navigation

