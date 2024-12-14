"use server"
import { db } from "../db"; 
import { abstracts, users } from "~/server/db/schema";
import { eq } from "drizzle-orm";

type PaperStatus = "submitted" | "assigned" | "reviewed" | "accepted" | "rejected";

export async function getPapers(status?: PaperStatus) {
  try {
    if (status) {
      const papers = await db
        .select({
          papernumber: abstracts.papernumber,
          timestamp: abstracts.timestamp,
          userId: abstracts.userId,
          affiliation: abstracts.affiliation,
          department: abstracts.department,
          title: abstracts.title,
          authors: abstracts.authors,
          upload: abstracts.upload,
          approved: abstracts.approved,
          status: abstracts.status,
          user: {
            name: users.name,
            email: users.email,
          }
        })
        .from(abstracts)
        .leftJoin(users, eq(abstracts.userId, users.id))
        .where(eq(abstracts.status, status));
      
      return papers;
    }
    
    console.log("Fetching all papers");
    const papers = await db
      .select({
        papernumber: abstracts.papernumber,
        timestamp: abstracts.timestamp,
        userId: abstracts.userId,
        affiliation: abstracts.affiliation,
        department: abstracts.department,
        title: abstracts.title,
        authors: abstracts.authors,
        upload: abstracts.upload,
        approved: abstracts.approved,
        status: abstracts.status,
        user: {
          name: users.name,
          email: users.email,
        }
      })
      .from(abstracts)
      .leftJoin(users, eq(abstracts.userId, users.id));
    
    return papers;
  } catch (error) {
    console.error("Error fetching papers:", error);
    throw new Error("Failed to fetch papers");
  }
}