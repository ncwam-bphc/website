"use client";
import "~/styles/fullpagescroll.css";
import aboutBg from "~/assets/aboutus/bg.webp";
import bitsLogo from "~/assets/bits_logo.webp";
import Image from "next/image";
import Section from "~/components/FullpageSection";
import crensl from "~/assets/aboutus/crenslogo.webp";
import IIWH from "~/assets/aboutus/IIW Hyd logo.webp";
import IIW from "~/assets/aboutus/IIW Logo.webp";

export default function AboutusPage() {
  return (
    <div className="container">
      <main className="main">
        <Section bgImage={aboutBg}>
          <div className="flex items-center gap-4 md:flex-col md:gap-8">
            <div className="flex flex-col items-center gap-4 font-bold">
              <h2 className="text-4xl text-accent md:text-6xl">ABOUT</h2>
              <div className="text-center text-3xl md:text-5xl">
                BITS PILANI
              </div>
            </div>
            <Image src={bitsLogo} className="h-24 w-auto md:h-32" alt="logo" />
          </div>
          <div className="text-justify">
            The{" "}
            <span className="text-accent">
              Birla Institute of Technology & Science Pilani
            </span>{" "}
            (BITS Pilani) is a multi-campus University with three campuses in
            India (Pilani, Goa and Hyderabad) and one international campus in
            Dubai (U.A.E).
            <br />
            <br />
            During its five and half decades of existence as a University, BITS
            Pilani has established strong linkages with industries, R&D
            organizations and financial institutions through its
            university-industry linkage programs, such as{" "}
            <span className="text-accent">
              Work Integrated Learning Programmes
            </span>{" "}
            (WILP) and
            <span className="text-accent"> Practice School</span> (PS-I &
            PS-II).
          </div>
        </Section>
        <Section bgImage={aboutBg} className="md:flex-row-reverse">
          <div className="flex items-center gap-4 md:flex-col">
            <div className="flex flex-col items-center gap-4 font-bold">
              <h2 className="text-4xl text-accent md:text-6xl">ABOUT</h2>
              <div className="text-nowrap text-center text-3xl md:text-5xl">
                BITS Pilani WILP
              </div>
            </div>
            <Image src={bitsLogo} className="h-24 w-auto md:h-32" alt="logo" />
          </div>
          <div className="text-justify">
            The{" "}
            <span className="text-accent">
              Work Integrated Learning Programmes
            </span>{" "}
            (WILP) is a variant of the conventional mode of education, leading
            to formal degrees, but meant exclusively for working professionals,
            offered in collaboration with the industry, integrating their
            authentic work experience with formal classroom learning to enable
            them to remain relevant and grow in their career, while setting them
            on the path of lifelong learning.
            <br />
            <br />
            <span className="text-accent">BITS Pilani</span> has been offering
            undergraduate and masters programs in CSIS, Core Engineering,
            Management and other disciplines over several decades benefitting
            over 500 organizations and 45,000 working professionals.
          </div>
        </Section>

        <Section bgImage={aboutBg} className="md:flex-row">
          <div className="flex items-center gap-4 md:flex-col">
            <div className="flex flex-col items-center gap-4 font-bold">
              <h2 className="text-3xl text-accent md:text-5xl">ABOUT</h2>
              <div className="xs:text-xl text-center text-base sm:text-3xl lg:text-5xl">
                Mechanical Engineering Department,
                <br />
                BITS Pilani Hyderabad
              </div>
            </div>
            <Image src={bitsLogo} className="h-24 w-auto md:h-32" alt="logo" />
          </div>
          <div className="text-justify">
            The{" "}
            <span className="text-accent">
              Mechanical Engineering Department
            </span>{" "}
            at BITS Pilani Hyderabad was established in the year 2008.
            Currently, the Department is offering B.E (Hons.) in Mechanical, M.E
            in Design Engineering, Mechanical Engineering and Manufacturing
            Systems Engineering as well as Minor programs in Robotics and
            Automation, and Aeronautics.
            <br />
            <br />
            The faculty members and research scholars (doctoral and masters) are
            extensively involved in the government and industry sponsored
            research projects on various aspects of Engineering and
            Manufacturing processes as well as advanced Technologies and
            Materials used across the industry sectors.
          </div>
        </Section>

        <Section bgImage={aboutBg} className="md:flex-row-reverse">
          <div className="flex items-center gap-4 md:flex-col">
            <div className="flex flex-col items-center gap-4 font-bold">
              <h2 className="text-4xl text-accent md:text-6xl">ABOUT</h2>
              <div className="text-nowrap text-center text-3xl md:text-5xl">
                CRENS
              </div>
            </div>
            <Image src={crensl} className="h-24 w-auto md:h-32" alt="logo" />
          </div>
          <div className="text-justify">
            The{" "}
            <span className="text-accent">
              Center for Research Excellence in National Security (CRENS)
            </span>{" "}
            established at BITS Pilani, Hyderabad campus to foster collaboration
            between BITS Pilani and various stakeholders of National Security
            domain for Research, Innovation and Skill Development with aim of
            addressing critical challenges and contribute to National Security
            Apparatus.
          </div>
        </Section>

        <Section bgImage={aboutBg} className="md:flex-row">
          <div className="flex items-center gap-4 md:flex-col md:gap-8">
            <div className="flex flex-col items-center gap-4 font-bold">
              <h2 className="text-4xl text-accent md:text-6xl">ABOUT</h2>
              <div className="text-3xl md:text-5xl">IIW India</div>
            </div>
            <Image src={IIW} className="h-24 w-auto md:h-32" alt="logo" />
          </div>
          <div className="text-justify">
            The{" "}
            <span className="text-accent">
              Indian Institute of Welding India
            </span>{" "}
            (IIW India), a representative body of professional welding engineers
            in India, is involved in the advancements of Welding Science and
            Technology within the country.
            <br />
            <br />
            The IIW has been recognized as an authorized national body to carry
            out certification programs of the{" "}
            <span className="text-accent">
              international institute of welding
            </span>{" "}
            (IIW).
          </div>
        </Section>
        <Section bgImage={aboutBg} className="md:flex-row-reverse">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4 font-bold">
              <h2 className="text-4xl text-accent md:text-6xl">ABOUT</h2>
              <div className="text-nowrap text-center text-xl sm:text-3xl lg:text-5xl">
                IIW-Hyderabad Branch
              </div>
            </div>
            <Image src={IIWH} className="h-24 w-auto md:h-32" alt="logo" />
          </div>
          <div className="text-justify">
            The <span className="text-accent">IIW-Hyderabad Branch</span>, the
            13th branch of IIW India, has been formed in May 2014 to create a
            forum for interaction and knowledge sharing among the professionals,
            R&D personnel, academicians and students of Telangana State involved
            in the field of welding and allied technologies.
          </div>
        </Section>
      </main>
    </div>
  );
}
