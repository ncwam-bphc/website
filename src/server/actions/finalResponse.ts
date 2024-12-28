"use server";

import { db } from "../db";
import { abstracts } from "../db/schema";
import { eq } from "drizzle-orm";
import { auth } from "../auth";
import { getAbstractPaperNumber } from "~/lib/utils";
import { updatePaperStatusSchema } from "~/schemas";

export async function updatePaperStatus(data: {
  papernumber: string;
  status: boolean;
}) {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    throw new Error("Unauthorized");
  }
  const parsed = updatePaperStatusSchema.parse(data);
  try {
    const paperId = getAbstractPaperNumber(parsed.papernumber);
    const updated = await db
      .update(abstracts)
      .set({
        status: parsed.status,
      })
      .where(eq(abstracts.papernumber, paperId))
      .returning();

    if (!updated.length) {
      throw new Error("Paper not found");
    }
    return updated[0];
  } catch (error) {
    console.error("Error updating paper status:", error);
    throw new Error("Failed to update paper status");
  }
}

export type updatePaperStatusParamsType = Parameters<
  typeof updatePaperStatus
>[0];
