"use client";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import frontpage from "~/assets/downloads/frontpage.jpg";
import backpage from "~/assets/downloads/backpage.jpg";

export default function DownloadsPage() {
  return (
    <main className="flex flex-col items-center pt-40">
      <div className="flex items-center pb-8 md:flex-col">
        <div className="flex flex-col items-center font-bold">
          <div className="text-nowrap text-center text-3xl uppercase text-accent md:text-3xl lg:text-5xl">
            Downloads
          </div>
        </div>
      </div>
      <div className="flex grid-cols-3 gap-8 max-lg:flex-col lg:grid">
        <div className="flex min-w-[300px] flex-col gap-4 text-center text-xl md:text-3xl">
          <div className="customcol text-nowrap text-center text-xl font-bold uppercase text-accent md:text-2xl lg:text-3xl">
            Event details
          </div>
          <a
            href="/Inauguration Program (Public)-NCWAM 2025.pdf"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Inaugration Program
          </a>
          <a
            href="/Program schedule (Public)-NCWAM 2025.pdf"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Program Schedule
          </a>
          <a
            href="/Oral Presentations (Public)-NCWAM 2025.pdf"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Oral Presentations
          </a>
          <a
            href="/Poster Presentations (Public)-NCWAM 2025.pdf"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Poster Presentations
          </a>
        </div>
        <div className="flex min-w-[300px] flex-col gap-4 text-center text-xl md:text-3xl">
          <div className="customcol text-nowrap text-center text-xl font-bold uppercase text-accent md:text-2xl lg:text-3xl">
            Manuscript
          </div>
          <a
            href="/manuscript.pdf"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Manuscript instructions (PDF)
          </a>
        </div>
        <div className="flex min-w-[300px] flex-col gap-4 text-center text-xl md:text-3xl">
          <div className="customcol text-nowrap text-center text-xl font-bold uppercase text-accent md:text-2xl lg:text-3xl">
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
          <div className="customcol text-nowrap text-center text-xl font-bold uppercase text-accent md:text-2xl lg:text-3xl">
            Poster
          </div>
          <a
            href="/template-Poster-NCWAM 2025-20.02.2025.pdf"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Poster-template (PDF)
          </a>
          <a
            href="/template-Poster-NCWAM 2025-20.02.2025.pptx"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Poster-template (PPTX)
          </a>
        </div>
        <div className="flex min-w-[300px] flex-col gap-4 text-center text-xl md:text-3xl">
          <div className="customcol text-nowrap text-center text-xl font-bold uppercase text-accent md:text-2xl lg:text-3xl">
            Accommodation
          </div>
          <a
            href="/Accommodation-Options-NCWAM 2025.pdf"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Accommodation (PDF)
          </a>
        </div>
        <div className="flex min-w-[300px] flex-col gap-4 text-center text-xl md:text-3xl">
          <div className="customcol text-nowrap text-center text-xl font-bold uppercase text-accent md:text-2xl lg:text-3xl">
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
            Brochure front page (JPG)
          </a>
          <a
            href={backpage.src}
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Brochure back page (JPG)
          </a>
        </div>
        <div className="flex min-w-[300px] flex-col gap-4 text-center text-xl md:text-3xl">
          <div className="customcol text-nowrap text-center text-xl font-bold uppercase text-accent md:text-2xl lg:text-3xl">
            Speaker Details
          </div>
          <a
            href="/Invited talks with titles (Public)-2DNCWAM 2025-February 2025-Jeevan.docx"
            target="_blank"
            className={cn(
              buttonVariants(),
              "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
            )}
          >
            Invited Talks
          </a>
        </div>
      </div>
    </main>
  );
}
