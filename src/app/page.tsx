"use client";

import dynamic from "next/dynamic";
const Timer = dynamic(() => import("~/components/timer"), {
  ssr: false,
});
import { Button } from "~/components/ui/button";
import landingPageBg from "~/assets/landing.webp";
import Link from "next/link";
import sixtyyear from "~/assets/homepage/sixtyyearanniversary.webp";
import mottologo from "~/assets/homepage/motto.webp";
import Image from "next/image";
import { chairmen, guestHonors, patrons } from "~/assets/committe/committe";
import BSMurthyPic from "~/assets/committe/BS Murty 2.webp";
import VRamgopalPic from "~/assets/committe/V Ramgopal Rao 2-Chief Patron.webp";
import JayaprakashPic from "~/assets/committe/Jayaprakash Sharma.webp";
import JeevanJaidiPic from "~/assets/committe/Jeevan Jaidi 1.webp";
import { Section } from "~/components/Committee";
import { useIsMobile } from "~/lib/use-mobile";

export default function ConferenceLanding() {
  const isMobile = useIsMobile();
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden font-sans">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <Image
          src={landingPageBg}
          alt="Conference background"
          fill={true}
          className="-z-20 object-cover"
          priority
        />
      </div>
      <br />
      <br />
      <div className="absolute left-0 right-0 top-[4.5rem] w-full backdrop-blur-2xl nav:top-20">
        <div className="customcol flex w-full animate-infinite-scroll justify-end whitespace-nowrap md:text-2xl">
          Registration deadline has been extended to 15th February 2025.
          Manuscript must be submitted on or before 20th February 2025 for peer
          review and publication of conference proceedings in a Scopus indexed
          book volume.
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-black bg-opacity-60"></div>
      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center gap-4 px-4 pt-12 text-center">
        <h1 className="pt-32 text-6xl font-extrabold tracking-tight md:text-8xl lg:text-9xl">
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
        <Button
          className="text-xs before:-inset-1 sm:hidden"
          size={isMobile ? "default" : "lg"}
          variant="poppy"
          asChild
        >
          <Link
            href="/Program schedule (Public)-NCWAM 2025.pdf"
            target="_blank"
            className="relative from-slate-300 to-[#ebab9c] before:absolute before:-inset-[2px] before:-z-10 before:rounded-md sm:text-base md:text-xl"
          >
            Program Schedule
          </Link>
        </Button>
        <div className="flex w-full items-center justify-center gap-2 sm:gap-4">
          <Button
            className="text-xs before:-inset-1 max-sm:hidden"
            size={isMobile ? "default" : "lg"}
            variant="poppy"
            asChild
          >
            <Link
              href="/Program schedule (Public)-NCWAM 2025.pdf"
              target="_blank"
              className="relative from-slate-300 to-[#ebab9c] before:absolute before:-inset-[2px] before:-z-10 before:rounded-md sm:text-base md:text-xl"
            >
              Program Schedule
            </Link>
          </Button>
          <Button
            className="text-xs sm:text-base md:text-xl"
            size={isMobile ? "default" : "lg"}
            variant="poppy"
            asChild
          >
            <Link
              target="_blank"
              href="/Oral Presentations (Public)-NCWAM 2025.pdf"
            >
              Oral Presentations
            </Link>
          </Button>
          <Button
            className="text-xs sm:text-base md:text-xl"
            size={isMobile ? "default" : "lg"}
            variant="poppy"
            asChild
          >
            <Link
              target="_blank"
              href="/Poster Presentations (Public)-NCWAM 2025.pdf"
            >
              Poster Presentations
            </Link>
          </Button>
        </div>
        <div className="flex w-full items-center justify-center gap-2 sm:gap-4">
          <Button
            className="text-xs before:-inset-1"
            size={isMobile ? "default" : "lg"}
            variant="poppy"
            asChild
          >
            <Link
              href="/downloads"
              className="relative from-slate-300 to-[#ebab9c] before:absolute before:-inset-[2px] before:-z-10 before:animate-pulse before:rounded-md before:bg-gradient-to-bl before:content-[''] sm:text-base md:text-xl"
            >
              Downloads
            </Link>
          </Button>
          <Button
            className="text-xs sm:text-base md:text-xl"
            size={isMobile ? "default" : "lg"}
            variant="poppy"
            asChild
          >
            <Link href="/registration">Register</Link>
          </Button>
          <Button
            className="text-xs sm:text-base md:text-xl"
            size={isMobile ? "default" : "lg"}
            variant="poppy"
            asChild
          >
            <Link href="/contactus">Contact us</Link>
          </Button>
        </div>
        <Image
          src={mottologo}
          alt="bits"
          className="bottom-5 -z-10 h-auto w-32 object-contain opacity-80 max-md:mt-4 md:absolute"
        />
      </div>

      <Image
        src={sixtyyear}
        alt="bits"
        className="absolute top-20 -z-10 w-24 object-contain pt-4 opacity-80 md:right-4 md:h-auto nav:top-24"
      />

      <div className="flex flex-col gap-2">
        <Section
          title="Chief Guest"
          contentList={[
            {
              name: "Prof. B.S. Murty",
              institution: "Director, IIT Hyderabad",
              imageUrl: BSMurthyPic,
            },
          ]}
        />
        <Section title="Guest of Honours" contentList={guestHonors} />
        <Section
          title="Chief Patron"
          contentList={[
            {
              name: "Prof. V. Ramgopal Rao",
              institution: "Vice Chancellor, BITS Pilani",
              imageUrl: VRamgopalPic,
            },
          ]}
        />
        <Section title="Patrons" contentList={patrons} />
        <Section title="Chairmen" contentList={chairmen} />
        <Section
          title="Convener"
          contentList={[
            {
              name: "Prof. Jeevan Jaidi",
              institution:
                "BITS Pilani Hyderabad\nHon. Secretary, IIW-Hyderabad",
              imageUrl: JeevanJaidiPic,
            },
          ]}
        />
        <Section
          title="Co-Convener"
          contentList={[
            {
              name: "Prof. P. Jayaprakash Sharma",
              institution: "BITS Pilani WILP",
              imageUrl: JayaprakashPic,
            },
          ]}
        />
      </div>
    </main>
  );
}
