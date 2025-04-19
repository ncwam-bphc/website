import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { formatDate } from "~/lib/utils";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Check, Ellipsis, Filter, X } from "lucide-react";
import type { getManuscriptsReturnType } from "~/server/actions/manuscript/getManuscripts";
import { QuestionMarkIcon } from "@radix-ui/react-icons";

type Manuscriptstatus =
  | "submitted"
  | "assigned"
  | "accepted"
  | "rejected"
  | "all";

export function ManuscriptsTable({
  Manuscripts,
  filter,
  setFilter,
}: {
  Manuscripts: getManuscriptsReturnType | undefined;
  filter: Manuscriptstatus;
  setFilter: (filter: Manuscriptstatus) => void;
}) {
  const statuses: Manuscriptstatus[] = [
    "submitted",
    "assigned",
    "accepted",
    "rejected",
  ];

  const filteredManuscripts = Manuscripts?.filter(
    (paper) => filter === "all" || paper.frontendStatus === filter,
  );

  const ReviewerResponse = ({ response }: { response?: boolean | null }) => {
    if (response === undefined) {
      return (
        <span className="font-bold uppercase text-muted-foreground">
          <QuestionMarkIcon className="h-4 w-4" />
        </span>
      );
    }
    if (response === null) {
      return (
        <span className="font-bold uppercase text-orange-400">
          <Ellipsis className="h-4 w-4" />
        </span>
      );
    }
    if (response === true) {
      return (
        <span className="font-bold uppercase text-green-400">
          <Check className="h-4 w-4" />
        </span>
      );
    }
    return (
      <span className="font-bold uppercase text-red-700">
        <X className="h-4 w-4" />
      </span>
    );
  };

  const getReviewerResponse = (
    paper: getManuscriptsReturnType[number],
    reviewerNumber: number,
  ) => {
    const reviewer = paper.reviewers[reviewerNumber - 1];
    return reviewer?.response;
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filter by Status
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              checked={filter === "all"}
              onCheckedChange={() => setFilter("all")}
            >
              All
            </DropdownMenuCheckboxItem>
            {statuses.map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={filter === status}
                onCheckedChange={() => setFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Paper</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Authors</TableHead>
            <TableHead>Submitter</TableHead>
            <TableHead>R1</TableHead>
            <TableHead>R2</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Submitted On</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(filteredManuscripts ?? []).map((paper, index) => (
            <TableRow key={paper.papernumber}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="whitespace-pre">
                {paper.papernumber.split("-").slice(0, 2).join("-") +
                  "-\n" +
                  paper.papernumber.split("-")[2]}
              </TableCell>
              <TableCell>{paper.title}</TableCell>
              <TableCell>{paper.authors}</TableCell>
              <TableCell>
                {paper.user?.name ?? paper.user?.email ?? "Unknown"}
              </TableCell>
              <TableCell>
                <ReviewerResponse response={getReviewerResponse(paper, 1)} />
              </TableCell>
              <TableCell>
                <ReviewerResponse response={getReviewerResponse(paper, 2)} />
              </TableCell>
              <TableCell>
                <span
                  className={`font-semibold uppercase ${
                    paper.frontendStatus === "submitted"
                      ? "text-yellow-500"
                      : paper.frontendStatus === "assigned"
                        ? "text-blue-600"
                        : paper.frontendStatus === "accepted"
                          ? "text-green-700"
                          : paper.frontendStatus === "rejected"
                            ? "text-red-500"
                            : ""
                  }`}
                >
                  {paper.frontendStatus}
                </span>
              </TableCell>
              <TableCell>{formatDate(paper.timestamp)}</TableCell>
              <TableCell>
                <Button asChild>
                  <Link href={`/admin/manuscripts/${paper.papernumber}`}>
                    View Details
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
