import { redirect } from "next/navigation";
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
      <h1 className="mb-4 text-2xl font-bold">Admin</h1>
      <div className="mt-4">{children}</div>
    </div>
  );
}
