"use server";
import { and, eq } from "drizzle-orm";
import { getAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../auth";
import { db } from "../db";
import { abstractReviewers } from "../db/schema";

export async function deleteReviewer(papernumber: string, reviewerEmail: string) {
  const session = await auth();
  if (!session || session.user.role !== "admin")
    throw new Error("Unauthorized");
  const paperId = getAbstractPaperNumber(papernumber);
  const reviewer = await db.query.users.findFirst({
    where(fields, { and, eq }) {
      return and(eq(fields.email, reviewerEmail), eq(fields.role, "reviewer"));
    },
  });
  if (!reviewer)
    throw new Error("Either user doesn't exist or doesn't have reviewer role");
  await db
    .delete(abstractReviewers)
    .where(
      and(
        eq(abstractReviewers.for, paperId),
        eq(abstractReviewers.reviewer, reviewer.id)
      )
    );
  return true;
}