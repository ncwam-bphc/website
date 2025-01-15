"use server";
import { formatAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../auth";
import { db } from "../db";
import { abstractReviewers, abstracts } from "../db/schema";
import { and, eq } from "drizzle-orm";
import { changeStatusSchema } from "~/schemas";

export async function getAssignedAbstracts() {
  const session = await auth();
  if (
    !session ||
    (session.user.role !== "reviewer" && session.user.role !== "admin")
  )
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

export async function changeStatus(data: {
  papernumber: number;
  newStatus: boolean | null;
  comment?: string;
}) {
  const session = await auth();
  if (
    !session ||
    (session.user.role !== "reviewer" && session.user.role !== "admin")
  )
    throw new Error("Unauthorized");
  const parsed = changeStatusSchema.parse(data);
  const paper = await db.query.abstracts.findFirst({
    where: eq(abstracts.papernumber, parsed.papernumber),
  });
  if (paper?.status !== null) throw new Error("Abstract already reviewed");
  const updated = await db
    .update(abstractReviewers)
    .set({
      response: parsed.newStatus,
      comments:
        parsed.newStatus !== null
          ? parsed.comment?.length
            ? parsed.comment
            : null
          : null,
    })
    .where(
      and(
        eq(abstractReviewers.reviewer, session.user.id),
        eq(abstractReviewers.for, parsed.papernumber),
      ),
    )
    .returning();
  if (updated.length === 0) throw new Error("Abstract not found");
}

export type changeStatusParamsType = Parameters<typeof changeStatus>[0];
