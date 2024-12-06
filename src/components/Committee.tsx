import Image, { type StaticImageData } from "next/image";
import { cn } from "~/lib/utils";

export const CommitteeCard = ({
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

export const Section = ({
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
