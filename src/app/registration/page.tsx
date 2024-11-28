"use client";
import bg from "~/assets/downloads/bg.webp";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import Image from "next/image";

export default function AboutusPage() {
  return (
    <main className="flex flex-col gap-1 pb-4 pt-28 text-center max-md:gap-1 md:gap-1">
      <Image
        src={bg}
        alt="Conference background"
        fill={true}
        objectFit="cover"
        className="-z-20 opacity-10"
        priority
      />
      <div className="pb-8 text-center text-3xl font-bold text-accent md:text-3xl lg:text-5xl">
        REGISTRATION
      </div>
      <div className="flex min-w-[300px] flex-col items-center gap-4 text-center text-xl md:text-3xl">
        <span>
          Registration window is active now,{" "}
          <span className="text-accent">
            please proceed to complete the registration.
          </span>
        </span>
        <span>Registration Fee:</span>
        <ul className="mx-auto w-[300px] list-disc px-4 text-left text-base md:w-[500px] md:px-0 md:text-3xl">
          <li>
            <div className="flex justify-between">
              Students (UG/PG)<span className="text-accent">₹2,500</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              PhD Scholars<span className="text-accent">₹3,500</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              Faculty members<span className="text-accent">₹4,500</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              IIW India members<span className="text-accent">₹4,000</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              Non-IIW India members
              <span className="text-accent">₹5,000</span>
            </div>
          </li>
        </ul>
        <span className="customcol text-base md:text-3xl">
          Click below to make payment
        </span>
        <a
          href="https://pmny.in/PAYUMN/8JLAlBISFilr"
          className={cn(
            buttonVariants(),
            "rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
          )}
        >
          Make Payment
        </a>
        <span className="max-w-[1100px] px-4 pt-4 text-justify text-base md:text-3xl">
          Once payment is done successfully, you will receive an email with the
          transaction details.{" "}
          <span className="text-accent">
            Please “click” Print button and select “Save as PDF” and download
            the transaction details.
          </span>{" "}
          Subsequently, upload the PDF file using the following Google Form
          link:{" "}
        </span>
        <a
          href="https://forms.gle/CdDGPnSufTLow2S86"
          className={cn(
            buttonVariants(),
            "rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
          )}
        >
          Upload payment details
        </a>
      </div>
    </main>
  );
}
