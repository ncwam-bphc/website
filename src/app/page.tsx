'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "~/components/ui/button"
import { MoveRight } from "lucide-react"

export default function ConferenceLanding() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  function calculateTimeLeft() {
    const difference = +new Date('2025-02-28') - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
      <Image
        src="/landing.jpeg"
        alt="Conference background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-tight">NCWAM 2025</h1>
        <p className="text-xl md:text-2xl mb-2 font-light">National Workshop on Challenges in Welding and Additive Manufacturing</p>
        <p className="text-lg md:text-xl mb-2 font-medium">February 28, 2025</p>
        <p className="text-lg md:text-xl mb-12 font-bold">BITS Pilani, Hyderabad Campus</p>

        <div className="flex justify-center space-x-8 mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold mb-2 transition-all duration-300 ease-in-out transform hover:scale-110">{value as number}</span>
              <span className="text-sm md:text-base uppercase tracking-wide">{unit}</span>
            </div>
          ))}
        </div>

        <Button size="icon" variant='secondary'>
          <MoveRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}