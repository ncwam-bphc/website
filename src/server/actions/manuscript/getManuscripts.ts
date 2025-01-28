"use server";
import { formatManuscriptPaperNumber } from "~/lib/utils";
import { auth } from "../../auth";
import { db } from "../../db";

export async function getManuscripts() {
  try {
    const session = await auth();
    if (!session || session.user.role !== "admin")
      throw new Error("Unauthorized");

    const dbPapers = await db.query.manuscripts.findMany({
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
        papernumber: formatManuscriptPaperNumber(e.papernumber,e.authors),
        frontendStatus,
        timestamp: e.timestamp,
        userId: e.userId,
        affiliation: e.affiliation,
        department: e.department,
        title: e.title,
        authors: e.authors,
        uploadWord: e.uploadWord,
        uploadPdf: e.uploadPdf,
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

export type getManuscriptsReturnType = Exclude<
  Awaited<ReturnType<typeof getManuscripts>>,
  null
>;
