"use client";
import "~/styles/fullpagescroll.css";
import Section from "~/components/FullpageSection";
import bg from "~/assets/aboutconference/bg.webp";

export default function AboutusPage() {
  return (
    <div className="container">
      <main className="main">
        <Section bgImage={bg} className="max-md:gap-6">
          <div className="flex items-center gap-4 md:flex-col md:gap-8">
            <div className="flex flex-col items-center gap-2 font-bold md:gap-4">
              <h2 className="text-4xl text-accent md:text-6xl">ABOUT</h2>
              <div className="text-center text-3xl md:text-5xl">
                THE CONFERENCE
              </div>
            </div>
          </div>
          <div className="text-justify">
            This conference aims to bring together,{" "}
            <span className="text-accent">
              the researchers, faculty members, scientists and practitioners
              from academia, R&D institutions and industries,{" "}
            </span>
            and exchange experiences, disseminate up-to-date information, the
            challenges involved and explore new collaborative opportunities in
            the broad research areas of welding and additive manufacturing
            technologies.
            <br />
            <br />
            The proceedings include{" "}
            <span className="text-accent">
              invited talks by distinguished scientists from the national R&D
              laboratories, faculty members from premier institutions and
              industry experts{" "}
            </span>{" "}
            as well as paper presentations (oral and poster). Overall, this
            would serve as a platform for young researchers to meet and discuss
            with experts and get motivated further to produce high quality
            research in the coming decades, aiming to undertake funded research
            projects as part of national initiatives.
          </div>
        </Section>
        <Section bgImage={bg} className="flex-col gap-12">
          <div className="flex items-center gap-4 md:flex-col">
            <div className="flex flex-col items-center gap-4 font-bold">
              {/* <h2 className="text-4xl text-accent md:text-6xl">ABOUT</h2> */}
              <div className="text-nowrap text-center text-3xl text-accent md:text-5xl">
                WHO SHOULD ATTEND?
              </div>
            </div>
          </div>
          <div className="text-justify">
            Academicians (faculty members and research scholars), Scientists and
            technicians (R&D laboratories), Practicing Engineers and Consultants
            from industries (automotive, aerospace, defense, space, marine and
            medical).
          </div>
        </Section>
        <Section bgImage={bg}>
          <div className="flex items-center gap-4 md:flex-col md:gap-8">
            <div className="flex flex-col items-center gap-4 font-bold">
              <h2 className="text-4xl text-accent md:text-6xl">SCOPE</h2>
              <div className="text-center text-3xl md:text-5xl">
                OF THE CONFERENCE
              </div>
            </div>
          </div>
          <div className="text-justify">
            The scope of the conference includes assessment of quality and life
            of the welded joints and additively manufactured components through{" "}
            <span className="text-accent">
              experimental testing and characterization techniques{" "}
            </span>
            towards the process-property-structure correlations, as well as{" "}
            <span className="text-accent">
              modelling and simulation techniques{" "}
            </span>
            for the thermomechanical-metallurgical phenomena towards the
            off-line process optimization, quality enhancement and savings in
            terms of materials and resources.
          </div>
        </Section>
      </main>
    </div>
  );
}
