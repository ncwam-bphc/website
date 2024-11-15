"use client";
import "~/styles/fullpagescroll.css";
import Section from "~/components/FullpageSection";
import bg from "~/assets/downloads/bg.webp";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function AboutusPage() {
  return (
    <div className="container min-w-[320px]">
      <main className="main">
        <Section bgImage={bg} className="flex-col gap-1 md:gap-1">
          <div className="flex items-center gap-1 md:flex-col">
            <div className="flex flex-col items-center gap-1 font-bold">
              <div className="text-nowrap text-center text-3xl text-accent md:text-3xl lg:text-5xl">
                REGISTRATION
              </div>
            </div>
          </div>
          <div className="min-w-[300px] text-center text-xl md:text-3xl">
            {/* <a
              href="#"
              className={cn(
                buttonVariants(),
                "mb-4 mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
              )}
            >
              Register now
            </a> */}
            <br />
            Registration Fees:
            <br />
            <br />
            <ul className="mx-auto w-full min-w-[300px] list-disc px-4 text-left text-base md:min-w-[500px] md:px-0 md:text-3xl">
              <li>
                <div className="flex justify-between">
                  Student (UG/PG)<span>₹2,500</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  PhD Scholar<span>₹3,500</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  Faculty members<span>₹4,500</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  IIW India members<span>₹4,000</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  Non IIW India members<span>₹5,000</span>
                </div>
              </li>
            </ul>
            <br />
            <span className="text-base md:text-3xl">
              Click below to make payment
            </span>
            <br />
            <a
              href="https://pmny.in/PAYUMN/8JLAlBISFilr"
              className={cn(
                buttonVariants(),
                "mt-4 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
              )}
            >
              Make Payment
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}
