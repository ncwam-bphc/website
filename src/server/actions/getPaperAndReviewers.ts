"use server";
import { formatAbstractPaperNumber, getAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../auth";
import { db } from "../db";

function determineFrontendStatus(paper: {
    status: boolean | null;
    reviewers: any[];
}): string {
    if (paper.status === true) return "accepted";
    if (paper.status === false) return "rejected";
    if (paper.reviewers.length === 0) return "submitted";
    if (paper.reviewers.length === 1) return "assigned(01)";
    if (paper.reviewers.length === 2) return "assigned(02)";
    return "submitted";
}

export async function getPaperAndReviewers(papernumber: string) {
    const session = await auth();
    if (!session || session.user.role !== "admin") throw new Error("Unauthorized");

    const paperId = getAbstractPaperNumber(papernumber);
    const paper = await db.query.abstracts.findFirst({
        with: {
            user: { 
                columns: { 
                    name: true, 
                    email: true 
                } 
            },
            reviewers: { 
                with: { 
                    reviewer: true 
                } 
            },
        },
        where: (fields, { eq }) => eq(fields.papernumber, paperId),
    });

    if (!paper) throw new Error("Paper not found");
    const frontendStatus = determineFrontendStatus({
        status: paper.status,
        reviewers: paper.reviewers
    });

    return {
        ...paper,
        frontendStatus,
        authors: paper.user.name || paper.user.email,
        reviewers: paper.reviewers.map(({ reviewer, comments, response }) => ({
            reviewer: {
                name: reviewer.name,
                email: reviewer.email,
            },
            status: response === null ? "under review" : response === true ? "approved" : "rejected",
            comments: comments || "",
        })),
        papernumber: formatAbstractPaperNumber(paper.papernumber),
    };
}