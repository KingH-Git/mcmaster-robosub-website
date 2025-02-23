"use client"

import Link from "next/link"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-navy py-8 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-mcmaster-red">McMaster RoboSub Team</h3>
            <p className="text-cool-grey">Engineering the Future of Underwater Autonomy</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-mcmaster-red">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-cool-grey hover:text-neon-cyan transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-cool-grey hover:text-neon-cyan transition-colors duration-300">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-cool-grey hover:text-neon-cyan transition-colors duration-300">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cool-grey hover:text-neon-cyan transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2 text-mcmaster-red">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-grey hover:text-neon-cyan transition-colors duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-grey hover:text-neon-cyan transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/macrobosub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-grey hover:text-neon-cyan transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/mcmaster-robo-sub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cool-grey hover:text-neon-cyan transition-colors duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-cool-grey">
          <p>&copy; {new Date().getFullYear()} McMaster RoboSub Team. All rights reserved.</p>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="w-full h-full bg-sonar-waves opacity-10" />
      </motion.div>
    </footer>
  )
}

export default Footer