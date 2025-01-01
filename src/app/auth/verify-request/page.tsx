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

export default function VerifyRequestPage() {
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
      <Card className="mx-auto max-w-lg bg-white bg-opacity-90 text-background shadow-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Success</CardTitle>
          <CardDescription className="text-muted">
            Verify login request
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            A one-time login link has been sent to your email address. Check
            your inbox or spam folder.
            <br />
            <p className="text-sm text-muted">
              Always check the email address before clicking on any link. The
              email should come from{" "}
              <span className="text-nowrap underline">
                ncwam@hyderabad.bits-pilani.ac.in
              </span>
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch text-sm">
          You can safely close this tab.
        </CardFooter>
      </Card>
    </div>
  );
}
