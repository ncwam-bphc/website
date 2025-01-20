"use server";

import { db } from "../../db";
import { eq, or } from "drizzle-orm";
import { users } from "../../db/schema";
import { auth } from "../../auth";

export async function getReviewersData() {
  try {
    const session = await auth();
    if (!session || session.user.role !== "admin")
      throw new Error("Unauthorized");

    const reviewers = await db.query.users.findMany({
      where: or(eq(users.role, "reviewer"), eq(users.role, "admin")),
      columns: {
        name: true,
        email: true,
      },
      with: {
        reviews: true,
      },
    });
    return reviewers
      .map((reviewer) => ({
        ...reviewer,
        reviews: reviewer.reviews.length,
      }))
      .sort((a, b) => a.reviews - b.reviews);
  } catch (error) {
    console.error("Error fetching reviewers data:", error);
    return null;
  }
}

export type getReviewersDataReturnType = Exclude<
  Awaited<ReturnType<typeof getReviewersData>>,
  null
>;
