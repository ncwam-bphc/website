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
import { getPaperAndReviewers } from "~/server/actions/getPaperAndReviewers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { assignReviewer } from "~/server/actions/assignReviewer";
import { deleteReviewer } from "~/server/actions/deleteReviewer";
import { Trash2 } from 'lucide-react';
import { Button } from "~/components/ui/button";

export default function PaperPage() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  
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
  
  const assignReviewerMutation = useMutation({
    mutationFn: async ({
      papernumber,
      reviewerEmail,
    }: {
      papernumber: string;
      reviewerEmail: string;
    }) => {
      return await assignReviewer(papernumber, reviewerEmail);
    },
  });
  
  const deleteReviewerMutation = useMutation({
    mutationFn: async ({
      papernumber,
      reviewerEmail,
    }: {
      papernumber: string;
      reviewerEmail: string;
    }) => {
      return await deleteReviewer(papernumber, reviewerEmail);
    },
  });
  
  const handleDelete = (reviewerEmail: string) => {
    void deleteReviewerMutation.mutate(
      { reviewerEmail, papernumber: id as string },
      {
        onSettled: () => {
          void queryClient.invalidateQueries({
            queryKey: [id as string],
          });
        },
      },
    );
  };
  
  const handleAction = (reviewerEmail: string) => {
    void assignReviewerMutation.mutate(
      { reviewerEmail, papernumber: id as string },
      {
        onSettled: () => {
          void queryClient.invalidateQueries({
            queryKey: [id as string],
          });
        },
        onSuccess: () => {
          setIsOpen(false);
        }
      },
    );
  };
  
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
          <p>Status: {paper.frontendStatus}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            Reviewers
            {paper.reviewers.length < 2 ? (
              <div className="flex space-x-2">
                <AssignReviewersDialog 
                  isOpen={isOpen} 
                  onClose={setIsOpen} 
                  onAssign={handleAction} 
                />
              </div>
            ) : null}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {paper.reviewers.length
            ? paper.reviewers.map((review, index) => (
              <div key={index} className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold">
                    Reviewer: {review.reviewer.name ?? review.reviewer.email}
                  </h3>
                  <p>Status: {review.status}</p>
                  <p>Comments: {review.comments}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => handleDelete(review.reviewer.email)}
                >
                  <Trash2 />
                </Button>
              </div>
            ))
            : "No reviewers assigned"}
        </CardContent>
      </Card>
    </div>
  );
}