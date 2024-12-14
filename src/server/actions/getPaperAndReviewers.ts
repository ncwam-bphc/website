"use server";
import { formatAbstractPaperNumber, getAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../auth";
import { db } from "../db";

export async function getPaperAndReviewers(papernumber: string) {
  const session = await auth();
  if (!session || session.user.role !== "admin")
    throw new Error("Unauthorized");
  const paperId = getAbstractPaperNumber(papernumber);
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
  return {
    ...paper,
    reviewers: paper.reviewers.map(({ response, ...e }) => ({
      ...e,
      status:
        response === null ? "under review" : response ? "approved" : "rejected",
    })),
    papernumber: formatAbstractPaperNumber(paper.papernumber),
  };
}
