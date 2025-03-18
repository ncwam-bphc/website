"use server";
import { formatManuscriptPaperNumber } from "~/lib/utils";
import { auth } from "../../auth";
import { db } from "../../db";
import { manuscriptReviewers, manuscripts } from "../../db/schema";
import { and, eq } from "drizzle-orm";
import { changeStatusManuscriptSchema } from "~/schemas";

export async function getAssignedManuscripts() {
  const session = await auth();
  if (
    !session ||
    (session.user.role !== "reviewer" && session.user.role !== "admin")
  )
    throw new Error("Unauthorized");
  return (
    await db.query.manuscriptReviewers.findMany({
      with: {
        abstract: true,
      },
      where: (fields, { eq }) => eq(fields.reviewer, session.user.id),
    })
  ).map((review) => ({
    ...review,
    abstract: {
      ...review.abstract,
      papernumber: formatManuscriptPaperNumber(
        review.abstract.papernumber,
        review.abstract.authors,
      ),
    },
  }));
}

export async function changeStatusManuscript(data: {
  papernumber: number;
  newStatus: boolean | null;
  fileUrl?: string;
  fileName?: string;
}) {
  const session = await auth();
  if (
    !session ||
    (session.user.role !== "reviewer" && session.user.role !== "admin")
  )
    throw new Error("Unauthorized");
  const parsed = changeStatusManuscriptSchema.parse(data);
  const paper = await db.query.manuscripts.findFirst({
    where: eq(manuscripts.papernumber, parsed.papernumber),
  });
  if (paper?.status !== null) throw new Error("Abstract already reviewed");
  const updated = await db
    .update(manuscriptReviewers)
    .set({
      response: parsed.newStatus,
      uploadUrl: parsed.newStatus !== null ? (parsed.fileUrl ?? null) : null,
      uploadName: parsed.newStatus !== null ? (parsed.fileName ?? null) : null,
    })
    .where(
      and(
        eq(manuscriptReviewers.reviewer, session.user.id),
        eq(manuscriptReviewers.for, parsed.papernumber),
      ),
    )
    .returning();
  if (updated.length === 0) throw new Error("Manuscript not found");
}

export type changeStatusManuscriptParamsType = Parameters<
  typeof changeStatusManuscript
>[0];
