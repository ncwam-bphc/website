"use client";
import bg from "~/assets/aboutconference/bg.webp";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import getStatus from "~/server/actions/abstract/getStatus";
import getStatusManuscript from "~/server/actions/manuscript/getStatus";
import { cn } from "~/lib/utils";
import { Button, buttonVariants } from "~/components/ui/button";
import Link from "next/link";
export default function SubmissionsPage() {
  const session = useSession();
  const { data: submissionStatus } = useQuery({
    queryKey: ["submissionStatus"],
    queryFn: async () => {
      return getStatus();
    },
    enabled: session.status === "authenticated",
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const { data: manuscriptSubmissions } = useQuery({
    queryKey: ["manuscriptSubmissions"],
    queryFn: async () => {
      return getStatusManuscript();
    },
    enabled: session.status === "authenticated",
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 pb-8 pt-24 text-center max-md:gap-1 md:gap-4 md:px-8">
      <Image
        src={bg}
        alt="Conference background"
        fill={true}
        className="-z-20 object-cover opacity-10"
        priority
      />
      <div className="absolute right-4 top-20 flex flex-col gap-4">
        {session.data?.user.role === "admin" && (
          <Link href="/admin" className={buttonVariants({ variant: "poppy" })}>
            Admin portal
          </Link>
        )}
        {["reviewer", "admin"].includes(session.data?.user.role ?? "") && (
          <Link href="/review" className={buttonVariants({ variant: "poppy" })}>
            Reviewer portal
          </Link>
        )}
        {session.status === "authenticated" && (
          <Button
            variant="poppy"
            onClick={async () => {
              await signOut();
            }}
          >
            Signout
          </Button>
        )}
      </div>

      <>
        <div className="text-nowrap text-center text-3xl font-bold uppercase text-accent md:text-5xl">
          Submissions
        </div>

        {session.status === "unauthenticated" ? (
          <span>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center text-base md:text-xl">
                <span className="customcol text-xl md:text-3xl">
                  Extended Abstracts - Compulsory Submission
                </span>
                <div className="text-justify">
                  <span className="text-accent">
                    Peer reviewed and accepted abstracts
                  </span>{" "}
                  will be recommended for oral and/or poster presentations. All
                  accepted and presented abstracts will be published as
                  conference proceedings, and a copy will be given to all the
                  registered participants as part of the conference kit.
                </div>
                <Button
                  className="mt-4 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl"
                  disabled
                >
                  Submissions closed
                </Button>
                <span>
                  Already submitted?{" "}
                  <Link href={"/auth/login"} className="underline">
                    Sign in
                  </Link>
                </span>
              </div>
              <div className="h-[2px] w-96 self-center bg-white"></div>
              <div className="flex flex-col items-center text-center text-xl md:text-xl">
                <span className="customcol text-xl md:text-3xl">
                  Disclaimer: Springer publication
                </span>
                <div className="text-justify">
                  <span className="text-accent">Select papers</span> from the
                  conference will be published by{" "}
                  <span className="text-accent">
                    Springer as a proceedings book volume
                  </span>
                  . Springer will conduct quality checks on the accepted papers
                  and only papers that pass these checks will be published.
                  <br />
                  <span className="text-accent">
                    Springer Nature does not charge any money for publication of
                    Non-Open Access content
                  </span>
                  . Abstracts/extended abstracts and short papers (less than 4
                  pages) are not considered for publication.
                </div>
                <span className="customcol text-xl md:text-3xl">
                  Important Dates and Instructions to authors
                </span>
                <a
                  href="./Disclaimer (Springer Nature)-Conference Proceedings-Timelines and instructions-NCWAM 2025.pdf"
                  target="_blank"
                  className={cn(
                    buttonVariants(),
                    "mt-2 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
                  )}
                >
                  Download
                </a>
              </div>

              <div className="flex flex-col items-center text-center text-base md:text-xl">
                <span className="text-bold customcol text-xl md:text-3xl">
                  Manuscript (full length paper) - Optional Submission
                </span>{" "}
                <div className="text-justify">
                  <span className="text-accent">
                    Manuscript submission is optional.
                  </span>{" "}
                  However, peer reviewed and accepted manuscripts will be
                  recommended to Scopus indexed conference proceedings by
                  international publisher(s) with whom the discussions are in
                  progress. The authors will be consented before recommending
                  the manuscript for publication, and it may be a subscription
                  based (free of cost) and/or an open access (paid, but
                  discounted price) journal. So, authors who wish to publish in
                  a Scopus indexed conference proceedings are encouraged to
                  submit the manuscript in a prescribed format (available in the{" "}
                  <Link href={"/downloads"} className="underline">
                    downloads section
                  </Link>
                  ) on or before the due date mentioned in the important dates
                  section.
                </div>
                <a
                  href="https://forms.gle/vWTT42rt8pFErLHZ6"
                  className={cn(
                    buttonVariants(),
                    "mt-4 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
                  )}
                >
                  Submit manuscript
                </a>
                <span>
                  Already submitted?{" "}
                  <Link href={"/auth/login"} className="underline">
                    Sign in
                  </Link>
                </span>
              </div>
              <br></br>
            </div>
          </span>
        ) : session.status === "authenticated" ? (
          <>
            <div className="flex flex-col items-center text-center text-xl md:text-xl">
              <span className="customcol text-xl md:text-3xl">
                Disclaimer: Springer publication
              </span>{" "}
              <div className="text-justify">
                Select papers from the conference will be published by Springer
                as a proceedings book volume. Springer will conduct quality
                checks on the accepted papers and only papers that pass these
                checks will be published. Springer Nature does not charge any
                money for publication of Non-Open Access content.
                Abstracts/extended abstracts and short papers (less than 4
                pages) are not considered for publication.
              </div>
            </div>

            <div className="h-[2px] w-96 self-center bg-white"></div>

            <div className="text-nowrap pt-4 text-center text-xl font-bold uppercase text-accent md:text-3xl">
              your submission(s)
            </div>
            <span>
              Email:{" "}
              <span className="pr-2 text-white">
                {session.data.user?.email}
              </span>
              <Button
                variant="poppy"
                className="rounded-xl bg-accent px-3 py-2 text-base font-semibold text-white hover:bg-accent/80"
                onClick={async () => {
                  await signOut();
                }}
              >
                Signout
              </Button>
            </span>
            {manuscriptSubmissions?.length ? (
              manuscriptSubmissions.map((submission, index) => (
                <div
                  className="customcol flex w-full max-w-3xl flex-col gap-2 text-center text-lg md:text-2xl"
                  key={index}
                >
                  <span>
                    Manuscript title:{" "}
                    <span className="text-white">{submission.paperTitle}</span>
                  </span>
                  <span>
                    Paper number:{" "}
                    <span className="text-white">{submission.paperNumber}</span>
                  </span>
                  <span>
                    Status:{" "}
                    <span className="uppercase text-white">
                      {submission.status}
                    </span>
                  </span>
                  {submission.status !== "under review" && (
                    <div className="mt-2 flex flex-col gap-2">
                      <span className="text-xl font-semibold text-accent">
                        Reviewer A comments
                      </span>
                      <span className="text-white">
                        {submission.reviewerA.comment}
                      </span>

                      <span className="text-xl font-semibold text-accent">
                        Reviewer B comments
                      </span>
                      <span className="text-white">
                        {submission.reviewerB.comment}
                      </span>

                      <span className="text-xl font-semibold text-accent">
                        Final Comments
                      </span>
                      <span className="text-white">
                        {submission.finalComments}
                      </span>
                    </div>
                  )}
                  <div className="h-[2px] w-full bg-accent" />
                </div>
              ))
            ) : (
              <p>You do not have any manuscript submitted.</p>
            )}
            {submissionStatus?.length ? (
              submissionStatus?.map((submission, index) => (
                <div
                  className="customcol flex w-full max-w-3xl flex-col gap-2 text-center text-lg md:text-2xl"
                  key={index}
                >
                  <span>
                    Abstract title:{" "}
                    <span className="text-white">{submission.paperTitle}</span>
                  </span>
                  <span>
                    Paper number:{" "}
                    <span className="text-white">{submission.paperNumber}</span>
                  </span>
                  <span>
                    Status:{" "}
                    <span className="uppercase text-white">
                      {submission.status}
                    </span>
                  </span>
                  {submission.status !== "under review" && (
                    <div className="mt-2 flex flex-col gap-2">
                      <span className="text-xl font-semibold text-accent">
                        Reviewer A comments
                      </span>
                      <span className="text-white">
                        {submission.reviewerA.comment}
                      </span>

                      <span className="text-xl font-semibold text-accent">
                        Reviewer B comments
                      </span>
                      <span className="text-white">
                        {submission.reviewerB.comment}
                      </span>

                      <span className="text-xl font-semibold text-accent">
                        Final Comments
                      </span>
                      <span className="text-white">
                        {submission.finalComments}
                      </span>
                    </div>
                  )}
                  <div className="h-[2px] w-full bg-accent" />
                </div>
              ))
            ) : (
              <p>You do not have any abstract submitted.</p>
            )}
          </>
        ) : (
          "Loading..."
        )}
      </>
    </main>
  );
}
