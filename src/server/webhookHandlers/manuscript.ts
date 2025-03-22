import z from "zod";
import { db } from "../db";
import { manuscripts } from "../db/schema";
import nodemailer from "nodemailer";
import { env } from "~/env";
import {
  formatManuscriptPaperNumber,
  getAbstractPaperNumber,
} from "~/lib/utils";
import { generateSignInLink } from "../auth";

async function sendMail(
  to: string,
  title: string,
  paperNumber: number,
  name: string,
  authors: string,
  signinLink: string,
) {
  const manuscriptPaperNumber = formatManuscriptPaperNumber(
    paperNumber,
    authors,
  );
  const mailHtml = `<p>Dear ${name},</p>
        
<p>Thanks for submitting your “Manuscript” to NCWAM-2025. Please retain this automatic E-mail reply, as it contains important details of your paper.</p>

<p><strong>Paper Title:</strong> “${title}”<br>
<strong>Paper Number:</strong> ${manuscriptPaperNumber}</p>

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
    subject: "NCWAM-2025: “Manuscript” received and assigned a paper number.",
    html: mailHtml,
    messageId: manuscriptPaperNumber,
    references: manuscriptPaperNumber,
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
      "Name of Author, who presented in NCWAM-2025": z.string().trim(),
      "Extended abstract number ( xxx-abstract-NCWAM2025) ": z.string().trim(),
      "Title of the manuscript": z.string().trim(),
      "Author's details (names of all authors, separated by commas)": z
        .string()
        .trim(),
      "Upload manuscript (MS Word file without turnitin  checked) with file name as, xxx-manuscript-NCWAM2025-first author name.": z.string().url(),
      "Upload turnitin report of manuscript (PDF file) with file name as, xxx-turnitin report-NCWAM2025-first author name.":
        z.string().url(),
      "Upload filled-up and signed Copyright Form (PDF file ) with file name as, xxx-Copyright-NCWAM2025-first author name.": z.string().trim(),
    })
    .array(),
});

const onManuscriptDataReceived = async (data: unknown) => {
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
      await db.query.manuscripts.findMany({
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
    const abstract = await db.query.abstracts.findFirst({
      where({ papernumber }, { eq }) {
        return eq(
          papernumber,
          getAbstractPaperNumber(
            entry["Extended abstract number ( xxx-abstract-NCWAM2025) "],
          ),
        );
      },
      with: {
        user: true,
      },
    });
    if (!abstract) {
      console.error(
        "Abstract not found for manuscript",
        entry["Extended abstract number ( xxx-abstract-NCWAM2025) "],
      );
      continue;
    }
    if (abstract.user.email !== entry["E-mail ID"]) {
      console.error(
        "Email mismatch for manuscript",
        entry["Extended abstract number ( xxx-abstract-NCWAM2025) "],
      );
      continue;
    }
    const manuscript = (
      await db
        .insert(manuscripts)
        .values({
          papernumber: abstract.papernumber,
          userId: abstract.userId,
          affiliation:
            entry[
              "Affiliation in full  (University/R&D/Organization/College/Industry/Others)"
            ],
          uploadWord:
            entry[
              "Upload manuscript (MS Word file without turnitin  checked) with file name as, xxx-manuscript-NCWAM2025-first author name."
            ],
          uploadPdf:
            entry[
              "Upload turnitin report of manuscript (PDF file) with file name as, xxx-turnitin report-NCWAM2025-first author name."
            ],
          copyrightForm: entry["Upload filled-up and signed Copyright Form (PDF file ) with file name as, xxx-Copyright-NCWAM2025-first author name."],
          presentor: entry["Name of Author, who presented in NCWAM-2025"],
          transactionNumber:
            null,
          department: entry["Department name in full"],
          title: entry["Title of the manuscript"],
          authors:
            entry[
              "Author's details (names of all authors, separated by commas)"
            ],
          timestamp: entry.Timestamp,
        })
        .returning()
    )[0]!;
    const signinLink = generateSignInLink(abstract.user.email, "/submissions");
    await sendMail(
      abstract.user.email,
      manuscript.title,
      manuscript.papernumber,
      entry["Name in full with title (Prof./Dr./Mr./Mrs./Ms.)"] ?? "Submitter",
      manuscript.authors,
      signinLink,
    );
  }
  return true;
};

export default onManuscriptDataReceived;
