"use client"
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs"
import Link from "next/link"
import { redirect, useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/")
    }
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (session?.user?.role !== 'admin') {
    redirect("/")
    return null;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin admin</h1>
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all" asChild>
            <Link href="/admin">All Papers</Link>
          </TabsTrigger>
          <TabsTrigger value="submitted" asChild>
            <Link href="/admin/submitted">Submitted</Link>
          </TabsTrigger>
          <TabsTrigger value="assigned" asChild>
            <Link href="/admin/assigned">Assigned</Link>
          </TabsTrigger>
          <TabsTrigger value="reviewed" asChild>
            <Link href="/admin/reviewed">Reviewed</Link>
          </TabsTrigger>
          <TabsTrigger value="accepted" asChild>
            <Link href="/admin/accepted">Accepted</Link>
          </TabsTrigger>
          <TabsTrigger value="rejected" asChild>
            <Link href="/admin/rejected">Rejected</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="mt-4">
        {children}
      </div>
    </div>
  )
}

