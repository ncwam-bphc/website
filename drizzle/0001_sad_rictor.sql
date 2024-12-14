ALTER TABLE "ncwam_abstractReviewer" DROP CONSTRAINT "ncwam_abstractReviewer_for_reviewer_pk";--> statement-breakpoint
ALTER TABLE "ncwam_abstractReviewer" ADD CONSTRAINT "ncwam_abstractReviewer_for_pk" PRIMARY KEY("for");--> statement-breakpoint
ALTER TABLE "ncwam_abstractReviewer" ADD COLUMN "response" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "ncwam_abstract" ADD COLUMN "status" text DEFAULT 'submitted' NOT NULL;--> statement-breakpoint
ALTER TABLE "ncwam_user" ADD COLUMN "role" text DEFAULT 'user' NOT NULL;--> statement-breakpoint
ALTER TABLE "ncwam_abstractReviewer" DROP COLUMN IF EXISTS "rating";