"use server";
import { and, eq } from "drizzle-orm";
import { getAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../../auth";
import { db } from "../../db";
import { abstractReviewers } from "../../db/schema";
import { deleteReviewerSchema } from "~/schemas";

export async function deleteReviewer(data: {
  papernumber: string;
  reviewerId: string;
}) {
  const session = await auth();
  if (!session || session.user.role !== "admin")
    throw new Error("Unauthorized");
  const parsed = deleteReviewerSchema.parse(data);
  const paperId = getAbstractPaperNumber(parsed.papernumber);
  await db
    .delete(abstractReviewers)
    .where(
      and(
        eq(abstractReviewers.for, paperId),
        eq(abstractReviewers.reviewer, parsed.reviewerId),
      ),
    );
  return true;
}

export type deleteReviewerParamsType = Parameters<typeof deleteReviewer>[0];
