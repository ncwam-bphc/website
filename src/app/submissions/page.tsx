"use client";
import bg from "~/assets/aboutconference/bg.webp";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import getStatus from "~/server/actions/getStatus";
import { cn } from "~/lib/utils";
import { Button, buttonVariants } from "~/components/ui/button";
import Link from "next/link";

export default function SubmissionsPage() {
  const session = useSession();
  const { data: submissionStatus } = useQuery({
    queryKey: ["submissionStatus"],
    queryFn: async () => {
      const email = session.data?.user?.email;
      return email ? getStatus(email) : null;
    },
    enabled: session.status === "authenticated",
    placeholderData: [
      {
        paperTitle: "Loading...",
        paperNumber: "Loading...",
        status: "Loading...",
      },
    ],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 px-4 text-center max-md:gap-1 md:gap-4 md:px-8">
      <Image
        src={bg}
        alt="Conference background"
        fill={true}
        className="-z-20 object-cover opacity-10"
        priority
      />
      {session.status === "authenticated" ? (
        <>
          <div className="text-nowrap text-center text-3xl font-bold uppercase text-accent md:text-5xl">
            abstract submission(s)
          </div>
          <span>
            Email:{" "}
            <span className="pr-2 text-white">{session.data.user?.email}</span>
            <Button
              variant="poppy"
              className="rounded-xl bg-accent px-3 py-2 text-base font-semibold text-white hover:bg-accent/80"
              onClick={async () => {
                await signOut();
                window.location.href = "/";
              }}
            >
              Signout
            </Button>
          </span>
          {submissionStatus?.map((submission, index) => (
            <div
              className="customcol flex flex-col gap-2 text-center text-3xl"
              key={index}
            >
              <span>
                Paper title:{" "}
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
              <div className="h-[2px] w-full bg-accent" />
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="text-nowrap text-center text-3xl font-bold uppercase text-accent md:text-5xl">
            Submissions
          </div>
          <div className="text-center text-3xl">
            Extended Abstract submission window is active now
          </div>
          <a
            href="https://forms.gle/x1mrgruoTKrv7PDU9"
            className={cn(
              buttonVariants(),
              "rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white hover:bg-accent/80 md:px-6 md:py-6 md:text-xl",
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
        </>
      )}
    </main>
  );
}
