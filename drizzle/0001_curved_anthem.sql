CREATE TABLE IF NOT EXISTS "ncwam_manuscriptReviewer" (
	"for" integer NOT NULL,
	"reviewer" text NOT NULL,
	"response" boolean,
	"comments" text,
	CONSTRAINT "ncwam_manuscriptReviewer_for_reviewer_pk" PRIMARY KEY("for","reviewer")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ncwam_manuscript" (
	"userId" text NOT NULL,
	"papernumber" bigint PRIMARY KEY NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"title" text NOT NULL,
	"authors" text NOT NULL,
	"presentor" text NOT NULL,
	"transaction_number" text NOT NULL,
	"affiliation" text NOT NULL,
	"department" text NOT NULL,
	"upload_word" text,
	"upload_pdf" text,
	"status" boolean,
	"comments" text
);

--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ncwam_manuscriptReviewer" ADD CONSTRAINT "ncwam_manuscriptReviewer_for_ncwam_manuscript_papernumber_fk" FOREIGN KEY ("for") REFERENCES "public"."ncwam_manuscript"("papernumber") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ncwam_manuscriptReviewer" ADD CONSTRAINT "ncwam_manuscriptReviewer_reviewer_ncwam_user_user_id_fk" FOREIGN KEY ("reviewer") REFERENCES "public"."ncwam_user"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ncwam_manuscript" ADD CONSTRAINT "ncwam_manuscript_userId_ncwam_user_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."ncwam_user"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ncwam_manuscript" ADD CONSTRAINT "ncwam_manuscript_papernumber_ncwam_abstract_papernumber_fk" FOREIGN KEY ("papernumber") REFERENCES "public"."ncwam_abstract"("papernumber") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
