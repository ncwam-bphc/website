"use client";
import "~/styles/fullpagescroll.css";
import Section from "~/components/FullpageSection";
import bg from "~/assets/downloads/bg.webp";

export default function AboutusPage() {
  return (
    <div className="container min-w-[320px]">
      <main className="main">
        <Section bgImage={bg} className="flex-col gap-4 max-md:gap-4">
          <div className="flex items-center gap-1 lg:flex-col">
            <div className="flex flex-col items-center gap-1 font-bold">
              <div className="text-nowrap text-center text-3xl text-accent lg:text-4xl">
                IMPORTANT DATES
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center lg:min-w-[1000px]">
            <ul className="mx-auto w-full min-w-[300px] max-w-4xl list-disc pl-4 text-left text-base sm:pl-16 md:text-xl lg:min-w-[500px] lg:text-2xl">
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Call for submission of Extended Abstracts:
                  </span>
                  <span className="flex-1 text-accent">Nov. 15, 2024</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Last date for submission of Extended Abstracts:
                  </span>
                  <span className="flex-1 text-accent">
                    Jan. 25, 2025<p className="line-through">Jan. 7, 2025</p>{" "}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Notification of Accepted Abstracts:
                  </span>
                  <span className="flex-1 text-accent">Jan. 11-25, 2025</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Last date for submission of Manuscripts:
                  </span>
                  <span className="flex-1 text-accent">​Feb. 7, 2025</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Notification of Accepted Manuscripts:
                  </span>
                  <span className="flex-1 text-accent">
                    Jan. 26, 2025 - Feb. 10, 2025
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Last date for submission of Revised Manuscripts:
                  </span>
                  <span className="flex-1 text-accent">
                    Feb. 20, 2025<p className="line-through">Feb. 15, 2025</p>{" "}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">Registration start date:</span>
                  <span className="flex-1 text-accent">Dec. 15, 2024</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">Registration end date:</span>
                  <span className="flex-1 text-accent">Feb. 15, 2025</span>
                </div>
              </li>
            </ul>
            <span className="w-full max-w-3xl text-justify text-base md:text-xl lg:text-2xl">
              *Paper presentations (oral/poster) will be decided by the
              technical committee based on the quality of the manuscript.{" "}
              <span className="text-accent">
                The selected papers will be published in an indexed journal.
              </span>{" "}
              Further details will be updated very soon.
            </span>
          </div>
        </Section>
      </main>
    </div>
  );
}
