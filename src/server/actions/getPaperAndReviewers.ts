"use server";
import { formatAbstractPaperNumber, getAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../auth";
import { db } from "../db";
import { getPaperAndReviewersSchema } from "~/schemas";

export async function getPaperAndReviewers(data: { papernumber: string }) {
  const session = await auth();
  if (!session || session.user.role !== "admin")
    throw new Error("Unauthorized");
  const parsed = getPaperAndReviewersSchema.parse(data);

  const paperId = getAbstractPaperNumber(parsed.papernumber);
  const paper = await db.query.abstracts.findFirst({
    with: {
      user: {
        columns: {
          name: true,
          email: true,
        },
      },
      reviewers: {
        with: {
          reviewer: true,
        },
      },
    },
    where: (fields, { eq }) => eq(fields.papernumber, paperId),
  });

  if (!paper) throw new Error("Paper not found");
  const frontendStatus =
    paper.status === true
      ? "accepted"
      : paper.status === false
        ? "resubmit"
        : paper.reviewers.length > 0
          ? "assigned"
          : "submitted";

  return {
    ...paper,
    frontendStatus,
    authors: paper.user.name ?? paper.user.email,
    reviewers: paper.reviewers.map(({ reviewer, comments, response }) => ({
      reviewer: {
        id: reviewer.id,
        name: reviewer.name,
        email: reviewer.email,
      },
      status:
        response === null
          ? "under review"
          : response === true
            ? "approved"
            : "rejected",
      comments: comments ?? "",
    })),
    papernumber: formatAbstractPaperNumber(paper.papernumber),
  };
}

export type getPaperAndReviewersParamsType = Parameters<
  typeof getPaperAndReviewers
>[0];
