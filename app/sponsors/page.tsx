"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Sponsors() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent("Sponsorship Inquiry")
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}
   `)
    window.location.href = `mailto:robosub@mcmaster.ca?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-midnight py-24">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-mcmaster-red mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sponsorships
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-neon-cyan mb-4">Support Our Team</h2>
            <p className="text-cool-grey mb-4">
              By sponsoring the McMaster Robosub Team, you're investing in the future of underwater robotics and
              supporting the next generation of engineers and innovators. Your contribution helps us:
            </p>
            <ul className="list-disc list-inside text-cool-grey mb-4">
              <li>Purchase cutting-edge equipment and materials</li>
              <li>Participate in international competitions</li>
              <li>Conduct research and development</li>
              <li>Provide learning opportunities for our team members</li>
            </ul>
            <p className="text-cool-grey">
              In return, we offer various sponsorship tiers with benefits such as logo placement on our submarine,
              social media recognition, and opportunities to engage with our talented team members.
            </p>
          </motion.div>
          <motion.div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-neon-cyan mb-4">Sponsorship Inquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cool-grey">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-white text-black placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cool-grey">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full bg-white text-black placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-cool-grey">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  required
                  className="w-full bg-white text-black placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cool-grey">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full bg-white text-black placeholder:text-gray-500"
                />
              </div>
              <Button type="submit" className="w-full bg-mcmaster-red hover:bg-neon-cyan text-white">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
