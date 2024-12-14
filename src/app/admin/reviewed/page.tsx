"use client"
import { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getPapers } from "~/server/actions/getPapers";
import { PapersTable } from "~/components/papers-table"

export default function ReviewedPapersPage() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const { data: papers, isLoading, isError, refetch } = useQuery({
    queryKey: ["allPapers"],
    queryFn: async () => {
      const fetchedPapers = await getPapers('reviewed');
      return fetchedPapers;
    },
    enabled: isInitialLoad,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (isInitialLoad) {
      refetch().then(() => {
        setIsInitialLoad(false);
      });
    }
  }, [isInitialLoad, refetch]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Reviewed Papers</h2>
      {isLoading ? (
        <div>Loading papers...</div>
      ) : isError ? (
        <div>Error loading papers</div>
      ) : (
        <PapersTable papers={papers} />
      )}
    </div>
  )
}