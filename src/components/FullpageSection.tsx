import { cn } from "~/lib/utils";
import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";

const Section = ({
  children,
  className,
  bgImage,
}: {
  children?: React.ReactNode;
  className?: string;
  bgImage?: string | StaticImport;
}) => {
  return (
    <section className="section">
      <div className="content h-full gap-8 p-8 lg:p-16">
        {bgImage ? (
          <Image
            src={bgImage}
            alt="Conference background"
            fill={true}
            objectFit="cover"
            className="-z-20"
            priority
          />
        ) : null}
        <div className="absolute inset-0 -z-10 bg-black bg-opacity-80 backdrop-blur-sm"></div>
        <div
          className={cn(
            "mx-auto flex h-full max-w-6xl items-center justify-center gap-24 text-base max-md:flex-col max-md:gap-12 sm:text-xl md:text-2xl",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
