import z from "zod";
import { db } from "../db";
import { abstracts, users } from "../db/schema";
import nodemailer from "nodemailer";
import { env } from "~/env";
import { formatAbstractPaperNumber } from "~/lib/utils";
import { generateSignInLink } from "../auth";

async function sendMail(
  to: string,
  title: string,
  paperNumber: number,
  name: string,
  signinLink: string,
) {
  const abstractPaperNumber = formatAbstractPaperNumber(paperNumber);
  const mailHtml = `<p>Dear ${name},</p>
        
<p>Thanks for submitting your “Extended Abstract” to NCWAM-2025. Please retain this automatic E-mail reply, as it contains important details of your paper.</p>

<p><strong>Paper Title:</strong> “${title}”<br>
<strong>Paper Number:</strong> ${abstractPaperNumber}</p>

<p><strong>Important notes:</strong><br>
Your paper number is unique and should be quoted in all future correspondences.<br>
You can check current status on the website by logging in using this link: <a href="${signinLink}" target="_blank">Sign in</a><br>
Please check the “IMPORTANT DATES” and “NEWS UPDATE” on the website for further follow-ups.</p>

<p>With best regards,<br>
Dr. Jeevan Jaidi & Dr. P. Jayaprakash Sharma<br>
Convener & Co-Convener, NCWAM-2025<br>
E-mail: ncwam@hyderabad.bits-pilani.ac.in<br>
Conference webpage: <a href="https://www.ncwambitshyderabad.com/" target="_blank">https://www.ncwambitshyderabad.com/</a></p>`;

  if (env.NODE_ENV !== "production") return console.log(mailHtml);
  const transporter = nodemailer.createTransport(env.EMAIL_SERVER);

  const mailOptions = {
    from: "ncwam@hyderabad.bits-pilani.ac.in",
    to: to,
    subject:
      "NCWAM-2025: “Extended Abstract” received and assigned a paper number.",
    html: mailHtml,
    messageId: abstractPaperNumber,
    references: abstractPaperNumber,
  };

  await transporter.sendMail(mailOptions);
}

const abstractCols = z.object({
  status: z.number(),
  data: z
    .object({
      Timestamp: z.coerce.date(),
      "Name in full with title (Prof./Dr./Mr./Mrs./Ms.)": z.string().trim(),
      "E-mail ID": z.string().trim().email(),
      "Mobile number": z.string().trim(),
      "Affiliation in full  (University/R&D/Organization/College/Industry/Others)":
        z.string().trim(),
      "Department name in full": z.string().trim(),
      "Title of the extended abstract": z.string().trim(),
      "Author's details (names of all authors, separated by commas)": z
        .string()
        .trim(),
      "Upload PDF copy of extended abstract": z.string().url(),
    })
    .array(),
});

const onAbstractDataReceived = async (data: unknown) => {
  const parsed = abstractCols.safeParse(data);
  if (!parsed.success)
    throw new Error(
      "Validation error: " + JSON.stringify(parsed.error.errors, undefined, 4),
    );
  if (parsed.data.status !== 200) throw new Error("Data fetch failed");
  const responses = parsed.data.data.map((d) => ({
    ...d,
    Timestamp: new Date(d.Timestamp.toISOString().split(".")[0]! + "-05:30"),
  }));
  const timestamps = responses.map((d) => d.Timestamp);
  const existing = new Set(
    (
      await db.query.abstracts.findMany({
        columns: {
          timestamp: true,
        },
      })
    ).map((e) => e.timestamp.valueOf()),
  );
  const toAdd = new Set(
    timestamps
      .filter((e) => !existing.has(e.valueOf()))
      .map((e) => e.valueOf()),
  );
  if (toAdd.size === 0) return true;

  for (const entry of responses.filter((e) =>
    toAdd.has(e.Timestamp.valueOf()),
  )) {
    const user = (
      await db
        .insert(users)
        .values({
          email: entry["E-mail ID"],
          name: entry["Name in full with title (Prof./Dr./Mr./Mrs./Ms.)"],
          phone: entry["Mobile number"],
        })
        .onConflictDoUpdate({
          target: [users.email],
          set: {
            name: entry["Name in full with title (Prof./Dr./Mr./Mrs./Ms.)"],
            phone: entry["Mobile number"],
          },
        })
        .returning()
    )[0]!;
    const abstract = (
      await db
        .insert(abstracts)
        .values({
          userId: user.id,
          affiliation:
            entry[
              "Affiliation in full  (University/R&D/Organization/College/Industry/Others)"
            ],
          department: entry["Department name in full"],
          title: entry["Title of the extended abstract"],
          authors:
            entry[
              "Author's details (names of all authors, separated by commas)"
            ],
          timestamp: entry.Timestamp,
          upload: entry["Upload PDF copy of extended abstract"],
        })
        .returning()
    )[0]!;
    const signinLink = await generateSignInLink(user.email, "/submissions");
    await sendMail(
      user.email,
      abstract.title,
      abstract.papernumber,
      user.name ?? "Submitter",
      signinLink,
    );
  }
  return true;
};

export default onAbstractDataReceived;
