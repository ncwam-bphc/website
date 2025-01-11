"use client";

import { useState } from "react";
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
import { Trash2, XCircle, Bell } from "lucide-react";
import { Button } from "~/components/ui/button";
import { updatePaperStatus } from "~/server/actions/finalResponse";
import { sendIndividualReminder } from "~/server/actions/reminderMail";
import { cn } from "~/lib/utils";
import { toast } from "sonner";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog";
import Image from "next/image";
import acceptedStamp from "~/assets/admin/accepted.webp";
import rejectedStamp from "~/assets/admin/rejected.webp";

const ACCEPTED = ["accepted", "approved"];
const getStatusColor = (status: string) => {
  const val = status.toLowerCase();
  return ACCEPTED.includes(val)
    ? "text-green-600"
    : val === "rejected"
      ? "text-red-600"
      : "text-yellow-600";
};

export default function PaperPage() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();

  const updateStatusMutation = useMutation({
    mutationFn: async ({
      papernumber,
      status,
    }: {
      papernumber: string;
      status: boolean;
    }) => {
      return await updatePaperStatus({ papernumber, status });
    },
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: [id as string],
      });
    },
    onSuccess: () => {
      toast.success("Success");
    },
    onError: () => {
      toast.error("An error occurred");
    },
  });
  const {
    data: paper,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [id as string],
    queryFn: async () => {
      return await getPaperAndReviewers({ papernumber: id as string });
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const assignReviewerMutation = useMutation({
    mutationFn: assignReviewer,
    onSettled: () => {
      setIsOpen(false);
      void queryClient.refetchQueries({
        queryKey: [id as string],
      });
    },
    onSuccess: () => {
      toast.success("Reviewer assigned");
    },
    onError: () => {
      toast.error("An error occurred");
    },
  });

  const deleteReviewerMutation = useMutation({
    mutationFn: async ({
      papernumber,
      reviewerId,
    }: {
      papernumber: string;
      reviewerId: string;
    }) => {
      return await deleteReviewer({ papernumber, reviewerId });
    },
  });

  const sendIndividualReminderMutation = useMutation({
    mutationFn: async ({
      papernumber,
      reviewerId,
    }: {
      papernumber: string;
      reviewerId: string;
    }) => {
      return await sendIndividualReminder({ papernumber, reviewerId });
    },
    onSuccess: () => {
      toast.success("Reminder sent");
    },
    onError: () => {
      toast.error("Failed to send reminder");
    },
  });

  const handleStatusUpdate = (status: boolean) => {
    void updateStatusMutation.mutate({ papernumber: id as string, status });
  };
  const handleDelete = (reviewerId: string) => {
    void deleteReviewerMutation.mutate(
      { papernumber: id as string, reviewerId },
      {
        onSettled: () => {
          void queryClient.invalidateQueries({
            queryKey: [id as string],
          });
        },
      },
    );
  };

  const handleAction = (reviewerEmail: string, sendEmail: boolean) => {
    void assignReviewerMutation.mutate({
      reviewerEmail,
      papernumber: id as string,
      sendEmail,
    });
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
          <p>Institution: {paper.affiliation}</p>
          <p>Department: {paper.department}</p>
          <p>
            Status:{" "}
            <span
              className={cn("uppercase", getStatusColor(paper.frontendStatus))}
            >
              {paper.frontendStatus}
            </span>
          </p>
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
                  setIsOpen={setIsOpen}
                  onAssign={handleAction}
                />
              </div>
            ) : null}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {paper.reviewers.length
            ? paper.reviewers.map((review, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p>
                        Reviewer:{" "}
                        <span className="font-bold">
                          {review.reviewer.name ?? review.reviewer.email}
                        </span>
                      </p>
                      <p>
                        Status:{" "}
                        <span
                          className={cn(
                            "uppercase",
                            getStatusColor(review.status),
                          )}
                        >
                          {review.status}
                        </span>
                      </p>
                      <p>
                        Comments:{" "}
                        <span className="text-muted-foreground">
                          {review.comments.length ? review.comments : "-"}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDelete(review.reviewer.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      {review.status === "under review" ? (
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            sendIndividualReminderMutation.mutate({
                              papernumber: id as string,
                              reviewerId: review.reviewer.id,
                            })
                          }
                          disabled={
                            sendIndividualReminderMutation.isPending ||
                            sendIndividualReminderMutation.isSuccess
                          }
                        >
                          <Bell className="h-4 w-4" />
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))
            : "No reviewers assigned"}
        </CardContent>
      </Card>
      {paper.status === null ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="float-end flex items-center gap-2"
              disabled={updateStatusMutation.isPending}
            >
              <ExclamationTriangleIcon className="h-5 w-5" />
              Make final decision
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Final Decision</DialogTitle>
              <DialogDescription>
                Make a final decision on this paper
              </DialogDescription>
            </DialogHeader>
            This decision is final and cannot be changed.
            <br />
            An email will be sent to the submitter with the decision.
            <DialogFooter>
              <div className="flex flex-1 justify-between">
                <Button
                  onClick={() => handleStatusUpdate(false)}
                  className="flex items-center gap-2 bg-red-600 text-white hover:bg-red-700"
                  disabled={updateStatusMutation.isPending}
                >
                  <XCircle className="h-5 w-5" />
                  Reject Paper
                </Button>
                <Button
                  onClick={() => handleStatusUpdate(true)}
                  className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
                  disabled={updateStatusMutation.isPending}
                >
                  <XCircle className="h-5 w-5" />
                  Accept Paper
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <Image
          src={paper.status ? acceptedStamp : rejectedStamp}
          alt="status"
          width={200}
          height={200}
          className="object-contain"
        />
      )}
    </div>
  );
}
