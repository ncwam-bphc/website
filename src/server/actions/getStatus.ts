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
  return {
    email: user.email,
    paperNumber: formatAbstractPaperNumber(user.abstracts[0].papernumber),
    paperTitle: user.abstracts[0].title,
    status: user.abstracts[0].approved ? "approved" : "under review",
  };
};

export default getStatus;
