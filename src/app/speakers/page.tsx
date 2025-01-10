"use client";
import { AvatarIcon } from "@radix-ui/react-icons";
import Image, { type StaticImageData } from "next/image";
import spbg from "~/assets/speakers.webp";
import speakers from "~/assets/speakers/speakers";
import { cn } from "~/lib/utils";
import ArchanaSharma from "~/assets/speakers/Prof. Archana Sharma.webp"
import TalksTable from "~/components/talks-table"; // Add this import

const SpeakerCard = ({
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
      ) : (
        <AvatarIcon className="h-32 w-32 text-muted-foreground" />
      )}
      <div className="flex flex-col items-center text-center text-xl font-semibold md:text-2xl">
        {name}
        <span className="text-xl text-accent md:text-xl">{institution}</span>
      </div>
    </div>
  );
};

export default function SpeakersPage() {
  return (
    <div>
      <Image
        src={spbg}
        alt="Conference background"
        className="fixed left-0 top-0 -z-20 h-full w-full object-cover opacity-10"
        priority
      />

      <main className="flex flex-col gap-2 pt-36">
        <div className="flex justify-center text-4xl font-bold text-accent md:text-5xl">
          MEET OUR
        </div>
        <div className="text flex justify-center pb-4 text-4xl font-bold md:text-6xl">
          INVITED SPEAKERS
        </div>
        <div className="mt-4 flex justify-center text-4xl font-bold md:text-5xl">
          <p className="customcol">PLENARY</p>
        </div>
        <div className="flex justify-center">
          <SpeakerCard
            name="Dist. Prof. Archana Sharma"
            institution="IIIT Naya Raipur"
            img={ArchanaSharma}
          ></SpeakerCard>
        </div>
        <div className="mt-4 flex justify-center text-4xl font-bold md:text-5xl">
          <p className="customcol">KEYNOTE</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              institution={speaker.institution}
              img={speaker.imageUrl}
            />
          ))}
        </div>
        <div className="my-4 h-[2px] w-96 self-center bg-white"></div>

        <TalksTable />
      </main>
    </div>
  );
}