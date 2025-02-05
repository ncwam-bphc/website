"use server";

import { db } from "../../db";
import { abstracts } from "../../db/schema";
import { eq } from "drizzle-orm";
import { auth, generateSignInLink } from "../../auth";
import { formatAbstractPaperNumber, getAbstractPaperNumber } from "~/lib/utils";
import { updatePaperStatusSchema } from "~/schemas";
import { env } from "~/env";
import nodemailer from "nodemailer";

const sendMail = async (
  email: string,
  name: string,
  paper: number,
  status: boolean,
  signinLink: string,
) => {
  const mailHtml = `<p>Dear ${name},</p>
        
<p>Your abstract submission has been reviewed, ${status ? "and it has been accepted." : "it is suggested to revise and resubmit incorporating the reviewer's comments."}</p>

<p><strong>Paper Number:</strong> ${formatAbstractPaperNumber(paper)}<br />
<strong>Status:</strong> <span style="color: ${status ? "green" : "red"};">${status ? "Accepted" : "Resubmit"}</span></p>

<p>
You can check current status on the website by logging in using this link: <a href="${signinLink}" target="_blank">Sign in</a>
</p>

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
    subject: `NCWAM Manuscript Submission`,
    html: mailHtml,
    messageId: email + paper,
    references: email + paper,
  };

  await transporter.sendMail(mailOptions);
};

export async function updatePaperStatus(data: {
  papernumber: string;
  status: boolean;
  comments?: string;
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
        comments: parsed.comments,
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
      const signInLink = generateSignInLink(user.email, "/submissions");
      void sendMail(
        user.email,
        user.name ?? "Submitter",
        updated[0]!.papernumber,
        parsed.status,
        signInLink,
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
