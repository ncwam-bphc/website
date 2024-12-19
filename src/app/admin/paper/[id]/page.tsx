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
import { CheckCircle, Trash2, XCircle } from 'lucide-react';
import { Button } from "~/components/ui/button";
import { updatePaperStatus } from "~/server/actions/finalResponse";
export default function PaperPage() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  
  const updateStatusMutation = useMutation({
    mutationFn: async ({ papernumber, status }: { papernumber: string; status: boolean }) => {
      return await updatePaperStatus(papernumber, status);
    },
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: [id as string],
      });
    },
  });
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

  const handleStatusUpdate = (status: boolean) => {
    void updateStatusMutation.mutate(
      { papernumber: id as string, status },
      {
        onError: (error) => {
          console.error("Failed to update paper status:", error);
        },
        onSettled: () => {
          void queryClient.invalidateQueries({
            queryKey: [id as string],
          });
        },
      }
    );
  };
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
      <Card>
        <CardHeader>
          <CardTitle>Final Decision</CardTitle>
          <CardDescription>Make a final decision on this paper</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button
              onClick={() => handleStatusUpdate(true)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
              disabled={updateStatusMutation.isPending}
            >
              <CheckCircle className="h-5 w-5" />
              Accept Paper
            </Button>
            <Button
              onClick={() => handleStatusUpdate(false)}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white"
              disabled={updateStatusMutation.isPending}
            >
              <XCircle className="h-5 w-5" />
              Reject Paper
            </Button>
          </div>
          {updateStatusMutation.isPending && (
            <p className="mt-2 text-sm text-gray-500">Updating status...</p>
          )}
          {updateStatusMutation.isError && (
            <p className="mt-2 text-sm text-red-500">Failed to update status. Please try again.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}