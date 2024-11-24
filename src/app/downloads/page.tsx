"use client";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import frontpage from "~/assets/downloads/frontpage.png";
import backpage from "~/assets/downloads/backpage.png";

export default function AboutusPage() {
  return (
    <main className="flex flex-col items-center pt-40">
      <div className="flex items-center pb-8 md:flex-col">
        <div className="flex flex-col items-center font-bold">
          <div className="text-nowrap text-center text-3xl uppercase text-accent md:text-3xl lg:text-5xl">
            Downloads
          </div>
        </div>
      </div>
      <div className="flex gap-8 max-lg:flex-col">
        <div className="flex min-w-[300px] flex-col gap-4 text-center text-xl md:text-3xl">
          <div className="customcol text-nowrap text-center text-xl uppercase text-accent md:text-2xl lg:text-3xl">
            Manuscript
          </div>
          <Button
            disabled
            className="mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl"
          >
            Manuscript-template (PDF)
          </Button>
          <Button
            disabled
            className="mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl"
          >
            Manuscript-template (DOCX)
          </Button>
          <span className="text-base">(To be updated soon)</span>
        </div>
        <div className="flex min-w-[300px] flex-col gap-4 text-center text-xl md:text-3xl">
          <div className="customcol text-nowrap text-center text-xl uppercase text-accent md:text-2xl lg:text-3xl">
            Abstract (Extended)
          </div>
          <a
            href="/extended_abstract.pdf"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Abstract-template (PDF)
          </a>
          <a
            href="/extended_abstract.docx"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Abstract-template (DOCX)
          </a>
        </div>
        <div className="flex min-w-[300px] flex-col gap-4 text-center text-xl md:text-3xl">
          <div className="customcol text-nowrap text-center text-xl uppercase text-accent md:text-2xl lg:text-3xl">
            Brochure
          </div>
          <a
            href="/brochure.pdf"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Brochure (PDF)
          </a>
          <a
            href={frontpage.src}
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Brochure front page (PNG)
          </a>
          <a
            href={backpage.src}
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Brochure back page (PNG)
          </a>
        </div>
      </div>
    </main>
  );
}
