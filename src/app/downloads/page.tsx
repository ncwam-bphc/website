"use client";
import "~/styles/fullpagescroll.css";
import Section from "~/components/FullpageSection";
import bg2 from "~/assets/aboutconference/2.jpeg";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function AboutusPage() {
  return (
    <div className="container min-w-[320px]">
      <main className="main">
        <Section bgImage={bg2} className="flex-col gap-1 md:gap-4">
          <div className="flex items-center md:flex-col">
            <div className="flex flex-col items-center font-bold">
              <div className="text-nowrap text-center text-3xl uppercase text-accent md:text-3xl lg:text-5xl">
                Downloads
              </div>
            </div>
          </div>
          <div className="min-w-[300px] text-center text-xl md:text-3xl">
            <a
              href="#"
              className={cn(
                buttonVariants(),
                "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
              )}
            >
              Brochure
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}
