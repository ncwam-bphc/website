"use server";
import { formatAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../auth";
import { db } from "../db";

export async function getPapers() {
  try {
    const session = await auth();
    if (!session || session.user.role !== "admin")
      throw new Error("Unauthorized");

    const dbPapers = await db.query.abstracts.findMany({
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
    });

    const papers = dbPapers.map((e) => {
      const frontendStatus =
        e.status === true
          ? "accepted"
          : e.status === false
            ? "rejected"
            : e.reviewers.length > 0
              ? "assigned"
              : "submitted";

      return {
        papernumber: formatAbstractPaperNumber(e.papernumber),
        frontendStatus,
        timestamp: e.timestamp,
        userId: e.userId,
        affiliation: e.affiliation,
        department: e.department,
        title: e.title,
        authors: e.authors,
        upload: e.upload,
        status: e.status,
        user: {
          name: e.user.name ?? "",
          email: e.user.email,
        },
        reviewers: e.reviewers,
      };
    });

    return papers;
  } catch (error) {
    console.error("Error fetching papers:", error);
    return null;
  }
}

export type getPapersReturnType = Exclude<
  Awaited<ReturnType<typeof getPapers>>,
  null
>;
