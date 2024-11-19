"use client";
import "~/styles/fullpagescroll.css";
import Section from "~/components/FullpageSection";
import bg from "~/assets/aboutconference/bg.webp";

export default function AboutusPage() {
  return (
    <div className="container">
      <main className="main">
        <Section bgImage={bg} className="flex-col gap-12">
          <div className="flex items-center gap-4 md:flex-col">
            <div className="flex flex-col items-center gap-4 font-bold">
              <div className="text-nowrap text-center text-3xl uppercase text-accent md:text-5xl">
                Submissions
              </div>
            </div>
          </div>
          <div className="text-center text-3xl">
            Extended Abstract submission window will be open from 25th November
            onwards.
          </div>
        </Section>
      </main>
    </div>
  );
}
