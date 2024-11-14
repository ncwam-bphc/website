"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
const Timer = dynamic(() => import("~/components/timer"), {
  ssr: false,
});
import { Button, buttonVariants } from "~/components/ui/button";
import landingPageBg from "~/assets/landing.jpeg";
import Link from "next/link";
import { cn } from "~/lib/utils";

export default function ConferenceLanding() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden font-sans">
      <Image
        src={landingPageBg}
        alt="Conference background"
        fill={true}
        objectFit="cover"
        className="-z-20"
        priority
      />
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-60"></div>
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-6xl font-extrabold tracking-tight md:text-8xl lg:text-9xl">
          NCWAM <span className="text-accent"> 2025</span>
        </h1>
        <p className="mb-2 text-2xl font-light md:text-2xl">
          National Conference on Challenges in Welding and Additive
          Manufacturing
        </p>
        <p className="mb-2 text-lg font-medium md:text-2xl">
          February 27-28, 2025
        </p>
        <p className="mb-8 text-lg font-bold md:text-2xl">
          BITS Pilani, Hyderabad Campus
        </p>
        <div className="min-h-24">
          <Timer />
        </div>

        <Button className="mt-4" size="lg" variant="poppy" asChild>
          <Link href="/registration">Register</Link>
        </Button>
      </div>
      <Link
        href="/contactus"
        className={cn(
          "absolute bottom-4 right-4 mt-4",
          buttonVariants({ variant: "poppy" }),
        )}
      >
        Contact us
      </Link>

      <Link
        href="/downloads"
        className={cn(
          "absolute bottom-4 left-4 mt-4",
          buttonVariants({ variant: "poppy" }),
        )}
      >
        Downloads
      </Link>
    </main>
  );
}
