"use server";
import { getManuscriptPaperNumber } from "~/lib/utils";
import { auth, generateSignInLink } from "../../auth";
import nodemailer from "nodemailer";
import { db } from "../../db";
import { manuscriptReviewers } from "../../db/schema";
import { assignReviewerSchema } from "~/schemas";
import { env } from "~/env";
import { or } from "drizzle-orm";

const sendMail = async (
  email: string,
  name: string,
  paper: string,
  link: string,
) => {
  const mailHtml = `<p>Dear ${name},</p>
        
<p>An manuscript has been assigned to you for review. The editorial team sincerely requests you to review the manuscript and submit the comments and suggestions by uploading a separate file, within 10 days from today.</p>

<p><strong>Paper Number: </strong> ${paper}</p>

<p><strong>Note:</strong><br>
You can review the manuscript paper on the website by logging in using this link: <a href="${link}" target="_blank">Sign in</a><br>

<p>With best regards,<br>
NCWAM-2025 Committee<br>
E-mail: ncwam@hyderabad.bits-pilani.ac.in<br>
Conference webpage: <a href="https://www.ncwambitshyderabad.com/" target="_blank">https://www.ncwambitshyderabad.com/</a></p>`;
  if (env.NODE_ENV !== "production") return console.log(mailHtml);
  const transporter = nodemailer.createTransport(env.EMAIL_SERVER);
  const mailOptions = {
    from: "ncwam@hyderabad.bits-pilani.ac.in",
    to: email,
    subject: "NCWAM-2025: Review of full paper (manuscript)",
    html: mailHtml,
    messageId: email + paper,
    references: email + paper,
  };

  await transporter.sendMail(mailOptions);
};

export async function assignReviewer(data: {
  papernumber: string;
  reviewerEmail: string;
  sendEmail: boolean;
}) {
  const session = await auth();
  if (!session || session.user.role !== "admin")
    throw new Error("Unauthorized");
  const parsed = assignReviewerSchema.parse(data);
  const paperId = getManuscriptPaperNumber(parsed.papernumber);
  const reviewer = await db.query.users.findFirst({
    where(fields, { and, eq }) {
      return and(
        eq(fields.email, parsed.reviewerEmail),
        or(eq(fields.role, "reviewer"), eq(fields.role, "admin")),
      );
    },
  });
  if (!reviewer)
    throw new Error("Either user doesn't exist or doesn't have reviewer role");
  const inserted = await db
    .insert(manuscriptReviewers)
    .values({
      for: paperId,
      reviewer: reviewer.id,
    })
    .onConflictDoNothing()
    .returning();
  if (inserted.length && parsed.sendEmail) {
    const signInLink = await generateSignInLink(reviewer.email, "/review");
    await sendMail(
      reviewer.email,
      reviewer.name ?? "Reviewer",
      parsed.papernumber,
      signInLink,
    );
  }
  return true;
}

export type assignReviewerParamsType = Parameters<typeof assignReviewer>[0];
