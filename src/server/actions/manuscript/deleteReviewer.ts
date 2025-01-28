"use server";
import { and, eq } from "drizzle-orm";
import { getManuscriptPaperNumber } from "~/lib/utils";
import { auth } from "../../auth";
import { db } from "../../db";
import { manuscriptReviewers } from "../../db/schema";
import { deleteReviewerSchema } from "~/schemas";

export async function deleteReviewer(data: {
  papernumber: string;
  reviewerId: string;
}) {
  const session = await auth();
  if (!session || session.user.role !== "admin")
    throw new Error("Unauthorized");
  const parsed = deleteReviewerSchema.parse(data);
  const paperId = getManuscriptPaperNumber(parsed.papernumber);
  await db
    .delete(manuscriptReviewers)
    .where(
      and(
        eq(manuscriptReviewers.for, paperId),
        eq(manuscriptReviewers.reviewer, parsed.reviewerId),
      ),
    );
  return true;
}

export type deleteReviewerParamsType = Parameters<typeof deleteReviewer>[0];
