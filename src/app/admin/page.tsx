"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPapers } from "~/server/actions/abstract/getPapers";
import { PapersTable } from "~/components/papers-table";
import { buttonVariants } from "~/components/ui/button";
import Link from "next/link";

export default function AdminPage() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [filter, setFilter] = useState<
    "submitted" | "assigned" | "accepted" | "rejected" | "all"
  >("all");
  const {
    data: papers,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["allPapers"],
    queryFn: async () => {
      const fetchedPapers = await getPapers();
      return fetchedPapers;
    },
    enabled: isInitialLoad,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (isInitialLoad) {
      void refetch().then(() => {
        setIsInitialLoad(false);
      });
    }
  }, [isInitialLoad, refetch]);

  return (
    <div className="space-y-4">
      <Link href="/admin/stats" className={buttonVariants()}>
        Stats
      </Link>
      {isLoading ? (
        <div>Loading papers...</div>
      ) : isError ? (
        <div>Error loading papers</div>
      ) : (
        <PapersTable
          papers={papers ?? []}
          filter={filter}
          setFilter={setFilter}
        />
      )}
    </div>
  );
}
