"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { AssignReviewersDialog } from "~/components/assign-reviewers-dialog";
import { useQuery } from "@tanstack/react-query";
import { getPaperAndReviewers } from "~/server/actions/getPaperAndReviewers";
export default function PaperPage() {
  const { id } = useParams();
  const router = useRouter();

  const {
    data: paper,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [id as string],
    queryFn: async () => {
      return await getPaperAndReviewers(id as string);
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !paper) {
    router.replace("/admin");
    return <div>Error loading paper</div>;
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{paper.title}</CardTitle>
          <CardDescription>By {paper.authors}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Paper number: {paper.papernumber}</p>
          <p>Status: {paper.status}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            Reviewers
            {paper.reviewers.length < 2 ? (
              <div className="flex space-x-2">
                <AssignReviewersDialog onAssign={() => null} />
              </div>
            ) : null}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {paper.reviewers.length
            ? paper.reviewers.map((review, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold">
                    Reviewer: {review.reviewer.name ?? review.reviewer.email}
                  </h3>
                  <p>Status: {review.status}</p>
                  <p>Comments: {review.comments}</p>
                </div>
              ))
            : "No reviewers assigned"}
        </CardContent>
      </Card>
    </div>
  );
}
