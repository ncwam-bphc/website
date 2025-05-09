"use client";
import "~/styles/fullpagescroll.css";
import bg from "~/assets/aboutconference/bg.webp";
// import Image from "next/image";
import Image, { type StaticImageData } from "next/image";
import { AvatarIcon } from "@radix-ui/react-icons";
import { cn } from "~/lib/utils";
import wiilp from "~/assets/WhatsApp Image 2025-01-19 at 12.30.24.webp";
import crens from "~/assets/WhatsApp Image 2025-01-19 at 12.33.26.jpeg";
import idea from "~/assets/idea33.png";
import { Button } from "~/components/ui/button";
import pearl1 from "src/assets/pearl11.jpeg";
import pearl2 from "src/assets/pearl22.jpeg";
import pearl3 from "src/assets/pearl33.png";
import pearlc from "src/assets/pearlcard.png";
import arc from "~/assets/artechwelders.jpeg";
import Link from "next/link";

const scrollToBottom = () => {
  const targetd = document.getElementById("to");

  // window.scrollTo({
  //   top: document.documentElement.scrollHeight,
  //   behavior: "smooth",
  // });
  if (targetd) {
    targetd.scrollIntoView({
      behavior: "smooth",
      block: "start", // Ensures scrolling aligns to the top of the div
    });
  }
};

// const scrollToTopOfDiv = (divId: string) => {
//   const targetDiv = document.getElementById(divId);
//   if (targetDiv) {
// targetDiv.scrollIntoView({
//   behavior: "smooth",
//   block: "start", // Ensures scrolling aligns to the top of the div
// });
//   }
// };

const SpeakerCard = ({
  name,
  institution,
  img,
  className,
  ...props
}: {
  name: string;
  institution: string;
  img: StaticImageData | null;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full max-w-[23rem] flex-col items-center gap-4 p-4",
        className,
      )}
    >
      {img ? (
        <Image
          src={img || "/placeholder.svg"}
          className="border-cover h-40 w-40 rounded-full border-2 bg-white object-scale-down sm:h-60 sm:w-60 md:h-80 md:w-80"
          alt="avatar"
        />
      ) : (
        <AvatarIcon className="h-32 w-32 text-muted-foreground" />
      )}
      <div className="flex flex-col items-center text-center text-lg font-semibold sm:text-xl md:text-2xl">
        {name}
        <span className="text-base text-accent sm:text-lg md:text-xl">
          {institution}
        </span>
      </div>
    </div>
  );
};

const ServiceCard = ({
  name,
  institution,
  img,
  className,
  ...props
}: {
  name: string;
  institution: string;
  img: StaticImageData | null;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full max-w-[23rem] flex-col items-center gap-4 p-4",
        className,
      )}
    >
      {img ? (
        <Image
          src={img || "/placeholder.svg"}
          className="border-cover h-40 w-40 border-0 bg-transparent object-scale-down sm:h-60 sm:w-60"
          alt="avatar"
        />
      ) : (
        <AvatarIcon className="h-32 w-32 text-muted-foreground" />
      )}
      <div className="flex flex-col items-center text-center text-lg font-semibold sm:text-xl md:text-2xl">
        {name}
      </div>

      <div className="flex flex-col text-justify text-base font-semibold sm:text-lg md:text-xl">
        {institution}
      </div>
    </div>
  );
};

export default function AboutusPage() {
  return (
    <main className="flex flex-col items-center gap-4 px-8">
      <Image
        src={bg || "/placeholder.svg"}
        alt="Conference background"
        fill={true}
        objectFit="cover"
        className="-z-20 opacity-10"
        priority
      />
      <div className="flex items-center gap-4 md:flex-col">
        <div className="flex flex-col items-center gap-4 font-bold">
          <div className="mt-24 text-nowrap text-center text-3xl text-accent md:text-5xl">
            SPONSORSHIP
          </div>
        </div>
      </div>

      <div className="link btn" onClick={scrollToBottom}>
        <Button
          variant="poppy"
          className="mt-4 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl"
        >
          Sponsors
        </Button>
      </div>

      <div className="mt-4 text-justify text-lg md:text-xl">
        We, the Organizers of{" "}
        <span className="text-accent">
          National Conference on Challenges in Welding and Additive
          Manufacturing (NCWAM-2025)
        </span>
        , take immense pleasure in inviting sponsors from equipment and software
        suppliers, service providers and consultants to showcase one&apos;s
        products and services to the delegates and participants from academia,
        R&Ds and core industries. We earnestly request the sponsors to book the
        sponsorship category by online payment through the conference webpage.{" "}
        <br />
        <br />
        <span>
          The sponsor can contact the faculty lead{" "}
          <span className="customcol hover:text-accent">
            (Prof. Aritra Chatterjee:{" "}
            <a href="mailto:aritra.chatterjee@hyderabad.bits-pilani.ac.in">
              aritra.chatterjee@hyderabad.bits-pilani.ac.in
            </a>
            )
          </span>{" "}
          for further discussion and bank details.
        </span>
      </div>

      <div className="container mx-auto overflow-x-auto p-4">
        <table className="w-full">
          <thead>
            <tr>
              <th>
                <h2 className="customcol px-2 text-lg font-medium md:text-3xl">
                  Sponsorship Category
                </h2>
                <p className="mb-3"></p>
              </th>

              <th scope="col">
                <h2 className="customcol px-2 text-3xl font-medium">Diamond</h2>
                <p className="mb-3"></p>
              </th>
              <th scope="col">
                <h2 className="customcol px-2 text-3xl font-medium">
                  Platinum
                </h2>
                <p className="mb-3"></p>
              </th>
              <th scope="col">
                <h2 className="customcol px-2 text-3xl font-medium">Gold</h2>
                <p className="mb-3"></p>
              </th>
              <th scope="col">
                <h2 className="customcol px-2 text-3xl font-medium">Silver</h2>
                <p className="mb-3"></p>
              </th>
            </tr>
          </thead>
          <tbody className="space-y-1 divide-y text-center dark:divide-gray-300">
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-1 text-lg md:text-xl">
                  Logo display on conference webpage
                </h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="customcol py-1 text-lg md:text-xl">
                  Logo and description on the conference handouts
                </h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-1 text-lg md:text-xl">
                  Banner display (lounges)
                </h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="customcol py-1 text-lg md:text-xl">
                  Exhibition stall
                </h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-1 text-lg md:text-xl">Industry talk</h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-1 text-lg md:text-xl">
                  Delegate registration
                </h3>
              </th>
              <td>
                <span className="block text-lg md:text-xl">3</span>
              </td>
              <td>
                <span className="block text-lg md:text-xl">2</span>
              </td>
              <td>
                <span className="block text-lg md:text-xl">1</span>
              </td>
              <td>
                <span className="block text-lg md:text-xl">1</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-1 text-lg md:text-xl">
                  Special mention during &quot;Vote of Thanks&quot;
                </h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                <h3 className="customcol py-1 text-lg text-accent md:text-2xl">
                  Sponsorship amount (in lacs)
                </h3>
              </th>
              <td>
                <span className="block text-2xl">2.5</span>
              </td>
              <td>
                <span className="block text-2xl">2.0</span>
              </td>
              <td>
                <span className="block text-2xl">1.5</span>
              </td>
              <td>
                <span className="block text-2xl">1.0</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="to" className="max-w-[900px] self-center text-justify text-lg">
        For any queries, please drop an email (
        <a
          href="mailto:ncwam@hyderabad.bits-pilani.ac.in"
          className="text-blue-400"
        >
          ncwam@hyderabad.bits-pilani.ac.in
        </a>
        ) with an expression of interest, and the lead faculty member will get
        back and discuss about your requirements.
      </div>

      <div className="my-4 h-[2px] w-96 self-center bg-white"></div>

      {/* <div className="max-w-[900px] self-center text-justify text-8xl">
        SPONSORS
      </div> */}

      <div className="my-4 text-nowrap text-center text-2xl text-accent sm:text-3xl md:text-5xl">
        SPONSORS
      </div>

      <div
        id="oka"
        className="max-w-[900px] flex-col place-items-center self-center text-justify"
      >
        <div className="mb-6 mt-4 flex flex-col items-center gap-8 sm:flex-row sm:gap-12 md:gap-44">
          <a
            target="_blank"
            href="https://bits-pilani-wilp.ac.in/"
            rel="noreferrer"
          >
            <SpeakerCard name="WILP DIVISION" img={wiilp} institution="" />
          </a>

          <a
            target="_blank"
            href="https://crens.bits-pilani.ac.in/"
            rel="noreferrer"
          >
            <SpeakerCard name="CRENS" img={crens} institution="" />
          </a>
        </div>

        <div className="mb-2 mt-4 flex justify-center">
          <a
            target="_blank"
            href="https://www.artechengg.com/"
            rel="noreferrer"
          >
            <SpeakerCard
              name="ARTECH WELDERS PVT. LTD."
              img={arc}
              institution=""
            />
          </a>
        </div>

        <div className="mb-8 text-base sm:text-lg">
          Artech Welders Pvt. Ltd.,{" "}
          <span className="text-accent">a Pioneer & Leading Manufacturer</span>{" "}
          of Capacitor Discharge Projection Welding, Stud Welding Machines and
          Electron Beam Welding Machines{" "}
          <Link
            target="_blank"
            href="/ARTECH-COMPANY PROFILE.pdf"
            className="underline"
          >
            (click here)
          </Link>
          .
        </div>

        <div className="mb-2 mt-4 flex justify-center">
          <a
            target="_blank"
            href="https://www.3idea.in/?srsltid=AfmBOopgzdylpmP28YDavTeq4m73Suc_K5jJneigR3L_-u3-RILoIZ_z/"
            rel="noreferrer"
          >
            <SpeakerCard name="3IDEA TECHNOLOGY" img={idea} institution="" />
          </a>
        </div>

        <div
          id="to"
          className="customcol max-w-[900px] self-center text-justify text-base sm:text-lg"
        >
          Further Sponsors details will be updated soon.
        </div>
      </div>

      <div className="my-4 h-[2px] w-96 self-center bg-white"></div>

      <div className="my-4 text-nowrap text-center text-2xl text-accent sm:text-3xl md:text-5xl">
        COMPLEMENTARY SERVICE
      </div>

      <div className="max-w-[900px] flex-col place-items-center self-center text-justify">
        <div className="mb-6 mt-4 flex flex-col items-center gap-8 sm:flex-row sm:gap-12 md:gap-28">
          <ServiceCard name="" img={pearl1} institution="" />
          <ServiceCard name="" img={pearl3} institution="" />
        </div>

        <div className="flex justify-center">
          <ServiceCard name="" img={pearl2} institution="" />
        </div>

        <div className="flex justify-center">
          <ServiceCard name="" img={pearlc} institution="" />
        </div>

        <div
          id="to"
          className="customcol max-w-[900px] self-center text-justify text-base sm:text-lg"
        >
          Further Complementary Services details will be updated soon.
        </div>
      </div>

      <div className="my-4 h-[2px] w-96 self-center bg-white"></div>
    </main>
  );
}
