import z from "zod";
import { db } from "../db";
import { abstracts, users } from "../db/schema";
import nodemailer from "nodemailer";
import { env } from "~/env";
import { formatAbstractPaperNumber } from "~/lib/utils";

async function sendMail(
  to: string,
  title: string,
  paperNumber: number,
  name: string,
) {
  const abstractPaperNumber = formatAbstractPaperNumber(paperNumber);
  const mailHtml = `<p>Dear ${name},</p>
        
<p>Thanks for submitting your “Extended Abstract” to NCWAM-2025. Please retain this automatic E-mail reply, as it contains important details of your paper.</p>

<p><strong>Paper Title:</strong> “${title}”<br>
<strong>Paper Number:</strong> ${abstractPaperNumber}</p>

<p><strong>Important notes:</strong><br>
Your paper number is unique and should be quoted in all future correspondences.<br>
Please check the “IMPORTANT DATES” and “NEWS UPDATE” for further follow-ups.</p>

<p>With best regards,<br>
Dr. Jeevan Jaidi & Dr. P. Jayaprakash Sharma<br>
Convener & Co-Convener, NCWAM-2025<br>
E-mail: ncwam@hyderabad.bits-pilani.ac.in<br>
Conference webpage: <a href="https://www.ncwambitshyderabad.com/">https://www.ncwambitshyderabad.com/</a></p>`;

  if (env.NODE_ENV !== "production") return console.log(mailHtml);
  const transporter = nodemailer.createTransport(env.EMAIL_SERVER);

  const mailOptions = {
    from: "ncwam@hyderabad.bits-pilani.ac.in",
    to: to,
    subject:
      "NCWAM-2025: “Extended Abstract” received and assigned a paper number.",
    html: mailHtml,
  };

  await transporter.sendMail(mailOptions);
}

const abstractCols = z.object({
  status: z.number(),
  data: z
    .object({
      Timestamp: z.coerce.date(),
      "Name in full with title (Prof./Dr./Mr./Mrs./Ms.)": z.string(),
      "E-mail ID": z.string().email(),
      "Mobile number": z.string(),
      "Affiliation in full  (University/R&D/Organization/College/Industry/Others)":
        z.string(),
      "Department name in full": z.string(),
      "Title of the extended abstract": z.string(),
      "Author's details (names of all authors, separated by commas)":
        z.string(),
      "Upload PDF copy of extended abstract": z.string().url(),
    })
    .array(),
});

const onAbstractDataReceived = async (data: unknown) => {
  const parsed = abstractCols.safeParse(data);
  if (!parsed.success)
    throw new Error("Validation error: " + parsed.error.message);
  if (parsed.data.status !== 200) throw new Error("Data fetch failed");
  const responses = parsed.data.data;
  const emails = responses.map((d) => d["E-mail ID"]);
  const existing = new Set(
    (
      await db.query.users.findMany({
        where(fields, { inArray }) {
          return inArray(fields.email, emails);
        },
        columns: {
          email: true,
        },
      })
    ).map((e) => e.email),
  );
  const toAdd = new Set(emails.filter((e) => !existing.has(e)));
  if (toAdd.size === 0) return true;
  for (const entry of responses) {
    if (!toAdd.has(entry["E-mail ID"])) continue;
    await db.transaction(async (tx) => {
      const user = (
        await tx
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
        await tx
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

      await sendMail(
        user.email,
        abstract.title,
        abstract.papernumber,
        user.name ?? "Corresponding author",
      );
    });

    toAdd.delete(entry["E-mail ID"]);
  }
};

export default onAbstractDataReceived;
