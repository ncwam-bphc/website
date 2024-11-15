"use client";
import Image, { type StaticImageData } from "next/image";
import spbg from "~/assets/speakers.webp";
import { cn } from "~/lib/utils";
import {
  advisory,
  chairmen,
  guestHonors,
  organizing,
  patrons,
} from "~/assets/committe/committe";
import BSMurthyPic from "~/assets/committe/BS Murty 2.webp";
import VRamgopalPic from "~/assets/committe/V Ramgopal Rao 2-Chief Patron.webp";
import JayaprakashPic from "~/assets/committe/Jayaprakash Sharma.webp";
import JeevanJaidiPic from "~/assets/committe/Jeevan Jaidi 1.webp";

const CommitteeCard = ({
  name,
  institution,
  img,
  className,
  ...props
}: {
  name: string;
  institution: string;
  img: StaticImageData | null;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex w-[23rem] flex-col items-center gap-4 p-4",
        className,
      )}
    >
      {img ? (
        <Image
          src={img}
          className="h-32 w-32 rounded-full border-2 border-white object-cover"
          alt="avatar"
        />
      ) : null}
      <div className="flex flex-col items-center whitespace-break-spaces text-center text-xl font-semibold md:text-2xl">
        {name}
        <span className="whitespace-break-spaces text-xl text-accent md:text-xl">
          {institution}
        </span>
      </div>
    </div>
  );
};

const Section = ({
  title,
  contentList,
}: {
  title: string;
  contentList: {
    name: string;
    institution: string;
    imageUrl: StaticImageData | null;
  }[];
}) => (
  <>
    <div className="mt-4 flex justify-center text-3xl font-bold uppercase md:text-4xl">
      <p className="customcol text-center">{title}</p>
    </div>
    <div className="flex flex-wrap items-start justify-center gap-4">
      {contentList.map((content, index) => (
        <CommitteeCard
          key={`${title}-${index}`}
          name={content.name}
          institution={content.institution}
          img={content.imageUrl}
        />
      ))}
    </div>
  </>
);

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
        <Section
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
              institution: "Hon. Secretary, IIW-Hyderabad",
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
        />
        <Section title="National Advisory Committee" contentList={advisory} />
        <Section title="Organizing Committee" contentList={organizing} />
      </main>
    </div>
  );
}
