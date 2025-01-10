"use client";

import { useEffect, useState } from "react";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {
  getReviewersData,
  type getReviewersDataReturnType,
} from "~/server/actions/reviewerCounter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "~/components/ui/button";

export default function ReviewerDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReviewers, setFilteredReviewers] =
    useState<getReviewersDataReturnType>([]);

  const {
    data: reviewersData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reviewers"],
    queryFn: async () => {
      return await getReviewersData();
    },
  });

  useEffect(() => {
    if (reviewersData) {
      setFilteredReviewers(
        reviewersData.filter(
          (reviewer) =>
            !searchTerm.length ||
            (reviewer.name ?? reviewer.email)
              .toLowerCase()
              .includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [setFilteredReviewers, reviewersData, searchTerm]);

  if (isLoading) {
    return (
      <div className="mx-auto px-4 py-10">
        <div className="text-center">Loading reviewer data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto px-4 py-10">
        <div className="text-center text-red-500">
          Error loading reviewer data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto min-w-[36rem] px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reviewer Statistics</h1>
      </div>
      <div className="mb-4 flex gap-2">
        <Input
          type="text"
          placeholder="Search reviewers..."
          className="flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          onClick={() => {
            // Download CSV of filtered reviewers
            const csvContent = [
              "email,name,assigned",
              ...filteredReviewers.map(
                (r) => `${r.email},${r.name},${r.reviews}`,
              ),
            ].join("\n");
            const blob = new Blob([csvContent], {
              type: "text/csv;charset=utf-8;",
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "assigned.csv";
            link.click();
            URL.revokeObjectURL(url);
          }}
        >
          Download CSV
        </Button>
      </div>
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Assigned Abstracts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReviewers.map((reviewer) => (
              <TableRow key={reviewer.email}>
                <TableCell className="font-medium">{reviewer.email}</TableCell>
                <TableCell>{reviewer.name}</TableCell>
                <TableCell className="text-right">{reviewer.reviews}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
