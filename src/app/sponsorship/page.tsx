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
              <div className="text-nowrap text-center text-3xl text-accent md:text-5xl">
                SPONSORSHIP
              </div>
            </div>
          </div>
          <div className="text-center">
            Consultants and suppliers from Indian companies are invited to
            participate and sponsor the conference.
            <br />
            <br />
            <ul className="mx-auto max-w-xl list-disc text-left">
              <li>
                <div className="flex justify-between">
                  Banner advertisement<span>₹25000 + 18%GST</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  Stall (standard size)<span>₹50000 + 18%GST</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  Stall with an invited talk<span>₹75000 + 18%GST</span>
                </div>
              </li>
            </ul>
          </div>
        </Section>
      </main>
    </div>
  );
}
