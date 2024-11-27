"use client";
import bg from "~/assets/aboutconference/bg.webp";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 text-center max-md:gap-1 md:gap-4">
      <Image
        src={bg}
        alt="Conference background"
        fill={true}
        objectFit="cover"
        className="-z-20 opacity-10"
        priority
      />

      <div className="text-nowrap text-center text-3xl font-bold uppercase text-accent md:text-5xl">
        Sign In
      </div>

      <Button
        variant="poppy"
        onClick={() => {
          void signIn("email", { callbackUrl: "/submissions" });
        }}
      >
        Login
      </Button>
    </main>
  );
}
