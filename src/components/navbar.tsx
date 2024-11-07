"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
    const [active, setActive] = useState("")
    const items = [
        { label: "About Us", href: "/aboutus" },
        { label: "Contact Us", href: "/contactus" },
        { label: "Speakers", href: "/speakers" },
        { label: "Zoom scroll", href: "/zoomscroll" }
    ]

    return (
        <div className="flex justify-between items-center w-full p-4 ">
            <span className="text-6xl md:text-4xl lg:text-4xl font-extrabold mb-6 tracking-tight text-white">
                NCWAM <span className="text-[#da583c]"> 2025</span>
            </span>
            <nav className="px-6 py-3 rounded-full border-2 border-[#da583c]">
                <div className="relative flex items-center gap-4 sm:gap-8 md:gap-16">
                    {items.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setActive(item.label)}
                            className="relative px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors"
                        >
                            <span className="relative z-20 text-white">
                                {item.label}
                            </span>
                            {active === item.label && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute z-10 bg-[#da583c]"
                                    style={{
                                        borderRadius: 1000,
                                        top: '-0.75rem',
                                        bottom: '-0.75rem',
                                        left: '-1.5rem',
                                        right: '-1.5rem',
                                        zIndex: 1
                                    }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    )
}