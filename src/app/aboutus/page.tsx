"use client";
import "~/styles/aboutpage.css";
import aboutBg from "~/assets/about.jpeg";
import Image from "next/image";

const Section = ({ children }: { children?: React.ReactNode }) => {
  return (
    <section className="section">
      <div className="content h-full gap-8 p-8 lg:p-16">
        <Image
          src={aboutBg}
          alt="Conference background"
          fill={true}
          objectFit="cover"
          className="-z-20"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-black bg-opacity-80 backdrop-blur-sm"></div>
        <div className="mx-auto flex h-full max-w-6xl items-center gap-24">
          {children}
        </div>
      </div>
    </section>
  );
};

export default function AboutusPage() {
  return (
    <div className="container">
      <main className="main">
        <Section>
          <div className="flex flex-col items-center gap-4 font-bold">
            <h2 className="text-6xl text-[#da583c]">ABOUT</h2>
            <div className="text-center text-5xl">
              BITS PILANI
              <br />
              UNIVERSITY
            </div>
          </div>
          <div className="text-center text-xl">
            The{" "}
            <span className="text-[#da583c]">
              Birla Institute of Technology & Science Pilani
            </span>{" "}
            (BITS Pilani) is a multi-locational University with three campuses
            in India (Pilani, Goa and Hyderabad) and one international campus in
            Dubai (U.A.E).
            <br />
            <br />
            During its five and half decades of existence as a University, BITS
            Pilani has established strong linkages with industries, R&D
            organizations and financial institutions through its
            university-industry linkage programs, such as{" "}
            <span className="text-[#da583c]">
              Work Integrated Learning Programmers
            </span>{" "}
            (WILP) and
            <span className="text-[#da583c]">Practice School</span> (PS-I &
            PS-II).
          </div>
        </Section>
        <Section>
          <div className="text-center text-xl">
            The{" "}
            <span className="text-[#da583c]">
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
            <span className="text-[#da583c]">BITS Pilani</span> has been
            offering undergraduate and masters programs in CSIS, Core
            Engineering, Management and other disciplines over several decades
            benefitting over 500 organizations and 45,000 working professionals.
          </div>
          <div className="flex flex-col items-center gap-4 font-bold">
            <h2 className="text-6xl text-[#da583c]">ABOUT</h2>
            <div className="text-nowrap text-center text-5xl">
              WILP Division,
              <br />
              BITS Pilani
            </div>
          </div>
        </Section>
        <Section>
          <div className="flex flex-col items-center gap-4 font-bold">
            <h2 className="text-6xl text-[#da583c]">ABOUT</h2>
            <div className="text-5xl">IIW India</div>
          </div>
          <div className="text-center text-xl">
            The{" "}
            <span className="text-[#da583c]">
              Indian Institute of Welding India
            </span>{" "}
            (IIW India), a representative body of professional welding engineers
            in India, is involved in the advancements of Welding Science and
            Technology within the country.
            <br />
            <br />
            The IIW has been recognized as an authorized national body to carry
            out certification programs of the{" "}
            <span className="text-[#da583c]">
              international institute of welding
            </span>{" "}
            (IIW).
40          </div>
        </Section>
        <Section>
          <div className="text-center text-xl">
            The <span className="text-[#da583c]">IIW, Hyderabad Branch</span>,
            the 13th branch of IIW India, has been formed in May 2014 to create
            a forum for interaction and knowledge sharing among the
            professionals, R&D personnel, academicians and students of Telangana
            State involved in the field of welding and allied technologies.
          </div>
          <div className="flex flex-col items-center gap-4 font-bold">
            <h2 className="text-6xl text-[#da583c]">ABOUT</h2>
            <div className="text-nowrap text-center text-5xl">
              IIW India,
              <br />
              Hyderabad Branch
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
