"use server";

import { formatAbstractPaperNumber } from "~/lib/utils";
import { db } from "../db";
import { auth } from "../auth";

const getStatus = async () => {
  const session = await auth();
  if (!session) return null;
  const user = await db.query.users.findFirst({
    where(fields, operators) {
      return operators.eq(fields.email, session.user.email!);
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
        status: e.status === true ? "approved" : (e.status === null ? "under review" : "rejected")
      }))
    : null;
};

export default getStatus;
