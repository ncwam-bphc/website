"use server";

import { db } from "../db";
import { abstracts } from "../db/schema";
import { eq } from "drizzle-orm";
import { auth } from "../auth";
import { getAbstractPaperNumber } from "~/lib/utils";
export async function updatePaperStatus(papernumber: string, status: boolean) {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    throw new Error("Unauthorized");
  }
  try {
    const paperId = getAbstractPaperNumber(papernumber);
    const updated = await db
      .update(abstracts)
      .set({
        status: status
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