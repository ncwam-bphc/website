"use client";
import Image from "next/image";
import spbg from "~/assets/speakers.webp";
import {
  advisory,
  organizing,
  technical,
  website,
  sponso,
} from "~/assets/committe/committe";
import { Section } from "~/components/Committee";

export default function SpeakersPage() {
  return (
    <div>
      <Image
        src={spbg}
        alt="Conference background"
        className="fixed left-0 top-0 -z-20 h-full w-full object-cover opacity-10"
        priority
      />
      <main className="flex flex-col gap-2 pt-28">
        {/* <Section
          title="Chief Guest"
          contentList={[
            {
              name: "Prof. B.S. Murty",
              institution: "Director, IIT Hyderabad",
              imageUrl: BSMurthyPic,
            },
          ]}
        />
        <Section title="Guest of Honours" contentList={guestHonors} />
        <Section
          title="Chief Patron"
          contentList={[
            {
              name: "Prof. V. Ramgopal Rao",
              institution: "Vice Chancellor, BITS Pilani",
              imageUrl: VRamgopalPic,
            },
          ]}
        />
        <Section title="Patrons" contentList={patrons} />
        <Section title="Chairmen" contentList={chairmen} />
        <Section
          title="Convener"
          contentList={[
            {
              name: "Prof. Jeevan Jaidi",
              institution:
                "BITS Pilani Hyderabad\nHon. Secretary, IIW-Hyderabad",
              imageUrl: JeevanJaidiPic,
            },
          ]}
        />
        <Section
          title="Co-Convener"
          contentList={[
            {
              name: "Prof. P. Jayaprakash Sharma",
              institution: "BITS Pilani WILP",
              imageUrl: JayaprakashPic,
            },
          ]}
        /> */}
        <Section title="National Advisory Committee" contentList={advisory} />
        <div className="my-4 h-[2px] w-96 self-center bg-white"></div>
        <Section title="Organizing Committee" contentList={organizing} />
        <div className="my-4 h-[2px] w-96 self-center bg-white"></div>
        <Section title="Technical Review Committee" contentList={technical} />
        <div className="my-4 h-[2px] w-96 self-center bg-white"></div>
        <Section title="Website Committee" contentList={website} />
        <div className="my-4 h-[2px] w-96 self-center bg-white"></div>
        <Section title="Sponsorship Committee" contentList={sponso} />
        <div className="my-4 h-[2px] w-96 self-center bg-white"></div>
      </main>
    </div>
  );
}
