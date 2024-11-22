"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
const Timer = dynamic(() => import("~/components/timer"), {
  ssr: false,
});
import { Button, buttonVariants } from "~/components/ui/button";
import landingPageBg from "~/assets/landing.webp";
import Link from "next/link";
import { cn } from "~/lib/utils";
import sixtyyear from "~/assets/homepage/sixtyyearanniversary.webp";
import mottologo from "~/assets/homepage/motto.webp";
export default function ConferenceLanding() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden font-sans">
      <br />
      <br />
      <Image
        src={landingPageBg}
        alt="Conference background"
        fill={true}
        className="-z-20 object-cover"
        priority
      />
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-60"></div>
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 pt-12 text-center">

        <h1 className="pt-5 text-6xl font-extrabold tracking-tight md:text-8xl lg:text-9xl">
          NCWAM <span className="text-accent"> 2025</span>
        </h1>
        <p className="text-2xl font-light md:text-2xl">
          National Conference on Challenges in Welding and Additive
          Manufacturing
        </p>
        <p className="text-lg font-medium text-accent md:text-2xl">
          February 27-28, 2025
        </p>
        <p className="text-lg font-bold md:text-2xl">
          BITS Pilani, Hyderabad Campus
        </p>
        <div className="min-h-20">
          <Timer />
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full">
          <Button 
            className="flex-grow basis-0 max-w-xs text-xs sm:text-base md:text-xl" 
            size="lg" 
            variant="poppy" 
            asChild
          >
            <Link href="/contactus">Contact us</Link>
          </Button>
          <Button 
            className="flex-grow basis-0 max-w-xs text-xs sm:text-base md:text-xl" 
            size="lg" 
            variant="poppy" 
            asChild
          >
            <Link href="/registration">Register</Link>
          </Button>
          <Button 
            className="flex-grow basis-0 max-w-xs text-xs sm:text-base md:text-xl" 
            size="lg" 
            variant="poppy" 
            asChild
          >
            <Link href="/downloads">Downloads</Link>
          </Button>
        </div>
      </div>
      <Image
        src={sixtyyear}
        alt="bits"
        className="absolute top-20 -z-10 w-24 object-contain opacity-80 md:right-4 md:h-auto nav:top-24 pt-4"
      />
      <Image 
        src={mottologo} 
        alt="bits" 
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-40 z-50 max-w-[80%]"
      />
    </main>
  );
}