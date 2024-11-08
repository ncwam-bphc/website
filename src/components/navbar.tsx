"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "About Us", href: "/aboutus" },
  { label: "Contact Us", href: "/contactus" },
  { label: "Speakers", href: "/speakers" },
];

export default function Navbar() {
  const path = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    const item = items.find((item) => item.href === path);
    setActive(item?.label ?? "");
  }, [path]);

  return (
    <div className="flex w-full items-center justify-between p-4">
      <Link
        href="/"
        className="mb-6 text-6xl font-extrabold tracking-tight text-white md:text-4xl lg:text-4xl"
      >
        NCWAM <span className="text-[#da583c]"> 2025</span>
      </Link>
      <nav className="rounded-full border-2 border-[#da583c]">
        <div className="relative flex items-center gap-4">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative rounded-full px-6 py-3 text-xs font-medium transition-colors sm:text-sm"
            >
              <span className="relative z-20 text-white">{item.label}</span>
              {active === item.label && (
                <motion.span
                  layoutId="bubble"
                  className="absolute z-10 bg-[#da583c]"
                  style={{
                    borderRadius: 1000,
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    zIndex: 1,
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
