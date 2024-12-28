"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button, buttonVariants } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import {
  changeStatus,
  getAssignedAbstracts,
} from "~/server/actions/assignedAbstracts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { cn } from "~/lib/utils";

const MAX_CHARS = 200;

export default function ReviewerDashboard() {
  const [comments, setComments] = useState<Record<number, string>>({});
  const queryClient = useQueryClient();
  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["assignedAbstracts"],
    queryFn: async () => {
      return await getAssignedAbstracts();
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });

  const changeStatusMutation = useMutation({
    mutationFn: async ({
      id,
      status,
    }: {
      id: number;
      status: boolean | null;
    }) => {
      return await changeStatus({
        papernumber: id,
        newStatus: status,
        comment: comments[id],
      });
    },
  });

  useEffect(() => {
    if (reviews) {
      setComments(
        reviews.reduce(
          (acc, review) => {
            acc[review.for] = review.comments ?? "";
            return acc;
          },
          {} as Record<number, string>,
        ),
      );
    }
  }, [reviews]);

  const handleAction = (id: number, status: boolean | null) => {
    void changeStatusMutation.mutate(
      { id, status },
      {
        onSettled: () => {
          void queryClient.refetchQueries({
            queryKey: ["assignedAbstracts"],
          });
        },
      },
    );
  };

  const handleCommentChange = (id: number, value: string) => {
    if (value.length <= MAX_CHARS) {
      setComments((prevComments) => ({ ...prevComments, [id]: value }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Your Assigned Abstracts
      </h1>
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        {reviews?.length
          ? reviews.map((review, index) => (
              <Card key={index} className="w-full text-left">
                <CardHeader>
                  <CardTitle>{review.abstract.papernumber}</CardTitle>
                  <a
                    href={review.abstract.upload ?? "#"}
                    target="_blank"
                    className={cn(buttonVariants(), "self-center")}
                  >
                    View abstract <OpenInNewWindowIcon />
                  </a>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                      Title:
                      <span className="text-muted-foreground">
                        {review.abstract.title}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      Authors:
                      <span className="text-muted-foreground">
                        {review.abstract.authors}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      Affiliation:
                      <span className="text-muted-foreground">
                        {review.abstract.affiliation}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      Department:
                      <span className="text-muted-foreground">
                        {review.abstract.department}
                      </span>
                    </div>
                  </div>
                  {review.response !== null ? (
                    <div className="flex flex-col gap-2 pt-2">
                      <p className="font-semibold">
                        Status:{" "}
                        <span
                          className={
                            review.response ? "text-green-600" : "text-red-600"
                          }
                        >
                          {review.response ? "Approved" : "Rejected"}
                        </span>
                      </p>
                      {review.comments && <p>Comment: {review.comments}</p>}
                      <Button
                        variant="outline"
                        onClick={() => handleAction(review.for, null)}
                        className="self-center"
                      >
                        Delete Response
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 pt-4">
                      <div>
                        <Textarea
                          placeholder={`Add your comment here (optional, max ${MAX_CHARS} characters)`}
                          value={comments[review.for] ?? ""}
                          onChange={(e) =>
                            handleCommentChange(review.for, e.target.value)
                          }
                        />
                        <p className="text-sm text-gray-500">
                          {MAX_CHARS - (comments[review.for]?.length ?? 0)}{" "}
                          characters remaining
                        </p>
                      </div>
                      <div className="flex space-x-4">
                        <Button
                          onClick={() => handleAction(review.for, true)}
                          className="flex-1"
                        >
                          Approve
                        </Button>
                        <Button
                          onClick={() => handleAction(review.for, false)}
                          variant="destructive"
                          className="flex-1"
                        >
                          Reject
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          : isLoading
            ? "Loading..."
            : isError
              ? "Error loading abstracts"
              : "No abstracts assigned to you"}
      </div>
    </div>
  );
}
