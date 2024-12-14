"use server";
import { formatAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../auth";
import { db } from "../db";
import { abstractReviewers } from "../db/schema";
import { and, eq } from "drizzle-orm";

export async function getAssignedAbstracts() {
  const session = await auth();
  if (!session || session.user.role !== "reviewer")
    throw new Error("Unauthorized");
  return (
    await db.query.abstractReviewers.findMany({
      with: {
        abstract: true,
      },
      where: (fields, { eq }) => eq(fields.reviewer, session.user.id),
    })
  ).map((review) => ({
    ...review,
    abstract: {
      ...review.abstract,
      papernumber: formatAbstractPaperNumber(review.abstract.papernumber),
    },
  }));
}

export async function changeStatus(
  papernumber: number,
  newStatus: boolean | null,
  comment?: string,
) {
  const session = await auth();
  if (!session || session.user.role !== "reviewer")
    throw new Error("Unauthorized");
  const updated = await db
    .update(abstractReviewers)
    .set({
      response: newStatus,
      comments: newStatus !== null ? (comment?.length ? comment : null) : null,
    })
    .where(
      and(
        eq(abstractReviewers.reviewer, session.user.id),
        eq(abstractReviewers.for, papernumber),
      ),
    )
    .returning();
  if (updated.length === 0) throw new Error("Abstract not found");
}
