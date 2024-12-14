"use server";
import { formatAbstractPaperNumber } from "~/lib/utils";
import { auth } from "../auth";
import { db } from "../db";

type PaperStatus =
  | "submitted"
  | "assigned"
  | "reviewed"
  | "accepted"
  | "rejected";

export async function getPapers(status?: PaperStatus) {
  try {
    const session = await auth();
    if (!session || session.user.role !== "admin")
      throw new Error("Unauthorized");
    return (
      await db.query.abstracts.findMany({
        with: {
          user: {
            columns: {
              name: true,
              email: true,
            },
          },
        },
        where: status
          ? (fields, { eq }) => eq(fields.status, status)
          : undefined,
      })
    ).map((e) => ({
      ...e,
      papernumber: formatAbstractPaperNumber(e.papernumber),
    }));
  } catch (error) {
    console.error("Error fetching papers:", error);
    return null;
  }
}
