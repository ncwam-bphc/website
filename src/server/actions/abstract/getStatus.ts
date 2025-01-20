"use server";

import { formatAbstractPaperNumber } from "~/lib/utils";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

const getStatus = async () => {
  const session = await auth();
  if (!session) return null;
  const user = await db.query.users.findFirst({
    where(fields, operators) {
      return operators.eq(fields.email, session.user.email!);
    },
    with: {
      abstracts: {
        with: {
          reviewers: {
            with: {
              reviewer: true,
            },
          },
        },
      },
    },
  });
  if (!user?.abstracts[0]) return null;

  return user.abstracts.length
    ? user.abstracts.map((abstract) => {
        const sortedReviewers = abstract.reviewers.sort((a, b) =>
          a.reviewer.id.localeCompare(b.reviewer.id),
        );

        return {
          paperNumber: formatAbstractPaperNumber(abstract.papernumber),
          paperTitle: abstract.title,
          status:
            abstract.status === true
              ? "approved"
              : abstract.status === null
                ? "under review"
                : "resubmit",
          reviewerA: {
            comment: sortedReviewers[0]?.comments ?? "No comments",
          },
          reviewerB: {
            comment: sortedReviewers[1]?.comments ?? "No comments",
          },
          finalComments: abstract.comments ?? "No comments",
        };
      })
    : null;
};

export default getStatus;
