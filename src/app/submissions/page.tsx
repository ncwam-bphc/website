"use client";
import bg from "~/assets/aboutconference/bg.webp";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import getStatus from "~/server/actions/getStatus";

export default function SubmissionsPage() {
  const session = useSession();
  const { data: submissionStatus } = useQuery({
    queryKey: ["submissionStatus"],
    queryFn: async () => {
      const email = session.data?.user?.email;
      return email ? getStatus(email) : null;
    },
    enabled: session.status === "authenticated",
    refetchInterval: Infinity,
    placeholderData: {
      email: "Loading...",
      paperNumber: "Loading...",
      status: "Loading...",
    },
  });
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 text-center max-md:gap-1 md:gap-4">
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
            Your submission
          </div>
          <div className="flex flex-col gap-2 text-center text-3xl">
            <span>
              Email:{" "}
              <span className="text-accent">{session.data.user?.email}</span>
            </span>
            <span>
              Paper number:{" "}
              <span className="text-accent">
                {submissionStatus?.paperNumber}
              </span>
            </span>
            <span>
              Status:{" "}
              <span className="uppercase text-accent">
                {submissionStatus?.status}
              </span>
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="text-nowrap text-center text-3xl font-bold uppercase text-accent md:text-5xl">
            Submissions
          </div>

          <div className="text-center text-3xl">
            Extended Abstract submission window will be open from{" "}
            <span className="text-accent">25th November</span> onwards.
          </div>
        </>
      )}
    </main>
  );
}
