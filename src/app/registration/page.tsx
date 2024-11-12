"use client";
import "~/styles/fullpagescroll.css";
import Section from "~/components/FullpageSection";
import bg2 from "~/assets/aboutconference/2.jpeg";

export default function AboutusPage() {
  return (
    <div className="container">
      <main className="main">
        <Section bgImage={bg2} className="flex-col gap-12">
          <div className="flex items-center gap-4 md:flex-col">
            <div className="flex flex-col items-center gap-4 font-bold">
              {/* <h2 className="text-4xl text-accent md:text-6xl">ABOUT</h2> */}
              <div className="text-nowrap text-center text-3xl text-accent md:text-5xl">
                REGISTRATION
              </div>
            </div>
          </div>
          <div className="text-center text-2xl">
            Registration link:{" "}
            <a href="https://forms.gle/VizXUfDQuqaVBJFT8" className="underline">
              https://forms.gle/VizXUfDQuqaVBJFT8
            </a>
            <br />
            <br />
            Registration Fee
            <ul className="list-disc text-left">
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
            Payment needs to be done through this link:
            <br />
            <a
              href="https://pmny.in/PAYUMN/8JLAlBISFilr"
              className="font-semibold underline"
            >
              https://pmny.in/PAYUMN/8JLAlBISFilr
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}
