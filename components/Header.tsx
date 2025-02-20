"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FaRobot, FaUsers, FaCog, FaHandshake, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"

const navItems = [
  { name: "Home", href: "/", icon: FaRobot },
  { name: "About Us", href: "/about", icon: FaUsers },
  { name: "Meet the Team", href: "/team", icon: FaUsers },
  { name: "Subteams", href: "/subteams", icon: FaCog },
  { name: "Sponsors", href: "/sponsors", icon: FaHandshake },
  { name: "Contact Us", href: "/contact", icon: FaEnvelope },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy bg-opacity-90 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            McMaster RoboSub
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.href}
                  className="flex items-center text-white hover:text-neon-cyan transition-colors duration-300 group"
                >
                  <item.icon className="mr-2 group-hover:text-neon-cyan" />
                  <span className="relative">
                    {item.name}
                    <motion.span
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-neon-cyan"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
      <motion.div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="bg-navy bg-opacity-95 backdrop-blur-sm py-4">
          {navItems.map((item) => (
            <li key={item.name} className="px-6 py-2">
              <Link
                href={item.href}
                className="flex items-center text-white hover:text-neon-cyan transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="mr-2" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}

export default Header


