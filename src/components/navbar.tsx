"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const items = [
  { label: "About Us", href: "/aboutus" },
  { label: "Contact Us", href: "/contactus" },
  { label: "Speakers", href: "/speakers" },
];

export default function Navbar() {
  const path = usePathname();
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const item = items.find((item) => item.href === path);
    setActive(item?.label ?? "");
  }, [path]);

  return (
    <div className="flex w-full items-center justify-between p-4">
      <Link
        href="/"
        className="text-4xl font-extrabold tracking-tight text-white md:text-3xl lg:text-3xl"
      >
        NCWAM <span className="text-[#da583c]"> 2025</span>
      </Link>
      <div className="flex items-center">
        <nav className="hidden md:block rounded-full border-2 border-[#da583c]">
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
        <button
          className="block md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-[#da583c]" />
          ) : (
            <Menu className="h-6 w-6 text-[#da583c]" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white rounded-b-lg shadow-lg">
          <div className="p-4 grid gap-4">
            {items.map((item) => (  
              <Link
                key={item.label}
                href={item.href}
                className="text-[#da583c] font-medium hover:bg-[#da583c]/10 transition-colors rounded-lg px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}