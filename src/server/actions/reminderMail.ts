"use server";

import { and, eq } from "drizzle-orm";
import { getAbstractPaperNumber } from "~/lib/utils";
import { auth, generateSignInLink } from "../auth";
import { db } from "../db";
import { abstractReviewers } from "../db/schema";
import { deleteReviewerSchema } from "~/schemas";
import { env } from "~/env";
import nodemailer from "nodemailer";

const sendMail = async (
  email: string,
  name: string,
  paper: string,
  link: string,
) => {
  const mailHtml = `<p>Dear ${name},</p>
        
<p>This is a reminder to review the abstract paper assigned to you. Please complete the review at your earliest convenience.</p>

<p><strong>Paper Number:</strong> ${paper}</p>

<p><strong>Note:</strong><br>
You can review the abstract paper on the website by logging in using this link: <a href="${link}" target="_blank">Sign in</a><br>

<p>With best regards,<br>
NCWAM-2025 Committee<br>
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

export const sendIndividualReminder = async (data: {
  papernumber: string;
  reviewerId: string;
}) => {
  const session = await auth();
  if (!session || session.user.role !== "admin")
    throw new Error("Unauthorized");
  const parsed = deleteReviewerSchema.parse(data);
  const paperId = getAbstractPaperNumber(parsed.papernumber);

  const assigned = await db.query.abstractReviewers.findFirst({
    where: and(
      eq(abstractReviewers.for, paperId),
      eq(abstractReviewers.reviewer, parsed.reviewerId),
    ),
    with: {
      reviewer: true,
    },
  });

  if (!assigned) throw new Error("No such assignment found");
  if (assigned.response !== null) throw new Error("Response already submitted");

  const reviewerEmail = assigned.reviewer.email;
  const reviewerName = assigned.reviewer.name ?? "Reviewer";
  const paperNumber = parsed.papernumber;
  const signinLink = generateSignInLink(reviewerEmail, "/review");

  await sendMail(reviewerEmail, reviewerName, paperNumber, signinLink);
};
