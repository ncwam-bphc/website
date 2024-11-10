'use client'

import Image from "next/image"
import { Card, CardContent } from "~/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import contactusBg from "~/assets/contactus.jpeg";
export default function ContactUs() {
  const contacts = [
    {
      name: "Prof. Jeevan Jaidi",
      role: "Hon. Secretary",
      phone: "+91 9705612658",
      email: "jaidi@hyderabad.bits-pilani.ac.in",
      location: "IIW Hyderabad"
    },
    {
      name: "Prof. P. Jayaprakash Sharma",
      role: "WILP",
      phone: "+91 9666781417",
      email: "pj.sharma@pilani.bits-pilani.ac.in",
      location: "BITS Pilani"
    }
  ]

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-8 md:p-16 overflow-hidden">
      <Image
        src={contactusBg}
        alt="Background"
        fill={true}
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-80 backdrop-blur-sm"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden relative z-20"
      >
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#da583c] mb-4 text-center">Contact Us</h1>
          <p className="text-gray-700 text-center mb-12">We're here to connect and assist you</p>

          <div className="grid md:grid-cols-2 gap-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h2 className="text-2xl font-semibold text-[#da583c] group-hover:text-[#e87a62] transition-colors duration-300">{contact.name}</h2>
                      <p className="text-sm text-gray-600">{contact.role}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-gray-700 group-hover:text-[#da583c] transition-colors duration-300">
                        <Phone className="text-[#da583c] group-hover:scale-110 transition-transform duration-300" size={20} />
                        <span>{contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700 group-hover:text-[#da583c] transition-colors duration-300">
                        <Mail className="text-[#da583c] group-hover:scale-110 transition-transform duration-300" size={20} />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700 group-hover:text-[#da583c] transition-colors duration-300">
                        <MapPin className="text-[#da583c] group-hover:scale-110 transition-transform duration-300" size={20} />
                        <span>{contact.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}