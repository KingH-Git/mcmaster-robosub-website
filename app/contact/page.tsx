"use client"

import { motion } from "framer-motion"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa"

const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/macrobosub/" },
  { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/company/mcmaster-robo-sub/" },
]

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-midnight py-24">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-mcmaster-red mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-neon-cyan mb-6">Get in Touch</h2>
            <p className="text-cool-grey mb-8">
              We'd love to hear from you! Whether you have questions about our team, want to sponsor us, or are
              interested in joining, don't hesitate to reach out.
            </p>
            <div className="flex items-center mb-8">
              <FaEnvelope className="text-neon-cyan mr-4 text-2xl" />
              <a
                href="mailto:robosub@mcmaster.ca"
                className="text-cool-grey hover:text-neon-cyan transition-colors duration-300"
              >
                robosub@mcmaster.ca
              </a>
            </div>
            <h3 className="text-xl font-bold text-neon-cyan mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cool-grey hover:text-neon-cyan transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon size={24} />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

