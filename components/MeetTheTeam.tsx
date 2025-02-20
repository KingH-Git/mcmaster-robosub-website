"use client"

import { motion } from "framer-motion"

const teamMembers = [
  { name: "John Doe", role: "Team Lead", image: "/placeholder.svg?height=200&width=200" },
  { name: "Jane Smith", role: "Electrical Lead", image: "/placeholder.svg?height=200&width=200" },
  { name: "Humza", role: "Machine Learning Lead", image: "/placeholder.svg?height=200&width=200" },
  { name: "Emily Brown", role: "Mechanical Lead", image: "/placeholder.svg?height=200&width=200" },
  { name: "Chris Lee", role: "Software Lead", image: "/placeholder.svg?height=200&width=200" },
  { name: "Alex Johnson", role: "Mechanical Engineer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Samantha Williams", role: "Electrical Engineer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Michael Chen", role: "Software Developer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Olivia Taylor", role: "Machine Learning Engineer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Daniel Kim", role: "Mechanical Designer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Sophie Martin", role: "Electrical Engineer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Ryan Patel", role: "Software Developer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Emma Wilson", role: "Systems Engineer", image: "/placeholder.svg?height=200&width=200" },
  { name: "David Garcia", role: "Control Systems Engineer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Ava Thompson", role: "Project Manager", image: "/placeholder.svg?height=200&width=200" },
]

const MeetTheTeam = () => {
  return (
    <section id="team" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet the Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-800">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetTheTeam

