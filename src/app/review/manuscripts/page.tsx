"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  changeStatus,
  getAssignedManuscripts,
} from "~/server/actions/manuscript/assignedManuscripts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { cn } from "~/lib/utils";
import { toast } from "sonner";
import Link from "next/link";
import { UploadButton } from "~/lib/uploadthing";

export default function ReviewerDashboard() {
  const [uploadUrls, setUploadUrls] = useState<Record<number, string>>({});
  const [uploadNames, setUploadNames] = useState<Record<number, string>>({});
  const queryClient = useQueryClient();
  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["assignedManuscripts"],
    queryFn: async () => {
      return await getAssignedManuscripts();
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
        comment: "",
      });
    },
    onSettled: () => {
      void queryClient.refetchQueries({
        queryKey: ["assignedManuscripts"],
      });
    },
    onSuccess: () => {
      toast.success("success");
    },
    onError: () => {
      toast.error("An error occurred");
    },
  });

  useEffect(() => {
    if (reviews) {
      setUploadUrls(
        reviews.reduce(
          (acc, review) => {
            acc[review.for] = review.uploadUrl ?? "";
            return acc;
          },
          {} as Record<number, string>,
        ),
      );
      setUploadNames(
        reviews.reduce(
          (acc, review) => {
            acc[review.for] = review.uploadName ?? "";
            return acc;
          },
          {} as Record<number, string>,
        ),
      );
    }
  }, [reviews]);

  const handleAction = (id: number, status: boolean | null) => {
    void changeStatusMutation.mutate({ id, status });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Your Assigned Manuscripts
      </h1>
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        {reviews?.length
          ? reviews.map((review, index) => (
              <Card key={index} className="w-full text-left">
                <CardHeader>
                  manuscript
                  <CardTitle>{review.abstract.papernumber}</CardTitle>
                  <a
                    href={review.abstract.uploadPdf ?? "#"}
                    target="_blank"
                    className={cn(buttonVariants(), "self-center")}
                  >
                    View manuscript <OpenInNewWindowIcon />
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
                          {review.response ? "Approved" : "Resubmit"}
                        </span>
                      </p>
                      {review.uploadUrl && (
                        <p>
                          Uploaded File:{" "}
                          <Link href={review.uploadUrl} className="underline">
                            {review.uploadName ?? "Review"}
                          </Link>
                        </p>
                      )}
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
                        <UploadButton
                          endpoint="wordUploader"
                          content={{
                            allowedContent: "MS Word File",
                          }}
                          onUploadError={(e) => {
                            toast.error(`ERROR: ${e.message}`);
                          }}
                          onClientUploadComplete={(ress) => {
                            toast.success("Uploaded");
                            const result = ress[0]!;

                            setUploadUrls((prev) => {
                              const newObj: Record<number, string> =
                                Object.fromEntries(Object.entries(prev));
                              newObj[review.for] = result.url;
                              return newObj;
                            });
                            setUploadNames((prev) => {
                              const newObj: Record<number, string> =
                                Object.fromEntries(Object.entries(prev));
                              newObj[review.for] = result.filename;
                              return newObj;
                            });
                          }}
                        />
                        {uploadUrls[review.for] && (
                          <p>
                            Uploaded File:{" "}
                            <Link
                              href={uploadUrls[review.for] ?? ""}
                              className="underline"
                            >
                              {uploadNames[review.for] ?? "Review"}
                            </Link>
                          </p>
                        )}
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
                          Resubmit
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
              ? "Error loading manuscripts"
              : "No manuscripts assigned to you"}
      </div>
    </div>
  );
}
