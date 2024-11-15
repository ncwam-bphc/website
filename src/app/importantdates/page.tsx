"use client";
import "~/styles/fullpagescroll.css";
import Section from "~/components/FullpageSection";
import bg from "~/assets/downloads/bg.webp";

export default function AboutusPage() {
  return (
    <div className="container min-w-[320px]">
      <main className="main">
        <Section bgImage={bg} className="flex-col gap-1 md:gap-4">
          <div className="flex items-center gap-1 md:flex-col">
            <div className="flex flex-col items-center gap-1 font-bold">
              <div className="text-nowrap text-center text-3xl text-accent md:text-3xl lg:text-5xl">
                IMPORTANT DATES
              </div>
            </div>
          </div>
          <div className="text-center text-xs md:min-w-[1000px] md:text-3xl">
            <br></br>

            <ul className="mx-auto w-full min-w-[300px] list-disc px-4 text-left text-base md:min-w-[500px] md:px-0 md:text-3xl">
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Call for submission of Extended Abstracts{" "}
                  </span>{" "}
                  <span className="flex-1 text-accent">Nov. 15, 2024</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Last date for submission of Extended Abstracts:
                  </span>
                  <span className="flex-1 text-accent">Dec. 15, 2024</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Notification of Accepted Abstracts:
                  </span>
                  <span className="flex-1 text-accent">Dec. 16-31, 2024</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Last date for submission of Manuscripts:
                  </span>
                  <span className="flex-1 text-accent">​Jan. 15, 2025</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Notification of Accepted Manuscripts:
                  </span>
                  <span className="flex-1 text-accent">Jan. 16-31, 2025</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="flex-[3]">
                    Last date for submission of Revised Manuscripts:
                  </span>
                  <span className="flex-1 text-accent">Feb. 15, 2025</span>
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
            <br />
            <span className="text-base md:text-3xl">
              *Paper presentations (oral/poster) will be decided by the
              technical committee based on the quality of the manuscript.
            </span>
            <br />
          </div>
        </Section>
      </main>
    </div>
  );
}
