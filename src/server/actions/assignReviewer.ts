"use server";
import { formatAbstractPaperNumber, getAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../auth";
import { db } from "../db";
import { abstractReviewers } from "../db/schema";

export async function assignReviewer(papernumber: string, reviewerId: string) {
  const session = await auth();
  if (!session || session.user.role !== "admin")
    throw new Error("Unauthorized");
  const paperId = getAbstractPaperNumber(papernumber);
  const userExists = await db.query.users.findFirst({
    where(fields, { and, eq }) {
      return and(eq(fields.id, reviewerId), eq(fields.role, "reviewer"));
    },
  });
  if (!userExists)
    throw new Error("Either user doesn't exist or doesn't have reviewer role");
  await db
    .insert(abstractReviewers)
    .values({
      for: paperId,
      reviewer: reviewerId,
    })
    .onConflictDoNothing();
  return true;
}
