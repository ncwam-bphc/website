import z from "zod";
import type { changeStatusParamsType } from "~/server/actions/assignedAbstracts";
import type { assignReviewerParamsType } from "~/server/actions/assignReviewer";
import type { updatePaperStatusParamsType } from "./server/actions/finalResponse";
import type { getPaperAndReviewersParamsType } from "./server/actions/getPaperAndReviewers";
import type { deleteReviewerParamsType } from "./server/actions/deleteReviewer";

export const changeStatusSchema: z.ZodType<changeStatusParamsType> = z.object({
  papernumber: z.number().int(),
  newStatus: z.boolean().nullable(),
  comment: z.string().trim().optional(),
});

export const assignReviewerSchema: z.ZodType<assignReviewerParamsType> =
  z.object({
    papernumber: z.string(),
    reviewerEmail: z.string().email(),
  });

export const deleteReviewerSchema: z.ZodType<deleteReviewerParamsType> =
  z.object({
    papernumber: z.string(),
    reviewerId: z.string(),
  });

export const updatePaperStatusSchema: z.ZodType<updatePaperStatusParamsType> =
  z.object({
    papernumber: z.string(),
    status: z.boolean(),
  });

export const getPaperAndReviewersSchema: z.ZodType<getPaperAndReviewersParamsType> =
  z.object({
    papernumber: z.string(),
  });
