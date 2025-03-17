import { relations } from "drizzle-orm";
import {
  text,
  varchar,
  integer,
  timestamp,
  pgTableCreator,
  primaryKey,
  serial,
  boolean,
  bigint,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `ncwam_${name}`);

export const manuscriptReviewers = createTable(
  "manuscriptReviewer",
  {
    for: integer("for")
      .notNull()
      .references(() => manuscripts.papernumber),
    reviewer: text("reviewer")
      .notNull()
      .references(() => users.id),
    response: boolean("response"),
    comments: text("comments"),
    uploadUrl: text("upload_url"),
    uploadName: text("upload_name"),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.for, table.reviewer] }),
    };
  },
);

export const mReviewersRelation = relations(manuscriptReviewers, ({ one }) => ({
  abstract: one(manuscripts, {
    fields: [manuscriptReviewers.for],
    references: [manuscripts.papernumber],
    relationName: "manuscript",
  }),
  reviewer: one(users, {
    fields: [manuscriptReviewers.reviewer],
    references: [users.id],
    relationName: "reviewer",
  }),
}));

export const manuscripts = createTable("manuscript", {
  userId: text("userId")
    .notNull()
    .references(() => users.id),
  papernumber: bigint("papernumber", { mode: "number" })
    .primaryKey()
    .references(() => abstracts.papernumber),
  timestamp: timestamp("timestamp", { withTimezone: true }).notNull(),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  presentor: text("presentor").notNull(),
  transactionNumber: text("transaction_number").notNull(),
  affiliation: text("affiliation").notNull(),
  department: text("department").notNull(),
  uploadWord: text("upload_word"),
  uploadPdf: text("upload_pdf"),
  status: boolean("status"),
  comments: text("comments"),
});

export const manuscriptsRelations = relations(manuscripts, ({ one, many }) => ({
  user: one(users, {
    fields: [manuscripts.userId],
    references: [users.id],
    relationName: "user",
  }),
  abstract: one(abstracts, {
    fields: [manuscripts.papernumber],
    references: [abstracts.papernumber],
    relationName: "abstract",
  }),
  reviewers: many(manuscriptReviewers, {
    relationName: "manuscript",
  }),
}));

export const abstractReviewers = createTable(
  "abstractReviewer",
  {
    for: integer("for")
      .notNull()
      .references(() => abstracts.papernumber),
    reviewer: text("reviewer")
      .notNull()
      .references(() => users.id),
    response: boolean("response"),
    comments: text("comments"),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.for, table.reviewer] }),
    };
  },
);

export const reviewersRelation = relations(abstractReviewers, ({ one }) => ({
  abstract: one(abstracts, {
    fields: [abstractReviewers.for],
    references: [abstracts.papernumber],
    relationName: "abstract",
  }),
  reviewer: one(users, {
    fields: [abstractReviewers.reviewer],
    references: [users.id],
    relationName: "reviewer",
  }),
}));

export const abstracts = createTable("abstract", {
  papernumber: serial("papernumber").primaryKey(),
  timestamp: timestamp("timestamp", { withTimezone: true }).notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id),
  affiliation: text("affiliation").notNull(),
  department: text("department").notNull(),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  upload: text("upload"),
  status: boolean("approved"),
  comments: text("comments"),
});

export const abstractsRelations = relations(abstracts, ({ one, many }) => ({
  user: one(users, {
    fields: [abstracts.userId],
    references: [users.id],
    relationName: "user",
  }),
  reviewers: many(abstractReviewers, {
    relationName: "abstract",
  }),
}));

export const users = createTable("user", {
  id: text("user_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text("email").unique().notNull(),
  name: text("name"),
  emailVerified: timestamp("email_verified", { mode: "date" }),
  image: text("image"),
  phone: varchar("phone", { length: 32 }).notNull(),
  role: text("role").default("user").notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts, {
    relationName: "user",
  }),
  sessions: many(sessions, {
    relationName: "user",
  }),
  abstracts: many(abstracts, {
    relationName: "user",
  }),
  reviews: many(abstractReviewers, {
    relationName: "reviewer",
  }),
  manuscripts: many(manuscripts, {
    relationName: "user",
  }),
  mReviews: many(manuscriptReviewers, {
    relationName: "reviewer",
  }),
}));

export const accounts = createTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
    relationName: "user",
  }),
}));

export const sessions = createTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
    relationName: "user",
  }),
}));

export const verificationTokens = createTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);
