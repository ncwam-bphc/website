"use server";

import { formatManuscriptPaperNumber } from "~/lib/utils";
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
      manuscripts: {
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
  if (!user?.manuscripts[0]) return null;

  return user.manuscripts.length
    ? user.manuscripts.map((manuscript) => {
        const sortedReviewers = manuscript.reviewers.sort((a, b) =>
          a.reviewer.id.localeCompare(b.reviewer.id),
        );

        return {
          paperNumber: formatManuscriptPaperNumber(
            manuscript.papernumber,
            manuscript.authors,
          ),
          paperTitle: manuscript.title,
          status:
            manuscript.status === true
              ? "approved"
              : manuscript.status === null
                ? "under review"
                : "resubmit",
          reviewerA: {
            comment: sortedReviewers[0]?.comments ?? "No comments",
          },
          reviewerB: {
            comment: sortedReviewers[1]?.comments ?? "No comments",
          },
          finalComments: manuscript.comments ?? "No comments",
        };
      })
    : null;
};

export default getStatus;
