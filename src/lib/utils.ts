import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAbstractPaperNumber(paperNumber: number) {
  return `${paperNumber.toString().padStart(3, "0")}-abstract-NCWAM2025`;
}
export function getAbstractPaperNumber(paperNumber: string) {
  return parseInt(paperNumber.split("-")[0] ?? "");
}

export function formatManuscriptPaperNumber(
  paperNumber: number,
  authors: string,
) {
  const firstAuthorName = authors.split(",")[0];
  const escapedName = firstAuthorName?.replace(/[^a-zA-Z0-9]/g, "") ?? "author";
  return `${paperNumber.toString().padStart(3, "0")}-NCWAM2025-${escapedName}`;
}
export function getManuscriptPaperNumber(paperNumber: string) {
  return parseInt(paperNumber.split("-")[0] ?? "");
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}
