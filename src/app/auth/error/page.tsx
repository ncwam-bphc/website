"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import Image from "next/image";
import contactusBg from "~/assets/contactus.webp";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const getErrorDescription = (error: string | null) => {
  switch (error) {
    case "AccessDenied":
      return "Access denied";
    case "Verification":
      return "Unable to sign in";
    default:
      return "An error occurred";
  }
};

const getErrorBody = (error: string | null) => {
  switch (error) {
    case "AccessDenied":
      return (
        <div className="space-y-2">
          You do not have permission to login to this website.
          <br />
          Check if you entered the correct email address.
          <div>
            If you think this is a mistake, please{" "}
            <Link href={"/contactus"} className="underline">
              contact us
            </Link>
            .
          </div>
        </div>
      );
    case "Verification":
      return (
        <div className="space-y-2">
          The sign in link is no longer valid.
          <br />
          It may have been already used or expired.
          <p>Please login again by clicking on the link below.</p>
        </div>
      );
    default:
      return (
        <div className="space-y-2">
          An unknown error occurred.
          <br />
          Please try to login again.
          <p>If the error continues, please contact us.</p>
        </div>
      );
  }
};

function ErrorPageComponent() {
  const searchparams = useSearchParams();
  const error = searchparams.get("error");
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4 sm:p-8 md:pt-24">
      <Image
        src={contactusBg}
        alt="Background"
        fill={true}
        className="-z-20 object-cover"
        priority
      />
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-30 backdrop-blur-sm"></div>
      <Card className="mx-auto max-w-md bg-white bg-opacity-90 text-background shadow-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login Error</CardTitle>
          <CardDescription className="text-muted">
            {getErrorDescription(error)}
          </CardDescription>
        </CardHeader>
        <CardContent>{getErrorBody(error)}</CardContent>
        <CardFooter className="flex-col items-stretch">
          <div></div>
          <Link href={"/auth/login"} className="underline">
            Go to login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <Suspense>
      <ErrorPageComponent />
    </Suspense>
  );
}
