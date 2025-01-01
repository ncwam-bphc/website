"use server";

import { db } from "../db";
import { abstracts } from "../db/schema";
import { eq } from "drizzle-orm";
import { auth } from "../auth";
import { formatAbstractPaperNumber, getAbstractPaperNumber } from "~/lib/utils";
import { updatePaperStatusSchema } from "~/schemas";
import { env } from "~/env";
import nodemailer from "nodemailer";

const sendMail = async (
  email: string,
  name: string,
  paper: number,
  status: boolean,
) => {
  const mailHtml = `<p>Dear ${name},</p>
        
<p>Your abstract submission has been reviewed.</p>

<p><strong>Paper Number:</strong> ${formatAbstractPaperNumber(paper)}<br />
<strong>Status:</strong> <span style="color: ${status ? "green" : "red"};">${status ? "Accepted" : "Rejected"}</span></p>

<p>With best regards,<br>
Dr. Jeevan Jaidi & Dr. P. Jayaprakash Sharma<br>
Convener & Co-Convener, NCWAM-2025<br>
E-mail: ncwam@hyderabad.bits-pilani.ac.in<br>
Conference webpage: <a href="https://www.ncwambitshyderabad.com/" target="_blank">https://www.ncwambitshyderabad.com/</a></p>`;
  if (env.NODE_ENV !== "production") return console.log(mailHtml);
  const transporter = nodemailer.createTransport(env.EMAIL_SERVER);
  const mailOptions = {
    from: "ncwam@hyderabad.bits-pilani.ac.in",
    to: email,
    subject: `Reminder: Pending Review`,
    html: mailHtml,
    messageId: email + paper,
    references: email + paper,
  };

  await transporter.sendMail(mailOptions);
};

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
    } else {
      const user = (await db.query.users.findFirst({
        where(fields, { eq }) {
          return eq(fields.id, updated[0]!.userId);
        },
      }))!;
      void sendMail(
        user.email,
        user.name ?? "Submitter",
        updated[0]!.papernumber,
        parsed.status,
      );
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
