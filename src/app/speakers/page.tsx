"use client";
import { StaticImageData } from "next/image";
import bits from "~/assets/about.jpeg";
import Image from "next/image";
import spbg from "~/assets/spbg2.jpeg";

function Speak({
  img1,
  img2,
  img3,
}: {
  img1: StaticImageData;
  img2: StaticImageData;
  img3: StaticImageData;
}) {
  return (
    <div className="mt-10 flex-col justify-center gap-56 sm:mt-10 sm:flex sm:flex-row sm:justify-center sm:gap-56">
      <div className="ml-2 flex flex-col items-center">
        <Image
          style={{ borderRadius: "100%" }}
          className="size-40"
          src={img1}
          alt="img1"
        />
        <div className="mt-8">NAME</div> <div>INSTITUTION</div>
      </div>
      <div className="flex flex-col items-center">
        <Image
          style={{ borderRadius: "100%" }}
          className="size-40"
          src={img2}
          alt="img1"
        />
        <div className="mt-8">NAME</div> <div>INSTITUTION</div>
      </div>
      <div className="mr-2 flex flex-col items-center">
        <Image
          style={{ borderRadius: "100%" }}
          className="size-40"
          src={img3}
          alt="img1"
        />
        <div className="mt-8">NAME</div> <div>INSTITUTION</div>
      </div>
    </div>
  );
}

export default function SpeakersPage() {
  return (
    <div className="content h-full gap-8 p-8 lg:p-16">
      <Image
        src={spbg}
        alt="Conference background"
        fill={true}
        objectFit="cover"
        className="-z-20 opacity-15"
        priority
      />

      <main className="relative min-h-screen flex-row gap-40 overflow-hidden font-sans">
        <div className="mb-6 mt-20 flex justify-center text-6xl font-bold text-accent">
          MEET OUR
        </div>
        <div className="flex justify-center border-b-4 border-white pb-8 text-8xl font-bold">
          SPEAKERS
        </div>
        <Speak img1={bits} img2={bits} img3={bits}></Speak>
        <Speak img1={bits} img2={bits} img3={bits}></Speak>
        <Speak img1={bits} img2={bits} img3={bits}></Speak>
      </main>
    </div>
  );
}
