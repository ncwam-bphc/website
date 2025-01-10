"use client";
import bg from "~/assets/aboutconference/bg.webp";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import getStatus from "~/server/actions/getStatus";
import { cn } from "~/lib/utils";
import { Button, buttonVariants } from "~/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

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

        {/* <div className="text-center text-3xl">
          Extended Abstract submission window is active now
        </div> */}

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
                <a
                  href="https://forms.gle/x1mrgruoTKrv7PDU9"
                  className={cn(
                    buttonVariants(),
                    "mt-4 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
                  )}
                >
                  Submit abstract
                </a>
                <span>
                  Already submitted?{" "}
                  <Link href={"/api/auth/signin"} className="underline">
                    Sign in
                  </Link>
                </span>
              </div>
              <div className="h-[2px] w-96 self-center bg-white"></div>
              <div className="flex flex-col items-center text-center text-base md:text-xl">
                <span className="text-bold customcol text-xl md:text-3xl">
                  Manuscript (full length paper) - Optional Submission:
                </span>{" "}
                <div className="text-justify">
                  <span className="text-accent">
                    Manuscript submission is optional.
                  </span>{" "}
                  However, peer reviewed and accepted manuscripts will be
                  recommended to Scopus journal, preferably Springer publisher
                  with whom the discussions are in progress. The authors will be
                  consented before recommending the manuscript for publication,
                  and it may be a subscription based (free of cost) and/or an
                  open access (paid, but discounted price) journal.{" "}
                  <span className="text-accent">
                    Details of the Scopus journal will be updated to all the
                    registered participants by the end of January 2025.
                  </span>{" "}
                  So, authors who wish to publish in a Scopus journal are
                  encouraged to submit the manuscript in a journal format
                  (available in the downloads section) on or before the due date
                  mentioned in the important dates section.
                </div>
                <a
                  // href="https://forms.gle/x1mrgruoTKrv7PDU9"
                  className={cn(
                    buttonVariants(),
                    "mt-4 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
                  )}
                  onClick={() =>
                    toast.info("Manuscript submission will open soon")
                  }
                >
                  Submit manuscript
                </a>
                <span>
                  Already submitted?{" "}
                  <Link href={"/api/auth/signin"} className="underline">
                    Sign in
                  </Link>
                </span>
              </div>
              <br></br>
            </div>
          </span>
        ) : session.status === "authenticated" ? (
          <>
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
            {submissionStatus?.length
              ? submissionStatus?.map((submission, index) => (
                  <div
                    className="customcol flex flex-col gap-2 text-center text-lg md:text-3xl"
                    key={index}
                  >
                    <span>
                      Paper title:{" "}
                      <span className="text-white">
                        {submission.paperTitle}
                      </span>
                    </span>
                    <span>
                      Paper number:{" "}
                      <span className="text-white">
                        {submission.paperNumber}
                      </span>
                    </span>
                    <span>
                      Status:{" "}
                      <span className="uppercase text-white">
                        {submission.status}
                      </span>
                    </span>
                    <div className="h-[2px] w-full bg-accent" />
                  </div>
                ))
              : "You don't have any submissions."}
          </>
        ) : (
          "Loading..."
        )}
      </>
    </main>
  );
}
