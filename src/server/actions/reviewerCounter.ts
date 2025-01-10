"use server";

import { db } from "../db";
import { and, eq } from "drizzle-orm";
import { users, abstractReviewers } from "../db/schema";
import { auth } from "../auth";

export async function getReviewersData() {
  try {
    const session = await auth();
    if (!session || session.user.role !== "admin") 
      throw new Error("Unauthorized");

    const reviewers = await db.query.users.findMany({
      where: eq(users.role, "reviewer"),
      columns: {
        id: true,
        name: true,
        email: true,
      },
    });

    const assignments = await db.query.abstractReviewers.findMany({
      columns: {
        reviewer: true,
      },
    });

    const assignmentCounts = new Map<string, number>();
    assignments.forEach(assignment => {
      const currentCount = assignmentCounts.get(assignment.reviewer) || 0;
      assignmentCounts.set(assignment.reviewer, currentCount + 1);
    });

    const reviewersData = reviewers.map(reviewer => [
      reviewer.id,
      reviewer.name || reviewer.email,
      assignmentCounts.get(reviewer.id) || 0
    ]);

    return reviewersData;
  } catch (error) {
    console.error("Error fetching reviewers data:", error);
    return null;
  }
}

export type getReviewersDataReturnType = Exclude<
  Awaited<ReturnType<typeof getReviewersData>>,
  null
>;