"use client";

import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import contactusBg from "~/assets/contactus.webp";
export default function ContactUs() {
  const contacts = [
    {
      name: "Prof. Jeevan Jaidi",
      role: "Convener & Hon. Secretary,\nIIW - Hyderabad branch",
      phone: "+91 9705612658",
      email: "jaidi@hyderabad.bits-pilani.ac.in",
      location: "IIW Hyderabad",
    },
    {
      name: "Prof. P. Jayaprakash Sharma",
      role: "Co-Covener\nBITS Pilani WILP",
      phone: "+91 9666781417",
      email: "pj.sharma@pilani.bits-pilani.ac.in",
      location: "BITS Pilani",
    },
  ];

  return (
    <div className="relative flex min-h-screen justify-center overflow-hidden p-4 sm:p-8 md:p-16 md:pt-24">
      <Image
        src={contactusBg}
        alt="Background"
        fill={true}
        className="-z-20 object-cover"
        priority
      />
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-30 backdrop-blur-sm"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full max-w-4xl overflow-hidden rounded-2xl bg-white bg-opacity-90 shadow-2xl backdrop-blur-md max-md:mt-16"
      >
        <div className="p-8 md:p-12">
          <h1 className="mb-4 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
            Contact Us
          </h1>
          <p className="mb-12 text-center text-base sm:text-lg md:text-xl text-gray-700">
            We&apos;re here to assist you
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="group flex-1 overflow-hidden border-none bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="h-full p-6">
                    <div className="mb-4">
                      <h2 className="text-xl sm:text-2xl font-semibold text-accent transition-colors duration-300 group-hover:text-[#e87a62]">
                        {contact.name}
                      </h2>
                      <p className="whitespace-break-spaces text-sm sm:text-base text-gray-600">
                        {contact.role}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 transition-colors duration-300 group-hover:text-accent">
                        <Phone
                          className="text-accent transition-transform duration-300 group-hover:scale-110"
                          size={20}
                        />
                        <span>{contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 transition-colors duration-300 group-hover:text-accent">
                        <Mail
                          className="text-accent transition-transform duration-300 group-hover:scale-110"
                          size={20}
                        />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 transition-colors duration-300 group-hover:text-accent">
                        <MapPin
                          className="text-accent transition-transform duration-300 group-hover:scale-110"
                          size={20}
                        />
                        <span>{contact.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <Card className="group flex-1 overflow-hidden border-none bg-white shadow-lg transition-all duration-300 hover:shadow-xl md:col-span-2">
              <CardContent className="h-full p-6">
                <div className="mb-4 text-center">
                  <h2 className="text-xl sm:text-2xl font-semibold text-accent transition-colors duration-300">
                    Faculty Leads
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col items-center space-x-3 text-gray-700 transition-colors duration-300">
                    <span className="text-base sm:text-xl text-accent">
                      Technical Review Committee
                    </span>
                    <span className="flex flex-wrap items-center justify-center text-sm sm:text-lg">
                      Prof. Sujith R
                      <div className="ml-2 flex items-center gap-2">
                        <Mail
                          className="text-accent transition-transform duration-300"
                          size={20}
                        />
                        sujith@hyderabad.bits-pilani.ac.in
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-x-3 text-gray-700 transition-colors duration-300">
                    <span className="text-base sm:text-xl text-accent">
                      Website Committee
                    </span>
                    <span className="flex flex-wrap items-center justify-center text-sm sm:text-lg">
                      Prof. Jeevan Jaidi
                      <div className="ml-2 flex items-center gap-2">
                        <Mail
                          className="text-accent transition-transform duration-300"
                          size={20}
                        />
                        jaidi@hyderabad.bits-pilani.ac.in
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-x-3 text-gray-700 transition-colors duration-300">
                    <span className="text-base sm:text-xl text-accent">
                      Sponsorship Committee
                    </span>
                    <span className="flex flex-wrap items-center justify-center text-sm sm:text-lg">
                      Prof. Aritra Chatterjee
                      <div className="ml-2 flex items-center gap-2">
                        <Mail
                          className="text-accent transition-transform duration-300"
                          size={20}
                        />
                        aritra.chatterjee@hyderabad.bits-pilani.ac.in
                      </div>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 flex items-center justify-center gap-4 text-base sm:text-xl text-gray-700">
            <Mail className="h-4 w-4 sm:h-6 sm:w-6 text-accent" />
            <a
              href="mailto:ncwam@hyderabad.bits-pilani.ac.in"
              className="hover:text-accent"
            >
              ncwam@hyderabad.bits-pilani.ac.in
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}