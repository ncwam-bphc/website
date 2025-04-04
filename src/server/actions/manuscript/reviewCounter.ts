"use server";

import { db } from "../../db";
import { inArray } from "drizzle-orm";
import { users } from "../../db/schema";
import { auth } from "../../auth";
import { Reviewers } from "~/assets/admin/manuscriptreviewer";

export async function getReviewersData() {
  try {
    const session = await auth();
    if (!session || session.user.role !== "admin")
      throw new Error("Unauthorized");

    const reviewers = await db.query.users.findMany({
      where: inArray(
        users.email,
        Reviewers.map((r) => r.value),
      ),
      columns: {
        name: true,
        email: true,
      },
      with: {
        mReviews: true,
      },
    });
    return reviewers
      .map((reviewer) => ({
        ...reviewer,
        reviews: reviewer.mReviews.length,
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
