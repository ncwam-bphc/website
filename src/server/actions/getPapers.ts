"use server";
import { formatAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../auth";
import { db } from "../db";
import type { PaperFrontendStatus, Paper } from "~/lib/data";

function validateFrontendStatus(status: string): PaperFrontendStatus {
  const validStatuses: PaperFrontendStatus[] = [
    'submitted',
    'assigned',
    'accepted',
    'rejected'
  ];
  
  if (validStatuses.includes(status as PaperFrontendStatus)) {
    return status as PaperFrontendStatus;
  }
  return 'submitted';
}

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
      }
    });

    const papers: Paper[] = dbPapers.map((e) => {
      let frontendStatus: PaperFrontendStatus;
      
      if (e.status === true) {
        frontendStatus = 'accepted';
      } else if (e.status === false) {
        frontendStatus = 'rejected';
      } else {
        if (e.reviewers.length === 0) {
          frontendStatus = 'submitted';
        } else {
          frontendStatus = 'assigned';
        }
      }

      return {
        papernumber: formatAbstractPaperNumber(e.papernumber),
        frontendStatus: validateFrontendStatus(frontendStatus),
        timestamp: e.timestamp,
        userId: e.userId,
        affiliation: e.affiliation,
        department: e.department,
        title: e.title,
        authors: e.authors,
        upload: e.upload,
        status: e.status,
        user: {
          name: e.user.name ?? '',
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