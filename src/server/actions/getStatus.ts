"use server";

import { formatAbstractPaperNumber } from "~/lib/utils";
import { db } from "../db";

const getStatus = async (email: string) => {
  const user = await db.query.users.findFirst({
    where(fields, operators) {
      return operators.eq(fields.email, email);
    },
    with: {
      abstracts: true,
    },
  });
  if (!user?.abstracts[0]) return null;
  return user?.abstracts.length
    ? user.abstracts.map((e) => ({
        paperNumber: formatAbstractPaperNumber(e.papernumber),
        paperTitle: e.title,
        status: e.approved ? "approved" : "under review",
      }))
    : null;
};

export default getStatus;
