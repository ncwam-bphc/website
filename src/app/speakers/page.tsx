"use client";
import { AvatarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import spbg from "~/assets/spbg2.jpeg";
import speakers from "~/assets/speakers";

const SpeakerCard = ({
  name,
  institution,
  img,
  ...props
}: {
  name: string;
  institution: string;
  img: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      onClick={props.onClick}
      className="flex max-w-[23rem] flex-col border-b-2 border-l-0 border-r-0 border-t-0 hover:brightness-110"
    >
      <div className="flex flex-col items-center gap-4 p-4">
        {img ? (
          <Image
            src={img}
            className="h-28 w-28 border-2 object-cover"
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
    </div>
  );
};

export default function SpeakersPage() {
  return (
    <div className="h-full">
      <Image
        src={spbg}
        alt="Conference background"
        fill={true}
        className="-z-20 opacity-15"
        priority
      />

      <main className="flex flex-col gap-2 pt-36">
        <div className="flex justify-center text-4xl font-bold text-accent md:text-5xl">
          MEET OUR
        </div>
        <div className="flex justify-center pb-4 text-4xl font-bold text md:text-6xl">
          INVITED SPEAKERS
        </div>
        <div className="flex justify-center text-4xl font-bold mt-4 md:text-5xl" >
        <p className="customcol">PLEANARY</p>
        </div>
        <div className="flex justify-center">
        <SpeakerCard key = {1} name = "Prof. G.D. Janaki Ram" institution="IIT, Hyderabad" img = ""></SpeakerCard>
        </div>
             <div className="flex justify-center text-4xl font-bold mt-4 md:text-5xl">
       <p className="customcol">KEYNOTE</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(23rem,max-content))] justify-center gap-4">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              institution={speaker.institution}
              img={speaker.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
