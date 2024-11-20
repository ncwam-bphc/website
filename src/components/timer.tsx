"use client";

import { useState, useEffect } from "react";

function calculateTimeLeft() {
  const difference = new Date("2025-02-27").getTime() - Date.now();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
}

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex justify-center space-x-8">
      {timeLeft &&
        Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="mb-2 transform text-4xl font-bold transition-all duration-300 ease-in-out hover:scale-110 md:text-5xl">
              {value}
            </span>
            <span className="text-sm uppercase tracking-wide md:text-base">
              {unit}
            </span>
          </div>
        ))}
    </div>
  );
};

export default Timer;
