CREATE TABLE IF NOT EXISTS "ncwam_abstractReviewer" (
	"for" integer NOT NULL,
	"reviewer" text NOT NULL,
	"response" boolean,
	"comments" text,
	CONSTRAINT "ncwam_abstractReviewer_for_reviewer_pk" PRIMARY KEY("for","reviewer")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ncwam_abstract" (
	"papernumber" serial PRIMARY KEY NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"userId" text NOT NULL,
	"affiliation" text NOT NULL,
	"department" text NOT NULL,
	"title" text NOT NULL,
	"authors" text NOT NULL,
	"upload" text,
	"approved" boolean,
	"comments" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ncwam_account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "ncwam_account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ncwam_session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ncwam_user" (
	"user_id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"email_verified" timestamp,
	"image" text,
	"phone" varchar(32) NOT NULL,
	"role" text DEFAULT 'user' NOT NULL,
	CONSTRAINT "ncwam_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ncwam_verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "ncwam_verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ncwam_abstractReviewer" ADD CONSTRAINT "ncwam_abstractReviewer_for_ncwam_abstract_papernumber_fk" FOREIGN KEY ("for") REFERENCES "public"."ncwam_abstract"("papernumber") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ncwam_abstractReviewer" ADD CONSTRAINT "ncwam_abstractReviewer_reviewer_ncwam_user_user_id_fk" FOREIGN KEY ("reviewer") REFERENCES "public"."ncwam_user"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ncwam_abstract" ADD CONSTRAINT "ncwam_abstract_userId_ncwam_user_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."ncwam_user"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ncwam_account" ADD CONSTRAINT "ncwam_account_userId_ncwam_user_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."ncwam_user"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ncwam_session" ADD CONSTRAINT "ncwam_session_userId_ncwam_user_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."ncwam_user"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
