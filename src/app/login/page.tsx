import { redirect } from "next/navigation";

export default function SignInPage() {
  return redirect("/auth/login");
}
