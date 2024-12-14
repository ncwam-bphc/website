import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function ReviewerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session?.user.role !== "reviewer") {
    redirect("/");
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 pt-4 text-2xl font-bold text-white">
        Reviewer portal
      </h1>
      <div className="mt-4">{children}</div>
    </div>
  );
}
