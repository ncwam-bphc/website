ALTER TABLE "ncwam_manuscript" ALTER COLUMN "transaction_number" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "ncwam_manuscript" ADD COLUMN "copyright_form" text;