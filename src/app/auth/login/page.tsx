"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import contactusBg from "~/assets/contactus.webp";
import { signIn, useSession } from "next-auth/react";
import { Suspense, useEffect, useState } from "react";
import z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { X } from "lucide-react";

const emailSchema = z.string().email();

const getLoginError = (error: string) => {
  switch (error) {
    case "EmailCreateAccount":
      return (
        <>
          Connection to the database failed.
          <br />
          Please contact us.
        </>
      );
    case "EmailSignin":
      return (
        <>
          Failed to send the email. Please contact us.
          <br />
          Please contact us.
        </>
      );
    default:
      return "Unknown error";
  }
};

function LoginPageComponent() {
  const searchparams = useSearchParams();
  const loginError = searchparams.get("error");
  const [loginErrorToast, setLoginErrorToast] = useState<string | number>("");
  const [emailInput, setEmailInput] = useState("");
  const [inputError, setError] = useState("");
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.replace("/submissions");
  }, [status, router]);

  const handleSignIn = async () => {
    const parsed = emailSchema.safeParse(emailInput);
    if (!parsed.success) {
      setError("Please enter a valid email address");
    } else {
      await signIn("email", { email: parsed.data });
    }
  };

  useEffect(() => {
    console.log(loginError);
    if (loginError && loginErrorToast === "")
      setTimeout(() =>
        setLoginErrorToast(
          toast.error("An error occurred", {
            duration: Infinity,
            action: (
              <Button
                className="ml-auto max-h-5 min-h-5 min-w-5 max-w-5 p-0"
                onClick={() => toast.dismiss(loginErrorToast)}
              >
                <X className="h-4 w-4" />
              </Button>
            ),
            description: getLoginError(loginError),
          }),
        ),
      );
  }, [loginError, loginErrorToast]);

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
      <Card className="mx-auto max-w-sm bg-white bg-opacity-90 text-background shadow-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription className="text-muted">
            Enter your email below to login to the website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
                value={emailInput}
                onChange={(e) => {
                  const parsed = emailSchema.safeParse(e.target.value);
                  if (parsed.success) {
                    setError("");
                  }
                  setEmailInput(e.target.value);
                }}
              />
              {inputError.length ? (
                <p className="text-sm text-red-500">{inputError}</p>
              ) : null}
            </div>
            <Button
              type="submit"
              onClick={handleSignIn}
              className="w-full"
              variant={"poppy"}
            >
              Send One Time Link
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted">
            Upon submitting, you will receive a one-time login link in your
            inbox from ncwam. After clicking on the link you will automatically
            be logged in.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginPageComponent />
    </Suspense>
  );
}
