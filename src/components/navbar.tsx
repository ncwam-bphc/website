"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const items = [
  { label: "About Conference", href: "/aboutconference" },
  { label: "About Us", href: "/aboutus" },
  { label: "Committees", href: "/committee" },
  { label: "Speakers", href: "/speakers" },
  { label: "Important Dates", href: "/importantdates" },
  { label: "Registration", href: "/registration" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Gallery", href: "/gallery" },
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
    <div className="flex w-full items-center justify-between bg-black/40 p-4 backdrop-blur-lg">
      <Link
        href="/"
        className="text-4xl font-extrabold tracking-tight text-white"
      >
        NCWAM <span className="text-accent"> 2025</span>
      </Link>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center">
          <nav className="hidden rounded-full border-2 border-accent nav:block">
            <div className="relative flex items-center gap-2">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative rounded-full px-2 py-2 text-lg font-medium transition-colors"
                >
                  <span className="relative z-20 text-white">{item.label}</span>
                  {active === item.label && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute z-10 bg-accent"
                      style={{
                        borderRadius: 1000,
                        top: "0",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        zIndex: 1,
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>
          <SheetTrigger asChild>
            <button className="ml-auto block nav:hidden">
              {isOpen ? (
                <X className="h-6 w-6 text-accent" />
              ) : (
                <Menu className="h-6 w-6 text-accent" />
              )}
            </button>
          </SheetTrigger>
        </div>

        <SheetContent className="w-72 bg-gray-100 text-xl text-black">
          <SheetHeader>
            <SheetTitle>Tabs</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 p-4">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-4 py-2 font-medium text-accent transition-colors hover:bg-accent/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
