import Link from "next/link";
import { redirect } from "next/navigation";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { auth } from "~/server/auth";
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session?.user.role !== "admin") {
    redirect("/");
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-4">
        <Link href="/admin" className="text-2xl font-bold">
          Admin
        </Link>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
